import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Kaynaklar",
  description:
    "Rehberler, blog, sürüm notları ve karşılaştırmalar — LorentaOS’un teknik ve stratejik arka planı.",
};

const sections = [
  {
    label: "Blog",
    href: "/resources/blog",
    description:
      "Mimari kararlar, çıkarılan dersler ve bilişsel sistemlerin nereye gittiğine dair görüşler.",
    meta: "Saha notları",
  },
  {
    label: "Rehberler",
    href: "/resources/guides",
    description:
      "ERP entegrasyon desenleri, KVKK uyumu ve LorentaOS mimarisi üzerine uzun rehberler.",
    meta: "Teknik derinlik",
  },
  {
    label: "Karşılaştırma",
    href: "/resources/compare",
    description:
      "Copilot Studio, Glean ve Dust ile dürüst, kriter kriter karşılaştırmalar.",
    meta: "Karar desteği",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Kaynaklar
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Önce mimariyi okuyun. Sonra çalıştırın.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Bilişsel sistem mimarisi, ERP entegrasyon desenleri, KVKK uyumu ve
              LorentaOS token ekonomisinin arkasındaki hesap üzerine uzun
              rehberler.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container width="default">
          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-1 py-8 transition-colors sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex-1">
                  <p className="mb-1 text-h4 font-medium text-ink-primary">{s.label}</p>
                  <p className="max-w-xl text-body text-ink-secondary">{s.description}</p>
                </div>
                <div className="mt-2 flex items-center gap-4 sm:mt-0 sm:flex-col sm:items-end">
                  <span className="font-mono text-micro text-ink-tertiary">{s.meta}</span>
                  <span className="font-mono text-micro text-ink-primary opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
