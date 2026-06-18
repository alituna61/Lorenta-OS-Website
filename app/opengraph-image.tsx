import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LorentaOS — The Cognitive Operating System for Autonomous Enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
              fontSize: 60,
              fontWeight: 600,
              color: "#f7f5f2",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: 800,
            }}
          >
            Run your business on autopilot.
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#8a8a86",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 640,
            }}
          >
            The cognitive operating system for autonomous enterprises. Native
            integration with Logo, and Mikro.
          </p>
        </div>

        {/* Bottom: tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["KVKK Compliant", "EU AI Act Ready", "Closed-loop Architecture"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  color: "#8a8a86",
                  border: "1px solid #2a2a2a",
                  borderRadius: 999,
                  padding: "6px 16px",
                  fontFamily: "ui-monospace, monospace",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
