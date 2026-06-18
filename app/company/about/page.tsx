import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Lorenta OS, KOBİ'ler için finansal ve operasyonel verileri tek bir yerde yöneten AI-native işletim sistemidir.",
};

const values = [
  {
    title: "Aksiyon odaklı",
    description:
      "Rapor göstermek yeterli değil. Lorenta veriyi analiz eder, önerir ve aksiyonu başlatır.",
  },
  {
    title: "Kurumsal gerçeklik",
    description:
      "Gerçek operasyonların kaosunu biliyoruz. Ürünü sahadaki problemler için inşa ediyoruz.",
  },
  {
    title: "AI-native",
    description:
      "Lorenta’nın merkezinde çalışan dijital çalışanlar var.",
  },
  {
    title: "Güven ve kontrol",
    description:
      "Kritik kararlarda son onay her zaman insanda kalır.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section spacing="loose" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-8">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Şirket · Hakkımızda
            </p>
            <h1 className="max-w-[26ch] text-h2 sm:text-display">
              Şirketler için işletim sistemi inşa ediyoruz.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Lorenta OS, şirketinizin finansal ve operasyonel verilerini tek bir yerde birleştirir.
              Ne durumda olduğunuzu anlık bilmenizi sağlar ve bir sonraki adımı güvenle planlamanıza yardımcı olur.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container width="default">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Misyon
              </p>
              <h2 className="mb-6 text-h2">
                Türkiye’de işletme yönetimini yeniden tanımlamak.
              </h2>
              <p className="mb-6 text-body text-ink-secondary">
                Bugün çoğu şirket ERP kullanıyor, fakat kararlar hâlâ manuel alınıyor.
                Veriler var, ancak aksiyona dönüştüren akıllı katman eksik.
              </p>
            </div>
            
          </div>
        </Container>
      </Section>

      <Section spacing="default" className="bg-surface border-t border-border-subtle">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Nasıl çalışırız
            </p>
            <h2 className="text-h2">Neye inanıyoruz.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-surface p-8">
                <h3 className="mb-3 text-h4 font-medium">{v.title}</h3>
                <p className="text-body text-ink-secondary">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default" className="border-t border-border-subtle">
        <Container width="default">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Vizyon
            </p>
            <h2 className="text-h2">
              Türkiye KOBİ ekosisteminin standart işletim sistemi olmak.
            </h2>
            <p className="text-body text-ink-secondary">
              2030'a kadar Lorenta OS’u Türkiye’de KOBİ’ler için standart işletim sistemi haline getirmeyi hedefliyoruz.
            </p>
            <p className="text-body text-ink-secondary">
              Hedefimiz, her işletmeye dijital bir akıl katmanı kazandırmak.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="tight" className="border-t border-border-subtle">
        <Container width="wide">
          <div className="flex flex-wrap gap-3">
            <Button href="/company/careers" variant="secondary" size="md">
              Ekibe katıl →
            </Button>
            <Button href="/company/contact" variant="secondary" size="md">
              İletişime geç →
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
