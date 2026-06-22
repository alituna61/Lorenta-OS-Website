---
title: "LLM’ler ERP verisinde neden başarısız olur — ve bunu nasıl çözdük"
date: "2026-06-22"
tag: "Mimari"
preview: "ERP verisi yoğun, ilişkisel ve bağlama bağımlıdır. Standart RAG hatları üzerinde halüsinasyon görür. İşte bunu çözmek için kurduğumuz hibrit erişim yaklaşımı."
status: "published"
---

Sektör, büyük dil modellerinin (LLM) her türlü veriyi sihirli bir şekilde anlayıp işleyebileceği illüzyonuna kapılmış durumda. Gerçek mühendislik sahasında ise tablo çok daha farklı. Özellikle **kurumsal yapay zekâ** sistemleri kurarken, modelleri metin tabanlı dokümanlardan çıkarıp yapılandırılmış ticari veri tabanlarına bağladığınızda mimari çatlaklar anında kendini gösterir.

Bu yazıda, geleneksel yapay zekâ yaklaşımlarının Logo, Mikro veya Netsis gibi köklü ve ilişkisel (relational) ERP sistemlerinde neden çöktüğünü ve bu problemi sistem düzeyinde nasıl çözdüğümüzü ele alacağız.

## Vektörlerin Determinizmle Sınavı: Standart RAG Neden Eziliyor?

Geleneksel Retrieval-Augmented Generation (RAG) hatları, temelde anlamsal (semantik) arama üzerine kuruludur. Metinleri vektörlere dönüştürür ve kullanıcı sorgusuna "en yakın" metni bularak modele bağlam olarak sunarlar. Bu yaklaşım PDF'ler, şirket politikaları veya kullanım kılavuzları için kusursuz çalışır.

Ancak ERP verisi anlamsal değil, **ilişkisel ve deterministiktir**. 

Bir üretim emri, stok kodu, cari hesap bakiyesi veya fatura kalemi; katı yabancı anahtarlarla (foreign keys) birbirine bağlıdır. Standart bir vektör veritabanı "Ahmet Bey'in güncel bakiyesi nedir?" sorusunu vektörel uzayda aradığında, semantik olarak en yakın ama mantıksal olarak en yanlış veriyi (örneğin geçen yılın kapanmış bir faturasını) getirebilir. Bu mimari uyumsuzluk, ERP verisi üzerinde standart RAG hatlarını çalıştırdığınızda karşılaştığımız temel **RAG zafiyetleri** listesinin başını çeker. Model doğru tablo ilişkisini kuramaz ve boşlukları tahmin etmeye çalışır. Sonuç: Kaçınılmaz **LLM halüsinasyonları**.

## İş Etkisi: Canlı Operasyonlarda Felaket Senaryoları

Bu mimari uyumsuzluk, sadece akademik bir problem değildir; doğrudan bilançoya ve şirket itibarına etki eder. LLM tabanlı bir asistanın ERP veritabanına sadece "okuma" yetkisiyle bile naif bir şekilde bağlanması, ciddi operasyonel körlüklere yol açar.

* **Hatalı Stok Okumaları:** Bir satış temsilcisi, "A deposunda ne kadar ürün kaldı?" diye sorduğunda, model iptal edilmiş siparişleri veya rezerve edilmiş stokları "mevcut" gibi halüsinasyonla yorumlayabilir. Olmayan ürünün satışı gerçekleşir.
* **Finansal Tutarsızlıklar:** Cari hesaplar arasında vektörel bir "benzerlik" kurulduğunda, asistan B firmasının borcunu A firmasına aitmiş gibi raporlayabilir. 

Bir işletmenin sinir sistemi olan ERP üzerinde tahmine dayalı (probabilistic) bir yaklaşım sergilemek kabul edilemez. Kurumsal veri, mutlak kesinlik (precision) talep eder.

## Çözüm: Ajan Orkestrasyonu ve Durum Makineleri

Bu sorunu çözmek için modellerin "düşünme" şekliyle veritabanlarının "çalışma" şekli arasına mantıksal bir katman inşa etmek zorunludur. Bizim yaklaşımımız, modelleri doğrudan veriye salıvermek yerine, görevleri **çoklu ajan sistemleri** ile sınırlayıp yönetmektir.

**ERP yapay zeka entegrasyonu** sürecini güvenilir kılmak için geliştirdiğimiz mimari şu üç sacayağına dayanır:

### 1. Deterministik Durum Makineleri (State Machines)
Planla-uygula (plan-and-execute) döngüleri güçlüdür ancak tek başlarına bırakıldıklarında kırılgandırlar. Asistanın sonsuz döngüye girmesini veya yanlış bir SQL sorgusu üretmesini engellemek için, ajanların hareket alanını deterministik durum makineleriyle (state machines) kısıtladık. Ajan, bir sonraki adımı tahmin etmez; sadece bulunduğu duruma (state) göre izin verilen fonksiyonları tetikleyebilir.

### 2. Semantik Router ve Hibrit Erişim (Hybrid Retrieval)
Kullanıcıdan gelen bir sorgu doğrudan veritabanına gitmez. Önce bir orkestratör model (Yönlendirici Ajan) tarafından analiz edilir. Eğer soru "İade politikamız nedir?" gibi doküman tabanlıysa geleneksel vektör aramasına yönlendirilir. Ancak soru "Geçen ayın en kârlı 3 müşterisi kim?" ise, sistem vektör aramayı tamamen kapatır.

### 3. Araç Kullanımı (Tool Use) ve Şema Geçerliliği
Bu aşamada sistem, doğrudan SQL yazmak yerine, ERP'nin API'larına veya bizim oluşturduğumuz güvenli SQL görünüm (view) katmanlarına bağlanan araçları kullanır. **Agentic AI** mimarisi burada devreye girer: Kod yazan ajan (Coder Agent), ERP'nin katı şemasına uygun bir sorgu üretir. İkinci bir ajan (Reviewer Agent), bu sorguyu çalıştırılmadan önce sözdizimi ve mantık açısından denetler. Sadece doğrulanan sorgular sisteme iletilir ve dönen kesin tablo verisi (JSON formatında) nihai LLM'e sadece "okuma ve özetleme" yapması için sunulur.

## Sonuç: Gelecek Orkestrasyonda

Parametre sayıları trilyonlara ulaşsa da, hiçbir büyük dil modeli tek başına bölgesel bir ERP'nin karmaşık iş mantığını kusursuzca "hissedemez". **Otonom operasyonlar** ve bilişsel kurumsal sistemlerin geleceği; giderek daha da büyüyen tekil modellerde değil, doğru araçları, doğru kısıtlamalarla kullanan çoklu orkestrasyon katmanlarında yatmaktadır. 

Yapay zekâyı iş süreçlerine gerçekten entegre etmek, kozmetik bir sohbet arayüzü eklemek değildir. Veri ile zeka arasına kırılmaz, güvenilir ve denetlenebilir bir mühendislik köprüsü kurmaktır.