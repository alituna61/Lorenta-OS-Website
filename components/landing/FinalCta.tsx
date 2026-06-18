import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

export function FinalCta() {
  return (
    <section className="pb-28 pt-4">
      <Container width="wide">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 px-6 py-16 text-center group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-zinc-900 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/15 blur-[120px]"
          />
          <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            İşletmenizi 30 dakikada görün
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Canlı demoda, kendi Logo / Mikro verinizle Lorenta OS’un
            ilk gününde ne yapabileceğini birlikte görelim.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              data-mascot-blink
              className="rounded-full bg-signal px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ücretsiz Katıl
            </Link>
            <Link
              href="/company/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              Bizimle iletişime geçin
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
