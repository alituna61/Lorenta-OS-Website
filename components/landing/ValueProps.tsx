import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const items = [
  {
    problem: "Ay sonu kapanışı 3–4 saat sürüyor, raporu uzman hazırlıyor.",
    value: "Doğal dille sorun, kapanış 15 dakikada hazır olsun.",
    metric: "3–4 saat → 15 dk",
  },
  {
    problem: "Saha temsilcisi her fiyat ve stok için muhasebeyi arıyor.",
    value: "Anlık sesli sorgulama, bilgiya anlık ulaşım.",
    metric: "Müşteri beklemiyor",
  },
  {
    problem: "Stok krizini ancak üretim durunca fark ediyorsunuz.",
    value: "Öngörücü stok yönetimi ile 7 gün önceden haber verir.",
    metric: "7 gün önceden",
  },
  {
    problem: "Tekrarlanan ve işlenmeyen ödemeler gözden kaçıyor.",
    value: "Finans Asistanı mutabakatta her uyumsuzluğu yakalar.",
    metric: "₺14.200 kayıp önlendi",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 sm:py-28">
      <Container width="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-signal">
              Tanıdık dertler, otonom çözümler
            </p>
            <h2 className="font-barlow text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
              ERP&apos;nizi her gün
              <br />
              görüyorsunuz. Artık
              <br />
              sizin yerinize çalışsın.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55">
              Yeni bir program
              öğrenmenize gerek yok, tekrar eden işleri asistanlara devredip
              son kararı siz verirsiniz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <Reveal
                key={item.metric}
                delay={i * 80}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/[0.02]"
              >
                <div>
                  <p className="text-sm text-white/45 line-through decoration-white/20 group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:decoration-black/20">
                    {item.problem}
                  </p>
                  <p className="mt-3 text-base font-medium text-white group-data-[inverted=true]/theme:text-black">
                    {item.value}
                  </p>
                </div>
                <p className="mt-5 inline-flex w-fit rounded-full bg-signal/15 px-3 py-1 text-xs font-semibold text-signal">
                  {item.metric}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
