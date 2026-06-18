import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Şirket",
  description:
    "Kim olduğumuzu, hangi pozisyonlar için işe aldığımızı ve bize nasıl ulaşacağınızı öğrenin.",
};

const links = [
  {
    label: "Hakkımızda",
    href: "/company/about",
    description: "Lorenta OS'un vizyonunu, kurucu ekibini ve misyonunu keşfedin.",
  },
  {
    label: "Kariyer",
    href: "/company/careers",
    description: "Açık pozisyonları inceleyin ve ekibimize katılın.",
  },
  {
    label: "İletişim",
    href: "/company/contact",
    description: "Sorularınız, destek veya iş ortaklığı için bizimle iletişime geçin.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Section spacing="loose" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-4">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Şirket
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">Lorenta OS.</h1>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container width="default">
          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between py-8 transition-colors"
              >
                <div>
                  <p className="mb-1 text-h4 font-medium text-ink-primary">{l.label}</p>
                  <p className="text-body text-ink-secondary">{l.description}</p>
                </div>
                <span className="ml-6 shrink-0 font-mono text-micro text-ink-tertiary opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
