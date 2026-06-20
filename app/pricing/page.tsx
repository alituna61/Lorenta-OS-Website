import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Fiyatlandırma",
  description:
    "Başlangıç, Profesyonel ve Kurumsal planlar. Aylık ₺3.000’den başlayan SaaS aboneliği ve tek seferlik kurulum ücreti.",
};

const plans = [
  {
    name: "Başlangıç",
    price: "₺3.000",
    period: "/ay",
    description: "Otonom operasyona ilk adımını atan ekipler için.",
    connectors: "1 entegrasyon",
    highlight: false,
    features: [
      "1 ERP entegrasyonu (Logo veya Mikro)",
      "Bilişsel Çekirdek — temel akıl yürütme motoru",
      "En fazla 2 aktif asistan",
      "Standart istisna panosu",
      "E-posta desteği",
      "Tek seferlik kurulum ücreti",
    ],
    cta: { label: "Hemen başla", href: "/demo" },
  },
  {
    name: "Profesyonel",
    price: "₺5.500",
    period: "/ay",
    description:
      "Çoklu sistem kapsamı ve gözlemlenebilirlik isteyen büyüyen operasyonlar için.",
    connectors: "3 entegrasyon",
    highlight: true,
    features: [
      "3 ERP / CRM entegrasyonu",
      "Bilişsel Çekirdek — gelişmiş akıl yürütme",
      "En fazla 6 aktif asistan",
      "RAGAS kalite panosu",
      "Otonom kapanış döngüsü (finans)",
      "Öncelikli destek + kurulum görüşmesi",
      "Tek seferlik kurulum ücreti",
    ],
    cta: { label: "Katıl", href: "/demo" },
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "",
    description:
      "Sınırsız ölçek, yerinde (on-prem) kurulum veya özel SLA gerektiren büyük kuruluşlar için.",
    connectors: "Sınırsız entegrasyon",
    highlight: false,
    features: [
      "Sınırsız entegrasyon",
      "Sınırsız asistan",
      "Yerinde (on-prem) kurulum seçeneği",
      "Özel Bilişsel Çekirdek ince ayarı",
      "KVKK & TTK uyum paketi",
      "Özel müşteri başarı yöneticisi",
      "SLA güvenceli çalışma süresi",
      "Tek seferlik kurulum ücreti",
    ],
    cta: { label: "Bize ulaşın", href: "/company/contact" },
  },
] as const;

const faq = [
  {
    q: "Tek seferlik kurulum ücreti nedir?",
    a: "Kurulum ücreti; ilk ERP bağlantısını, veri eşlemesini ve iş akışı yapılandırmasını kapsar. Kurulum sırasında bir kez alınır ve entegrasyon karmaşıklığına göre değişir. Satış temsilciniz size net bir teklif sunar.",
  },
  {
    q: "Plan değiştirebilir miyim?",
    a: "Evet. İstediğiniz zaman yükseltebilirsiniz — fatura orantılı olarak ayarlanır. Düşürmeler bir sonraki fatura döneminde yürürlüğe girer.",
  },
  {
    q: "Ücretsiz deneme var mı?",
    a: "Uygun Büyüme ve Kurumsal adaylar için rehberli, 14 günlük bir kavram kanıtı (PoC) sunuyoruz. Uygun olup olmadığınızı görmek için Katılın.",
  },
  {
    q: "Pratikte 'yerinde kurulum' ne demek?",
    a: "Kurumsal müşteriler Bilişsel Çekirdek ve asistan çalışma ortamını kendi altyapılarında çalıştırabilir; tüm veri ağ sınırınızın içinde kalır — hiçbir veri ortamınızdan çıkmaz.",
  },
  {
    q: "RAGAS panosu nedir?",
    a: "RAGAS, her yapay zekâ kararının kalitesini gerçek zamanlı ölçer — doğruluk, veriye dayanma ve ilgililik. Büyüme planından itibaren gelir.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Başlık */}
      <Section spacing="default">
        <Container width="default">
          <div className="space-y-6 text-center">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Fiyatlandırma
            </p>
            <h1 className="text-h2 sm:text-display">Üç plan. Sürpriz yok.</h1>
            <p className="mx-auto max-w-xl text-body text-ink-secondary">
              Kurumsal operasyon ekipleri için sürdürülebilir SaaS
              fiyatlandırması. Tüm planlar tek seferlik kurulum ücreti içerir ve
              temel uyum paketimizle gelir.
            </p>
          </div>
        </Container>
      </Section>

      {/* Plan ızgarası */}
      <Section spacing="tight" className="border-t border-border-subtle">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-px bg-border-subtle md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col p-8 ${
                  plan.highlight ? "bg-ink-primary" : "bg-canvas"
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                    {plan.name}
                  </p>
                  {plan.highlight && (
                    <span className="rounded-full bg-accent-signal px-2 py-0.5 font-mono text-micro text-ink-primary">
                      En popüler
                    </span>
                  )}
                </div>

                <div className="mb-4 flex items-end gap-1">
                  <span
                    className={`text-display font-medium ${
                      plan.highlight ? "text-surface" : "text-ink-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`mb-2 text-small ${
                        plan.highlight ? "text-surface/50" : "text-ink-tertiary"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={`mb-4 font-mono text-micro ${
                    plan.highlight ? "text-accent-signal" : "text-ink-tertiary"
                  }`}
                >
                  {plan.connectors}
                </p>

                <p
                  className={`mb-8 text-small ${
                    plan.highlight ? "text-surface/60" : "text-ink-secondary"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mb-10 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-1 shrink-0 font-mono text-micro ${
                          plan.highlight ? "text-accent-signal" : "text-ink-tertiary"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-small ${
                          plan.highlight ? "text-surface/80" : "text-ink-secondary"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.cta.href}
                  size="md"
                  variant={plan.highlight ? "signal" : "secondary"}
                >
                  {plan.cta.label}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI Hesabı */}
      <Section spacing="default" className="border-t border-border-subtle">
        <Container width="wide">
          <div className="mb-10">
            <p className="mb-3 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Yatırım geri dönüşü
            </p>
            <h2 className="text-h2">Kaç ayda geri döner?</h2>
            <p className="mt-4 max-w-2xl text-body text-ink-secondary">
              CFO ve genel müdürlerin en sık sorduğu soru. Somut rakamlarla yanıtlıyoruz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* ROI Kartı 1 */}
            <div className="rounded-2xl border border-border-subtle bg-surface p-7">
              <p className="mb-1 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Senaryo 1 — Muhasebe
              </p>
              <p className="mt-4 text-h4 font-medium text-ink-primary">
                Ay sonu kapanışı
              </p>
              <div className="my-5 space-y-2">
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Mevcut süre</span>
                  <span className="font-medium text-ink-primary line-through decoration-ink-tertiary/50">
                    3–4 saat
                  </span>
                </div>
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Lorenta ile süre</span>
                  <span className="font-medium text-ink-primary">15 dakika</span>
                </div>
                <div className="flex items-center justify-between border-t border-border-subtle pt-2 text-small text-ink-secondary">
                  <span>Aylık kazanılan zaman</span>
                  <span className="font-semibold text-ink-primary">≈3.5 saat</span>
                </div>
              </div>
              <div className="rounded-xl bg-canvas px-4 py-3">
                <p className="text-micro text-ink-tertiary">
                  Bir muhasebe çalışanının günlük maliyeti ≈₺850 ise, ayda
                  kazanılan 3.5 saat{" "}
                  <span className="font-semibold text-ink-primary">≈₺375</span> değer
                  taşır — aylık aboneliğin{" "}
                  <span className="font-semibold text-ink-primary">%12&apos;si</span>{" "}
                  yalnızca bu kalemden karşılanır.
                </p>
              </div>
            </div>

            {/* ROI Kartı 2 */}
            <div className="rounded-2xl border border-border-subtle bg-surface p-7">
              <p className="mb-1 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Senaryo 2 — Finans
              </p>
              <p className="mt-4 text-h4 font-medium text-ink-primary">
                Fazla ödeme önleme
              </p>
              <div className="my-5 space-y-2">
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Önlenen tek fazla ödeme</span>
                  <span className="font-semibold text-ink-primary">₺14.200</span>
                </div>
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Başlangıç planı yıllık maliyeti</span>
                  <span className="font-medium text-ink-primary">₺36.000</span>
                </div>
                <div className="flex items-center justify-between border-t border-border-subtle pt-2 text-small text-ink-secondary">
                  <span>Tek kalemde geri dönüş oranı</span>
                  <span className="font-semibold text-ink-primary">%39</span>
                </div>
              </div>
              <div className="rounded-xl bg-canvas px-4 py-3">
                <p className="text-micro text-ink-tertiary">
                  Müşterilerimizden biri ilk ay{" "}
                  <span className="font-semibold text-ink-primary">₺14.200</span>{" "}
                  tutarında yanlış faturayı Lorenta&apos;nın anomali alarmıyla
                  tespit etti. Tek kalemin geri dönüşü yıllık aboneliğin
                  %39&apos;una eşit.
                </p>
              </div>
            </div>

            {/* ROI Kartı 3 */}
            <div className="rounded-2xl border border-border-subtle bg-surface p-7">
              <p className="mb-1 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Senaryo 3 — Operasyon
              </p>
              <p className="mt-4 text-h4 font-medium text-ink-primary">
                Stok duruşu önleme
              </p>
              <div className="my-5 space-y-2">
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Hat duruşu başına maliyet</span>
                  <span className="font-medium text-ink-primary">₺8.000–₺25.000</span>
                </div>
                <div className="flex items-center justify-between text-small text-ink-secondary">
                  <span>Önlenen ortalama duruş / yıl</span>
                  <span className="font-medium text-ink-primary">2–4 vaka</span>
                </div>
                <div className="flex items-center justify-between border-t border-border-subtle pt-2 text-small text-ink-secondary">
                  <span>Tahmini yıllık tasarruf</span>
                  <span className="font-semibold text-ink-primary">₺16.000–₺100.000</span>
                </div>
              </div>
              <div className="rounded-xl bg-canvas px-4 py-3">
                <p className="text-micro text-ink-tertiary">
                  Lorenta&apos;nın öngörücü stok alarmı, üretim planını 7 gün
                  öncesinden analiz ederek eksik hammaddeyi saptar.{" "}
                  <span className="font-semibold text-ink-primary">
                    Tek önlenen duruş, yıllık abonelik maliyetini karşılar.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Altta özet */}
          <div className="mt-8 rounded-2xl border-l-4 border-accent-signal bg-surface px-7 py-6">
            <p className="text-body font-medium text-ink-primary">
              Ortalama geri dönüş süresi: ilk 1–3 ay
            </p>
            <p className="mt-2 max-w-3xl text-small text-ink-secondary">
              Yukarıdaki üç senaryo bağımsız hesaplanmıştır. Gerçek işletmelerde
              bu tasarruflar birbirini tamamlar. Demo sırasında kendi
              operasyonunuza özel ROI hesabı yapıyoruz — rakamları birlikte
              çıkaralım.
            </p>
            <div className="mt-5">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-small font-medium text-ink-primary underline decoration-border-subtle underline-offset-4 hover:decoration-ink-primary transition-colors"
              >
                Kendi ROI&apos;nizi hesaplayalım →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* SSS */}
      <Section spacing="default" className="bg-surface">
        <Container width="default">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              SSS
            </p>
            <h2 className="text-h2">Sık sorulan sorular</h2>
          </div>
          <div className="divide-y divide-border-subtle">
            {faq.map((item) => (
              <div key={item.q} className="py-8">
                <p className="mb-3 text-h4 font-medium">{item.q}</p>
                <p className="text-body text-ink-secondary">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-border-subtle pt-8">
            <p className="text-body text-ink-secondary">
              Hâlâ sorunuz mu var?{" "}
              <Link
                href="/company/contact"
                className="text-ink-primary underline decoration-border-subtle underline-offset-4 transition-colors hover:decoration-ink-primary"
              >
                Ekibimizle iletişime geçin →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
