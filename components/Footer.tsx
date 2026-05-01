const linkHover =
  "text-body transition-colors duration-150 hover:text-heading self-start " +
  "relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px " +
  "after:bg-heading after:transition-all after:duration-150 hover:after:w-full";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div
        className="container"
        style={{ paddingTop: "48px", paddingBottom: "16px", paddingLeft: "48px", paddingRight: "48px", maxWidth: "none" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[var(--space-7)] md:gap-0 items-start" style={{ marginBottom: "var(--space-7)" }}>
          {/* Column 1 — CTA */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-baskerville), Georgia, serif",
                fontSize: "var(--text-body-lg)",
                fontWeight: 400,
                color: "var(--color-heading)",
                lineHeight: "var(--leading-body-lg)",
                letterSpacing: "var(--tracking-body-lg)",
                maxWidth: "560px",
                marginBottom: "var(--space-5)",
              }}
            >
              If you want to talk design, know more about a project or swap coffee recipes - my inbox is always open!
            </p>

            <div className="flex flex-col" style={{ gap: "var(--space-4)" }}>
              <a
                href="mailto:aabhakanvinde@gmail.com"
                className={`type-ui ${linkHover}`}
              >
                → email me
              </a>
              <a
                href="https://www.linkedin.com/in/aabha-kanvinde/"
                target="_blank"
                rel="noopener noreferrer"
                className={`type-ui ${linkHover}`}
              >
                → connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2 — Credits */}
          <div className="flex flex-col items-end gap-1">
            <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-muted)', fontFamily: 'var(--font-dm-sans)', textAlign: 'right' }}>
              Aabha Kanvinde © 2026
            </p>
            <p style={{ fontSize: 'var(--text-caption)', color: 'var(--color-muted)', fontFamily: 'var(--font-dm-sans)', textAlign: 'right', marginTop: 'var(--space-4)' }}>
              Built with Claude, and typeset in Gambarino and Switzer by the Indian Type Foundry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
