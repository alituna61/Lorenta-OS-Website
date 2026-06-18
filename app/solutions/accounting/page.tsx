// app/solutions/accounting/page.tsx
import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Muhasebe",
  description:
    "Fatura mutabakatı, otonom ay sonu kapanışı, banka/fiş eşleştirmesi ve otomatik yevmiye kayıtları.",
};

export default function AccountingPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Muhasebe"
      headline="Sıfır hatalı ay kapanışı."
      subheadline="Fatura ve cari hesapları günü gününe kapatın. Mutabakat süreçlerini otomatikleştirin, vergi takvimini asla kaçırmayın ve aylık raporlamayı dakikalara indirin."
      metrics={[
        { value: "15 dk", label: "Ortalama kapanış süresi" },
        { value: "Eksiksiz", label: "Denetim izi" },
        { value: "Sıfır", label: "Mutabakat hatası" },
        { value: "%100", label: "Vergi takvimi uyumu" },
      ]}
      features={[
        {
          title: "Otonom mutabakat",
          description:
            "Gelen e-faturaları, banka hareketlerini ve cari hesapları otomatik eşleştirir. Fark tespit ettiği 18 fatura gibi durumları size özetler.",
        },
        {
          title: "Vergi ve beyanname takibi",
          description:
            "KDV, Muhtasar ve diğer beyanname dönemleri için eksik belgeleri tarar ve son gün gelmeden önce hazırlıkları tamamlatır.",
        },
        {
          title: "Banka ve fiş eşleştirme",
          description:
            "Banka entegrasyonlarından gelen hareketleri ilgili muhasebe kodları ve açık faturalar ile otomatik kapatır.",
        },
        {
          title: "Otonom ay sonu kapanışı",
          description:
            "Amortisman kayıtları, kur değerlemeleri ve gider tahakkukları gibi dönem sonu işlemlerini tek tuşla taslak olarak hazırlar.",
        },
        {
          title: "Otomatik yevmiye kayıtları",
          description:
            "Standart operasyonel işlemler için (fatura kesimi, tahsilat vb.) muhasebe fişlerini ERP kurallarınıza uygun şekilde oluşturur.",
        },
        {
          title: "Aylık finansal raporlama",
          description:
            "Mizan, bilanço ve gelir tablosunu hatalardan arındırılmış bir şekilde, tüm destekleyici alt dökümlerle birlikte sunar.",
        },
      ]}
      callout="Muhasebe departmanınızı veri giriş yükünden kurtarın. Denetim süreçlerine her zaman hazır, sıfır hatalı kayıtların keyfini çıkarın."
      relatedLinks={[
        { label: "Finans", href: "/solutions/finance" },
        { label: "Bilişsel Çekirdek", href: "/product/cognitive-core" },
        { label: "Güvenlik", href: "/product/security" },
      ]}
    />
  );
}