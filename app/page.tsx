"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import SneakPeeksSection from "@/components/SneakPeeksSection";


export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="w-full max-w-[1200px] mx-auto px-4 md:px-[48px]"
        style={{ paddingTop: "220px", paddingBottom: "220px" }}
      >
        <div
          className="mx-auto text-center"
          style={{
            maxWidth: "860px",
            fontFamily: "var(--font-baskerville), Georgia, serif",
            fontSize: "var(--text-h2)",
            lineHeight: "1.4",
            letterSpacing: "var(--tracking-h2)",
            color: "var(--color-heading)",
          }}
        >
          <p style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h3)', fontWeight: 400, color: 'var(--color-muted)', textAlign: 'center', marginBottom: 'var(--space-5)', letterSpacing: '0.01em'  }}>
            Hi, I&apos;m Aabha :)
          </p>
          <h1 style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h1)', fontWeight: 400, color: 'var(--color-heading)', textAlign: 'center', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>
            Currently at Adobe, designing tools used and loved by millions of other creatives.
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body-lg)', fontWeight: 300, color: 'var(--color-muted)', textAlign: 'center', marginBottom: 'var(--space-5)', letterSpacing: '0.01em' }}>
          Powered by iced coffee and an unreasonable love for details.<br />When I&apos;m not in Figma, you&apos;ll find me at the top of a mountain, petting a wild cow.
          </p>
        </div>

        {/* TODO: floating illustrations/icons/photos go here */}
        <div></div>
      </section>

      {/* ── Case Studies ────────────────────────────────────────────── */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', height: '12px', background: 'rgba(228, 228, 224, 0.3)' }} />
      <section style={{ paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)" }}>
        <style>{`
          .case-study-grid {
            display: flex;
            flex-direction: column;
            gap: var(--space-7);
            padding-inline: 16px;
          }
          @media (min-width: 768px) { .case-study-grid { padding-inline: 48px; } }
          @media (min-width: 1024px) { .case-study-grid { padding-inline: 48px; } }
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
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-[48px]" style={{ marginBottom: "var(--space-7)", textAlign: "center" }}>
          <SectionLabel>Deep Dives</SectionLabel>
        </div>
        <div className="case-study-grid">
          <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
            <Link href="/work/swatch-info" className="case-study-card">
              <div
                onMouseEnter={() => setHoveredCard('swatch')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ borderRadius: 0, overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ position: 'relative' }}>
                  <Image src="/swatch-info-project-images/correct-swatch main page thumbnail.png" alt="Simplified Color Documentation in Illustrator" width={1040} height={585} quality={90} className="w-full" style={{aspectRatio: '16/6', objectFit: 'cover', borderRadius: 0}} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: hoveredCard === 'swatch' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0)',
                    transition: 'background 200ms ease',
                  }} /></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 'var(--space-3) var(--space-1) var(--space-3)' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h3)', fontWeight: 400, color: 'var(--color-heading)', lineHeight: 1, margin: 0 }}>Simplified Color Documentation in Illustrator</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)', lineHeight: 1, margin: 0 }}>Core Workflow Improvement</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)', lineHeight: 1, margin: 0 }}>2025</p>
                </div>
              </div>
            </Link>
            <div className="case-study-card-disabled" role="button" aria-disabled="true" tabIndex={-1}>
              <div style={{ borderRadius: 0, overflow: 'hidden', cursor: 'not-allowed' }}>
                <Image src="/swatch-info-project-images/wip thumbnail.png" alt="Generative Edit" width={1040} height={585} quality={90} className="w-full" style={{aspectRatio: '16/6', objectFit: 'cover', borderRadius: 0}} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 'var(--space-3) var(--space-1) var(--space-3)' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h3)', fontWeight: 400, color: 'var(--color-heading)', lineHeight: 1, margin: 0 }}>Generative Edit (coming soon!)</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)', lineHeight: 1, margin: 0 }}>0 → 1 Feature Design</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)', lineHeight: 1, margin: 0 }}>2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sneak Peeks ─────────────────────────────────────────────── */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', height: '12px', background: 'rgba(228, 228, 224, 0.3)' }} />
      <section style={{ paddingBlock: "var(--space-9)" }}>
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-[48px]" style={{ marginBottom: "var(--space-7)", textAlign: "center" }}>
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
