import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Başlangıç",
    price: "₺3.000",
    period: "/ay’dan",
    blurb: "Tek ERP, tek departman ile hızlı pilot.",
    features: [
      "1 ERP entegrasyonu (Logo/Mikro)",
      "1 akıllı asistan",
      "Sabah brifingi & doğal dil sorgu",
      "KVKK uyumlu, Türkiye’de veri",
    ],
    cta: "Katıl",
  },
  {
    name: "Profesyonel",
    price: "₺8.500",
    period: "/ay’dan",
    blurb: "Çoklu departman, tam otomasyon.",
    features: [
      "Çoklu ERP + WhatsApp & e-posta",
      "4 asistanın tamamı (Finans, Tedarik, Operasyon, CRM)",
      "Son onay sizde — onay akışları & denetim izi",
      "Öncelikli destek",
    ],
    featured: true,
    cta: "Katıl",
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "teklif",
    blurb: "Çok şirketli yapılar ve özel entegrasyonlar.",
    features: [
      "Sınırsız entegrasyon & özel konnektörler",
      "Özel model yapılandırma",
      "Yerinde (on-prem) kurulum seçeneği",
      "Özel SLA & teknik hesap yöneticisi",
    ],
    cta: "Görüşme planla",
  },
];

export function PricingTeaser() {
  return (
    <section className="py-24 sm:py-28">
      <Container width="wide">


        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 80}
              className={`flex flex-col rounded-2xl border p-7 transition-colors ${
                plan.featured
                  ? "border-signal/60 bg-signal/[0.06]"
                  : "border-white/10 bg-white/[0.02] group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-barlow text-lg font-bold text-white group-data-[inverted=true]/theme:text-black">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-signal px-2.5 py-1 text-[11px] font-semibold text-white">
                    En popüler
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-barlow text-3xl font-extrabold text-white group-data-[inverted=true]/theme:text-black">
                  {plan.price}
                </span>
                <span className="text-sm text-white/45 group-data-[inverted=true]/theme:text-black/45">
                  {plan.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/55 group-data-[inverted=true]/theme:text-black/55">
                {plan.blurb}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2.5 text-sm text-white/70 group-data-[inverted=true]/theme:text-black/70"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                data-mascot-blink
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? "bg-signal text-white"
                    : "border border-white/20 text-white group-data-[inverted=true]/theme:border-black/20 group-data-[inverted=true]/theme:text-black"
                }`}
              >
                {plan.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
