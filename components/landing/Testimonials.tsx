import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  erp: string;
  employees: string;
  metric: {
    before: string;
    after: string;
    label: string;
  };
  personImage: string;
  companyLogo: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Ay sonu kapanışını finans asistanı hazırladı, ben son kontrolü yaptım, bitti. Eskiden bütün gün bununla uğraşırdık.",
    name: "Yiğit K.",
    role: "CFO",
    company: "Şirket Adı",
    erp: "Logo Tiger",
    employees: "85 çalışan",
    metric: {
      before: "4 saat",
      after: "22 dk",
      label: "Ay sonu kapanışı",
    },
    personImage: "/logos/yigit.webp",
    companyLogo: "/logos/yigit_co.webp",
  },
  {
    quote:
      "Tedarik uzmanım artık Pazartesi sabahlarını listeye değil, listeyi onaylamaya harcıyor. Farkı anlamak için bir hafta yetti.",
    name: "Zeynep A.",
    role: "Operasyon Direktörü",
    company: "Şirket Adı",
    erp: "Mikro",
    employees: "120 çalışan",
    metric: {
      before: "6 saat",
      after: "45 dk",
      label: "Haftalık satın alma süreci",
    },
    personImage: "/logos/zeynep.webp",
    companyLogo: "/logos/zeynep_co.webp",
  },
  {
    quote:
      "Ürün bitmeden üç gün önce uyarı geldi. Biz bunu genellikle müşteriden öğrenirdik. Artık öğrenmiyoruz.",
    name: "Cem Y.",
    role: "CEO",
    company: "Şirket Adı",
    erp: "Logo GO",
    employees: "40 çalışan",
    metric: {
      before: "Fark edilmedi",
      after: "₺140K",
      label: "Önlenen risk",
    },
    personImage: "/logos/cem.webp",
    companyLogo: "/logos/cem_co.webp",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28">
      <Container width="wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#B5FF4D]/60 group-data-[inverted=true]/theme:text-black/50">
            Pilot Kullanıcılardan
          </p>
          <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
            İlk 30 gün ne değişti?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              as="article"
              className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2.5 transition-all duration-300 hover:border-[#B5FF4D]/25 hover:bg-white/4 group-data-[inverted=true]/theme:border-black/8 group-data-[inverted=true]/theme:bg-white group-data-[inverted=true]/theme:shadow-sm group-data-[inverted=true]/theme:hover:border-black/15 group-data-[inverted=true]/theme:hover:shadow-md"
            >
              <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#B5FF4D] to-transparent opacity-25 transition-opacity duration-300 group-hover/card:opacity-70 group-data-[inverted=true]/theme:via-green-500" />

              <div className="flex items-start justify-between gap-4 px-6 pt-6">
                <div className="relative flex items-center justify-center rounded-xl border border-white/8 bg-linear-to-b from-white/4 to-transparent p-1 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 group-hover/card:border-[#B5FF4D]/30 group-hover/card:bg-white/6 group-data-[inverted=true]/theme:border-black/8 group-data-[inverted=true]/theme:from-black/3 group-data-[inverted=true]/theme:shadow-sm">
  
                  <Image
                    src={t.companyLogo}
                    alt={`${t.company} logosu`}
                    width={200}
                    height={80}
                    className="relative z-10 h-20 w-auto max-w-50 object-contain opacity-85 transition-opacity duration-300 group-hover/card:opacity-100"
                  />
                </div>

                <div className="flex flex-col items-end text-right">
                  <span className="mb-3 rounded-full bg-[#B5FF4D]/9 px-3 py-1 text-[11px] font-semibold text-[#B5FF4D] group-data-[inverted=true]/theme:bg-green-100 group-data-[inverted=true]/theme:text-green-700">
                    {t.erp}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-white/25 line-through group-data-[inverted=true]/theme:text-black/40">
                      {t.metric.before}
                    </span>
                    <span className="font-barlow text-2xl font-extrabold tracking-tight text-white group-data-[inverted=true]/theme:text-black">
                      {t.metric.after}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/30 group-data-[inverted=true]/theme:text-black/50">
                    {t.metric.label}
                  </p>
                </div>
              </div>

              <div className="mx-6 mt-6 h-px bg-white/5 group-data-[inverted=true]/theme:bg-black/10" />

              <p className="flex-1 px-6 pb-2 pt-5 text-[15px] font-light leading-[1.8] text-white/75 group-data-[inverted=true]/theme:text-black/80">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 px-6 pb-6 pt-5">
                <Image
                  src={t.personImage}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10 group-data-[inverted=true]/theme:ring-black/10"
                />
                <div>
                  <p className="text-sm font-semibold text-white group-data-[inverted=true]/theme:text-black">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-white/40 group-data-[inverted=true]/theme:text-black/50">
                    {t.role} · {t.employees}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}