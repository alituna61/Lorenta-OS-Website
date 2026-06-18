import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

type Val = boolean | null;

type ComparisonRow = {
  criterion: string;
  yerelErp: Val;
  genelAi: Val;
  lorenta: Val;
};

const rows: ComparisonRow[] = [
  {
    criterion: "Otonom Aksiyon Alma",
    yerelErp: false,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "Doğal Dille ERP'ye Yazma",
    yerelErp: false,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "Teknik Bilgi Gerekmez",
    yerelErp: false,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "KVKK Uyumu",
    yerelErp: null,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "Kurumsal Hafıza",
    yerelErp: null,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "Akıllı Denetim",
    yerelErp: false,
    genelAi: false,
    lorenta: true,
  },
  {
    criterion: "Otomatik Günlük Yönetici Brifingi",
    yerelErp: false,
    genelAi: false,
    lorenta: true,
  },
];

function Cell({ val, highlight }: { val: Val; highlight?: boolean }) {
  if (val === true)
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-base ${
          highlight
            ? "bg-white/10 text-white font-bold group-data-[inverted=true]/theme:bg-black/10 group-data-[inverted=true]/theme:text-black"
            : "bg-white/10 text-white/70 font-bold group-data-[inverted=true]/theme:bg-black/10 group-data-[inverted=true]/theme:text-black/70"
        }`}
      >
        ✓
      </span>
    );
  if (val === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 font-mono text-sm text-white/30 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/30">
        ✗
      </span>
    );
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 font-mono text-sm text-white/40 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/40">
      ◐
    </span>
  );
}

export function ComparisonTable() {
  return (
    <section className="py-20 md:py-28">
      <Container width="wide">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-data-[inverted=true]/theme:text-black/45">
              Neden Lorenta?
            </p>
            <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
              Diğerleri Veriyi Gösterir. Lorenta OS Aksiyona Dönüştürür.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/55 group-data-[inverted=true]/theme:text-black/55">
              Mevcut ERP'niz veriyi pasif olarak saklar, genel yapay zeka
              araçları ise kurumsal bağlamdan yoksundur. Lorenta OS, otonom
              aksiyon alarak ikisi arasındaki boşluğu dolduran tek katmandır.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 group-data-[inverted=true]/theme:border-black/10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 group-data-[inverted=true]/theme:border-black/10">
                  <th className="px-6 py-4 text-left font-mono text-[11px] uppercase tracking-widest text-white/40 group-data-[inverted=true]/theme:text-black/45 md:w-1/3">
                    Özellik
                  </th>
                  <th className="px-4 py-4 text-center font-medium text-white/50 group-data-[inverted=true]/theme:text-black/50">
                    <span className="block">Yerel ERP'ler</span>
                    <span className="mt-0.5 block font-mono text-[10px] font-normal text-white/30 group-data-[inverted=true]/theme:text-black/35">
                      Logo / Mikro
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center font-medium text-white/50 group-data-[inverted=true]/theme:text-black/50">
                    <span className="block">Genel AI</span>
                    <span className="mt-0.5 block font-mono text-[10px] font-normal text-white/30 group-data-[inverted=true]/theme:text-black/35">
                      ChatGPT vb.
                    </span>
                  </th>
                  <th className="relative px-4 py-4 text-center font-semibold text-signal">
                    <span className="relative z-10">Lorenta OS</span>
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-t-none bg-signal/[0.07]"
                    />
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.criterion}
                    className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] group-data-[inverted=true]/theme:border-black/5 group-data-[inverted=true]/theme:hover:bg-black/[0.03] ${
                      i === rows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-white/70 group-data-[inverted=true]/theme:text-black/70">
                      {row.criterion}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Cell val={row.yerelErp} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Cell val={row.genelAi} />
                    </td>
                    <td className="relative px-4 py-4 text-center">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-signal/[0.07]"
                      />
                      <span className="relative z-10">
                        <Cell val={row.lorenta} highlight />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] text-white/40 group-data-[inverted=true]/theme:text-black/45">
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white group-data-[inverted=true]/theme:bg-black/10 group-data-[inverted=true]/theme:text-black text-xs font-bold">✓</span>
                Tam destek
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/40 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/40 text-xs">◐</span>
                Kısmi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/30 group-data-[inverted=true]/theme:bg-black/5 group-data-[inverted=true]/theme:text-black/30 text-xs">✗</span>
                Mevcut değil
              </span>
            </div>
            <Link
              href="/resources/compare"
              className="text-xs font-medium text-signal underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Tüm karşılaştırmayı gör →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}