import { Container } from "@/components/ui/Container";

/**
 * Güven sinyalleri — KOBİ kitlesinin en büyük endişesi veri gizliliği
 * (TÜİK 2025: %61,8 veri gizliliği nedeniyle AI kullanmıyor). Bu yüzden
 * KVKK / Türkiye'de veri / TTK denetim izi rozetleri görünür bir bantta.
 */
const badges = [
  {
    label: "KVKK Uyumlu",
    sub: "Kişisel veri mevzuatına tam uyum",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
  },
  {
    label: "Veriler Türkiye’de",
    sub: "Sunucularınız yurt içinde, kapalı döngüde",
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </>
    ),
  },
  {
    label: "TTK Denetim İzi",
    sub: "Her işlem kim-ne-zaman olarak kayıtlı",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
];

export function TrustBadges() {
  return (
    <section className="py-8">
      <Container width="wide">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-black/[0.02]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/15 text-signal">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {b.icon}
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white group-data-[inverted=true]/theme:text-black">
                  {b.label}
                </p>
                <p className="text-xs text-white/50 group-data-[inverted=true]/theme:text-black/55">
                  {b.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
