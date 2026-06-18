import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "LorentaOS ekibine ulaşın",
};


export default function ContactPage() {
  return (
    <Section spacing="loose">
      <Container width="default">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left */}
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Şirket · İletişim
            </p>
            <h1 className="text-h2 sm:text-display">Her mesajı okuyoruz.</h1>
            <p className="text-body text-ink-secondary">
              Tek gelen kutusu, gerçek insanlar, iki iş günü içinde yanıt.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-h3 text-ink-primary underline decoration-border-subtle underline-offset-8 transition-colors hover:decoration-ink-primary"
            >
              {siteConfig.email}
            </a>
            <div className="flex flex-col gap-2 pt-4">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-micro text-ink-tertiary transition-colors hover:text-ink-primary"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
