import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "AI Çalışanlar",
  description:
    "Departmanlara özel durum makinesi hata yönetimi, planla-uygula döngüleri ve son onay sizde güvenceleriyle çoklu asistan orkestrasyonu.",
};

const agents = [
  {
    name: "CEO Asistanı",
    tag: "ceo",
    description:
      "Sabah 08:00'de nakit durumu, kritik stoklar ve bekleyen işlemleri sentezleyerek günlük brifinginizi ve stratejik öngörülerinizi sunar.",
    capabilities: [
      "Tüm departmanların anlık röntgeni",
      "Nakit ve risk durumu özeti",
      "Kritik stok ve darboğaz uyarısı",
      "Bekleyen yüksek tutarlı işlem onayı",
    ],
  },
  {
    name: "Finans Asistanı",
    tag: "finans",
    description:
      "Defterlerinizi otomatik kapatır. İşlemleri mutabık kılar, riskli alacakları ve mükerrer ödemeleri tespit ederek nakit projeksiyonları üretir.",
    capabilities: [
      "Riskli alacak ve gecikme yönetimi",
      "Mükerrer ödeme ve anomali tespiti",
      "30/60/90 günlük nakit akışı tahmini",
      "Otomatik tedarikçi risk puanlaması",
    ],
  },
  {
    name: "Satış & CRM Asistanı",
    tag: "satis-crm",
    description:
      "Doğru müşteriye doğru zamanda ulaşır. Adayları niteler, CRM kayıtlarını günceller ve yüksek riskli satış süreçlerini öne çıkarır.",
    capabilities: [
      "Müşteri bazlı aday puanlama",
      "Bağlama duyarlı takip mesajları hazırlama",
      "Anlık cari ve ERP stok bilgisi sunma",
      "Riskli satış hattı uyarıları",
    ],
  },
  {
    name: "Tedarik Asistanı",
    tag: "tedarik-zinciri",
    description:
      "Stok seviyelerini öngörür, yeniden siparişleri başlatır, tedarikçi iletişimini yönetir ve ERP’nizi günceller — manuel müdahale olmadan.",
    capabilities: [
      "Gerçek zamanlı stok seviyesi takibi",
      "Dinamik yeniden sipariş noktası hesabı",
      "Tedarikçi ve güncel fiyat eşleştirme",
      "Otonom sipariş taslağı oluşturma",
    ],
  },
  {
    name: "Stok & Depo Asistanı",
    tag: "stok-depo",
    description:
      "Depolardaki her hareketi anlık takip eder. Sayım farklarını anında tespit eder ve çok lokasyonlu stok dengesizliklerini giderir.",
    capabilities: [
      "Anlık stok seviyesi ve lokasyon izleme",
      "Otomatik giriş/çıkış kayıt eşleştirmesi",
      "Sayım farkı ve fire oranı raporlama",
      "Depolar arası stok dengeleme önerileri",
    ],
  },
  {
    name: "Üretim Asistanı",
    tag: "uretim",
    description:
      "Üretim planını aktif iş emirleriyle senkronize eder. Kapasiteyi planlar ve olası hammadde darboğazlarını gecikmeye dönüşmeden işaretler.",
    capabilities: [
      "İş emri ve üretim planı senkronizasyonu",
      "Hammadde eksikliği ve tedarik öngörüsü",
      "Erken darboğaz ve gecikme tespiti",
      "Makine ve hat bazlı kapasite planlama",
    ],
  },
  {
    name: "Muhasebe Asistanı",
    tag: "muhasebe",
    description:
      "Fatura ve cari hesapları günü gününe kapatır. Mutabakat süreçlerini otomatikleştirip aylık raporlamayı saatlere indirir.",
    capabilities: [
      "Otomatik cari hesap mutabakatı",
      "Banka hareketleri ve fiş eşleştirme",
      "Otonom ay sonu kapanış hazırlığı",
      "Vergi ve beyanname takvimi hatırlatıcı",
    ],
  },
];

const reactSteps = [
  {
    step: "Düşün",
    description:
      "Asistan ERP’den bağlamı okur, RAG katmanından ilgili bilgiyi getirir ve mevcut durum üzerine akıl yürütür.",
  },
  {
    step: "Uygula",
    description:
      "Mevcut araç setinden yapılandırılmış bir aksiyon seçilir — oku, yaz, hesapla veya yükselt.",
  },
  {
    step: "Gözlemle",
    description:
      "Aksiyonun sonucu gözlemlenir ve bir sonraki düşünme adımı için bağlam penceresine geri beslenir.",
  },
  {
    step: "Değerlendir",
    description:
      "Durum makinesi görev hedefinin karşılanıp karşılanmadığını kontrol eder. Karşılanmadıysa döngü sürer. Bir eşik aşılırsa son onay için size iletilir.",
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="default" className="border-b border-border-subtle">
        <Container width="default">
          <div className="space-y-6">
            <p className="font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Ürün · AI Çalışanlar
            </p>
            <h1 className="max-w-[22ch] text-h2 sm:text-display">
              Planla, uygula, değerlendir, iyileştir.
            </h1>
            <p className="max-w-2xl text-body text-ink-secondary">
              Her LorentaOS asistanı, belirlenimsel bir durum makinesi içinde
              yapılandırılmış bir planla-uygula döngüsü çalıştırır. Gerektiğinde
              size iletir; geri kalan zamanda sessizce çalışır.
            </p>
          </div>
        </Container>
      </Section>

      {/* Planla-uygula döngüsü */}
      <Section spacing="default" className="bg-surface">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Çalışma modeli
            </p>
            <h2 className="text-h2">Planla-uygula döngüsü.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {reactSteps.map((s, i) => (
              <div key={s.step} className="bg-surface p-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-canvas">
                  <span className="font-mono text-micro text-ink-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-h4 font-medium">{s.step}</h3>
                <p className="text-body text-ink-secondary">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Asistan kadrosu */}
      <Section spacing="default">
        <Container width="wide">
          <div className="mb-12">
            <p className="mb-4 font-mono text-micro uppercase tracking-widest text-ink-tertiary">
              Asistan kadrosu
            </p>
            <h2 className="text-h2">Tüm departmanlar, tam kapsam.</h2>
          </div>
          <div className="space-y-px">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="grid grid-cols-1 gap-8 border border-border-subtle bg-canvas p-8 transition-colors hover:bg-surface md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="mb-1 font-mono text-micro text-ink-tertiary">
                    {agent.tag}
                  </p>
                  <h3 className="mb-3 text-h4 font-medium">{agent.name}</h3>
                  <p className="text-body text-ink-secondary">
                    {agent.description}
                  </p>
                </div>
                <ul className="space-y-3 md:pt-8">
                  {agent.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-micro text-accent-signal">
                        ✓
                      </span>
                      <span className="text-body text-ink-secondary">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Son onay sizde vurgusu */}
      <Section spacing="tight" className="border-t border-border-subtle bg-surface">
        <Container width="default">
          <div className="border-l-2 border-accent-signal pl-8">
            <p className="mb-2 text-h4 font-medium">
              Tasarım gereği: son onay sizde
            </p>
            <p className="max-w-2xl text-body text-ink-secondary">
              Her asistanın ayarlanabilir yükseltme eşikleri vardır. Bir karar
              tanımladığınız güven veya tutar sınırını aştığında, durum makinesi
              duraklar ve konuyu bir insan onaylayıcıya yönlendirir — yalnızca
              bildirimle değil, tam bağlamla.
            </p>
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
            <Button href="/product/connectors" variant="secondary" size="sm">
              Entegrasyonlar →
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