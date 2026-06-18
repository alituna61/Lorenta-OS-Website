import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Entegrasyonlar",
  description:
    "Logo, Mikro, IAS, SAP B1 ve modern CRM’lerle yerel entegrasyon — REST, Özel SQL Köprüsü ve Event Bus tek mimaride.",
};

const connectorGroups = [
  {
    type: "REST / GraphQL",
    description: "Şema düzeyinde anlama ile tam çift yönlü okuma/yazma.",
    connectors: [
      { name: "Logo Tiger 3", note: "Tam API — finans, stok, İK" },
      { name: "SAP Business One", note: "REST + DI API, service layer" },
    ],
  },
  {
    type: "Özel SQL Köprüsü",
    description: "Güvenli sorgu katmanıyla salt-okunur erişim — şema değişikliği gerekmez.",
    connectors: [
      { name: "Logo", note: "MSSQL · salt-okunur köprü" },
      { name: "Mikro", note: "Firebird / MSSQL · salt-okunur köprü" },
    ],
  },
  {
    type: "Dosya & Kuyruk Köprüsü",
    description: "Eski sistemler için yapılandırılmış dosya değişimi ve mesaj kuyruklarıyla entegrasyon.",
    connectors: [
      { name: "IAS ERP", note: "CSV / XML dışa aktarım köprüsü" },
      { name: "Eski ERP’ler", note: "SFTP, FTP, paylaşımlı klasör" },
    ],
  },
  {
    type: "Event Bus",
    description: "Modern SaaS ve ticaret platformları için gerçek zamanlı olay akışı.",
    connectors: [
      { name: "Salesforce", note: "CRM · webhook + REST" },
      { name: "Microsoft 365", note: "Teams, Outlook, SharePoint" },
      { name: "Shopify / Ticimax", note: "E-ticaret · sipariş olayları" },
      { name: "Özel webhook", note: "Herhangi bir REST uç noktası" },
    ],
  },
];

const principles = [
  {
    title: "Şema-bilinçli, şema-bağımsız değil",
    description:
      "Entegrasyonlar her ERP’nin veri modelini alan düzeyinde anlar — yalnızca API yüzeyini değil. Böylece asistanlar yalnızca sözdizimsel geçerli değil, anlamsal olarak doğru kararlar verir.",
  },
  {
    title: "Kapalı döngü veri yönlendirme",
    description:
      "ERP verileriniz ağ sınırınızdan şifrelenmeden asla çıkmaz. Tüm entegrasyon trafiği uçtan uca şifreleme ve denetim kaydıyla kendi kurulum ortamınızdan yönlendirilir.",
  },
  {
    title: "Yazmadan önce oku",
    description:
      "Her yazma işleminden önce bir doğrulama okuması yapılır. Asistanlar kayıtları değiştirmeden önce mevcut durumu teyit eder; yarış koşulları ve mükerrer kayıtlar önlenir.",
  },
];

export default function ConnectorsPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Ürün · Entegrasyonlar
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Türk ERP’leri için kurulan tek yapay zekâ platformu.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              REST/GraphQL, Özel SQL Köprüsü, Dosya & Kuyruk ve Event Bus —
              Türk kurumsal pazarındaki her ERP’yi ve fazlasını kapsayan dört
              entegrasyon mimarisi.
            </p>
          </div>
        </Container>
      </Section>

      {/* Entegrasyon grupları */}
      <Section spacing="default">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Entegrasyon türleri
            </p>
            <h2 className="text-h2">Dört köprü mimarisi.</h2>
          </div>

          <div className="space-y-px">
            {connectorGroups.map((group) => (
              <div
                key={group.type}
                className="grid grid-cols-1 gap-8 border border-border-subtle bg-canvas p-8 hover:bg-surface md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="mb-2 text-small font-medium text-ink-primary">
                    {group.type}
                  </p>
                  <p className="text-small text-ink-secondary">
                    {group.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2">
                  {group.connectors.map((c) => (
                    <div key={c.name} className="bg-canvas p-4">
                      <p className="text-small font-medium text-ink-primary">
                        {c.name}
                      </p>
                      <p className="font-mono text-micro text-ink-tertiary">
                        {c.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* İlkeler */}
      <Section spacing="default" className="bg-surface border-t border-border-subtle">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Tasarım ilkeleri
            </p>
            <h2 className="text-h2">Farklı kuruldu.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-subtle md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="bg-surface p-8">
                <h3 className="mb-4 text-h4 font-medium">{p.title}</h3>
                <p className="text-body text-ink-secondary">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Navigasyon */}
      <Section spacing="tight" className="border-t border-border-subtle">
        <Container width="wide">
          <div className="flex flex-wrap gap-3">
            <Button href="/product/cognitive-core" variant="secondary" size="sm">
              Bilişsel Çekirdek →
            </Button>
            <Button href="/product/agents" variant="secondary" size="sm">
              AI Çalışanlar →
            </Button>
            <Button href="/product/security" variant="secondary" size="sm">
              Güvenlik →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
