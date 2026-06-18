import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LorentaOS — The Cognitive Operating System for Autonomous Enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: "#f7f5f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            L
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#f7f5f2",
              letterSpacing: "-0.02em",
            }}
          >
            lorentaos
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              width: 48,
              height: 3,
              backgroundColor: "#c9e36b",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#f7f5f2",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: 900,
            }}
          >
            Run your business on autopilot.
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#8a8a86",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 680,
            }}
          >
            The cognitive operating system for autonomous enterprises.
          </p>
        </div>

        {/* Bottom: metrics */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            { value: "4 hrs", label: "Month-end close" },
            { value: "–67%", label: "Stockouts" },
            { value: "40+", label: "Connectors" },
          ].map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 32, fontWeight: 600, color: "#c9e36b", letterSpacing: "-0.02em" }}>
                {m.value}
              </span>
              <span style={{ fontSize: 13, color: "#8a8a86", fontFamily: "ui-monospace, monospace", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
