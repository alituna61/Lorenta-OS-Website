---
title: "Kurumsal yapay zekânın token ekonomisi"
date: "2026-06-22"
tag: "Strateji"
preview: "Canlı ERP verisi üzerinde asistan çalıştırmak, naif yapılırsa pahalıdır. Token bütçesi modelimizi ve bunun otonom operasyonun birim ekonomisini neden değiştirdiğini paylaşıyoruz."
status: "published"
---

Yapay zekâ demoları her zaman büyüleyicidir. Ancak bir dil modelini yalıtılmış bir test ortamından çıkarıp, canlı ve sürekli akan bir ERP sistemine bağladığınızda, mühendislik ekibinin karşısına yepyeni bir metrik çıkar: **Bilişsel maliyet**. 

Günümüzde birçok işletme, otonom sistemleri inşa ederken zekâyı maksimize etmeye odaklanıyor. Fakat kurumsal ölçekte mesele sadece zekâ değil, bu zekânın finansal sürdürülebilirliğidir. Sektördeki "en büyük model her zaman en iyisidir" yanılgısı, operasyonel gerçeklerle yüzleştiğinde hızla çöker.

## Sorun: Açgözlü Bağlam Pencereleri ve Naif Tasarım

Canlı ERP verisi (Logo, Mikro, Netsis vb.) üzerinde çalışan bir sistemde her kullanıcı sorgusunu doğrudan GPT-4o veya Claude 3.5 Sonnet gibi ağır siklet modellere göndermek, bir faturayı kontrol etmek için yönetim kurulu başkanını ofise çağırmaya benzer. Finansal açıdan sürdürülemez bir tasarımdır.

Bu naif yaklaşımın en büyük maliyet tuzağı, bağlam pencerelerinin (context windows) kontrolsüzce doldurulmasıdır. Geleneksel sistemler, kullanıcının "Cari bakiyesi ekside olan müşteriler kimler?" sorusunu yanıtlamak için devasa tabloları, gereksiz kolonları ve tarihsel logları modele tek bir metin bloğu olarak yığar. Bu durum, veri yoğunluğu arttıkça her bir sorgunun maliyetinin logaritmik olarak büyümesine neden olur. **Token ekonomisi** göz ardı edildiğinde, faturalar kontrolden çıkar.

## İş Etkisi: ROI'yi Yutan Bilişsel Maliyet

Bir yazılımın temel amacı verimlilik yaratmaktır. Ancak "token yakımının" kontrolsüz olduğu bir mimari, B2B SaaS platformlarının kar marjlarını sessizce eritir. 

Eğer bir yapay zekâ asistanının bir tedarik zinciri veya envanter problemini çözerken harcadığı API maliyeti, o işin bir insana yaptırılma maliyetine yaklaşıyorsa, ortada bir mühendislik başarısından söz edilemez. Bu senaryoda **kurumsal yapay zeka ROI** (Yatırım Getirisi) tamamen bir illüzyona dönüşür. Otomasyonun getirdiği zaman tasarrufu, ay sonu gelen devasa bulut altyapı faturalarının altında kalır. 

## Çözüm: Zekâyı Katmanlandırmak

Bu finansal darboğazı aşmak için, problemin ağırlığına göre şekillenen, pragmatik bir sistem inşa ettik. Mimari felsefemizin merkezinde, her sorgu için aynı zekâyı kullanmak yerine, görevleri delege eden **ajan orkestrasyonu** yatıyor.

Maliyetleri kontrol altına alırken performanstan ödün vermemek için uyguladığımız temel yöntemler şunlardır:

### 1. Model Yönlendirme (Model Routing)
Tüm istekleri tek bir dev modele yönlendirmek yerine, arka planda dinamik bir **model yönlendirme (model routing)** katmanı kullanıyoruz. Kullanıcıdan gelen metnin niyet sınıflandırması (intent classification), veritabanı şema eşleştirmesi veya üretilen bir SQL sorgusunun sözdizimi denetimi gibi nispeten "mekanik" işlemler için Llama 3 veya GPT-4o-mini gibi çok daha hızlı ve maliyet-etkin modelleri çalıştırıyoruz. Bu sayede ağır modellerin yükünü ve dolayısıyla token maliyetini en aza indiriyoruz.

### 2. Bağlam Daraltma (Context Pruning)
ERP veritabanından alınan veriyi doğrudan dil modeline beslemiyoruz. Deterministik kod parçacıkları, SQL sonuçlarını tarayarak sadece kullanıcının sorusuna yanıt verecek spesifik hücreleri çıkarır. Modelin önüne binlerce satırlık bir tablo değil, sadece işlenmiş ve minimize edilmiş bir JSON nesnesi konur. Bu sayede girdi (input) token sayısı dramatik ölçüde düşürülür.

### 3. Sentez İçin Ağır Toplar
En yetenekli ve pahalı modelleri, yalnızca işlemler zincirinin en sonunda, toplanan rafine veriyi yorumlamak, stratejik bir içgörü üretmek ve nihai kullanıcıya sunulacak "insansı" ve profesyonel yanıtı sentezlemek için kullanıyoruz. Bu, **LLM maliyet optimizasyonu** stratejimizin en kritik ayağıdır.

## Sonuç: Sürdürülebilir Birim Ekonomi

Kurumsal dünyada **otonom operasyonlar** kurmak, zekâyı pahalı API çağrılarıyla satın almaktan ibaret değildir. Gerçek mühendislik başarısı; doğru aracı, doğru modelle ve en optimum maliyetle bir araya getirmektir. 

Bilişsel sistemlerin geleceğinde kazananlar, en büyük modele sahip olanlar değil; sağlam bir **birim ekonomi** (unit economics) inşa ederek, yapay zekânın gücünü sessiz, sürdürülebilir ve yüksek marjlı bir şekilde iş süreçlerine entegre edebilenler olacaktır.