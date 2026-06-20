import { Fragment } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

// ─── Types ────────────────────────────────────────────────────────────────────

type Val = boolean | null;
type CompKey = "logo" | "mikro" | "sap" | "dynamics" | "chatgpt" | "copilot";

type FeatureRow = {
  criterion: string;
  note?: string;
  lorenta: Val;
  logo: Val;
  mikro: Val;
  sap: Val;
  dynamics: Val;
  chatgpt: Val;
  copilot: Val;
};

type FeatureGroup = {
  label: string;
  features: FeatureRow[];
};

// ─── Competitor Definitions ────────────────────────────────────────────────────

type CompGroup = {
  groupLabel: string;
  groupId: string;
  items: { key: CompKey; label: string; sublabel: string }[];
};

const compGroups: CompGroup[] = [
  {
    groupLabel: "Yerel ERP",
    groupId: "local-erp",
    items: [
      { key: "logo", label: "Logo Tiger", sublabel: "Yerel ERP" },
      { key: "mikro", label: "Mikro ERP", sublabel: "Yerel ERP" },
    ],
  },
  {
    groupLabel: "Küresel Dev ERP",
    groupId: "global-erp",
    items: [
      { key: "sap", label: "SAP Business One", sublabel: "Küresel Dev" },
      { key: "dynamics", label: "Microsoft Dynamics", sublabel: "Küresel Dev" },
    ],
  },
  {
    groupLabel: "Genel AI",
    groupId: "general-ai",
    items: [
      { key: "chatgpt", label: "ChatGPT Business", sublabel: "Genel AI" },
      { key: "copilot", label: "Microsoft Copilot", sublabel: "Genel AI" },
    ],
  },
];

const allCompetitors = compGroups.flatMap((g) => g.items);

// ─── Feature Data ─────────────────────────────────────────────────────────────

const featureGroups: FeatureGroup[] = [
  {
    label: "ERP Entegrasyonu",
    features: [
      {
        criterion: "Logo Tiger Entegrasyonu",
        lorenta: true,
        logo: true,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Mikro ERP Entegrasyonu",
        lorenta: true,
        logo: false,
        mikro: true,
        sap: false,
        dynamics: false,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Doğal Dille ERP Sorgulama",
        note: "SQL/teknik bilgi olmadan Türkçe ile soru sorabilme",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: null,
        chatgpt: null,
        copilot: null,
      },
      {
        criterion: "ERP'ye Veri Yazma",
        note: "Salt okunur değil; güncelleme, sipariş ve kayıt oluşturma",
        lorenta: true,
        logo: true,
        mikro: true,
        sap: true,
        dynamics: true,
        chatgpt: false,
        copilot: null,
      },
      {
        criterion: "Gerçek Zamanlı Cari & Stok Sorgulama",
        lorenta: true,
        logo: null,
        mikro: null,
        sap: null,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
    ],
  },
  {
    label: "Yapay Zeka & Otomasyon",
    features: [
      {
        criterion: "Otonom Aksiyon Alma",
        note: "İnsan onayıyla iş akışlarını otomatik tetikleme",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: null,
        chatgpt: false,
        copilot: null,
      },
      {
        criterion: "Çok Ajanlı Orkestrasyon",
        note: "CEO · Finans · Satış · Tedarik ajanlarının koordineli çalışması",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: null,
        copilot: null,
      },
      {
        criterion: "Öngörücü Stok Analizi",
        note: "Kriz oluşmadan 7 gün önceden tespit ve uyarı",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: null,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Otomatik Sabah Brifingi",
        note: "CEO için 08:00'de hazır, ERP verisine dayalı günlük özet",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Kurumsal Hafıza",
        note: "Şirkete özgü süreçleri ve bağlamı kalıcı olarak saklama",
        lorenta: true,
        logo: null,
        mikro: null,
        sap: false,
        dynamics: false,
        chatgpt: null,
        copilot: null,
      },
      {
        criterion: "Departmanlara Özel AI Çalışanı",
        note: "CEO · Finans · Satış · Tedarik · Muhasebe ayrı ajanları",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: false,
        copilot: false,
      },
    ],
  },
  {
    label: "Güvenlik & Uyum",
    features: [
      {
        criterion: "KVKK Tam Uyumu",
        lorenta: true,
        logo: null,
        mikro: null,
        sap: null,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Veriler Türkiye'de Kalır",
        lorenta: true,
        logo: true,
        mikro: true,
        sap: null,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Tam Denetim İzi",
        note: "Her AI aksiyonu, onay ve red kararının eksiksiz kaydı",
        lorenta: true,
        logo: true,
        mikro: true,
        sap: true,
        dynamics: true,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "Halüsinasyon Koruması",
        note: "ERP verisiyle çapraz doğrulama: hatalı aksiyon = %0",
        lorenta: true,
        logo: true,
        mikro: true,
        sap: true,
        dynamics: true,
        chatgpt: false,
        copilot: false,
      },
    ],
  },
  {
    label: "Kurulum & Kullanım",
    features: [
      {
        criterion: "Teknik Bilgi Gerekmez",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: true,
        copilot: true,
      },
      {
        criterion: "30 Dakikada Kurulum",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: true,
        copilot: true,
      },
      {
        criterion: "Türkçe Doğal Dil Desteği",
        lorenta: true,
        logo: null,
        mikro: null,
        sap: null,
        dynamics: null,
        chatgpt: true,
        copilot: true,
      },
      {
        criterion: "IT Ekibi Gerektirmez",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: false,
        chatgpt: true,
        copilot: true,
      },
    ],
  },
  {
    label: "İş Değeri",
    features: [
      {
        criterion: "KOBİ'ye Uygun Fiyatlandırma",
        lorenta: true,
        logo: null,
        mikro: null,
        sap: false,
        dynamics: false,
        chatgpt: true,
        copilot: true,
      },
      {
        criterion: "Akıllı İnsan Denetimi",
        note: "Kritik her karar için son onay kullanıcıda",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: null,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
      {
        criterion: "WhatsApp/E-posta ile Bildirim",
        lorenta: true,
        logo: false,
        mikro: false,
        sap: false,
        dynamics: null,
        chatgpt: false,
        copilot: false,
      },
    ],
  },
];

// ─── Competitor Profiles ──────────────────────────────────────────────────────

const profiles = [
  {
    groupLabel: "Yerel ERP'ler",
    names: "Logo Tiger & Mikro ERP",
    badge: "Yerel ERP",
    strength:
      "Türk muhasebe standartlarına tam uyumlu, güçlü lokal destek altyapısı ve yaygın muhasebeci ekosistemi.",
    gap: "Pasif veri deposudur. Doğal dil anlamaz, ERP verisini aksiyona dönüştüremez. Yöneticiye sabah brifingi veremez, stok krizini önceden göremez.",
    advantage:
      "Mevcut Logo/Mikro altyapınızı değiştirmez — üstüne konuşabilen ve aksiyon alabilen bir AI katmanı ekler. 30 dakikada entegrasyon.",
  },
  {
    groupLabel: "Küresel Dev ERP'ler",
    names: "SAP Business One & Microsoft Dynamics 365",
    badge: "Küresel Dev",
    strength:
      "Büyük kurumsal süreçler için kapsamlı modüler yapı, global destek ekosistemi ve endüstri standardı raporlama.",
    gap: "KOBİ'ler için bütçe dışı; lisans + implementasyon maliyeti yüz binleri aşar. Logo/Mikro entegrasyonu yok. KVKK uyumunda belirsiz. Kurulum 1 ay alır.",
    advantage:
      "KOBİ'ler kurumsal güce 30 dakikada kavuşur — kurumsal bütçe, IT ekibi ve 6 aylık implementasyon süreci gerektirmez.",
  },
  {
    groupLabel: "Genel AI Araçları",
    names: "ChatGPT Business & Microsoft Copilot",
    badge: "Genel AI",
    strength:
      "Kullanımı kolay, kurulum hızlı, Türkçe dil desteği iyi ve görece uygun fiyatlı genel amaçlı asistanlar.",
    gap: "ERP verinize erişimi yoktur; kurumsal bağlamdan kopuktur. Otonom aksiyon alamaz. Verileriniz yurt dışına çıkar, KVKK uyumsuzdur.",
    advantage:
      "ChatGPT konuşur; Lorenta OS ERP'ye yazar. Aradaki fark: genel bilgi ile şirket bağlamına dayalı aksiyon kapasitesi.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Cell({ val, highlight }: { val: Val; highlight?: boolean }) {
  if (val === true)
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
          highlight
            ? "bg-signal/20 text-signal"
            : "bg-white/10 text-white/55 group-data-[inverted=true]/theme:bg-black/10 group-data-[inverted=true]/theme:text-black/55"
        }`}
      >
        ✓
      </span>
    );
  if (val === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 font-mono text-xs text-white/20 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/20">
        ✗
      </span>
    );
  return (
    <span
      title="Kısmi / Koşullu"
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-sm text-white/30 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/30"
    >
      ◐
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComparePage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container width="wide">
        {/* ── Breadcrumb ── */}
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 group-data-[inverted=true]/theme:text-black/35"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white/55 group-data-[inverted=true]/theme:hover:text-black/55"
            >
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white/50 group-data-[inverted=true]/theme:text-black/55">
              Detaylı Karşılaştırma
            </span>
          </nav>
        </Reveal>

        {/* ── Hero ── */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <h1 className="font-barlow text-4xl font-extrabold tracking-tight text-white sm:text-5xl group-data-[inverted=true]/theme:text-black">
              Piyasadaki Her Çözümü{" "}
              <br className="hidden sm:block" />
              Tek Tabloda{" "}
              <span className="text-signal">Karşılaştırdık</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55">
              Yerel ERP&apos;lerden küresel devlere, genel AI araçlarından doğrudan
              rakiplere — 7 çözümü 22 kritik özellik üzerinden ele aldık.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs text-white/30 group-data-[inverted=true]/theme:text-black/35">
              <span>22 özellik</span>
              <span className="text-white/15 group-data-[inverted=true]/theme:text-black/15">
                ·
              </span>
              <span>7 rakip çözüm</span>
              <span className="text-white/15 group-data-[inverted=true]/theme:text-black/15">
                ·
              </span>
              <span>4 rekabetçi kategori</span>
            </div>
          </div>
        </Reveal>

        {/* ── Main Comparison Table ── */}
        <Reveal>
          <div className="mb-4 overflow-x-auto rounded-2xl border border-white/10 group-data-[inverted=true]/theme:border-black/10">
            <table className="w-full min-w-270 border-collapse text-sm">
              {/* ── Head ── */}
              <thead>
                {/* Group label row */}
                <tr className="border-b border-white/5 group-data-[inverted=true]/theme:border-black/5">
                  <th className="px-6 py-3" />
                  {/* Lorenta */}
                  <th className="relative px-4 py-3">
                    <span aria-hidden className="absolute inset-0 bg-signal/[0.07]" />
                  </th>
                  {/* Competitor group spans */}
                  {compGroups.map((group) => (
                    <th
                      key={group.groupId}
                      colSpan={group.items.length}
                      className="px-4 py-3 text-center"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/25 group-data-[inverted=true]/theme:text-black/30">
                        {group.groupLabel}
                      </span>
                    </th>
                  ))}
                </tr>

                {/* Column headers */}
                <tr className="border-b border-white/10 group-data-[inverted=true]/theme:border-black/10">
                  <th className="w-[28%] px-6 py-5 text-left font-mono text-[11px] uppercase tracking-widest text-white/35 group-data-[inverted=true]/theme:text-black/40">
                    Özellik
                  </th>

                  {/* Lorenta — highlighted column */}
                  <th className="relative px-4 py-5 text-center">
                    <span aria-hidden className="absolute inset-0 bg-signal/[0.07]" />
                    <span className="relative z-10">
                      <span className="block text-sm font-semibold text-signal">
                        Lorenta
                      </span>
                      <span className="mt-0.5 block font-mono text-[10px] font-normal text-signal/45">
                        İşletim Sistemi
                      </span>
                    </span>
                  </th>

                  {/* Competitor columns */}
                  {allCompetitors.map((c) => (
                    <th
                      key={c.key}
                      className="px-4 py-5 text-center font-medium text-white/40 group-data-[inverted=true]/theme:text-black/45"
                    >
                      <span className="block text-xs leading-snug">{c.label}</span>
                      <span className="mt-0.5 block font-mono text-[10px] font-normal text-white/22 group-data-[inverted=true]/theme:text-black/27">
                        {c.sublabel}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ── Body ── */}
              <tbody>
                {featureGroups.map((group, gi) => (
                  <Fragment key={gi}>
                    {/* Category divider */}
                    <tr className="border-b border-t border-white/8 bg-white/2 group-data-[inverted=true]/theme:border-black/8 group-data-[inverted=true]/theme:bg-black/2">
                      <td
                        colSpan={9}
                        className="px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/38 group-data-[inverted=true]/theme:text-black/43"
                      >
                        {group.label}
                      </td>
                    </tr>

                    {/* Feature rows */}
                    {group.features.map((row, ri) => (
                      <tr
                        key={ri}
                        className={`border-b border-white/5 transition-colors hover:bg-white/2 group-data-[inverted=true]/theme:border-black/5 group-data-[inverted=true]/theme:hover:bg-black/2 ${
                          gi === featureGroups.length - 1 &&
                          ri === group.features.length - 1
                            ? "border-b-0"
                            : ""
                        }`}
                      >
                        {/* Feature name */}
                        <td className="px-6 py-4">
                          <span className="text-sm text-white/70 group-data-[inverted=true]/theme:text-black/70">
                            {row.criterion}
                          </span>
                          {row.note && (
                            <span className="mt-0.5 block text-[11px] leading-snug text-white/28 group-data-[inverted=true]/theme:text-black/33">
                              {row.note}
                            </span>
                          )}
                        </td>

                        {/* Lorenta cell */}
                        <td className="relative px-4 py-4 text-center">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-signal/[0.07]"
                          />
                          <span className="relative z-10">
                            <Cell val={row.lorenta} highlight />
                          </span>
                        </td>

                        {/* Competitor cells */}
                        {allCompetitors.map((c) => (
                          <td key={c.key} className="px-4 py-4 text-center">
                            <Cell val={row[c.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend + link */}
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] text-white/33 group-data-[inverted=true]/theme:text-black/38">
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-signal/20 text-xs font-bold text-signal">
                  ✓
                </span>
                Tam destek
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-xs text-white/28 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/28">
                  ◐
                </span>
                Kısmi / Koşullu
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-xs text-white/18 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/18">
                  ✗
                </span>
                Mevcut değil
              </span>
            </div>
            <Link
              href="/"
              className="text-xs font-medium text-signal underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              ← Ana sayfaya dön
            </Link>
          </div>
        </Reveal>

        {/* ── Competitor Profiles ── */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 group-data-[inverted=true]/theme:text-black/40">
              Rakip Analizi
            </p>
            <h2 className="mb-2 font-barlow text-2xl font-extrabold tracking-tight text-white sm:text-3xl group-data-[inverted=true]/theme:text-black">
              Her Rakip Neden Yarım Kalır?
            </h2>
            <p className="mb-10 text-sm text-white/45 group-data-[inverted=true]/theme:text-black/45">
              Güçlü yönlerine saygı duyarız — ama boşluklar konusunda dürüst
              olmak gerekir.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {profiles.map((p) => (
                <div
                  key={p.groupLabel}
                  className="rounded-2xl border border-white/8 bg-white/2 p-6 group-data-[inverted=true]/theme:border-black/8 group-data-[inverted=true]/theme:bg-black/2"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-white/28 group-data-[inverted=true]/theme:text-black/33">
                        {p.groupLabel}
                      </p>
                      <h3 className="font-barlow text-lg font-bold text-white/75 group-data-[inverted=true]/theme:text-black/75">
                        {p.names}
                      </h3>
                    </div>
                    <span className="mt-0.5 shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/35 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/40">
                      {p.badge}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-white/22 group-data-[inverted=true]/theme:text-black/27">
                        Güçlü Yanı
                      </p>
                      <p className="leading-relaxed text-white/48 group-data-[inverted=true]/theme:text-black/48">
                        {p.strength}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-red-400/50">
                        Kritik Eksik
                      </p>
                      <p className="leading-relaxed text-white/48 group-data-[inverted=true]/theme:text-black/48">
                        {p.gap}
                      </p>
                    </div>

                    <div className="rounded-xl border border-signal/20 bg-signal/5 px-4 py-3">
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-signal/50">
                        Lorenta&apos;nın Farkı
                      </p>
                      <p className="leading-relaxed text-signal/75">
                        {p.advantage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Footnote ── */}
        <Reveal>
          <p className="mb-16 text-xs leading-relaxed text-white/20 group-data-[inverted=true]/theme:text-black/25">
            * Bu karşılaştırma kamuya açık bilgiler, ürün demoları ve doğrudan
            kullanıcı deneyimleri temel alınarak hazırlanmıştır. Rekabet
            ortamı değişkendir; en güncel bilgi için doğrudan ilgili
            satıcılarla teyit ediniz. ◐ işareti, özelliğin belirli koşullarda
            veya üçüncü taraf entegrasyonlar aracılığıyla kısmen
            desteklendiğini gösterir. Son güncelleme: Haziran 2026.
          </p>
        </Reveal>
      </Container>
    </div>
  );
}