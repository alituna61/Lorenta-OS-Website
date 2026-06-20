"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Landing hero — Coming Soon estetiğinin sinematik reveal ritmiyle açılır.
 * Sağda kodlanmış "Sabah Brifingi" panosu: tanıdık arayüz = anlık güven.
 */
export function Hero() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const step = (delay: number): React.CSSProperties => ({
    transition: `opacity 700ms ease-out ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(10px)",
  });

  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Hafif ambians ışıması — signal lime, çok düşük opaklık */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-130 w-130 rounded-full bg-signal/10 blur-[140px]"
      />
      <Container width="wide">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* Sol: metin */}
          <div className="max-w-xl">
            {/* Kicker — Coming Soon hairline brackets */}

            <h1
              className="font-barlow text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl group-data-[inverted=true]/theme:text-black"
              style={step(300)}
            >
              Şirketiniz için
              <br />
              <span className="font-extrabold">LORENTA</span>
              <span className="font-light">OS</span>
            </h1>

            <p
              className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg group-data-[inverted=true]/theme:text-black/60"
              style={step(450)}
            >
            Şirketinizin finansal ve operasyonel verilerini tek bir yerden yönetin. Her zaman ne durumda olduğunuzu bilin ve bir sonraki adımınızı güvenle planlayın.
            </p>

            <div className="mt-9 flex flex-wrap gap-3" style={step(600)}>
              <Link
                href="/demo"
                data-mascot-blink
                className="rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Bekleme Listesine Katıl
              </Link>
              <Link
                href="#nasil-calisir"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/50 group-data-[inverted=true]/theme:border-black/20 group-data-[inverted=true]/theme:text-black group-data-[inverted=true]/theme:hover:border-black/50"
              >
                Nasıl çalışır?
              </Link>
            </div>
          </div>

          {/* Sağ: kodlanmış sabah brifingi panosu */}
          <div style={step(550)}>
            <BriefingMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Kodlanmış ürün mockup'ı (tanıdık arayüz → güven) ─────────── */
function BriefingMockup() {
  const kpis = [
    { label: "Bugün işlenen sipariş", value: "1.247", delta: "+%12" },
    { label: "Önlenen kayıp", value: "₺14.200", delta: "bugün" },
    { label: "Bekleyen istisna", value: "3", delta: "-%91" },
  ];
  const agents = [
    {
      agent: "Finans Asistanı",
      action: "847 işlem mutabakatı yapılıyor",
      status: "running",
    },
    {
      agent: "Tedarik Asistanı",
      action: "12 kalem için sipariş taslağı hazır",
      status: "done",
    },
    {
      agent: "CRM Asistanı",
      action: "34 müşteriye takip planlandı",
      status: "done",
    },
  ];

  return (
    <div className="relative">
      <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 shadow-2xl group-data-[inverted=true]/theme:border-black/10 group-data-[inverted=true]/theme:bg-zinc-900 sm:p-6">
        {/* Başlık */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40">
              lorenta os
            </p>
            <p className="text-sm font-medium text-white">
              Sabah Brifingi · Salı
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
            <span className="text-[11px] text-white/50">3 asistan aktif</span>
          </div>
        </div>

        {/* KPI kartları */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-white/3 p-3"
            >
              <p className="mb-1 text-[10px] leading-tight text-white/45">
                {kpi.label}
              </p>
              <p className="text-lg font-semibold text-white">{kpi.value}</p>
              <p className="text-[11px] text-signal">{kpi.delta}</p>
            </div>
          ))}
        </div>

        {/* Ajan aktivitesi */}
        <div className="space-y-2">
          {agents.map((item) => (
            <div
              key={item.agent}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    item.status === "running"
                      ? "animate-pulse bg-signal"
                      : "bg-white/30"
                  }`}
                />
                <div>
                  <p className="text-xs font-medium text-white/85">
                    {item.agent}
                  </p>
                  <p className="text-[11px] text-white/45">{item.action}</p>
                </div>
              </div>
              <span className="text-xs text-white/30">
                {item.status === "running" ? "●" : "✓"}
              </span>
            </div>
          ))}
        </div>

        {/* Sesli sorgu satırı */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-signal/30 bg-signal/6 px-3 py-2.5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0 text-signal"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
          </svg>
          <p className="text-[11px] text-white/70">
            “Demirhan Dekorasyon&apos;un bu yılki cirosu ne kadar?”
          </p>
        </div>
      </div>
    </div>
  );
}