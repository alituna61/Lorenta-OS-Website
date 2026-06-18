import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "LorentaOS'a katılın",
};

export default function CareersPage() {
  return (
    <Section className="flex min-h-[calc(100vh-120px)] items-center justify-center py-12">
      <Container width="narrow">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-ink-primary">
              LorentaOS'a Katılın
            </h1>
          </header>

          <div className="rounded-2xl border border-border-subtle bg-surface-secondary p-8 md:p-10">
            <h2 className="mb-6 text-xl font-semibold text-ink-primary">
              Bize yazarken şunları anlatın:
            </h2>
            <ul className="mb-8 space-y-4 text-ink-secondary">
              <li className="flex gap-4">
                <span className="font-mono text-ink-primary">01.</span>
                <span>Ne üzerinde çalışmak isterdiniz?</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-ink-primary">02.</span>
                <span>Gurur duyduğunuz bir işiniz?</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-ink-primary">03.</span>
                <span>LorentaOS’un mimarisinde yanlış yaptığımızı düşündüğünüz bir nokta?</span>
              </li>
            </ul>

            <a
              href="mailto:info@lorentaos.com?subject=LorentaOS'ta çalışmak istiyorum"
              className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-6 py-3 font-medium text-surface-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Başvurunuzu gönderin →
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}