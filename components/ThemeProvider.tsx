"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Tema (dark ↔ light invert) bağlamı.
 *
 * Coming Soon sayfasındaki "tıkla → renkleri çapraz geçişle değiştir"
 * mekanizmasını tüm site genelinde yaşatır. Varsayılan: dark (inverted=false).
 *
 * DOM tarafında tek bir kök sarmalayıcıya `data-inverted` yazılır; tüm
 * bölümler `group-data-[inverted=true]/theme:` Tailwind varyantlarıyla
 * buna tepki verir — yani sunucu bileşenleri context'e bağlanmak zorunda
 * kalmadan temayı takip edebilir.
 */
type ThemeContextValue = {
  inverted: boolean;
  toggle: () => void;
  pressing: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme, <ThemeProvider> içinde kullanılmalıdır.");
  }
  return ctx;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Varsayılan: LIGHT (inverted=true). Hedef kitle 40-55 yaş KOBİ yöneticisi;
  // açık tema daha okunaklı ve kurumsal hissettiriyor. Dark, opt-in.
  const [inverted, setInverted] = useState(true);
  const [pressing, setPressing] = useState(false);
  // Ref ile double-fire koruması — React Strict Mode'da setState updater
  // içindeki side effect'ler iki kez çalışır; timeout'ları updater'dan çıkarıp
  // ref ile guard ediyoruz.
  const pressingRef = useRef(false);

  // İlk yüklemede kullanıcının önceki tercihini geri yükle.
  // "lorenta-theme-v2" anahtarı kullanılır; eski "lorenta-theme" anahtarında
  // kayıtlı dark tercihleri yok sayılır (v2 ile varsayılan light'a sıfırlanır).
  useEffect(() => {
    let saved: string | null = null;
    try {
      window.localStorage.removeItem("lorenta-theme"); // eski dark-default dönemini temizle
      saved = window.localStorage.getItem("lorenta-theme-v2");
    } catch {
      /* localStorage erişilemezse sessizce light kal */
    }
    if (saved !== "dark") return;
    const id = requestAnimationFrame(() => setInverted(false));
    return () => cancelAnimationFrame(id);
  }, []);

  // Coming Soon "el sıkışma" jesti:
  //   0ms   bas → tetikleyen öğe hafif büyür
  //   120ms inverted değişir → tüm renkler çapraz geçiş yapar
  //   280ms bırak → öğe eski boyutuna döner
  //
  // setTimeout'lar doğrudan callback içinde çağrılır (updater içinde değil),
  // böylece React Strict Mode'daki çift-render double-fire yaratmaz.
  const toggle = useCallback(() => {
    if (pressingRef.current) return; // animasyon sürerken hızlı tıklamaları yok say
    pressingRef.current = true;
    setPressing(true);

    window.setTimeout(() => {
      setInverted((v) => {
        const next = !v;
        try {
          window.localStorage.setItem(
            "lorenta-theme-v2",
            next ? "light" : "dark"
          );
        } catch {
          /* yok say */
        }
        return next;
      });
    }, 120);

    window.setTimeout(() => {
      pressingRef.current = false;
      setPressing(false);
    }, 280);
  }, []);

  return (
    <ThemeContext.Provider value={{ inverted, toggle, pressing }}>
      <div
        data-inverted={inverted}
        className="group/theme flex min-h-screen flex-col bg-black text-white
                   transition-colors duration-500 ease-out
                   data-[inverted=true]:bg-white data-[inverted=true]:text-black"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
