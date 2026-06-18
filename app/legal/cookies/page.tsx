import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası | Lorenta OS",
  description:
    "Lorenta OS Çerez Politikası. Şeffaflık, KVKK, GDPR ve CCPA uyumluluğu kapsamında çerez kullanım esaslarımız.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Hukuki · Çerezler
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Çerez Politikası
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: 18 Haziran 2026
          </p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">1. Giriş ve Yaklaşımımız</h2>
            <p>
              Lorenta OS olarak, kurumsal hafızanızı ve veri egemenliğinizi korumak temel prensibimizdir. 
              Web sitemizi ve platformumuzu kullanırken gizliliğinize saygı duyuyor, dijital izlerinizi 
              yalnızca size daha iyi ve güvenli bir hizmet sunmak amacıyla, asgari düzeyde işliyoruz. 
              Bu politika, sitemizde hangi çerezlerin kullanıldığını, bunları neden kullandığımızı ve 
              seçimlerinizi nasıl yönetebileceğinizi açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">2. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya 
              mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, sitenin düzgün çalışmasını 
              sağlamak, güvenliği artırmak ve kullanıcı deneyimini iyileştirmek için kullanılır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">3. Hangi Çerezleri Kullanıyoruz?</h2>
            <p>
              Platformumuzun kapalı devre mimarisi ve yüksek güvenlik standartları gereği, üçüncü taraf 
              reklam ve pazarlama izleyicilerine (tracker) yer vermiyoruz. Kullanımımız aşağıdaki kategorilerle sınırlıdır:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-4">
              <li>
                <strong>Zorunlu Çerezler (Kesinlikle Gerekli):</strong> Bu çerezler web sitemizin çalışması 
                ve temel güvenlik duvarlarımızın (CSRF koruması, oturum yönetimi) aktif kalması için mecburidir. 
                Sistemlerimizde kapatılamazlar. Bu çerezler sizi kimliklendirmez.
              </li>
              <li>
                <strong>Analitik ve Performans Çerezleri (İsteğe Bağlı):</strong> Ziyaretçilerin sitemizi nasıl 
                kullandığını anlamamıza yardımcı olur. Hangi sayfaların ziyaret edildiği, form doldurma 
                hataları gibi verileri tamamen <em>anonimleştirilmiş</em> olarak toplar. Sadece sizin onayınızla (Opt-in) aktif hale gelir.
              </li>
              <li>
                <strong>Pazarlama ve Reklam Çerezleri: <span className="text-red-600 uppercase">Kullanılmamaktadır.</span></strong> Lorenta OS, 
                verilerinizi veya tarama alışkanlıklarınızı hiçbir şart altında üçüncü taraf reklam ağlarıyla 
                paylaşmaz veya satmaz.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">4. Uluslararası Mevzuata Uyum</h2>
            <p>
              Küresel bir operasyon altyapısı hedefiyle, aşağıdaki veri koruma kanunlarının gerekliliklerini 
              tasarımsal olarak (privacy by design) karşılıyoruz:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Türkiye (KVKK):</strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, 
                zorunlu olmayan çerezler yalnızca &quot;Açık Rıza&quot;nız ile işlenir.
              </li>
              <li>
                <strong>Avrupa Birliği (GDPR):</strong> Genel Veri Koruma Yönetmeliği gereği, sitemize 
                ilk girişinizde varsayılan olarak yalnızca zorunlu çerezler aktiftir. İsteğe bağlı çerezler, 
                açık ve özgür iradenizle verdiğiniz onay (Opt-in) olmadan cihazınıza yerleştirilmez.
              </li>
              <li>
                <strong>Amerika Birleşik Devletleri (CCPA / CPRA):</strong> Kaliforniya Tüketici Gizliliği Yasası 
                kapsamında, kullanıcı verilerinden ticari kazanç elde edilmesi (satış) yasaktır. Lorenta OS, 
                hiçbir kullanıcı bilgisini satmaz veya paylaşmaz.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">5. Çerezleri Nasıl Yönetebilirsiniz?</h2>
            <p>
              Çerez tercihlerinizi dilediğiniz zaman web sitemizin alt kısmında bulunan &quot;Çerez Tercihleri&quot; 
              panelinden değiştirebilirsiniz. Ayrıca, kullandığınız internet tarayıcısının ayarlarından çerezleri 
              engelleyebilir veya silebilirsiniz. Ancak, zorunlu çerezleri engellemeniz durumunda platformun 
              oturum açma gibi temel fonksiyonlarının çalışmayacağını lütfen unutmayın.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">6. İletişim</h2>
            <p>
              Çerez Politikamız veya kişisel verilerinizin işlenmesiyle ilgili sorularınız, hukuki talepleriniz 
              ve denetim izleri ile ilgili detaylar için bizimle doğrudan iletişime geçebilirsiniz:
            </p>
            <p className="mt-2 font-mono">
              <strong>E-posta:</strong> info@lorentaos.com<br />
            </p>
          </section>

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