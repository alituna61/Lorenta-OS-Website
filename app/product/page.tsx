import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Ürün",
  description:
    "Sohbet botu değil — ERP'nize bağlanan bir yapay zeka sistemi. Dört bilişsel katman, yerel ERP entegrasyonu, kapalı döngü mimari.",
};

const layers = [
  {
    number: "01",
    name: "Temel Katman",
    subtitle: "Modelden bağımsız LLM çalışma ortamı",
    description:
      "Her görev için doğru akıl yürütme modelini seçen, sağlayıcıdan bağımsız bir model katmanı. Bağlam sıkıştırma, token bütçesi yönetimi ve yumuşak yedekleme yapar — tek bir model kesintisi operasyonunuzu durduramaz.",
    tags: ["GPT-4o", "Claude", "Gemini", "Token optimizasyonu"],
  },
  {
    number: "02",
    name: "Kişiselleştirme Katmanı",
    subtitle: "LoRA ince ayar + Hibrit RAG",
    description:
      "Kurumsal hafızanız, kodlanmış halde. LoRA adaptörleri iş kurallarınızı ve sektör dilinizi taşır. Hibrit RAG (yoğun + seyrek erişim) her kararı gerçek verinize dayandırır — uydurma varsayımlara değil.",
    tags: ["LoRA adaptörleri", "Yoğun erişim", "Seyrek erişim", "RAGAS değerlendirme"],
  },
  {
    number: "03",
    name: "Altyapı Katmanı",
    subtitle: "Yerel ERP entegrasyonları",
    description:
      "Logo Tiger, Mikro, SAP B1, IAS ve modern CRM’lere derin, çift yönlü köprüler. API sarmalayıcıları değil — her sistemin veri modelini şema düzeyinde anlayan, amaca özel entegrasyonlar.",
    tags: ["Logo Tiger", "Mikro", "SAP B1", "Event Bus"],
  },
  {
    number: "04",
    name: "Aksiyon Katmanı",
    subtitle: "Akıllı asistanlar + son onay sizde",
    description:
      "Planlayan, harekete geçen, değerlendiren ve iyileştiren asistanlar. Her görev, belirlenimsel hata yönetimi olan bir durum makinesinde çalışır. Kritik kararlar otomatik olarak bir insan onaylayıcıya iletilir — kazara değil, tasarım gereği.",
    tags: ["Planla-uygula döngüsü", "Durum makinesi", "Son onay sizde", "Çoklu asistan"],
  },
];

const subpages = [
  {
    label: "Bilişsel Çekirdek",
    href: "/product/cognitive-core",
    description: "Dört katmanlı akıl yürütme motoru",
  },
  {
    label: "Entegrasyonlar",
    href: "/product/connectors",
    description: "Yerel ERP entegrasyonları",
  },
  {
    label: "AI Çalışanlar",
    href: "/product/agents",
    description: "Otonom iş akışı yürütme",
  },
  {
    label: "Güvenlik",
    href: "/product/security",
    description: "KVKK, TTK, kapalı döngü veri",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="loose" className="border-b border-border-subtle">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Ürün
              </p>
              <h1 className="text-h2 sm:text-display">
                Sohbet botu değil. ERP&apos;nize bağlanan bir yapay zekâ.
              </h1>
              <p className="max-w-lg text-body text-ink-secondary">
                Birbirine bağlı dört katman — temel, kişiselleştirme, altyapı ve
                aksiyon — kurumsal hafızanızı otonom iş akışlarına dönüştürür.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/demo" size="lg">
                  Katıl
                </Button>
              </div>
            </div>

            {/* Alt sayfa navigasyon kartları */}
            <div className="grid grid-cols-2 gap-px bg-border-subtle">
              {subpages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group bg-canvas p-6 transition-colors hover:bg-surface"
                >
                  <p className="mb-1 text-small font-medium text-ink-primary">
                    {p.label}
                  </p>
                  <p className="font-mono text-micro text-ink-tertiary">
                    {p.description}
                  </p>
                  <p className="mt-4 font-mono text-micro text-ink-primary opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mimari: 4 katman */}
      <Section spacing="default">
        <Container width="wide">
          <div className="mb-16">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Mimari
            </p>
            <h2 className="max-w-lg text-h2">Dört katman, tek kapalı döngü.</h2>
          </div>

          {/* Katman diyagramı */}
          <div className="space-y-px">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className="grid grid-cols-1 gap-8 border border-border-subtle bg-canvas p-8 transition-colors hover:bg-surface md:grid-cols-[2fr_3fr]"
              >
                <div>
                  <p className="mb-2 font-mono text-micro text-ink-tertiary">
                    {layer.number}
                  </p>
                  <h3 className="mb-1 text-h4 font-medium">{layer.name}</h3>
                  <p className="font-mono text-micro text-ink-tertiary">
                    {layer.subtitle}
                  </p>
                </div>
                <div>
                  <p className="mb-6 text-body text-ink-secondary">
                    {layer.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-subtle px-3 py-1 font-mono text-micro text-ink-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Kapalı döngü vurgusu */}
      <Section spacing="tight" className="bg-surface">
        <Container width="default">
          <div className="flex flex-col gap-6 border-l-2 border-accent-signal pl-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-h4 font-medium">Kapalı döngü mimari</p>
              <p className="text-body text-ink-secondary">
                Tüm veri ağınızın içinde kalır. LorentaOS, ERP verinizi
                şifreleme ve sıkı onay kontrolleri olmadan asla dış model
                API’lerine yönlendirmez — varsayılan olarak KVKK ve TTK uyumlu.
              </p>
            </div>
            <Button href="/product/security" variant="secondary" size="md">
              Güvenlik detayları →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
