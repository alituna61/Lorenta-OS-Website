// app/solutions/inventory/page.tsx
import type { Metadata } from "next";
import { SolutionLayout } from "@/components/sections/SolutionLayout";

export const metadata: Metadata = {
  title: "Stok & Depo",
  description:
    "Anlık sayım, depo hareket takibi, çok lokasyonlu stok dengeleme ve kritik stok seviyesi uyarıları.",
};

export default function InventoryPage() {
  return (
    <SolutionLayout
      eyebrow="Çözümler · Stok & Depo"
      headline="Stok takip etmeyin. Otomatikleştirin."
      subheadline="Depolarınızdaki her hareketi anlık takip edin. Sayım farklarını anında tespit edin, giriş/çıkış hareketlerini otonom kaydedin ve stok krizlerini oluşmadan önleyin."
      metrics={[
        { value: "–%34", label: "Fazla stok oranında azalma" },
        { value: "–%67", label: "Stoksuz kalma durumunda düşüş" },
        { value: "Anlık", label: "Sayım farkı tespiti" },
        { value: "7/24", label: "Depo hareket takibi" },
      ]}
      features={[
        {
          title: "Anlık seviye izleme",
          description:
            "Tüm depo lokasyonlarındaki stok seviyelerini canlı olarak izler, minimum stok seviyesinin altına inen ürünler için uyarır.",
        },
        {
          title: "Sayım farkı tespiti",
          description:
            "Sistemdeki stok ile fiziksel hareketleri karşılaştırarak sayım farklarını ve fire oranlarını otomatik raporlar.",
        },
        {
          title: "Otomatik hareket kaydı",
          description:
            "Giriş ve çıkış hareketlerini okutulduğu an sisteme işler, manuel veri girişi hatalarını ortadan kaldırır.",
        },
        {
          title: "Çok lokasyonlu dengeleme",
          description:
            "Şube veya depolar arası stok dengesizliklerini analiz eder, atıl stokları ihtiyaç olan lokasyonlara yönlendirir.",
        },
        {
          title: "Akıllı raf ömrü takibi",
          description:
            "Miadı dolmak üzere olan veya yavaş hareket eden ürünleri tespit ederek kampanya veya iade süreçlerini başlatmanızı önerir.",
        },
        {
          title: "Tedarik zinciri entegrasyonu",
          description:
            "Stok verilerini satınalma ve üretim departmanlarıyla anlık paylaşarak zincirleme gecikmelerin önüne geçer.",
        },
      ]}
      callout="Sayım farkları ve kayıp stoklar geçmişte kaldı. Stok Asistanı deponuzun 7/24 dijital bekçisidir."
      relatedLinks={[
        { label: "Tedarik", href: "/solutions/supply-chain" },
        { label: "Üretim", href: "/solutions/production" },
        { label: "Entegrasyonlar", href: "/product/connectors" },
      ]}
    />
  );
}