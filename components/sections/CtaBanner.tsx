import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <Section spacing="default" className="bg-ink-primary">
      <Container width="default">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
            Hemen başlayın
          </p>
          <h2 className="max-w-[22ch] text-h2 text-surface sm:text-display">
            İşletmenizi 30 dakikada görün
          </h2>
          <p className="max-w-lg text-body text-surface/60">
            Logo ve Mikro kullanan ekipler ay sonu kapanışını saatlere
            indiriyor, tekrar eden işleri akıllı asistanlara devrediyor. Son
            kararı her zaman siz verirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/demo" size="lg" variant="signal">
              Katıl
            </Button>
            <Button href="/product" size="lg" variant="ghost-inverse">
              Platformu keşfedin →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
