/**
 * Site sabitleri — meta, navigasyon, sosyal linkler tek noktadan yönetilir.
 */

export const siteConfig = {
  name: "LorentaOS",
  domain: "lorentaos.com",
  url: "https://lorentaos.com",
  tagline: "Run your business on autopilot.",
  description:
    "The cognitive operating system for enterprises.",
  positioning: "The Cognitive Operating System for Enterprises",

  // Sosyal
  social: {
    instagram: "https://instagram.com/lorentaos", 
    x: "https://x.com/lorentaos",
    youtube: "https://youtube.com/@lorentaos",    
    linkedin: "https://www.linkedin.com/company/lorentaos",
  },

  // İletişim
  email: "info@lorentaos.com",
} as const;

export const mainNav = [
  { label: "Ürün", href: "/product" },
  { label: "Çözümler", href: "/solutions" },
  { label: "Kaynaklar", href: "/resources" },
] as const;

export const footerNav = {
  product: [
    { label: "Bilişsel Çekirdek", href: "/product/cognitive-core" },
    { label: "Entegrasyonlar", href: "/product/connectors" },
    { label: "AI Çalışanlar", href: "/product/agents" },
    { label: "Güvenlik", href: "/product/security" },
  ],
  solutions: [
    { label: "Finans", href: "/solutions/finance" },
    { label: "Tedarik Zinciri", href: "/solutions/supply-chain" },
    { label: "Operasyon", href: "/solutions/operations" },
    { label: "Satış & CRM", href: "/solutions/sales-crm" },
  ],
  resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Rehberler", href: "/resources/guides" },
    { label: "Karşılaştırma", href: "/resources/compare" },
  ],
  company: [
    { label: "Hakkımızda", href: "/company/about" },
    { label: "Müşteriler", href: "/customers" },
    { label: "Kariyer", href: "/company/careers" },
    { label: "İletişim", href: "/company/contact" },
  ],
  legal: [
    { label: "KVKK", href: "/legal/kvkk" },
    { label: "Gizlilik", href: "/legal/privacy" },
    { label: "Kullanım Şartları", href: "/legal/terms" },
    { label: "Çerezler", href: "/legal/cookies" },
  ],
} as const;
