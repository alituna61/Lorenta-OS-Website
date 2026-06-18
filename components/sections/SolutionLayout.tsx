import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export type SolutionFeature = {
  title: string;
  description: string;
};

export type SolutionMetric = {
  value: string;
  label: string;
};

export type SolutionLayoutProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  features: SolutionFeature[];
  metrics: SolutionMetric[];
  /** Pull-quote or one-sentence proof point shown in an accent callout */
  callout: string;
  relatedLinks?: { label: string; href: string }[];
};

export function SolutionLayout({
  eyebrow,
  headline,
  subheadline,
  features,
  metrics,
  callout,
  relatedLinks,
}: SolutionLayoutProps) {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              {eyebrow}
            </p>
            <h1 className="max-w-[24ch] text-h2 sm:text-display">{headline}</h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/demo" size="lg">
                Katıl
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics strip */}
      <div className="bg-ink-primary">
        <Container width="wide">
          <div className="grid grid-cols-2 divide-x divide-surface/10 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="px-8 py-10">
                <p className="mb-1 text-h2 font-medium text-surface">
                  {m.value}
                </p>
                <p className="font-mono text-micro text-ink-tertiary">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Features */}
      <Section spacing="default">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Neler yapar
            </p>
            <h2 className="text-h2">Yetenekler</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-canvas p-8 hover:bg-surface transition-colors">
                <h3 className="mb-3 text-h4 font-medium">{f.title}</h3>
                <p className="text-body text-ink-secondary">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Callout */}
      <Section spacing="tight" className="bg-surface border-t border-border-subtle">
        <Container width="default">
          <div className="border-l-2 border-accent-signal pl-8">
            <p className="text-h3 text-ink-primary">{callout}</p>
          </div>
        </Container>
      </Section>

      {/* Related solutions */}
      {relatedLinks && relatedLinks.length > 0 && (
        <Section spacing="tight" className="border-t border-border-subtle">
          <Container width="wide">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              İlgili çözümler
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((l) => (
                <Button key={l.href} href={l.href} variant="secondary" size="sm">
                  {l.label} →
                </Button>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
