import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Lorenta OS",
  description:
    "Lorenta OS kullanım sözleşmesi ve hizmet şartları. Hizmet kapsamı, SLA taahhütleri, ödeme koşulları, adil kullanım ve sorumluluk sınırları.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Hukuki · Kullanım Şartları
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Kullanım Şartları
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: 18 Haziran 2026
          </p>
        </div>

        {/* Sözleşme Metni */}
        <div className="prose prose-lg prose-slate max-w-none text-gray-800 space-y-8 text-justify">
          <p>
            Bu Kullanım Şartları (&quot;Sözleşme&quot;), <strong>Lorenta OS</strong> (&quot;Platform&quot;) tarafından sunulan bulut 
            tabanlı kurumsal yapay zeka ve çok-ajanlı orkestrasyon hizmetlerinin kullanımına ilişkin usul ve 
            esasları düzenlemektedir. Platforma üye olan, entegrasyon sağlayan veya hizmetlerden faydalanan tüm 
            kurumsal kullanıcılar (&quot;Müşteri&quot;), bu Sözleşme&apos;de yer alan tüm maddeleri gayrikabili rücu kabul, beyan ve taahhüt etmiş sayılır.
          </p>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">1. Hizmetin Kapsamı ve Lisans</h2>
            <p>
              Lorenta OS, Müşteri&apos;nin yerel ERP (Logo, Mikro vb.) sistemlerine API veya güvenli veritabanı konnektörleri 
              aracılığıyla çift yönlü (okuma, yazma ve otonom aksiyon alma) entegre olan bir Enterprise Cognitive Core 
              platformudur. Müşteri&apos;ye, Sözleşme süresi boyunca geçerli olmak üzere, Platforma erişim hakkı veren 
              dünya çapında, devredilemez, münhasır olmayan kurumsal bir kullanım lisansı tanınır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">2. Abonelik Modeli, Token Paketleri ve Ödeme Şartları</h2>
            <p>
              Platform hizmetleri modüler bir SaaS (Yazılım Hizmeti) modeliyle sunulmaktadır:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">3. Müşterinin Yükümlülükleri ve Adil Kullanım</h2>
            <p>
              Müşteri, Platformun ERP sistemleriyle gerçekleştirdiği veri alışverişinin doğruluğunu sağlamak amacıyla kendi 
              veri kalitesini korumakla yükümlüdür. Yapay zeka ajanlarının doğru kararlar üretebilmesi için alt yapı veritabanı 
              şemalarının doğruluğu Müşteri sorumluluğundadır. Müşteri, kullanıcı hesaplarının ve erişim şifrelerinin 
              güvenliğinden bizzat sorumludur. Platformun tersine mühendislik yöntemleriyle kopyalanması, kaynak kodlarına 
              erişilmeye çalışılması veya API sınırlarını kötüye kullanacak şekilde aşırı sorgu trafiği (DDoS vb.) 
              oluşturulması kesinlikle yasaktır ve sözleşmenin haklı nedenle derhal feshine yol açar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">4. Veri İşleme Sözleşmesi (DPA) ve Uyumluluk</h2>
            <p>
              Kurumsal müşterilerimizin ticari verilerinin güvenliği için bu Kullanım Şartları&apos;nın ayrılmaz bir parçası olan 
              bir Veri İşleme Sözleşmesi (DPA) düzenlenmektedir. Lorenta OS, kapalı devre mimarisi sayesinde ham ve hassas 
              ticari verileri dış kaynaklı bulut servislerine göndermez, verileri yerel sunucularda veya izole edilmiş 
              lokal ağlarda işler. Platform, KVKK (Kasım 2025 ÜYZ Rehberi ve Şubat 2026 İş Yerlerinde ÜYZ Kullanımı Rehberi) 
              ve Avrupa Birliği GDPR ile EU AI Act standartlarına tasarımsal olarak uyumludur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">5. Sorumluluk Reddi ve Sınırlandırılması (HITL Güvencesi)</h2>
            <p>
              <strong>Kritik Yasal Sorumluluk Sınırı:</strong> Lorenta OS, Müşteri&apos;nin doğal dil komutlarıyla cari bakiyeleri 
              sorgulamasına, fatura kesmesine, iskonto tanımlamasına veya sipariş girişi yapmasına olanak tanıyan otonom 
              iş akışları içerir. Platform, yapay zekanın doğası gereği oluşabilecek halüsinasyon (hatalı veri üretimi) 
              riskini en aza indirmek üzere tasarlanmış bir Akıllı Denetim Katmanına sahiptir. 
            </p>
            <p>
              Sistem, güven skorunun 0,90 standardının altında kaldığı durumlarda ve yüksek riskli finansal işlemlerde 
              tasarımsal olarak <strong>Human-in-the-Loop (İnsan Onaylı Kontrol Kalkanı)</strong> mekanizmasını devreye sokar. 
              Yapay zeka ajanı tarafından hazırlanan taslak işlemlerin son kontrolü ve onay yetkisi münhasıran Müşteri 
              yöneticisine/personeline aittir. İnsan onayı verilerek veya Müşteri tarafından otonom çalışma yetkisi 
              doğrudan tanımlanarak gerçekleştirilen hatalı sevkiyat, mükerrer ödeme, yanlış iskonto veya ticari/finansal 
              kayıplardan Lorenta OS hiçbir şart altında doğrudan, dolaylı veya cezai olarak sorumlu tutulamaz. Toplam hukuki 
              sorumluluk sınırımız, her halükarda Müşteri&apos;nin son 3 ayda ödediği toplam abonelik bedeli ile sınırlıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">6. Hizmet Seviyesi Taahhüdü (SLA)</h2>
            <p>
              Lorenta OS, Müşteri operasyonlarının sürekliliğini garanti altına almak amacıyla, planlı bakım pencereleri 
              ve Müşteri&apos;nin kendi ERP/internet altyapısından kaynaklanan kesintiler hariç olmak üzere, aylık bazda 
              <strong> %99,9 kullanılabilirlik (uptime)</strong> oranı taahhüt eder. Olası entegrasyon karmaşıklıkları veya 
              SQL bağlantı kopmalarında, teknik destek dokümantasyonları ve onboarding ekipleri aracılığıyla hızlı müdahale 
              sağlanır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">7. Fesih ve Askıya Alma</h2>
            <p>
              Taraflar, yürürlükteki abonelik döneminin bitiminden en az 15 (on beş) gün önce yazılı bildirimde bulunmak 
              şartıyla Sözleşme&apos;yi diledikleri zaman feshedebilirler. Müşteri&apos;nin ödeme yükümlülüklerini ihlal etmesi, 
              sistem güvenliğini tehlikeye atması veya telif haklarına aykırı hareket etmesi durumlarında Lorenta OS, 
              hizmeti derhal askıya alma ve Sözleşme&apos;yi tek taraflı haklı nedenle feshetme hakkını saklı tutar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">8. Yetkili Mahkeme ve Uyuşmazlıkların Çözümü</h2>
            <p>
              Bu Sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Sözleşme&apos;nin uygulanmasından veya yorumlanmasından 
              doğabilecek her türlü uyuşmazlığın çözümünde İzmir Mahkemeleri ve İcra Daireleri münhasıran yetkilidir.
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