import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import SneakPeeksSection from "@/components/SneakPeeksSection";


export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="container"
        style={{ paddingTop: "var(--space-10)", paddingBottom: "var(--space-9)" }}
      >
        <div
          className="mx-auto text-center"
          style={{
            maxWidth: "640px",
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "var(--text-h2)",
            lineHeight: "1.4",
            letterSpacing: "var(--tracking-h2)",
            color: "var(--color-heading)",
          }}
        >
          <p style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h3)', fontWeight: 400, color: 'var(--color-heading)', textAlign: 'center', marginBottom: 'var(--space-5)' }}>
            Hi! I&apos;m Aabha :)
          </p>
          <h1 style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h1)', fontWeight: 400, color: 'var(--color-heading)', textAlign: 'center', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>
            Currently at Adobe, designing tools used and loved by millions of other creatives.
          </h1>
          <p style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--color-heading)', textAlign: 'center', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>
            I think in systems, work in details and obsess over craft from both sides of the screen.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body-lg)', fontWeight: 400, color: 'var(--color-muted)', textAlign: 'center', marginBottom: 'var(--space-5)', letterSpacing: '0.02em' }}>
            When I&apos;m not in Figma, you&apos;ll find me at the gym lifting heavy things<br />
            or on the top of a mountain, petting a wild cow.
          </p>
        </div>

        {/* TODO: floating illustrations/icons/photos go here */}
        <div></div>
      </section>

      {/* ── Case Studies ────────────────────────────────────────────── */}
      <section className="border-t border-border" style={{ paddingBlock: "var(--space-9)" }}>
        <style>{`
          .case-study-grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-7);
            padding-inline: var(--space-6);
          }
          @media (min-width: 768px) { .case-study-grid { padding-inline: var(--space-8); } }
          @media (min-width: 1024px) { .case-study-grid { padding-inline: var(--space-10); } }
          .case-study-card { display: block; text-decoration: none; cursor: pointer; }
          .case-study-card-image {
            width: 100%;
            aspect-ratio: 16/6;
            background: var(--color-surface);
            border-radius: var(--radius-lg);
            display: block;
            transition: opacity 150ms ease;
          }
          .case-study-card:hover .case-study-card-image { opacity: 0.9; }
          .case-study-card-title {
            margin: var(--space-3) 0 0 0;
            font-family: var(--font-dm-sans), system-ui, sans-serif;
            font-size: var(--text-body);
            font-weight: 500;
            color: var(--color-heading);
          }
          .case-study-card-disabled {
            display: block;
            cursor: default;
            position: relative;
          }
          .case-study-card-disabled::after {
            content: 'Coming soon';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-bg);
            color: var(--color-muted);
            font-family: var(--font-dm-sans), system-ui, sans-serif;
            font-size: var(--text-body-sm);
            padding: 4px 10px;
            border-radius: var(--radius-sm);
            opacity: 0;
            pointer-events: none;
            transition: opacity 150ms ease;
            white-space: nowrap;
          }
          .case-study-card-disabled:hover::after { opacity: 1; }
        `}</style>
        <div className="container" style={{ marginBottom: "var(--space-7)", textAlign: "center" }}>
          <SectionLabel>Deep Dives</SectionLabel>
        </div>
        <div className="case-study-grid">
          <Link href="/work/swatch-info" className="case-study-card">
            <Image src="/swatch-info-project-images/newest-swatch main page thumbnail.png" alt="Simplified Color Documentation in Illustrator" width={1040} height={585} quality={90} className="w-full rounded-[var(--radius-lg)]" style={{aspectRatio: '16/6', objectFit: 'cover'}} />
            <p className="case-study-card-title">Simplified Color Documentation in Illustrator</p>
          </Link>
          <div className="case-study-card-disabled">
            <Image src="/swatch-info-project-images/wip thumbnail.png" alt="Generative Edit" width={1040} height={585} quality={90} className="w-full rounded-[var(--radius-lg)]" style={{aspectRatio: '16/6', objectFit: 'cover'}} />
            <p className="case-study-card-title">Generative Edit</p>
          </div>
        </div>
      </section>

      {/* ── Sneak Peeks ─────────────────────────────────────────────── */}
      <section className="border-t border-border" style={{ paddingBlock: "var(--space-9)" }}>
        <div className="container" style={{ marginBottom: "var(--space-7)", textAlign: "center" }}>
          <SectionLabel>Sneak Peeks</SectionLabel>
        </div>
        <SneakPeeksSection />
        <div className="pt-[var(--space-9)]" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)' }}>
            My older branding and visual work lives on Behance.{' '}
            <a
              href="https://www.behance.net/aabha-kanvinde"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-body)', textDecoration: 'underline' }}
            >
              View it there →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
