import Image from "next/image";
import { Container } from "@/components/ui/Container";

/*
  📌 LOGO DOSYALARI — public/logos/ altında
  Gerçek marka logolarını aşağıdaki dosya adlarıyla koyun:
  - public/logos/logo.svg         → Logo 
  - public/logos/mikro.svg        → Mikro
  - public/logos/sap.svg          → SAP
  - public/logos/whatsapp.svg     → WhatsApp Business
  - public/logos/efatura.svg      → e-Fatura
  - public/logos/excel.svg        → Excel
  - public/logos/outlook.svg      → Outlook
*/

// Gözüne büyük/küçük gelen logoları 'scale' değeriyle ayarlayabilirsin.
// Örnek: 'scale-90' %10 küçültür, 'scale-110' %10 büyütür. Normal boyutu 'scale-100'dür.
const integrations = [
  { name: "Logo",              file: "logo.svg",         w: 110, scale: "scale-80" },
  { name: "Mikro",             file: "mikro.svg",        w: 80,  scale: "scale-200" },
  { name: "SAP",               file: "sap.svg",          w: 56,  scale: "scale-90"  }, // Genelde kare olanlar büyük görünür, küçültmek iyi olabilir.
  { name: "WhatsApp Business", file: "whatsapp.svg",     w: 150, scale: "scale-120" },
  { name: "e-Fatura",          file: "efatura.svg",      w: 100, scale: "scale-140" },
  { name: "Excel",             file: "excel.svg",        w: 80,  scale: "scale-100" },
  { name: "Outlook",           file: "outlook.svg",      w: 100, scale: "scale-100" },
];

export function ErpStrip() {
  const doubled = [...integrations, ...integrations];

  return (
    <section className="border-y border-white/10 py-12 group-data-[inverted=true]/theme:border-black/10">
      <Container width="wide">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-white/40 group-data-[inverted=true]/theme:text-black/45">
          Kullandığınız sistemlerle ilk günden konuşur
        </p>
        <div className="relative overflow-hidden">
          {/* Kenar yumuşatma maskeleri */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent group-data-[inverted=true]/theme:from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent group-data-[inverted=true]/theme:from-white" />

          <div className="flex w-max animate-marquee items-center gap-14">
            {doubled.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center opacity-40 transition-opacity hover:opacity-100"
                title={item.name}
              >
                <Image
                  src={`/logos/${item.file}`}
                  alt={item.name}
                  width={item.w}
                  height={40} // 1. DEĞİŞİKLİK: Yüksekliği artırdık
                  className={`h-10 w-auto object-contain ${item.scale}`} // 2. DEĞİŞİKLİK: h-10 yaptık ve scale özelliğini ekledik
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}