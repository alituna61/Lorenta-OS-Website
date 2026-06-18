import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Tedarik Zinciri",
  description:
    "Öngörücü tüketim analizi, otonom satınalma taslakları ve tedarikçi puanlama — gerçek alım geçmişiniz üzerine kurulu.",
};

export default function SupplyChainPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Tedarik Zinciri"
      headline="Stok takip etmeyin. Otomatikleştirin."
      subheadline="Tüketim desenlerini izleyen, doğru miktarda satınalma siparişi taslağı hazırlayan ve bunu onay akışınıza yönlendiren otonom bir sistem — tamamı canlı ERP verinizden."
      metrics={[
        { value: "–%34", label: "Ortalama fazla stok" },
        { value: "–%67", label: "Stoksuz kalma olayı" },
        { value: "2 dk", label: "Sipariş taslağından onaya" },
        { value: "40+", label: "ERP / tedarikçi entegrasyonu" },
      ]}
      features={[
        {
          title: "Öngörücü tüketim analizi",
          description:
            "Geçmiş satış hızı, mevsimsellik ve üretim planlarını analiz ederek SKU bazında talebi haftalar öncesinden tahmin eder.",
        },
        {
          title: "Otonom sipariş taslağı",
          description:
            "Stok dinamik yeniden sipariş noktasının altına düştüğünde; miktar, tedarikçi ve teslim aralığıyla bir satınalma siparişi taslağı hazırlar — tek tıkla onaya hazır.",
        },
        {
          title: "Tedarikçi performans puanı",
          description:
            "Tedarikçileri teslim doğruluğu, temin süresi tutarlılığı ve fiyat istikrarına göre puanlar. Aksamaya yol açmadan zayıf tedarikçileri öne çıkarır.",
        },
        {
          title: "Çok lokasyonlu stok dengeleme",
          description:
            "Depolar arası stoğu izler ve dışarıdan sipariş vermeden önce depolar arası transfer başlatır — satınalma maliyetini düşürür.",
        },
        {
          title: "Son kullanma / raf ömrü yönetimi",
          description:
            "Ürün son kullanma tarihlerini takip eder; israfı en aza indirmek için erken tüketim yönlendirmesi veya indirim önerisi başlatır.",
        },
        {
          title: "Onay akışı entegrasyonu",
          description:
            "Hazırlanan siparişleri Logo, SAP veya e-posta/Teams üzerinden mevcut onay hiyerarşinize yönlendirir — süreç değişikliği gerekmez.",
        },
      ]}
      callout="Tedarik Asistanı stoğunuzu 7/24 izler. Siparişi hazırlar, tedarikçiyi seçer, onaya yönlendirir — siz sadece onaylarsınız."
      relatedLinks={[
        { label: "Finans", href: "/solutions/finance" },
        { label: "Operasyon", href: "/solutions/operations" },
        { label: "AI Çalışanlar", href: "/product/agents" },
      ]}
    />
  );
}
