import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Finans",
  description:
    "Gözünü kırpmayan bir dijital denetçi — nakit akışı ve riskli alacak yönetimi, mükerrer ödeme tespiti ve 30/60/90 günlük projeksiyonlar, her gece ERP verinizden üretilir.",
};

export default function FinancePage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Finans"
      headline="Gözünü kırpmayan dijital denetçi."
      subheadline="Nakit akışı projeksiyonları, riskli alacak yönetimi, mükerrer ödeme tespiti ve tedarikçiye özel anomaliler — sorun olmadan önce önünüze gelir. Her içgörü doğrudan canlı ERP verinizden üretilir."
      metrics={[
        { value: "%91", label: "Manuel istisnalarda azalma" },
        { value: "Anlık", label: "Otomatik risk puanlaması" },
        { value: "30/60/90", label: "Günlük nakit projeksiyonu" },
        { value: "%100", label: "ERP-yerel — veri dışa aktarımı yok" },
      ]}
      features={[
        {
          title: "Nakit akışı projeksiyonları",
          description:
            "Alacak yaşlandırma, borç takvimi ve satış hattı verilerini birleştirerek 30/60/90 günlük nakit pozisyonu üretir — her gece güncellenir.",
        },
        {
          title: "Riskli alacak yönetimi",
          description:
            "Müşterilerin ödeme alışkanlıklarını analiz ederek gecikme risklerini önceden tespit eder ve risk limitlerini anlık olarak raporlar.",
        },
        {
          title: "Mükerrer ödeme tespiti",
          description:
            "Aynı tedarikçi, tutar veya fatura referansına sahip işlemleri, ayarlanabilir bir zaman aralığında onaylanmadan önce tespit edip işaretler.",
        },
        {
          title: "Birim maliyet sapması uyarıları",
          description:
            "Ürün bazında birim maliyetleri geçmiş ortalamalarla karşılaştırır. Tedarikçiye özel fiyat sapmasını ve anormal alım desenlerini tespit eder.",
        },
        {
          title: "Tedarikçi anomali puanı",
          description:
            "Her tedarikçiyi fatura doğruluğu, teslim süresi ve fiyat tutarlılığına göre puanlar. Yüksek riskli tedarikçileri otomatik olarak satınalmaya iletir.",
        },
        {
          title: "KVKK uyumlu denetim izi",
          description:
            "Her asistan işlemi zaman damgası, sorumlu kişi ve gerekçeyle kaydedilir. Uyum ve iç denetim için tam denetim izi hazırdır.",
        },
      ]}
      callout="Finans Asistanı uyumaz, deseni kaçırmaz ve yalnızca gerçekten insan onayı gerektiren stratejik kararları size iletir."
      relatedLinks={[
        { label: "Muhasebe", href: "/solutions/accounting" },
        { label: "CEO Asistanı", href: "/solutions/ceo" },
        { label: "Entegrasyonlar", href: "/product/connectors" },
      ]}
    />
  );
}