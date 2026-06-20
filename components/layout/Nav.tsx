"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { useTheme } from "@/components/ThemeProvider";

/* ─── Menü verisi ───────────────────────────────────────────── */
type DropdownItem = { label: string; href: string; description?: string; colSpan?: boolean };
type NavItem = {
  label: string;
  href: string;
  dropdown?: {
    overview: { label: string; description: string };
    items: DropdownItem[];
  };
};

const navItems: NavItem[] = [
  {
    label: "Ürün",
    href: "/product",
    dropdown: {
      overview: {
        label: "Platforma genel bakış",
        description: "Dört bilişsel katman, tek kapalı döngü.",
      },
      items: [
        {
          label: "Bilişsel Çekirdek",
          href: "/product/cognitive-core",
          description: "Akıl yürütme motoru + RAG",
        },
        {
          label: "Entegrasyonlar",
          href: "/product/connectors",
          description: "Logo, Mikro ve dahası",
        },
        {
          label: "AI Çalışanlar",
          href: "/product/agents",
          description: "Akıllı asistanlar + son onay sizde",
        },
        {
          label: "Güvenlik",
          href: "/product/security",
          description: "KVKK, TTK, denetim izi",
        },
      ],
    },
  },
  {
    label: "Çözümler",
    href: "/solutions",
    dropdown: {
      overview: {
        label: "Tüm çözümler",
        description: "Her departman için tek platform.",
      },
      items: [
        {
          label: "CEO Asistanı",
          href: "/solutions/ceo",
          description: "Sabah brifingi ve stratejik öngörüler",
          colSpan: true,
        },
        {
          label: "Finans",
          href: "/solutions/finance",
          description: "Nakit akışı ve riskli alacak yönetimi",
        },
        {
          label: "Satış & CRM",
          href: "/solutions/sales-crm",
          description: "Akıllı teklif ve müşteri takibi",
        },
        {
          label: "Tedarik",
          href: "/solutions/supply-chain",
          description: "Öngörücü satınalma ve tedarik",
        },
        {
          label: "Stok & Depo",
          href: "/solutions/inventory",
          description: "Anlık sayım ve depo hareket takibi",
        },
        {
          label: "Üretim",
          href: "/solutions/production",
          description: "İş emri ve üretim planı senkronizasyonu",
        },
        {
          label: "Muhasebe",
          href: "/solutions/accounting",
          description: "Fatura mutabakatı ve ay sonu kapanışı",
        },
      ],
    },
  },
  { label: "Kaynaklar", href: "/resources" },
];

/* ─── Marka logotipi: ikon (tema toggle) + metin (ana sayfa) ──────── */
function Brand({ onHomeClick }: { onHomeClick?: () => void }) {
  const { inverted, toggle, pressing } = useTheme();
  const iconRef = useRef<HTMLButtonElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<HTMLDivElement>(null);

  const blinkOnce = useCallback(() => {
    const el = socketRef.current;
    if (!el) return;
    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = "lorenta-eye-blink 200ms ease-in-out 1";
  }, []);

  useEffect(() => {
    const t = setTimeout(blinkOnce, 800);
    return () => clearTimeout(t);
  }, [blinkOnce]);

  useEffect(() => {
    if (pressing) blinkOnce();
  }, [pressing, blinkOnce]);

  useEffect(() => {
    let lastBlink = 0;
    const handleHover = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest("[data-mascot-blink]")) return;
      const now = Date.now();
      if (now - lastBlink < 600) return;
      lastBlink = now;
      blinkOnce();
    };
    document.addEventListener("mouseover", handleHover, { passive: true });
    return () => document.removeEventListener("mouseover", handleHover);
  }, [blinkOnce]);

  useEffect(() => {
    const icon = iconRef.current;
    const pupil = pupilRef.current;
    if (!icon || !pupil) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const EYE_X = 0.542; 
    const EYE_Y = 0.391; 

    const MAX_OFFSET = 2.5; 
    const FALLOFF = 320; 
    const LERP = 0.13; 
    const IDLE_DELAY = 1500; 
    const IDLE_AMP = 0.35; 
    
    const DEFAULT_X = 1.5;
    const DEFAULT_Y = -2.5;

    let eyeX = 0;
    let eyeY = 0;
    const measure = () => {
      const r = icon.getBoundingClientRect();
      eyeX = r.left + r.width * EYE_X;
      eyeY = r.top + r.height * EYE_Y;
    };
    measure();

    let mouseX = eyeX;
    let mouseY = eyeY;
    let lastMoveAt = 0; 
    let hasBlinkedForIdle = true;

    let curX = DEFAULT_X;
    let curY = DEFAULT_Y;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveAt = performance.now();
      hasBlinkedForIdle = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    let rafId = 0;
    const tick = (now: number) => {
      let tgtX = 0;
      let tgtY = 0;

      if (now - lastMoveAt > IDLE_DELAY) {
        if (!hasBlinkedForIdle) {
            blinkOnce();
            hasBlinkedForIdle = true;
        }

        tgtX = DEFAULT_X;
        tgtY = DEFAULT_Y;
        
        const t = now / 1000;
        tgtX += Math.sin(t * 0.7) * IDLE_AMP;
        tgtY += Math.cos(t * 0.53) * IDLE_AMP * 0.7;
      } else {
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);

        if (dist > 0.5) {
          const magnitude = Math.tanh(dist / FALLOFF) * MAX_OFFSET;
          tgtX = (dx / dist) * magnitude;
          tgtY = (dy / dist) * magnitude;
        }
      }

      curX += (tgtX - curX) * LERP;
      curY += (tgtY - curY) * LERP;

      pupil.style.translate = `calc(-50% + ${curX.toFixed(2)}px) calc(-50% + ${curY.toFixed(2)}px)`;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [blinkOnce]); 

  return (
    <div className="flex h-16 items-center gap-2.5">
      <style>{`
        @keyframes lorenta-eye-blink {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-eye-blink] { animation: none !important; }
        }
      `}</style>

      <button
        ref={iconRef}
        type="button"
        onClick={toggle}
        aria-label={inverted ? "Koyu temaya geç" : "Açık temaya geç"}
        title={inverted ? "Koyu temaya geç" : "Açık temaya geç"}
        className="relative flex h-full w-16 shrink-0 items-center justify-center rounded-sm outline-none origin-bottom-left select-none overflow-hidden group/logo"
        style={{
          transform: pressing ? "scale(1.05)" : "scale(1)",
          transition: "transform 220ms ease-out",
        }}
      >
        <Image
          src={inverted ? "/mascot_black.png" : "/mascot_white.png"}
          alt="Lorenta logosu"
          fill
          sizes="64px"
          priority
          className="object-contain transition-opacity duration-300"
        />

        <div
          ref={socketRef}
          data-eye-blink
          aria-hidden="true"
          className={`absolute transition-colors duration-500 ease-out
                      ${inverted ? "bg-white" : "bg-black"}`}
          style={{
            left: "53.2%",
            top: "38.9%",
            width: "10px",
            height: "8px",
            translate: "-50% -50%",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            borderTopLeftRadius: "1px",
            borderTopRightRadius: "1px",
            transformOrigin: "center",
          }}
        />

        <div
          ref={pupilRef}
          aria-hidden="true"
          className={`absolute h-1.25 w-1.25 rounded-full transition-colors duration-500 ease-out ${
            inverted ? "bg-black" : "bg-white"
          }`}
          style={{
            left: "53.2%",
            top: "38.9%",
            translate: "-50% -50%",
            willChange: "translate",
          }}
        />
      </button>

      <Link
        href="/"
        onClick={onHomeClick}
        aria-label="LorentaOS ana sayfa"
        className="font-barlow text-[35px] leading-none tracking-tight
                   text-white transition-colors duration-500
                   group-data-[inverted=true]/theme:text-black
                   flex h-full items-center"
      >
        <span className="font-extrabold">LORENTA</span>
        <span className="font-light">OS</span>
      </Link>
    </div>
  );
}

/* ─── Masaüstü açılır menü ───────────────────────────────────── */
function DesktopDropdown({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  if (!item.dropdown) return null;
  const { overview, items } = item.dropdown;

  return (
    <div className="animate-fade-in-down absolute left-1/2 top-full z-50 w-115 -translate-x-1/2 pt-3">
      <div
        className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl
                   group-data-[inverted=true]/theme:border-black/10
                   group-data-[inverted=true]/theme:bg-white"
      >
        <Link
          href={item.href}
          onClick={onClose}
          className="group/row flex items-center justify-between border-b border-white/10 px-5 py-4 transition-colors hover:bg-white/5
                     group-data-[inverted=true]/theme:border-black/10
                     group-data-[inverted=true]/theme:hover:bg-black/4"
        >
          <div>
            <p className="text-sm font-medium text-white group-data-[inverted=true]/theme:text-black">
              {overview.label}
            </p>
            <p className="text-xs text-white/45 group-data-[inverted=true]/theme:text-black/45">
              {overview.description}
            </p>
          </div>
          <span className="text-xs text-white/40 opacity-0 transition-opacity group-hover/row:opacity-100 group-data-[inverted=true]/theme:text-black/40">
            →
          </span>
        </Link>
        <div className="grid grid-cols-2 gap-px bg-white/10 group-data-[inverted=true]/theme:bg-black/10">
          {items.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={onClose}
              className={`bg-zinc-950 px-5 py-4 transition-colors hover:bg-white/5
                         group-data-[inverted=true]/theme:bg-white
                         group-data-[inverted=true]/theme:hover:bg-black/4 ${
                           sub.colSpan
                             ? "col-span-2 flex flex-col items-center justify-center text-center"
                             : ""
                         }`}
            >
              <p className="mb-0.5 text-sm font-medium text-white group-data-[inverted=true]/theme:text-black">
                {sub.label}
              </p>
              {sub.description && (
                <p className="text-xs text-white/45 group-data-[inverted=true]/theme:text-black/45">
                  {sub.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Nav ───────────────────────────────────────────────────── */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-nav-item]")) setActiveDropdown(null);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  const linkCls =
    "text-sm text-white/65 transition-colors hover:text-white " +
    "group-data-[inverted=true]/theme:text-black/60 group-data-[inverted=true]/theme:hover:text-black";

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl
                 transition-colors duration-500
                 group-data-[inverted=true]/theme:border-black/10
                 group-data-[inverted=true]/theme:bg-white/70"
    >
      <nav
        aria-label="Birincil"
        className="flex h-16 w-full items-center justify-between pl-0 pr-4 sm:pr-6 md:pr-8"
      >
        <Brand
          onHomeClick={() => {
            setMobileOpen(false);
            setActiveDropdown(null);
          }}
        />

        {/* Masaüstü linkler */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative"
              data-nav-item
              onMouseEnter={() => item.dropdown && openDropdown(item.label)}
              onMouseLeave={() => item.dropdown && scheduleClose()}
            >
              <div className="flex items-center gap-1">
                <Link href={item.href} className={linkCls}>
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    aria-label={`${item.label} menüsünü aç/kapat`}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex h-5 w-5 items-center justify-center text-white/40 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/40 group-data-[inverted=true]/theme:hover:text-black"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-150 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {item.dropdown && activeDropdown === item.label && (
                <div
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <DesktopDropdown
                    item={item}
                    onClose={() => setActiveDropdown(null)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Masaüstü sağ aksiyonlar */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className={linkCls}>
            Giriş yap
          </Link>
          <Link
            href="/demo"
            data-mascot-blink
            className="rounded-full bg-signal px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Katıl
          </Link>
        </div>

        {/* Mobil */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/demo"
            data-mascot-blink
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white"
          >
            Katıl
          </Link>
          <button
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-5 bg-white transition-transform duration-200 group-data-[inverted=true]/theme:bg-black ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition-opacity duration-200 group-data-[inverted=true]/theme:bg-black ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-white transition-transform duration-200 group-data-[inverted=true]/theme:bg-black ${
                mobileOpen ? "translate-y-[-3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobil çekmece */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black md:hidden group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-white">
          <Container width="wide">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between rounded-md px-2 py-3 text-base text-white/80 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/80 group-data-[inverted=true]/theme:hover:text-black"
                      >
                        <span>{item.label}</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`transition-transform duration-150 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="mb-2 ml-4 space-y-1 border-l border-white/10 pl-4 group-data-[inverted=true]/theme:border-black/10">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-2 py-2 text-sm font-medium text-white group-data-[inverted=true]/theme:text-black"
                          >
                            Tüm {item.label}
                          </Link>
                          {item.dropdown.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md px-2 py-2 text-sm text-white/65 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/65 group-data-[inverted=true]/theme:hover:text-black"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-2 py-3 text-base text-white/80 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/80 group-data-[inverted=true]/theme:hover:text-black"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 border-t border-white/10 pt-4 group-data-[inverted=true]/theme:border-black/10">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-white/80 transition-colors hover:text-white group-data-[inverted=true]/theme:text-black/80 group-data-[inverted=true]/theme:hover:text-black"
                >
                  Giriş yap
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}