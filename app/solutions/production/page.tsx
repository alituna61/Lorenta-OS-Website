// app/solutions/production/page.tsx
import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Üretim",
  description:
    "Üretim darboğazı tespiti, kapasite planlama ve makine/hat bazlı verimlilik asistanı ile kesintisiz üretim.",
};

export default function ProductionPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Üretim"
      headline="İş emri ve plan senkronizasyonu."
      subheadline="Üretim planını iş emirleriyle kusursuz eşleştirin. Hammadde eksikliklerini ve olası darboğazları önceden tespit ederek makine duruş sürelerini sıfıra indirin."
      metrics={[
        { value: "Erken", label: "Darboğaz tespiti" },
        { value: "Anlık", label: "Üretim planı güncelleme" },
        { value: "Sıfır", label: "Sürpriz duruş riski" },
        { value: "Tam", label: "Kapasite kullanımı" },
      ]}
      features={[
        {
          title: "İş emri senkronizasyonu",
          description:
            "Üretim planlarını aktif iş emirleriyle anlık eşleştirir, planlanan ve gerçekleşen üretim arasındaki farkları gösterir.",
        },
        {
          title: "Hammadde öngörüsü",
          description:
            "Önümüzdeki günlerin üretim planına bakarak oluşabilecek hammadde eksikliklerini kritik seviyeye gelmeden bildirir.",
        },
        {
          title: "Darboğaz tespiti",
          description:
            "Makine hızları, personel vardiyaları ve kalite onay süreçlerini analiz ederek planlanan tarihte yetişmeyecek iş emirlerini işaretler.",
        },
        {
          title: "Kalite kontrol raporlaması",
          description:
            "Kalite kontrol sonuçlarını anlık olarak sisteme yansıtır, fire oranları limitleri aştığında ilgili hat için uyarı üretir.",
        },
        {
          title: "Kapasite planlama",
          description:
            "Makine ve hat bazlı boşlukları tespit ederek acil siparişlerin sisteme en uygun maliyetle nasıl entegre edileceğini simüle eder.",
        },
        {
          title: "Dinamik rota optimizasyonu",
          description:
            "Arıza veya bakım durumlarında iş emirlerini otomatik olarak alternatif tezgahlara veya vardiyalara kaydırmayı önerir.",
        },
      ]}
      callout="Üretim hattınız hiç durmasın. Üretim Asistanı, hammadde deponuzdan kalite kontrole kadar tüm süreci senkronize tutar."
      relatedLinks={[
        { label: "Stok & Depo", href: "/solutions/inventory" },
        { label: "Tedarik", href: "/solutions/supply-chain" },
        { label: "AI Çalışanlar", href: "/product/agents" },
      ]}
    />
  );
}