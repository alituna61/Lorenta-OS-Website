import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Müşteriler",
  description:
    "Türk işletmeleri LorentaOS’u nasıl kullanıyor — finans, tedarik zinciri ve operasyondan anonimleştirilmiş vaka çalışmaları.",
};

const caseStudies = [
  {
    industry: "Üretim · Finans",
    headline: "Ay sonu kapanışı: 6 gün → 4 saat.",
    context:
      "Logo Tiger kullanan orta ölçekli bir üretici. 4 kişilik finans ekibi, her ay sonu 3 ayrı tüzel kişilik arasında manuel mutabakata 6 gün harcıyordu.",
    outcome:
      "Finans Asistanı artık üç tüzel kişiliği gece boyunca mutabık kılıyor. İnsan incelemesi 90 dakika sürüyor. Ekip ilk kapanışını kurulumun ilk haftasında yaptı.",
    metrics: [
      { value: "4 saat", label: "Kapanış süresi" },
      { value: "%91", label: "Manuel iş elendi" },
      { value: "1. Hafta", label: "İlk otonom kapanış" },
    ],
  },
  {
    industry: "Dağıtım · Tedarik Zinciri",
    headline: "Stoksuz kalma %67 azaldı. Satınalma maliyeti %18 düştü.",
    context:
      "Logo'da 2.400+ SKU bulunan bir toptan dağıtıcı. Satınalma, sezgi ve haftalık raporlarla tek bir uzman tarafından yönetiliyordu. Sık stoksuz kalma, sık fazla stok.",
    outcome:
      "Tedarik Asistanı her SKU’yu gerçek zamanlı izliyor, dinamik yeniden sipariş noktasında sipariş taslağı hazırlıyor ve tek tıkla onaya yönlendiriyor. Uzman artık siparişleri değil istisnaları yönetiyor.",
    metrics: [
      { value: "–%67", label: "Stoksuz kalma olayı" },
      { value: "–%18", label: "Satınalma maliyeti" },
      { value: "2 dk", label: "Sipariş taslağından kuyruğa" },
    ],
  },
  {
    industry: "Hizmet · Operasyon",
    headline: "Sabah brifingi, 45 dakikalık günlük toplantının yerini aldı.",
    context:
      "Finans, proje teslimi ve satışta operasyonu olan profesyonel bir hizmet firması. Yönetim her sabah 4 sistemden durum derlemeye 45 dakika harcıyordu.",
    outcome:
      "LorentaOS brifingi canlı ERP ve CRM verisinden derliyor, 08:00’de teslim ediyor. Toplantı 10 dakikaya indi. İlk hafta, kaçırılacak üç konu öne çıkarıldı.",
    metrics: [
      { value: "08:00", label: "Brifing teslimi" },
      { value: "–35 dk", label: "Günlük toplantı süresi" },
      { value: "3", label: "1. haftada yakalanan konu" },
    ],
  },
];

export default function CustomersPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Müşteriler
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Konuşabileceğimiz sonuçlar.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              İlk pilotlarımızdan anonimleştirilmiş vaka çalışmaları.
            </p>
          </div>
        </Container>
      </Section>

      {/* Vaka çalışmaları */}
      <Section spacing="default">
        <Container width="wide">
          <div className="space-y-px">
            {caseStudies.map((cs) => (
              <div
                key={cs.headline}
                className="border border-border-subtle bg-canvas p-8 hover:bg-surface transition-colors"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
                  <div>
                    <p className="mb-3 font-mono text-micro text-ink-tertiary">
                      {cs.industry}
                    </p>
                    <h2 className="mb-4 text-h3 font-medium">{cs.headline}</h2>
                    <p className="mb-3 text-body text-ink-secondary">
                      <span className="font-medium text-ink-primary">
                        Durum —{" "}
                      </span>
                      {cs.context}
                    </p>
                    <p className="text-body text-ink-secondary">
                      <span className="font-medium text-ink-primary">
                        Sonuç —{" "}
                      </span>
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-px">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-surface px-6 py-4 border border-border-subtle"
                      >
                        <p className="text-h3 font-medium text-ink-primary">
                          {m.value}
                        </p>
                        <p className="font-mono text-micro text-ink-tertiary">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
