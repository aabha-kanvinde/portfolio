import type { CSSProperties } from "react";

const linkStyle: CSSProperties = {
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
  fontSize: "var(--text-body)",
  fontWeight: 300,
  color: "var(--color-body)",
  textDecoration: "none",
  display: "inline-block",
  position: "relative",
};

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div style={{ padding: "96px", display: "flex", alignItems: "flex-start", gap: "48px" }}>
        {/* Column 1 — CTA */}
        <div style={{ width: "576px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          <p
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "24px",
              fontWeight: 400,
              color: "var(--color-heading)",
              lineHeight: 1.4,
              margin: "0 0 12px 0",
            }}
          >
            If you want to talk design, know more about a project or swap coffee recipes - my inbox is always open!
          </p>
          <a href="mailto:aabhakanvinde@gmail.com" style={linkStyle}>
            → email me
          </a>
          <a
            href="https://www.linkedin.com/in/aabha-kanvinde/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            → connect on LinkedIn
          </a>
        </div>

        {/* Column 2 — Credits */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "var(--text-body)", fontWeight: 300, color: "var(--color-body)", margin: 0, textAlign: "right" }}>
            Aabha Kanvinde © 2026
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "var(--text-body)", fontWeight: 300, color: "var(--color-body)", margin: 0, textAlign: "right" }}>
            Built with Claude, and typeset in Gambarino and Switzer by the Indian Type Foundry
          </p>
        </div>
      </div>
    </footer>
  );
}
