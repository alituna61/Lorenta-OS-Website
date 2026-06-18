import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const steps = [
  {
    num: "01",
    duration: "~10 dk",
    title: "ERP bağlantısını kurun",
    desc: "Logo veya Mikro kullanıcı adı ve şifrenizi girin. Biz geri kalanı hallederiz. Kurulum için IT ekibi veya teknik bilgi gerekmez.",
    tags: ["Logo Tiger", "Mikro", "SAP"],
  },
  {
    num: "02",
    duration: "~15 dk",
    title: "Ajan görevlerini yapılandırın",
    desc: "Hangi işlemleri otomatikleştirmek istediğinizi seçin: sabah brifingi, ay sonu kapanışı, stok alarmları, fatura takibi. Her birini tek tıkla açıp kapatabilirsiniz.",
    tags: ["Ay sonu kapanışı", "Sabah brifingi", "Stok alarmı", "Fatura takibi"],
  },
  {
    num: "03",
    duration: "Hemen",
    title: "Kullanmaya başlayın",
    desc: "Çalışanlarınız doğal Türkçe ile soru sorar, ERP verisi anında gelir. Kritik işlemler onayınıza sunulur, siz olmadan hiçbir şey gerçekleşmez.",
    tags: ["Türkçe doğal dil", "Son onay sizde", "Denetim izi"],
  },
];

export function Onboarding() {
  return (
    <section className="py-20 md:py-28">
      <Container width="wide">
        <Reveal>
          {/* Başlık */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-data-[inverted=true]/theme:text-black/45">
              Kurulum
            </p>
            <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
              30 dakikada çalışıyor
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/55 group-data-[inverted=true]/theme:text-black/55">
              IT ekibi, sunucu kurulumu veya uzun implementasyon süreci yok.
              Üç adımda hazır.
            </p>
          </div>

          {/* Adım listesi */}
          <div className="mx-auto max-w-3xl">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-[auto_1fr] gap-6 sm:gap-10 ${
                  i < steps.length - 1
                    ? "border-b border-white/10 pb-10 mb-10 group-data-[inverted=true]/theme:border-black/10"
                    : ""
                }`}
              >
                {/* Sol sütun: numara + süre */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <span className="font-barlow text-3xl font-extrabold text-white/20 group-data-[inverted=true]/theme:text-black/20 sm:text-4xl">
                    {step.num}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-white/10 group-data-[inverted=true]/theme:bg-black/10" />
                  )}
                </div>

                {/* Sağ sütun: içerik */}
                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-barlow text-xl font-bold text-white group-data-[inverted=true]/theme:text-black sm:text-2xl">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-signal/15 px-3 py-0.5 font-mono text-[11px] font-semibold text-signal">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55 sm:text-base">
                    {step.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:text-black/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alt CTA */}
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-white/45 group-data-[inverted=true]/theme:text-black/45">
              Kendi ERP inizi bağlamanın nasıl göründüğünü merak ediyor musunuz?
            </p>
            <Link
              href="/demo"
              data-mascot-blink
              className="rounded-full bg-signal px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Canlı kurulum demosu al →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
