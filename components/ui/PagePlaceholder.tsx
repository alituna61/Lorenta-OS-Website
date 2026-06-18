import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

type PagePlaceholderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  /** Sayfa içeriğinin yaklaşık yayın tarihi/teması (footer-stil meta). */
  status?: string;
  /** Birincil CTA — varsayılan: demo. */
  primaryCta?: { label: string; href: string };
  /** İkincil CTA — varsayılan: anasayfa. */
  secondaryCta?: { label: string; href: string } | null;
};

/**
 * Henüz yazılmamış sayfalar için tutarlı, marka-uyumlu iskele.
 * Faz 5-6 boyunca içerik geldikçe her sayfayı kendi kompozisyonuyla
 * değiştireceğiz; o zamana kadar bu component sayfayı temiz tutar.
 */
export function PagePlaceholder({
  eyebrow,
  title,
  description,
  status = "Yol haritasında",
  primaryCta = { label: "Katıl", href: "/demo" },
  secondaryCta = { label: "Ana sayfaya dön", href: "/" },
}: PagePlaceholderProps) {
  return (
    <Section spacing="loose">
      <Container width="default">
        <div className="space-y-8">
          <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
            {eyebrow ?? status}
          </p>

          <h1 className="max-w-[20ch] text-display">{title}</h1>

          <p className="max-w-2xl text-body text-ink-secondary">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
