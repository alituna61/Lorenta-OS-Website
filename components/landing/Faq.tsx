"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const faqs = [
  {
    q: "Verilerim nereye gidiyor?",
    a: "Hiçbir yere gitmiyor, kalıyor. Lorenta OS, verilerinizi Türkiye sınırları içindeki sunucularda işler. Hiçbir iş veriniz yurt dışına çıkmaz, üçüncü taraf AI sağlayıcılarına gönderilmez. Kutu açılışından itibaren, KVKK tasarım gereği uyumlu bir mimariye sahipsiniz.",
  },
  {
    q: "ERP sistemim bozulur mu?",
    a: "Bozulmaz. Lorenta OS, mevcut ERP'inizin (Logo, Mikro) yanında çalışır, onu değiştirmez. Sisteminize salt-okuma + onaylı yazma erişimiyle bağlanır; kritik her işlem size onaylatılır. Mevcut iş süreçleriniz olduğu gibi çalışmaya devam eder.",
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "İlk bağlantı için 30 dakika yeterli. ERP bağdaştırıcısını kuruyoruz, erişim izinlerini tanımlıyoruz ve ilk ajan görevlerini yapılandırıyoruz. IT ekibi gerektiren karmaşık bir altyapı kurulumu yok; standart bir kurulum için yalnızca ERP erişim bilgileriniz yeterli.",
  },
  {
    q: "Çalışanlarım teknik olmadan kullanabilir mi?",
    a: "Evet. Lorenta OS'un arayüzü, chatbot tarzı doğal dil arayüzüyle tasarlanmıştır. Muhasebeciden depo sorumlusuna kadar teknik bilgi gerektirmeden kullanılabilir.",
  },
  {
    q: "Sözleşme zorunluluğu var mı? Bağlı kalır mıyım?",
    a: "Hayır. Tüm planlarımız aylık faturalanır ve istediğiniz zaman iptal edebilirsiniz. Verilerinizi her zaman dışarı aktarabilirsiniz.",
  },
  {
    q: "ChatGPT veya Microsoft Copilot varken neden Lorenta?",
    a: "Genel AI araçları muhteşem — genel amaçlı görevler için. Ama Logo ERP'inizden doğrudan fatura oluşturmak, ay sonu kapanışını otomatikleştirmek ya da Mikro'dan tedarik siparişi açmak için tasarlanmamışlar. Lorenta OS, Türk KOBİ operasyonuna özel olarak üretilmiş bir araçtır; verilerinizi yurt içinde tutar ve ERP sisteminize doğrudan yazar.",
  },
  {
    q: "Fiyat değişir mi? Gizli ücret var mı?",
    a: "Sayfada gördüğünüz fiyat, ödediğiniz fiyattır. Kullanıcı başına gizli ek ücret, entegrasyon ücreti veya destek paketi dayatması yoktur. Kurulum dahil, ilk yıl teknik destek dahil.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <Container width="default">
        <Reveal>
          {/* Başlık */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-data-[inverted=true]/theme:text-black/45">
              SSS
            </p>
            <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          {/* Sorular */}
          <div className="mx-auto max-w-3xl divide-y divide-white/10 group-data-[inverted=true]/theme:divide-black/10">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-base font-semibold leading-snug text-white group-data-[inverted=true]/theme:text-black">
                    {faq.q}
                  </span>
                  <span
                    className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-sm text-white/50 transition-transform duration-200 group-data-[inverted=true]/theme:border-black/20 group-data-[inverted=true]/theme:text-black/50 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-6 text-sm leading-relaxed text-white/60 group-data-[inverted=true]/theme:text-black/60">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
