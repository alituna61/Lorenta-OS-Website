import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

const fits = [
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: "0–500 çalışan şirket",
    desc: "Büyük kurumsal bütçe gerektirmeden kurumsal verimlilik.",
  },
  {
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </>
    ),
    title: "ERP ile ilk kez tanışıyorsunuz",
    desc: "Karmaşık programlar yerine, tüm iş süreçlerinizi tek bir platformdan yönetin.",
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    title: "Logo - Mikro kullanıyorsunuz",
    desc: "Mevcut ERP sisteminiz olduğu gibi çalışmaya devam eder. Lorenta sadece entegre olur.",
  },
  {
    icon: (
      <>
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-1.34-8.57" />
      </>
    ),
    title: "Eski ERP sisteminiz yetersiz",
    desc: "Eski sisteminiz hantal kaldı, daha hızlı ve modern bir altyapıya geçişin zamanı geldi.",
  },
];

const notFits = [
  "Yalnızca genel içerik üretimi veya chatbot arıyorsanız (ChatGPT daha uygun)",
  "Microsoft 365 ekosistemine tamamen kilitliyseniz (Copilot daha uygun)",
  "500+ çalışan, SAP merkezli büyük kurumsal yapıysanız (farklı bir çözüm konuşalım)",
];

export function TargetAudience() {
  return (
    <section className="py-20 md:py-28">
      <Container width="wide">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 group-data-[inverted=true]/theme:text-black/45">
              Bu ürün benim için mi?
            </p>
            <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
              Lorenta tam size göre eğer…
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fits.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 h-full group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/[0.02]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 text-signal">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {item.icon}
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="mb-3 text-sm font-semibold leading-snug text-white group-data-[inverted=true]/theme:text-black">
                    {item.title}
                  </p>
                  <p className="text-xs leading-relaxed text-white/50 group-data-[inverted=true]/theme:text-black/50">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.015] px-6 py-6 group-data-[inverted=true]/theme:border-black/8 group-data-[inverted=true]/theme:bg-black/[0.015]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/35 group-data-[inverted=true]/theme:text-black/40">
              Dürüst olmak gerekirse — şu durumlarda uygun olmayabilir:
            </p>
            <ul className="flex flex-col gap-2">
              {notFits.map((text) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-white/45 group-data-[inverted=true]/theme:text-black/45">
                  <span className="mt-0.5 flex-shrink-0 font-mono text-white/25 group-data-[inverted=true]/theme:text-black/25">
                    ·
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}