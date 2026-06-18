"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Mascot() {
  const { inverted, toggle, pressing } = useTheme();
  const mascotRef = useRef<HTMLButtonElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const mascot = mascotRef.current;
    const pupil = pupilRef.current;
    if (!mascot || !pupil) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const EYE_X = 0.542;
    const EYE_Y = 0.391;

    const MAX_OFFSET = 4;
    const FALLOFF = 320;
    const LERP = 0.13;
    const IDLE_DELAY = 1500;
    const IDLE_AMP = 0.35;
    const WAKE_AT = 1600;

    let eyeX = 0;
    let eyeY = 0;
    const measure = () => {
      const r = mascot.getBoundingClientRect();
      eyeX = r.left + r.width * EYE_X;
      eyeY = r.top + r.height * EYE_Y;
    };
    measure();

    let mouseX = eyeX;
    let mouseY = eyeY;
    let lastMoveAt = performance.now();
    let curX = 0;
    let curY = 0;

    let trackingActive = false;
    const wakeTimer = window.setTimeout(() => {
      trackingActive = true;
      lastMoveAt = performance.now();
    }, WAKE_AT);

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveAt = performance.now();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    let rafId = 0;
    const tick = (now: number) => {
      let tgtX = 0;
      let tgtY = 0;

      if (trackingActive) {
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);

        if (dist > 0.5) {
          const magnitude = Math.tanh(dist / FALLOFF) * MAX_OFFSET;
          tgtX = (dx / dist) * magnitude;
          tgtY = (dy / dist) * magnitude;
        }

        if (now - lastMoveAt > IDLE_DELAY) {
          const t = now / 1000;
          tgtX += Math.sin(t * 0.7) * IDLE_AMP;
          tgtY += Math.cos(t * 0.53) * IDLE_AMP * 0.7;
        }
      }

      curX += (tgtX - curX) * LERP;
      curY += (tgtY - curY) * LERP;

      pupil.style.translate = `calc(-50% + ${curX.toFixed(
        2
      )}px) calc(-50% + ${curY.toFixed(2)}px)`;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(wakeTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
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
        ref={mascotRef}
        type="button"
        onClick={toggle}
        title="Temayı değiştir"
        className="group/mascot fixed bottom-0 left-0 z-30 h-28 w-28 origin-bottom-left
                   select-none cursor-pointer sm:h-36 sm:w-36
                   focus:outline-none focus-visible:outline-none"
        style={{
          opacity: mounted ? 1 : 0,
          transform: pressing ? "scale(1.05)" : "scale(1)",
          transition: "opacity 900ms ease-out 300ms, transform 220ms ease-out",
        }}
      >
        <Image
          src="/mascot_white.png"
          alt=""
          fill
          priority
          sizes="144px"
          className={`object-contain transition-opacity duration-500 ease-out ${
            inverted ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/mascot_black.png"
          alt="Lorenta maskotu"
          fill
          priority
          sizes="144px"
          className={`object-contain transition-opacity duration-500 ease-out ${
            inverted ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          data-eye-blink
          className={`absolute overflow-hidden
                      transition-colors duration-500 ease-out
                      ${inverted ? "bg-white" : "bg-black"}`}
          style={{
            left: "53.2%",
            top: "38.9%",
            width: "10px",
            height: "8px",
            translate: "-50% -50%",
            borderBottomLeftRadius: "18px",
            borderBottomRightRadius: "18px",
            borderTopLeftRadius: "2px",
            borderTopRightRadius: "2px",
            transformOrigin: "top",
            animation: pressing
              ? "lorenta-eye-blink 220ms ease-in-out 1"
              : "lorenta-eye-blink 220ms ease-in-out 1600ms 1 both",
          }}
        >
          <div
            ref={pupilRef}
            aria-hidden="true"
            className={`absolute h-[11px] w-[11px] rounded-full
                        transition-colors duration-500 ease-out
                        ${inverted ? "bg-black" : "bg-white"}`}
            style={{
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
              willChange: "translate",
            }}
          />
        </div>
      </button>
    </>
  );
}