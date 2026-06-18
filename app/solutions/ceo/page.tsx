// app/solutions/ceo/page.tsx
import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "CEO Asistanı",
  description:
    "Sabah brifingi, stratejik öngörüler, canlı ERP verisinden departmanlar arası risk tespiti ve 360° şirket görünürlüğü.",
};

export default function CeoPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · CEO Asistanı"
      headline="Şirketinizin operasyonel nabzı."
      subheadline="Her sabah saat 08:00'de şirketinizin tam röntgenini çekin. Nakit pozisyonunuz, kritik stoklar ve bekleyen işlemler doğrudan canlı ERP verinizden özetlenerek önünüze gelir."
      metrics={[
        { value: "08:00", label: "Günlük akıllı brifing" },
        { value: "–%78", label: "Kaçırılan stratejik uyarı" },
        { value: "360°", label: "Şirket görünürlüğü" },
        { value: "%100", label: "Karar onayı sizde" },
      ]}
      features={[
        {
          title: "Günün öncelikleri",
          description:
            "Tüm departmanlardan gelen verileri sentezleyerek, o gün çözülmesi gereken en kritik problemleri önceliklendirir.",
        },
        {
          title: "Nakit ve risk durumu",
          description:
            "Kritik eşiğin üzerindeki nakit pozisyonlarını, gecikmiş tahsilatları ve finansal riskleri anlık olarak raporlar.",
        },
        {
          title: "Bekleyen kritik işlemler",
          description:
            "Onay bekleyen yüksek tutarlı teklifler, sözleşmeler ve ödemeleri tek bir merkezden görüntülemenizi sağlar.",
        },
        {
          title: "Departmanlar arası risk tespiti",
          description:
            "Örneğin büyük bir teslimatla çakışan nakit sıkışıklığı gibi departmanlar arası bağlantılı riskleri otomatik öne çıkarır.",
        },
        {
          title: "Kritik stok uyarıları",
          description:
            "Üretimi veya satışı etkileyebilecek kritik stok azalmalarını veya teslim risklerini erkenden haber verir.",
        },
        {
          title: "Stratejik öngörüler",
          description:
            "Geçmiş ERP verilerini ve güncel trendleri analiz ederek büyüme ve maliyet optimizasyonu fırsatları sunar.",
        },
      ]}
      callout="Operasyonel karmaşanın içinde kaybolmayın. CEO Asistanı sizin için verileri analiz eder, aksiyonları hazırlar; son kararı vermek size kalır."
      relatedLinks={[
        { label: "Finans", href: "/solutions/finance" },
        { label: "Satış & CRM", href: "/solutions/sales-crm" },
        { label: "Platforma Genel Bakış", href: "/product" },
      ]}
    />
  );
}