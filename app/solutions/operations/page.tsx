import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Operasyon",
  description:
    "Canlı operasyonunuzdan derlenen bir sabah brifingi — nakit projeksiyonu, üretim darboğazları, stok eşikleri ve müşteri riski tek ekranda.",
};

export default function OperationsPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Operasyon"
      headline="Şirketinizin nabzı, her sabah önünüzde."
      subheadline="LorentaOS her sabah ERP ve CRM’inizden bir brifing derler: nakit akışı uyarıları, üretim gecikmeleri, kritik stok seviyeleri ve geciken alacaklar — önceliklendirilmiş halde."
      metrics={[
        { value: "08:00", label: "Günlük brifing teslimi" },
        { value: "–%78", label: "Kaçırılan üretim uyarısı" },
        { value: "Tek", label: "Tüm departmanlar için tek ekran" },
        { value: "Canlı", label: "ERP verisi — manuel çekme yok" },
      ]}
      features={[
        {
          title: "Sabah operasyon brifingi",
          description:
            "Canlı ERP ve CRM verisinden derlenen yapılandırılmış günlük özet: öncelikli riskler, aksiyon maddeleri ve metrikler — ilk toplantınızdan önce hazır.",
        },
        {
          title: "Üretim darboğazı tespiti",
          description:
            "İş emri ilerlemesini planla karşılaştırır. Kapasite kısıtlarını ve geciken işlemleri, teslimat aksamasına dönüşmeden işaretler.",
        },
        {
          title: "Departmanlar arası risk tespiti",
          description:
            "Finans, tedarik ve satış verilerini ilişkilendirerek bileşik riskleri öne çıkarır — örneğin büyük bir teslimatla çakışan nakit sıkışıklığı.",
        },
        {
          title: "SLA ihlali tahmini",
          description:
            "Mevcut üretim ve lojistik durumuna göre hangi müşteri siparişlerinin SLA’yı kaçırma riski taşıdığını, müdahale için yeterli süre kalırken tahmin eder.",
        },
        {
          title: "Kaynak ve vardiya planlama",
          description:
            "Sipariş birikimi ve üretim hedeflerine göre işgücü ve makine tahsisini vardiyalar arasında optimize eder.",
        },
        {
          title: "Aksiyon odaklı yönlendirme",
          description:
            "İşaretlenen her konu doğru sorumluya yönlendirilir — yalnızca bildirilmez; bağlam ve önerilen aksiyonla birlikte atanır.",
        },
      ]}
      callout="Durum güncellemesi derlemekle geçen sabah toplantıları bitiyor. LorentaOS brifingi hazırlar — ekibiniz sabahı aksiyona ayırır."
      relatedLinks={[
        { label: "Finans", href: "/solutions/finance" },
        { label: "Tedarik Zinciri", href: "/solutions/supply-chain" },
        { label: "Satış & CRM", href: "/solutions/sales-crm" },
      ]}
    />
  );
}
