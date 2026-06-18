import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Lorenta OS",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Lorenta OS'un veri işleme esasları, haklarınız ve veri güvenliği politikaları.",
};

export default function KvkkPage() {
  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto">
        {/* Üst Başlık Alanı */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Legal · KVKK
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Kişisel Verilerin Korunması Aydınlatma Metni
          </h1>
          <p className="text-lg text-gray-600">
            Son Güncelleme: 18 Haziran 2026
          </p>
        </div>

        {/* Metin İçeriği */}
        <div className="prose prose-lg prose-slate max-w-none text-gray-800 space-y-8 text-justify">
          <p>
            <strong>Lorenta OS</strong> (&quot;Platform&quot;) olarak, platformumuzu kullanan iş ortaklarımızın, 
            kurumsal kullanıcılarımızın ve ziyaretçilerimizin kişisel verilerinin güvenliğine ve gizliliğine 
            en üst düzeyde önem veriyoruz. Veri egemenliği ilkemiz gereği, verilerinizin korunması ve 
            mevzuata tam uyum sağlanması temel mühendislik ve hukuk yaklaşımımızdır.
          </p>
          <p>
            Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun” veya “KVKK”) 
            uyarınca, veri sorumlusu sıfatıyla Lorenta OS tarafından toplanan, saklanan ve işlenen kişisel 
            verilerinize ilişkin usul ve esasları şeffaf bir şekilde açıklamak amacıyla hazırlanmıştır.
          </p>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">1. Veri Sorumlusunun Kimliği</h2>
            <p>
              Kanun uyarınca veri sorumlusu, platform altyapısını ve hizmetlerini sağlayan Lorenta Girişimi’dir. 
              Veri işleme süreçlerine, denetim izlerine veya haklarınızın kullanımına ilişkin her türlü soru ve 
              talebinizi <strong>info@lorentaos.com</strong> adresi üzerinden hukuk birimimize iletebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">2. İşlenen Kişisel Veri Kategorileri ve Toplanma Yöntemleri</h2>
            <p>
              Platformumuzun sunduğu Çok-Ajanlı Orkestrasyon ve ERP entegrasyon sistemlerinin sağlıklı çalışabilmesi 
              amacıyla, kullanıcılarımızdan doğrudan veya entegre edilen kurumsal sistemler aracılığıyla aşağıdaki 
              veri kategorileri otomatik veya kısmen otomatik yöntemlerle toplanmaktadır:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Kimlik Bilgisi:</strong> Ad, soyad, kullanıcı benzersiz kimlik numarası.</li>
              <li><strong>İletişim Bilgisi:</strong> Kurumsal e-posta adresi, telefon numarası.</li>
              <li><strong>Müşteri İşlem ve Finans Bilgisi:</strong> Platformun bağlı olduğu yerel ERP sistemlerinden (Logo, Mikro vb.) çekilen ancak yapay zeka modeline beslenmeden önce otomatik olarak anonimleştirilen ve maskelenen cari hesap, stok, fatura ve sipariş hareketleri[cite: 283].</li>
              <li><strong>İşlem Güvenliği Bilgisi:</strong> Sistem üzerinde gerçekleştirilen her otonom aksiyona (fatura kesme, sipariş onaylama vb.) ait zaman damgası, IP adresi, kullanıcı kimliği ve değiştirilemez denetim izi (audit log) kayıtları[cite: 284].</li>
              <li><strong>Görsel ve İşitsel Kayıtlar:</strong> Doğal dil arayüzünün kullanımı sırasında kullanıcının tercihine bağlı olarak iletilen sesli komutlar ve yazılı mesaj içerikleri.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>
              Toplanan kişisel verileriniz, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları 
              dahilinde aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Platformun temel fonksiyonu olan doğal dil sorgularının anlamsal olarak işlenmesi ve ERP sistemleriyle çift yönlü entegrasyonun kurulması,</li>
              <li>Akıllı Denetim Katmanı aracılığıyla finansal anomalilerin, mükerrer ödemelerin ve maddi risklerin tespit edilmesi[cite: 194],</li>
              <li>Güven skorunun kritik eşiklerin altında kaldığı senaryolarda &quot;Human-in-the-Loop&quot; (insan onaylı kontrol kalkanı) mekanizmasının işletilerek son kararın yöneticiye bırakılması ve hukuki güvenliğin tesisi[cite: 288],</li>
              <li>Türk Ticaret Kanunu ve ilgili mevzuat uyarınca sistem loglarının zaman damgası ile kayıt altına alınarak yasal şeffaflığın ve sorumluluk takibinin sağlanması[cite: 284],</li>
              <li>Kişisel Verileri Koruma Kurumu tarafından yayımlanan Kasım 2025 Üretken Yapay Zeka Rehberi ve 24 Şubat 2026 İş Yerlerinde Üretken Yapay Zeka Kullanımı Rehberi standartlarına tam uyumluluğun sağlanması[cite: 281].</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">4. İşlenen Kişisel Verilerin Aktarılması ve Veri Egemenliği</h2>
            <p>
              Lorenta OS, tavizsiz bir kapalı devre altyapı mimarisine sahiptir[cite: 282]. Hassas ticari ve kişisel 
              verileriniz, şirket dışındaki genel bulut sağlayıcılarına veya üçüncü taraf yapay zeka platformlarına 
              asla ham veri olarak gönderilmez[cite: 282]. 
            </p>
            <p>
              Verileriniz, yerel bulut veya kurum içi (on-premise) sunucularda kapalı devre biçimde işlenerek veri 
              gizliliği riskleri yapısal olarak ortadan kaldırılmaktadır[cite: 282, 289]. Yasal yükümlülüklerin yerine 
              getirilmesi haricinde, verileriniz üçüncü şahıslarla ticari amaçlarla paylaşılmaz, satılmaz veya transfer edilmez.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">5. Kişisel Veri İşlemenin Hukuki Sebepleri</h2>
            <p>
              Kişisel verileriniz, Kanun&apos;un 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Sözleşmenin Kurulması ve İfası:</strong> Platform üyelik ve kullanım şartları kapsamındaki hizmetlerin eksiksiz sunulabilmesi.</li>
              <li><strong>Hukuki Yükümlülük:</strong> Değiştirilemez denetim izi loglarının tutulması ve finansal operasyonların yasal mevzuata uygun kaydedilmesi[cite: 284].</li>
              <li><strong>Meşru Menfaat:</strong> İşletmelerin kurumsal hafızasının korunması, finansal anomali takibi ve sistem güvenliğinin en üst düzeyde tutulması amacıyla veri işlenmesinin zorunlu olması.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">6. İlgili Kişinin Kanun Kapsamındaki Hakları (Madde 11)</h2>
            <p>
              Kanun&apos;un 11. maddesi uyarınca, veri sahibi olarak dilediğiniz zaman veri sorumlusuna başvurarak 
              aşağıdaki haklarınızı kullanabilirsiniz:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışına verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>Kanun&apos;da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4">7. Başvuru ve İletişim Yöntemi</h2>
            <p>
              Yukarıda belirtilen haklarınıza ilişkin taleplerinizi, kimliğinizi doğrulayacak belgelerle birlikte 
              <strong> info@lorentaos.com</strong> e-posta adresine güvenli elektronik imza, mobil imza ya da 
              tarafımıza daha önce bildirilen kurumsal e-posta adresiniz üzerinden yazılı olarak iletebilirsiniz. 
              Başvurularınız, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>
          </section>

          {/* Aksiyon Butonu */}
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