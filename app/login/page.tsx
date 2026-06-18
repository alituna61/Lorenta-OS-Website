import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Giriş yap",
  description: "LorentaOS çalışma alanınıza giriş yapın.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Section spacing="loose">
      <Container width="default">
        <div className="space-y-6">
          <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
            Giriş yap
          </p>
          <h1 className="text-h2 sm:text-display">
            Yakında...
          </h1>

          <div className="pt-2">
            <Link
              href="/"
              className="font-mono text-micro text-ink-tertiary underline decoration-border-subtle underline-offset-4 transition-colors hover:decoration-ink-primary hover:text-ink-primary"
            >
              ← Ana sayfaya dön
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
