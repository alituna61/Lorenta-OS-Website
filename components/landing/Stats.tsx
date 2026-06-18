import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const stats = [
  { value: "15 dk", label: "Ay sonu kapanışı (önceden 3–4 saat)" },
  { value: "7 gün", label: "Stok krizini önceden tespit" },
  { value: "%0", label: "Halüsinasyon görme olasılığı" },
  { value: "7/24", label: "Çok kanallı otonom takip" },
];

export function Stats() {
  return (
    <section className="py-20">
      <Container width="wide">
        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-12 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/[0.02] sm:px-12">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-barlow text-4xl font-extrabold tracking-tight text-signal sm:text-5xl">
                  {s.value}
                </p>
                <p className="mx-auto mt-3 max-w-[12rem] text-sm text-white/55 group-data-[inverted=true]/theme:text-black/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
