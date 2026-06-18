import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Rehberler",
  description:
    "ERP entegrasyonu, KVKK uyumu ve LorentaOS mimarisi üzerine uzun rehberler.",
};

const guides = [
  {
    title: "LorentaOS Mimari Genel Bakış",
    tag: "Teknik",
    readTime: "12 dk okuma",
    description:
      "Dört bilişsel katmana, durum makinesi orkestrasyon modeline ve kapalı döngü veri mimarisinin ERP verinizi ağ sınırınızın içinde nasıl tuttuğuna derin bir bakış.",
  },
  {
    title: "Logo Tiger 3’ü LorentaOS’a Bağlamak",
    tag: "Entegrasyon",
    readTime: "8 dk okuma",
    description:
      "Adım adım entegrasyon kurulumu, gerekli API izinleri, webhook yapılandırması ve LorentaOS’un Logo şemasını anlamak için kullandığı veri modeli eşlemesi.",
  },
  {
    title: "AI Sistemleri için KVKK Uyum Rehberi",
    tag: "Uyum",
    readTime: "15 dk okuma",
    description:
      "Türk işletmelerinin çalışan veya müşteri kişisel verisini işleyen herhangi bir AI sistemini kurmadan önce belgelemesi, yapılandırması ve denetlemesi gerekenler.",
  },
  {
    title: "Otonom Finansal Kapanış: Bir Uygulama Kılavuzu",
    tag: "Operasyon",
    readTime: "10 dk okuma",
    description:
      "Finans Asistanı’nı dönem sonu iş akışınız için yapılandırma: mutabakat kuralları, istisna eşikleri, onay zincirleri ve geri alma prosedürleri.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-4">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Kaynaklar · Rehberler
            </p>
            <h1 className="text-h2 sm:text-display">Teknik derinlik.</h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              ERP entegrasyon desenleri, KVKK uyumu ve LorentaOS mimarisi üzerine
              uzun rehberler. Çok yakında yayımlanacak.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container width="default">
          <div className="divide-y divide-border-subtle">
            {guides.map((g) => (
              <div key={g.title} className="py-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-border-subtle px-3 py-1 font-mono text-micro text-ink-tertiary">
                    {g.tag}
                  </span>
                  <span className="font-mono text-micro text-ink-tertiary">
                    {g.readTime}
                  </span>
                  <span className="font-mono text-micro text-ink-tertiary">
                    · Çok yakında
                  </span>
                </div>
                <h2 className="mb-2 text-h4 font-medium">{g.title}</h2>
                <p className="text-body text-ink-secondary">{g.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
