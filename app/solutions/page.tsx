import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Çözümler",
  description:
    "Departmana özel bilişsel iş akışları — finans, tedarik zinciri, operasyon ve satış. Her biri genel bir model değil, canlı ERP’niz üzerinde çalışır.",
};

const solutions = [
  {
    slug: "ceo",
    href: "/solutions/ceo",
    label: "CEO Asistanı",
    headline: "Şirketinizin operasyonel nabzı.",
    description:
      "Sabah brifingi, stratejik öngörüler, canlı ERP verisinden departmanlar arası risk tespiti ve 360° şirket görünürlüğü.",
    metrics: ["08:00 günlük brifing", "–%78 kaçırılan uyarı"],
    colSpan: true,
  },
  {
    slug: "finance",
    href: "/solutions/finance",
    label: "Finans",
    headline: "Gözünü kırpmayan dijital denetçi.",
    description:
      "Nakit akışı ve riskli alacak yönetimi, mükerrer ödeme tespiti ve 30/60/90 günlük projeksiyonlar.",
    metrics: ["%91 daha az istisna", "Otomatik risk puanlaması"],
  },
  {
    slug: "sales-crm",
    href: "/solutions/sales-crm",
    label: "Satış & CRM",
    headline: "Bağlamı bilen takip mesajları.",
    description:
      "Akıllı teklif ve müşteri takibi, kanal tercihine göre yönlendirme, aday puanlama ve satış hattı risk uyarısı.",
    metrics: ["+%38 takip oranı", "–%55 CRM idari yük"],
  },
  {
    slug: "supply-chain",
    href: "/solutions/supply-chain",
    label: "Tedarik",
    headline: "Öngörücü satınalma ve tedarik.",
    description:
      "Öngörücü tüketim analizi, otonom sipariş taslağı, tedarikçi puanlama ve çok lokasyonlu akıllı onaylar.",
    metrics: ["Optimum satınalma", "Güvenilir tedarikçi ağı"],
  },
  {
    slug: "inventory",
    href: "/solutions/inventory",
    label: "Stok & Depo",
    headline: "Stok takip etmeyin. Otomatikleştirin.",
    description:
      "Anlık sayım, depo hareket takibi, çok lokasyonlu stok dengeleme ve kritik stok seviyesi uyarıları.",
    metrics: ["–%34 fazla stok", "–%67 stoksuz kalma"],
  },
  {
    slug: "production",
    href: "/solutions/production",
    label: "Üretim",
    headline: "İş emri ve plan senkronizasyonu.",
    description:
      "Üretim darboğazı tespiti, kapasite planlama ve makine/hat bazlı verimlilik asistanı ile kesintisiz üretim.",
    metrics: ["Erken darboğaz tespiti", "Anlık plan güncelleme"],
  },
  {
    slug: "accounting",
    href: "/solutions/accounting",
    label: "Muhasebe",
    headline: "Sıfır hatalı ay kapanışı.",
    description:
      "Fatura mutabakatı, otonom ay sonu kapanışı, banka/fiş eşleştirmesi ve otomatik yevmiye kayıtları.",
    metrics: ["15 dk kapanış", "Eksiksiz denetim izi"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Çözümler
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Tek platform. Her departman.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Finans anomali tespitinden otonom satınalmaya, her çözüm canlı
              ERP’niz üzerinde çalışır — aynı kapalı döngü güvenceleri ve KVKK
              uyumu yerleşik halde.
            </p>
          </div>
        </Container>
      </Section>

      {/* Çözüm ızgarası */}
      <Section spacing="default">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-px bg-border-subtle md:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className={`group flex flex-col bg-canvas p-10 transition-colors hover:bg-surface ${
                  s.colSpan ? "md:col-span-2" : ""
                }`}
              >
                <p className="mb-3 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
                  {s.label}
                </p>
                <h2 className="mb-4 text-h3 font-medium">{s.headline}</h2>
                <p className="mb-8 text-body text-ink-secondary">
                  {s.description}
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {s.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-border-subtle px-3 py-1 font-mono text-micro text-ink-tertiary"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-auto font-mono text-micro text-ink-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {s.label} →
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Çözümler arası vurgu */}
      <Section spacing="tight" className="border-t border-border-subtle bg-surface">
        <Container width="default">
          <div className="flex flex-col gap-6 border-l-2 border-accent-signal pl-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-h4 font-medium">
                Tüm çözümler tek veri katmanını paylaşır
              </p>
              <p className="text-body text-ink-secondary">
                Finans, tedarik zinciri, üretim ve CRM asistanları aynı
                Bilişsel Çekirdek ve ERP entegrasyonlarını kullanır.
                Departmanlar arası içgörüler — örneğin büyük bir teslimatla
                çakışan nakit sıkışıklığı — otomatik olarak öne çıkar.
              </p>
            </div>
            <Button href="/product" variant="secondary" size="md">
              Platformu gör →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}