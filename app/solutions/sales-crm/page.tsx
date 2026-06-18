import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Satış & CRM",
  description:
    "Müşteri takip otomasyonu, kanala duyarlı iletişim ve müşteri adayı zenginleştirme — genel şablonlar değil, kendi CRM geçmişinizle.",
};

export default function SalesCRMPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Satış & CRM"
      headline="Bağlamı bilen takip mesajları."
      subheadline="LorentaOS CRM geçmişinizi okur, her müşterinin hangi kanalı tercih ettiğini bilir ve son görüşmenize atıfta bulunan takip mesajları hazırlar — şablon değil."
      metrics={[
        { value: "+%38", label: "Takip tamamlanma oranı" },
        { value: "–%55", label: "CRM idari zamanı" },
        { value: "24 sa", label: "Ortalama aday yanıt süresi" },
        { value: "360°", label: "ERP + CRM’den müşteri bağlamı" },
      ]}
      features={[
        {
          title: "Bağlama duyarlı takip taslakları",
          description:
            "Her takip; müşterinin son etkileşimine, alım geçmişine ve açık konularına atıfta bulunur — marka dilinizde, gönderime hazır.",
        },
        {
          title: "Kanal tercihine göre yönlendirme",
          description:
            "Her müşterinin e-posta, telefon veya mesajlaşmadan hangisine daha iyi yanıt verdiğini bilir ve iletişimi buna göre hazırlar.",
        },
        {
          title: "Aday puanlama ve önceliklendirme",
          description:
            "Gelen adayları firma verisi, etkileşim geçmişi ve ERP alım potansiyeline göre puanlar — ekibiniz doğru hesaplara odaklanır.",
        },
        {
          title: "CRM kaydı zenginleştirme",
          description:
            "Kişi ve şirket kayıtlarını ERP verinizle otomatik zenginleştirir: alım geçmişi, ödeme davranışı ve ürün kullanımı.",
        },
        {
          title: "Satış hattı risk uyarısı",
          description:
            "Fırsat aşamalarındaki ilerlemeyi izler; sessizleşen veya kayıp sinyali veren hesapları önerilen müdahalelerle işaretler.",
        },
        {
          title: "Otomatik toplantı hazırlığı",
          description:
            "Planlanmış her görüşmeden önce bir brifing üretir: hesap geçmişi, son etkileşimler, açık konular ve önerilen konuşma noktaları.",
        },
      ]}
      callout="CRM’iniz her şeyi biliyor; ekibiniz hiçbirini okumuyor. LorentaOS bu boşluğu kapatır — her müşteri görüşmesi tüm geçmişin ışığında yapılır."
      relatedLinks={[
        { label: "Operasyon", href: "/solutions/operations" },
        { label: "Finans", href: "/solutions/finance" },
        { label: "AI Çalışanlar", href: "/product/agents" },
      ]}
    />
  );
}
