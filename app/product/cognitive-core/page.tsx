import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Bilişsel Çekirdek",
  description:
    "Hibrit RAG, ince ayarlı marka dili, asistan orkestrasyonu ve sürekli değerlendirme — LorentaOS’un dört katmanlı bilişsel çekirdeği.",
};

const layers = [
  {
    number: "01",
    name: "Temel Katman",
    tag: "Model çalışma ortamı",
    color: "border-border-subtle",
    points: [
      "Sağlayıcıdan bağımsız: GPT-4o, Claude 3.5, Gemini 1.5 Pro",
      "Karmaşıklık ve maliyete göre göreve özel model seçimi",
      "Uzun ERP oturumları için bağlam penceresi sıkıştırma",
      "Otomatik yedeklemeli token bütçesi yöneticisi",
    ],
  },
  {
    number: "02",
    name: "Kişiselleştirme Katmanı",
    tag: "LoRA + RAG",
    color: "border-accent-signal/40",
    points: [
      "Şirketinizin operasyonel verisiyle ince ayarlı LoRA adaptörleri",
      "Hibrit RAG: yoğun gömme + BM25 seyrek erişim",
      "Her erişim döngüsünde otomatik RAGAS değerlendirmesi",
      "Marka dili ve sektör sözlüğü hizalaması",
    ],
  },
  {
    number: "03",
    name: "Altyapı Katmanı",
    tag: "ERP entegrasyonları",
    color: "border-border-subtle",
    points: [
      "Logo Tiger 3 ve SAP B1 için REST/GraphQL",
      "Logo ve Mikro için salt-okunur Özel SQL Köprüsü",
      "IAS ve eski sistemler için Dosya & Kuyruk Köprüsü",
      "CRM ve e-ticaret platformları için Event Bus",
    ],
  },
  {
    number: "04",
    name: "Aksiyon Katmanı",
    tag: "Orkestrasyon",
    color: "border-border-subtle",
    points: [
      "Planla-uygula yapılandırılmış yürütme döngüsü",
      "Bağımlılık takipli hiyerarşik görev ayrıştırma",
      "Hata yönetimi ve tekrar için belirlenimsel durum makinesi",
      "Ayarlanabilir karar eşiklerinde son onay sizde",
    ],
  },
];

const evals = [
  { metric: "Veriye dayanma", description: "Yanıt gerçekten verinize mi dayanıyor?" },
  { metric: "Yanıt ilgililiği", description: "Çıktı soru amacına uyuyor mu?" },
  { metric: "Bağlam isabeti", description: "Getirilen bağlam doğru muydu?" },
  { metric: "Bağlam kapsamı", description: "Erişim kritik bilgileri kaçırdı mı?" },
];

export default function CognitiveCorePage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Ürün · Bilişsel Çekirdek
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Dört bilişsel katman.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Temel, Kişiselleştirme, Altyapı ve Aksiyon — son onay sizde
              güvenceleri yerleşik bir durum makinesiyle orkestre edilir. Her
              karar veriye dayalı, değerlendirilmiş ve izlenebilirdir.
            </p>
          </div>
        </Container>
      </Section>

      {/* Katmanlar */}
      <Section spacing="default">
        <Container width="wide">
          <div className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.number}
                className={`grid grid-cols-1 gap-8 border-l-2 bg-surface p-8 md:grid-cols-[1fr_2fr] ${layer.color}`}
              >
                <div>
                  <p className="mb-1 font-mono text-micro text-ink-tertiary">
                    {layer.number} · {layer.tag}
                  </p>
                  <h2 className="text-h4 font-medium">{layer.name}</h2>
                </div>
                <ul className="space-y-3">
                  {layer.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-tertiary" />
                      <span className="text-body text-ink-secondary">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* RAGAS değerlendirme */}
      <Section spacing="tight" className="bg-surface border-t border-border-subtle">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                Sürekli değerlendirme
              </p>
              <h2 className="mb-4 text-h2">RAGAS kalite döngüsü</h2>
              <p className="text-body text-ink-secondary">
                Her erişim ve üretim adımı, RAGAS çerçevesiyle gerçek zamanlı
                değerlendirilir. Kalite metrikleri Büyüme panosunda gösterilir —
                böylece sistemin tolerans içinde çalışıp çalışmadığını her zaman
                bilirsiniz.
              </p>
            </div>
            <div className="space-y-px">
              {evals.map((e) => (
                <div
                  key={e.metric}
                  className="flex items-center justify-between border border-border-subtle bg-canvas px-6 py-4"
                >
                  <p className="text-small font-medium text-ink-primary">
                    {e.metric}
                  </p>
                  <p className="max-w-xs text-right text-small text-ink-secondary">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Diğer alt sayfalara navigasyon */}
      <Section spacing="tight" className="border-t border-border-subtle">
        <Container width="wide">
          <div className="flex flex-wrap gap-3">
            <Button href="/product/connectors" variant="secondary" size="sm">
              Entegrasyonlar →
            </Button>
            <Button href="/product/agents" variant="secondary" size="sm">
              AI Çalışanlar →
            </Button>
            <Button href="/product/security" variant="secondary" size="sm">
              Güvenlik →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
