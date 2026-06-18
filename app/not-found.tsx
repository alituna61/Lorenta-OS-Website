import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section spacing="loose">
      <Container width="default">
        <div className="space-y-8">
          <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
            404
          </p>
          <h1 className="text-h2 sm:text-display">Sayfa bulunamadı.</h1>
          <p className="max-w-lg text-body text-ink-secondary">
            Takip ettiğiniz bağlantı mevcut değil — ya da henüz yayımlanmadı.
            Bunun bir hata olduğunu düşünüyorsanız{" "}
            <a
              href="mailto:info@lorentaos.com"
              className="text-ink-primary underline decoration-border-subtle underline-offset-4 transition-colors hover:decoration-ink-primary"
            >
              info@lorentaos.com
            </a>{" "}
            adresine yazın, hemen çözelim.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/" size="lg">
              Ana sayfaya dön
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              Katıl →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
