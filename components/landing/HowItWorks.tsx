import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/landing/Reveal";

type Scenario = {
  persona: string;
  title: string;
  story: string;
  values: string[];
};

const scenarios: Scenario[] = [
  {
    persona: "Saha Satış Temsilcisi",
    title: "Müşteri kapısında anlık sorgu",
    story:
      "Temsilci, müşterinin tam ünvanını hatırlamadan sesli sorar. Sistem doğru cari hesabı bulur, geçen yılki ciroyu saniyede getirir; temsilci yerinde sipariş girer, müşteriye otomatik bildirim gider.",
    values: [
      "Muhasebeyi arama ihtiyacı sıfır",
      "Eksik firma adıyla bile doğru eşleşme",
      "Geçmiş ciroyla anında satış fırsatı",
    ],
  },
  {
    persona: "Genel Müdür",
    title: "Sabah brifingi & stratejik sorgu",
    story:
      "Beş dakikada şirketin nabzı sesli özet ve panoyla önünde. WhatsApp ve e-postadaki kritik talepler önceliklenir; geciken ödemenin arkasındaki bağlam (ör. fabrika taşınması) masaya gelir.",
    values: [
      "₺14.200’lik fazla ödeme önlendi",
      "Çok kanallı (ERP + WhatsApp + e-posta) analiz",
      "Kritik kararlarda son onay yöneticide",
    ],
  },
  {
    persona: "Depo / Lojistik Sorumlusu",
    title: "Öngörücü stok & sevkiyat yönetimi",
    story:
      "7 günlük üretim planını ve siparişleri analiz ederek hammadde krizini önceden tespit eder. Eksik kalemleri uygun tedarikçi ve fiyatla eşleştirir, taslak siparişi dakikalar içinde iletir.",
    values: [
      "Plansız hat duruşu yok — sıfır duruş",
      "Satınalmada tam otomasyon",
      "Yetki aşan talepler yöneticinin brifingine düşer",
    ],
  },
  {
    persona: "Muhasebe Sorumlusu",
    title: "Uzman gerektirmeden finansal kontrol",
    story:
      "ERP menülerini bilmeyen çalışan, doğal dille aynı analizi yapar. Ay sonu raporlama 3–4 saatten 15 dakikaya iner; tüm finansal kararlar denetim izine kaydedilir.",
    values: [
      "Raporlama 3–4 saat → 15 dakika",
      "Menü bilgisi gerektirmez",
      "TTK uyumlu kayıt zinciri",
    ],
  },
  {
    persona: "İhracat Yöneticisi",
    title: "Çok dilli müşteri iletişimi",
    story:
      "Yabancı müşteriye, tercüman maliyeti olmadan kendi dilinde (ör. Rusça) yanıt verilir. ERP’deki stok ve fiyat bilgisi yanıta otomatik entegre olur.",
    values: [
      "Dil bariyeri kalkar",
      "Yanıt süresi saatlerden dakikalara",
      "Hatalı teklif riski sıfır",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 sm:py-28">
      <Container width="wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-signal">
            Nasıl çalışır
          </p>
          <h2 className="font-barlow text-3xl font-extrabold tracking-tight text-white sm:text-4xl group-data-[inverted=true]/theme:text-black">
            Sahadan yönetim katına, gerçek kullanım anları
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55">
            Soyut vaatler değil; KOBİ’lerin her gün yaşadığı senaryolarda
            Lorenta OS’un yarattığı somut fark.
          </p>
        </Reveal>

        {/*
          📌 GÖRSEL/VİDEO PLACEHOLDER — Ürün demo videosu
          Önerilen içerik: 30–60 sn ekran kaydı. Bir kullanıcının sesli/yazılı
          sorgusu ("Bu ayki en çok satan 5 ürün") → Lorenta'nın ERP'den veriyi
          çekip pano + sesli yanıt üretmesi. Koyu arayüz, alt yazı Türkçe.
          Format: MP4/WebM, 16:9, en az 1280×720, otomatik oynat + sessiz + loop.
          Üretim: gerçek ürün ekran kaydı ya da Meshy/Claude ile mockup animasyon.
          Yerine koymak için aşağıdaki kutuyu <video> ile değiştirin.
        */}
        <Reveal
          delay={60}
          className="mx-auto mt-12 flex aspect-video w-full max-w-4xl items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] text-center group-data-[inverted=true]/theme:border-black/20 group-data-[inverted=true]/theme:bg-black/[0.02]"
        >
          <div className="px-6">
            <p className="font-barlow text-lg font-bold text-white/70 group-data-[inverted=true]/theme:text-black/70">
              ▶ Ürün Demo Videosu
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/40 group-data-[inverted=true]/theme:text-black/45">
              30–60 sn ekran kaydı: sesli sorgu → ERP yanıtı → sabah brifingi.
              16:9, otomatik oynat + sessiz + loop. (Bu kutuyu gerçek videoyla
              değiştirin.)
            </p>
          </div>
        </Reveal>

        {/* Senaryolar */}
        <ol className="mx-auto mt-16 max-w-3xl space-y-px">
          {scenarios.map((s, i) => (
            <Reveal
              key={s.title}
              as="li"
              delay={i * 60}
              className="group/item grid grid-cols-[auto_1fr] gap-5 border-t border-white/10 py-8 group-data-[inverted=true]/theme:border-black/10 sm:gap-8"
            >
              <span className="font-barlow text-2xl font-extrabold tabular-nums text-white/25 group-data-[inverted=true]/theme:text-black/25 sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-signal">
                  {s.persona}
                </p>
                <h3 className="mt-2 font-barlow text-xl font-bold text-white group-data-[inverted=true]/theme:text-black sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 group-data-[inverted=true]/theme:text-black/55 sm:text-base">
                  {s.story}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.values.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:text-black/70"
                    >
                      ✓ {v}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
