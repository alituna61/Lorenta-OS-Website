import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Güvenlik & Uyum",
  description:
    "Kapalı döngü mimari, KVKK & GDPR uyumu, EU AI Act hazırlığı, müşteri yönetimli anahtarlarla bekleyen veride şifreleme ve her katmanda RBAC.",
};

const pillars = [
  {
    title: "Kapalı döngü mimari",
    description:
      "Tüm gömmeler, vektör indeksleri ve ince ayarlı ağırlıklar sizin kontrol ettiğiniz altyapıda durur. Hiçbir veri, sınıflandırma incelemesi ve açık onay olmadan dış model API’lerine yönlendirilmez.",
    tags: ["Yerinde seçenek", "Hava boşluklu kurulum", "Veri ikametgâhı"],
  },
  {
    title: "KVKK & GDPR uyumu",
    description:
      "LorentaOS, Türk kurumsal veri hukuku için ilk günden tasarlandı. Her veri akışı sınıflandırılır, her işleme faaliyeti belgelenir ve ilgili kişi hakları tasarım gereği uygulanabilir.",
    tags: ["KVKK 12. Madde", "Veri minimizasyonu", "Onay yönetimi"],
  },
  {
    title: "EU AI Act hazırlığı",
    description:
      "2026’ya kadar tam EU AI Act uyumu (yüksek riskli kategori) hedefleniyor. Son onay sizde kapıları, karar açıklanabilirliği ve denetim izleri yapısaldır — sonradan eklenmiş özellikler değil.",
    tags: ["Son onay sizde", "Açıklanabilirlik", "Denetim izi", "2026 hedefi"],
  },
  {
    title: "Her yerde şifreleme",
    description:
      "Veri aktarımda (TLS 1.3) ve beklerken (AES-256) şifrelenir. Kurumsal planlarda müşteri yönetimli anahtar (CMK) desteği — anahtarlar sizde, bizde hiçbir şey kalmaz.",
    tags: ["TLS 1.3", "AES-256", "CMK desteği"],
  },
  {
    title: "Her katmanda RBAC",
    description:
      "Rol bazlı erişim kontrolü entegrasyon, asistan ve pano düzeyinde uygulanır. Her işlem, doğrulanabilir bir denetim kaydıyla bir sorumluya — insan veya asistan — atfedilir.",
    tags: ["Rol bazlı erişim", "Asistan atıfı", "Değiştirilemez kayıt"],
  },
  {
    title: "ISO 27001 (sürüyor)",
    description:
      "ISO 27001 sertifikasyonu yürütülüyor. İç kontroller eşlendi, boşluk analizi tamamlandı, dış denetim 2026 3. çeyreğe planlandı.",
    tags: ["ISO 27001", "2026 Ç3 hedefi", "ISMS kurulu"],
  },
];

const complianceMatrix = [
  { standard: "KVKK", status: "Uyumlu", note: "Tam veri işleme dokümantasyonu" },
  { standard: "GDPR", status: "Uyumlu", note: "28. Madde DPA hazır" },
  { standard: "EU AI Act", status: "Sürüyor", note: "Yüksek riskli kategori, 2026 hedefi" },
  { standard: "ISO 27001", status: "Sürüyor", note: "Denetim 2026 Ç3’e planlı" },
  { standard: "SOC 2 Type II", status: "Yol haritası", note: "Kurumsal plan ön koşulu" },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Ürün · Güvenlik
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Veriniz sizin kalır. Tasarım gereği.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Kapalı döngü mimari, KVKK ve GDPR uyumu, EU AI Act hazırlığı ve
              müşteri yönetimli anahtarlarla bekleyen veride şifreleme. LorentaOS’ta
              güvenlik yapısaldır — bir onay kutusu değil.
            </p>
          </div>
        </Container>
      </Section>

      {/* Güvenlik sütunları */}
      <Section spacing="default">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Mimari
            </p>
            <h2 className="text-h2">Altı güvenlik sütunu.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="bg-canvas p-8 hover:bg-surface transition-colors">
                <h3 className="mb-3 text-h4 font-medium">{p.title}</h3>
                <p className="mb-6 text-body text-ink-secondary">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-subtle px-3 py-1 font-mono text-micro text-ink-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Uyum matrisi */}
      <Section spacing="default" className="bg-surface border-t border-border-subtle">
        <Container width="default">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Uyum
            </p>
            <h2 className="text-h2">Güncel durum.</h2>
          </div>
          <div className="divide-y divide-border-subtle">
            {complianceMatrix.map((row) => (
              <div
                key={row.standard}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="text-small font-medium text-ink-primary w-28">{row.standard}</p>
                <span
                  className={`w-fit rounded-full px-3 py-1 font-mono text-micro ${
                    row.status === "Uyumlu"
                      ? "bg-accent-signal/20 text-ink-primary"
                      : row.status === "Sürüyor"
                      ? "bg-border-subtle text-ink-secondary"
                      : "bg-border-subtle text-ink-tertiary"
                  }`}
                >
                  {row.status}
                </span>
                <p className="text-small text-ink-secondary sm:text-right">{row.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Vurgu */}
      <Section spacing="tight" className="border-t border-border-subtle">
        <Container width="default">
          <div className="flex flex-col gap-6 border-l-2 border-accent-signal pl-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-h4 font-medium">
                Veri İşleme Sözleşmesi (DPA) mi gerekiyor?
              </p>
              <p className="text-body text-ink-secondary">
                Standart bir DPA (GDPR 28. Madde / KVKK eşdeğeri) tüm planlarda
                hazırdır. Kurumsal müşteriler özel bir DPA ve yerinde kurulum
                talep edebilir.
              </p>
            </div>
            <Button href="/company/contact" variant="secondary" size="md">
              DPA talep et →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
