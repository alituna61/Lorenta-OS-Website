import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Lorenta OS",
  description:
    "Lorenta OS küresel gizlilik politikası. Kişisel verilerin KVKK, GDPR ve CCPA/CPRA standartlarına uygun işlenme ve korunma esasları.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Hukuki · Gizlilik
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: 18 Haziran 2026
          </p>
        </div>

        {/* Politika İçeriği */}
        <div className="prose prose-lg prose-slate max-w-none text-gray-800 space-y-8 text-justify">
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">1. Amaç ve Kapsam</h2>
            <p>
              Lorenta OS, kurumsal işletmelerin hantal ERP süreçlerini yapay zeka ajanları ve doğal dil 
              işleme modelleriyle otonomlaştıran yeni nesil bir Enterprise Cognitive Core platformudur. 
              İş modelimizin ve mühendislik felsefemizin merkezinde &quot;Mutlak Veri Egemenliği&quot; yer alır. 
            </p>
            <p>
              Bu Gizlilik Politikası, web sitemizi ziyaret edenlerin, platform kullanıcılarımızın ve 
              entegrasyon sağlanan kurumsal sistemlerin verilerinin hangi küresel standartlar (KVKK, GDPR, 
              CCPA/CPRA) altında toplandığını, işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">2. Toplanan Veriler ve Elde Etme Yöntemleri</h2>
            <p>
              Platformun kullanımı esnasında toplanan veriler iki ana gruba ayrılmaktadır:
            </p>
            <div className="space-y-4 mt-2">
              <p>
                <strong>a) Kullanıcı Tarafından Doğrudan Sağlanan Veriler:</strong> Hesap oluşturma, 
                kurumsal onboarding ve iletişim formları vasıtasıyla iletilen ad-soyad, kurumsal e-posta, 
                telefon numarası, sesli komut kayıtları ve yapay zeka arayüzü mesaj geçmişidir.
              </p>
              <p>
                <strong>b) Otomatik Toplanan ve Entegre Edilen Sistem Verileri:</strong> Lorenta OS&apos;un, 
                işletmenizin yerel ERP (Logo, Mikro vb.) sistemlerine derinlemesine bağlanmasıyla elde edilen 
                verilerdir. Bu veriler (stok, cari, fatura, sipariş) platformun LLM katmanına beslenmeden önce 
                <strong>otomatik olarak maskelenmekte ve anonimleştirilmektedir.</strong> Ayrıca gerçekleştirilen 
                tüm operasyonlar yasal şeffaflık adına zaman damgalı denetim izi (audit log) kayıtlarında saklanır.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">3. Küresel Mevzuat Uyum Matrisi</h2>
            <p>
              Lorenta OS, küresel pazarlara genişleme vizyonu doğrultusunda tasarımsal gizlilik (privacy by design) 
              ilkesini benimsemiştir:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-4">
              <li>
                <strong>KVKK (Türkiye) Uyumu:</strong> Kişisel Verileri Koruma Kurumu&apos;nun Güncel Üretken Yapay 
                Zeka ve İş Yerlerinde ÜYZ Kullanımı Rehberleri doğrultusunda, hassas ticari veriler dış bulut 
                sağlayıcılarına gönderilmeksizin kapalı devre altyapıda işlenerek ulusal hukuki güvence sağlanır.
              </li>
              <li>
                <strong>GDPR (Avrupa Birliği) Uyumu:</strong> Avrupa Birliği&apos;nin EU AI Act ve Genel Veri Koruma 
                Yönetmeliği kapsamında, algoritmik kararların sorumluluk boşluğu yaratmaması adına veri minimizasyonu 
                ve <strong>Human-in-the-Loop (İnsan Onaylı Kontrol Kalkanı)</strong> modeli uygulanır. Güven skoru 
                kritik sınırın altında kalan süreçler doğrudan insan denetimine yönlendirilir.
              </li>
              <li>
                <strong>CCPA / CPRA (Amerika Birleşik Devletleri) Uyumu:</strong> Kaliforniya Tüketici Gizliliği 
                Yasası uyarınca, kullanıcıların verilerinin satılmasını engelleme hakkı (Do Not Sell My Info) 
                özünde korunmaktadır. Lorenta OS, hiçbir kurumsal veya kişisel veriyi reklam ağlarına veya üçüncü 
                taraflara satmaz, kiralamaz ve paylaşmaz.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">4. Verilerin İşlenme Amaçları ve Hukuki Sebepler</h2>
            <p>
              Söz konusu veriler; sözleşmenin kurulması, ifası, yasal yükümlülüklerin yerine getirilmesi ve 
              işletmenin kurumsal hafızasının otonom iş akışlarına dönüştürülmesindeki meşru menfaatlerimiz 
              doğrultusunda şu amaçlarla işlenir:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>ERP sistemleri üzerinden doğal dil komutlarıyla çift yönlü veri akışını ve aksiyonları yönetmek,</li>
              <li>Akıllı denetim katmanı vasıtasıyla finansal anomalileri ve hatalı işlemleri engellemek,</li>
              <li>Siber güvenlik risklerini minimize etmek ve yasal denetim izi günlüklerini tutmak,</li>
              <li>SaaS abonelik süreçlerini, faturalandırmayı ve token kota kullanımlarını takip etmek.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">5. Veri Saklama Süreleri ve Güvenlik Altyapısı</h2>
            <p>
              Toplanan veriler, ilgili yasal mevzuatlarda öngörülen saklama süreleri veya ticari sözleşmenin 
              devamı süresince saklanır. Lorenta OS, verilerin sızmasını önlemek amacıyla veri aktarımlarında 
              uçtan uca şifreleme (TLS/AES-256), semantik önbellekleme sınırlandırmaları ve kapalı devre sunucu 
              mimarileri kullanmaktadır. Saklama süresi dolan veya kullanıcının haklı talebi üzerine silinmesi 
              istenen veriler, geri döndürülemeyecek şekilde imha edilir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">6. Veri Sahibi Haklarınız ve Kullanım Yolları</h2>
            <p>
              Bulunduğunuz coğrafi bölgeye göre (KVKK m. 11, GDPR m. 15-22 veya CCPA hakları kapsamında) verilerinize 
              erişme, düzeltme, silme, işlemeyi kısıtlama, veri taşınabilirliği isteme ve otomatik kararlara itiraz 
              etme haklarına sahipsiniz.
            </p>
            <p>
              Bu haklarınızı kullanmak, denetim izi loglarınızı sorgulamak veya gizlilik süreçlerimizle ilgili hukuki 
              başvuruda bulunmak için taleplerinizi resmi kimlik doğrulama belgelerinizle birlikte doğrudan  
              <strong> info@lorentaos.com</strong> e-posta adresimize iletebilirsiniz. Başvurularınız hukuk departmanımız 
              tarafından en geç 30 gün içerisinde değerlendirilerek ücretsiz olarak yanıtlanacaktır.
            </p>
          </section>

          {/* Geri Dönüş Butonu */}
          <div className="pt-8 mt-8 border-t">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}