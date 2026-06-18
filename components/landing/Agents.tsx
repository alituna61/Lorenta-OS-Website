import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

type Agent = {
  name: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  quote: string;
  points: string[];
  icon: React.ReactNode;
};

const ceoAgent = {
  name: "CEO Asistanı",
  tagline: "Sabah 08:00'de sizi bilgilendirir.",
  quote: "Bugün nakit pozisyonunuz kritik eşiğin üzerinde. 3 gecikmiş tahsilat, 2 onay bekleyen teklif ve 1 teslim riski var. Günün önceliklerini hazırladım.",
  points: [
    "Nakit durumu",
    "Kritik stoklar",
    "Bekleyen teklifler",
    "Geciken tahsilatlar",
    "Günün öncelikleri",
  ],
  icon: (
    <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 13c-6 0-9 2.5-9 4v1h18v-1c0-1.5-3-4-9-4z" strokeWidth="1.6" />
  ),
};

const agents: Agent[] = [
  {
    name: "Finans Çalışanı",
    tagline: "Tahsilatları hızlandırır, riskleri erkenden bildirir",
    metric: "₺284K",
    metricLabel: "Riskli Alacak",
    quote: "12 müşterinin ödemesi gecikmiş durumda. Toplam risk 284.000 TL. Bu ay 142 faturayı kontrol ettim, 3 mükerrer ödeme riski buldum.",
    points: [
      "Geciken alacakları ve nakit akışını takip eder",
      "Fatura mutabakatı ve mükerrer ödeme riskini tespit eder",
      "Ay sonu raporlamayı dakikalara indirir",
    ],
    icon: (
      <path d="M3 3v18h18M7 14l3-3 3 3 5-6" strokeWidth="1.6" />
    ),
  },
  {
    name: "Satış Çalışanı",
    tagline: "Doğru müşteriye, doğru zamanda ulaşır",
    metric: "2 teklif",
    metricLabel: "Onay bekliyor",
    quote: "2 teklif onay bekliyor. Müşteri geçmişine göre en yüksek kapanma ihtimali olan teklifi öne aldım.",
    points: [
      "Saha temsilcisine anlık cari ve geçmiş ciro bilgisi sunar",
      "Çok dilli müşteri yanıtlarını saniyeler içinde hazırlar",
      "ERP stok/fiyat ile otomatik teklif oluşturur",
    ],
    icon: (
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        strokeWidth="1.6"
      />
    ),
  },
  {
    name: "Tedarik Çalışanı",
    tagline: "Stok krizini oluşmadan önler",
    metric: "3 ürün",
    metricLabel: "Kritik Stok",
    quote: "Venüs Yatak Odası için 9 gün sonra stok tükenebilir. 3 ürün kritik seviyenin altında, tedarikçi tekliflerini hazırladım.",
    points: [
      "7 günlük üretim planına göre eksikleri öngörür",
      "Tedarikçi ve güncel fiyatları otomatik eşleştirir",
      "Sipariş taslağını WhatsApp/e-posta ile hazırlar",
    ],
    icon: (
      <path
        d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7M12 11v10"
        strokeWidth="1.6"
      />
    ),
  },
  {
    name: "Stok Çalışanı",
    tagline: "Depolardaki her hareketi anlık takip eder",
    metric: "8 ürün",
    metricLabel: "Sayım Farkı",
    quote: "Bursa deposunda 8 üründe sayım farkı tespit ettim. Son 24 saatte 340 giriş, 215 çıkış işlendi.",
    points: [
      "Depo bazında stok seviyelerini anlık izler",
      "Giriş/çıkış hareketlerini otomatik kaydeder",
      "Sayım farkı ve fire oranını raporlar",
    ],
    icon: (
      <path d="M3 9l9-6 9 6M5 9v10h14V9M9 21V13h6v8" strokeWidth="1.6" />
    ),
  },
  {
    name: "Üretim Çalışanı",
    tagline: "Üretim planı ile iş emirlerini senkronize tutar",
    metric: "4 iş emri",
    metricLabel: "Gecikme Riski",
    quote: "4 iş emri planlanan tarihte tamamlanamayabilir. 2 üründe hammadde eksikliği kritik seviyede.",
    points: [
      "Üretim planını iş emirleriyle eşleştirir",
      "Hammadde stoklarını üretime göre öngörür",
      "Kalite kontrol sonuçlarını anlık raporlar",
    ],
    icon: (
      <path
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        strokeWidth="1.6"
      />
    ),
  },
  {
    name: "Muhasebe Çalışanı",
    tagline: "Fatura ve cari hesapları günü gününe kapatır",
    metric: "18 fatura",
    metricLabel: "Mutabakat Bekliyor",
    quote: "18 faturada cari hesap farkı tespit ettim. KDV beyannamesi için 3 gün kaldı, eksik belge yok.",
    points: [
      "Cari hesap mutabakatını otomatik kontrol eder",
      "Vergi ve beyanname takvimini hatırlatır",
      "Finansal raporları aylık hazırlar",
    ],
    icon: (
      <path
        d="M6 2h12v20l-3-2-3 2-3-2-3 2zM9 7h6M9 11h6M9 15h4"
        strokeWidth="1.6"
      />
    ),
  },
];

export function Agents() {
  return (
    <section id="ajanlar" className="py-24 sm:py-28">
      <Container width="wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-signal">
            AI Çalışanlar
          </p>
          <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
            Her departmana özel bir dijital çalışan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55">
            Şirketinizi analiz eder, aksiyonları hazırlar ve kritik
            kararlar için onayı size bırakır.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-signal/30 bg-signal/5 p-8 group-data-[inverted=true]/theme:border-signal/20 group-data-[inverted=true]/theme:bg-signal/3">
            <div className="flex items-start gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal/15 text-signal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  {ceoAgent.icon}
                </svg>
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-barlow text-xl font-bold text-white group-data-[inverted=true]/theme:text-black">
                    {ceoAgent.name}
                  </h3>
                  <span className="rounded-full border border-signal/30 px-3 py-0.5 text-xs text-signal">
                    {ceoAgent.tagline}
                  </span>
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-white/70 group-data-[inverted=true]/theme:text-black/70">
                  &quot;{ceoAgent.quote}&quot;
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ceoAgent.points.map((p) => (
                    <span
                      key={p}
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/4 px-3 py-1 text-xs text-white/60 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/3 group-data-[inverted=true]/theme:text-black/60"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, i) => (
            <Reveal
              key={agent.name}
              delay={i * 70}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/2 p-6 transition-colors hover:border-white/25 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/2 group-data-[inverted=true]/theme:hover:border-black/25"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-signal/15 text-signal">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {agent.icon}
                </svg>
              </span>

              <h3 className="font-barlow text-lg font-bold text-white group-data-[inverted=true]/theme:text-black">
                {agent.name}
              </h3>

              <p className="mt-1 text-sm text-white/55 group-data-[inverted=true]/theme:text-black/55">
                {agent.tagline}
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/3 px-4 py-3 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/3">
                <div className="font-barlow text-2xl font-bold text-signal">
                  {agent.metric}
                </div>
                <div className="text-xs text-white/50 group-data-[inverted=true]/theme:text-black/50">
                  {agent.metricLabel}
                </div>
              </div>

              <p className="mt-4 text-sm italic leading-relaxed text-white/60 group-data-[inverted=true]/theme:text-black/60">
                &quot;{agent.quote}&quot;
              </p>

              <ul className="mt-4 space-y-2.5">
                {agent.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-sm text-white/65 group-data-[inverted=true]/theme:text-black/65"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}