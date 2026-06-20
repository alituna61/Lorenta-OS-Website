import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | Lorenta OS",
  description:
    "Lorenta OS Bilişsel İşletim Sistemi ve yeni nesil ERP altyapısı hakkında en çok merak edilen soruların cevapları.",
};

const faqs = [
  {
    question: "Lorenta OS nedir? Sadece bir yapay zeka asistanı mı?",
    answer:
      "Hayır. Lorenta OS, Türkiye'nin en gelişmiş yeni nesil Bilişsel İşletim Sistemi ve ana ERP altyapısıdır. Şirketinizin tüm finans, muhasebe, stok ve tedarik süreçlerini uçtan uca, otonom yapay zeka ajanlarıyla yönetir. Geleneksel ERP'lerin aksine, veriyi sadece saklamaz, operasyonu kendi kendine yürütür.",
  },
  {
    question: "Halihazırda Logo veya Mikro kullanıyorum, Lorenta OS'a geçmeli miyim?",
    answer:
      "En yüksek verimi Lorenta OS'u ana ERP sisteminiz olarak uçtan uca kullandığınızda alırsınız. Ancak mevcut altyapınızı hemen değiştirmek istemiyorsanız; Lorenta OS, Logo ve Mikro gibi geleneksel ERP sistemlerine sorunsuz entegre olur. Sisteminizi bozmadan, üzerine yapay zeka destekli otonom bir katman olarak da çalışabilir.",
  },
  {
    question: "Eski ERP sistemimden Lorenta OS'a veri aktarımı (Migration) zor mu?",
    answer:
      "Hayır, veri taşıma süreci tamamen otonomdur. Lorenta OS; eski sisteminizdeki cari hesaplar, stok kartları ve geçmiş faturalar gibi tüm verileri saniyeler içinde kendi ana altyapısına güvenle aktarır. Operasyonunuz hiçbir şekilde kesintiye uğramaz.",
  },
  {
    question: "Verilerim güvende mi? Yurtdışına çıkıyor mu?",
    answer:
      "Lorenta OS tavizsiz bir kapalı devre mimarisine sahiptir. Hiçbir iş veriniz yurt dışına çıkmaz veya üçüncü taraf (OpenAI, Microsoft vb.) yapay zeka sağlayıcılarına gönderilmez. KVKK'ya tasarım gereği (by-design) %100 uyumlu olarak kendi sunucularınızda veya yerel bulutta işlenir.",
  },
  {
    question: "Çalışanlarım teknik bilgi olmadan sistemi kullanabilir mi?",
    answer:
      "Evet. Lorenta OS, doğal dil işleme yeteneğine sahip gelişmiş bir arayüzle gelir. Muhasebeciniz veya depo sorumlunuz, sistemi günlük konuşma diliyle yönlendirerek karmaşık ERP işlemlerini saniyeler içinde, karmaşık menülerde boğulmadan gerçekleştirebilir.",
  },
  {
    question: "Kurulum süreci ne kadar sürer?",
    answer:
      "Geleneksel ERP'lerde aylar süren kurulum süreci, Lorenta OS'un yapay zeka destekli altyapısı sayesinde günler içinde tamamlanır. Eğer mevcut bir ERP'ye (Logo/Mikro) sadece entegre edilecekse, ilk bağlantı ve ajan görevlendirmeleri yalnızca 30 dakika sürer.",
  },
];

export default function FaqPage() {
  // AEO (Answer Engine Optimization) için FAQPage Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      {/* Schema Enjeksiyonu */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Üst Başlık Alanı */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Destek · SSS
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-600">
            Lorenta OS Bilişsel İşletim Sistemi hakkında merak ettikleriniz.
          </p>
        </div>

        {/* Metin İçeriği / Soru-Cevap Listesi */}
        <div className="prose prose-lg prose-slate max-w-none text-gray-800 space-y-10">
          {faqs.map((faq, index) => (
            <section key={index} className="scroll-mt-24" id={`faq-${index}`}>
              <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-black">
                {faq.question}
              </h2>
              <p className="text-justify">{faq.answer}</p>
            </section>
          ))}

          {/* İletişim / Aksiyon Alanı */}
          <div className="pt-8 mt-12 border-t">
            <p className="mb-6 text-gray-600">
              Başka bir sorunuz mu var? Teknik ekibimizle hemen iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Bize Ulaşın
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}