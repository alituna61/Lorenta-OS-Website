"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const faqs = [
  {
    q: "Lorenta OS nedir? Sadece bir yapay zeka asistanı mı?",
    a: "Hayır. Lorenta OS, Türkiye'nin en gelişmiş yeni nesil Bilişsel İşletim Sistemi ve ana ERP altyapısıdır. Şirketinizin tüm finans, muhasebe, stok ve tedarik süreçlerini uçtan uca, otonom yapay zeka ajanlarıyla yönetir. Geleneksel ERP'lerin aksine, veriyi sadece saklamaz, operasyonu kendi kendine yürütür.",
  },
  {
    q: "Halihazırda Logo veya Mikro kullanıyorum, Lorenta OS'a geçmeli miyim?",
    a: "En yüksek verimi Lorenta OS'u ana ERP sisteminiz olarak uçtan uca kullandığınızda alırsınız. Ancak mevcut altyapınızı hemen değiştirmek istemiyorsanız; Lorenta OS, Logo ve Mikro gibi geleneksel ERP sistemlerine sorunsuz entegre olur. Sisteminizi bozmadan, üzerine yapay zeka destekli otonom bir katman olarak da çalışabilir.",
  },
  {
    q: "Eski ERP sistemimden Lorenta OS'a veri aktarımı zor mu?",
    a: "Hayır, veri taşıma süreci tamamen otonomdur. Lorenta OS; eski sisteminizdeki cari hesaplar, stok kartları ve geçmiş faturalar gibi tüm verileri saniyeler içinde kendi ana altyapısına güvenle aktarır. Operasyonunuz hiçbir şekilde kesintiye uğramaz.",
  },
  {
    q: "Verilerim güvende mi? Yurtdışına çıkıyor mu?",
    a: "Lorenta OS tavizsiz bir kapalı devre mimarisine sahiptir. Hiçbir iş veriniz yurt dışına çıkmaz veya üçüncü taraf (OpenAI, Microsoft vb.) yapay zeka sağlayıcılarına gönderilmez. KVKK'ya tasarım gereği (by-design) %100 uyumlu olarak kendi sunucularınızda veya yerel bulutta işlenir.",
  },
  {
    q: "Çalışanlarım teknik olmadan sistemi kullanabilir mi?",
    a: "Evet. Lorenta OS, doğal dil işleme yeteneğine sahip gelişmiş bir arayüzle gelir. Muhasebeciniz veya depo sorumlunuz, sistemi günlük konuşma diliyle yönlendirerek karmaşık ERP işlemlerini saniyeler içinde, karmaşık menülerde boğulmadan gerçekleştirebilir.",
  },
  {
    q: "Kurulum süreci ne kadar sürer?",
    a: "Geleneksel ERP'lerde aylar süren kurulum süreci, Lorenta OS'un yapay zeka destekli altyapısı sayesinde günler içinde tamamlanır. Eğer mevcut bir ERP'ye (Logo/Mikro) sadece entegre edilecekse, ilk bağlantı ve ajan görevlendirmeleri yalnızca 30 dakika sürer.",
  },
  {
    q: "Fiyat değişir mi? Gizli ücret var mı?",
    a: "Sayfada gördüğünüz fiyat, ödediğiniz fiyattır. Kullanıcı başına gizli ek ücret, entegrasyon ücreti veya destek paketi dayatması yoktur. Kurulum ve ilk yıl teknik destek dahildir.",
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
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-sm text-white/50 transition-transform duration-200 group-data-[inverted=true]/theme:border-black/20 group-data-[inverted=true]/theme:text-black/50 ${
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