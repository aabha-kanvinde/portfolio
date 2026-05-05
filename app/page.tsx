"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SneakPeeksSection from "@/components/SneakPeeksSection";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isSwatchHovered, setIsSwatchHovered] = useState(false);
  const [isGenerativeHovered, setIsGenerativeHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="w-full max-w-[1200px] mx-auto px-4 md:px-[48px]"
        style={{ paddingTop: "64px", paddingBottom: "220px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
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
          <p style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h3)', fontWeight: 400, color: 'var(--color-muted)', textAlign: 'center', marginBottom: 'var(--space-5)', }}>
            Hi, I&apos;m Aabha :)
          </p>
          <h1 style={{ fontFamily: 'var(--font-baskerville)', fontSize: 'var(--text-h1)', fontWeight: 400, color: 'var(--color-heading)', textAlign: 'center', lineHeight: 1.2, marginBottom: 'var(--space-5)' }}>
            I design tools used and loved by millions of other creatives{' '}
            <span style={{ color: 'var(--color-muted)', fontSize: 'inherit' }}>@Adobe</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: 'var(--text-body)', fontWeight: 300, color: 'var(--color-body)', textAlign: 'center', marginBottom: 'var(--space-5)' }}>
            Powered by iced coffee and an unreasonable love for details.<br />When I&apos;m not in Figma, you&apos;ll find me at the top of a mountain, petting a wild cow.
          </p>
        </div>
        <div></div>
      </section>

      {/* ── Deep Dives Marquee ────────────────────────────────────────── */}
      <div style={{ overflow: 'hidden', width: '100%', background: 'rgba(228,228,225,0.5)', padding: '8px 0' }}>
        <div style={{ display: 'flex', gap: '24px', animation: 'marquee 30s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {[...Array(40)].map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', fontFamily: 'var(--font-baskerville)', fontSize: '16px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--color-body)', whiteSpace: 'nowrap', lineHeight: 1 }}>
              deep dives
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/star-dives.svg" alt="" style={{ width: '14px', height: '16px', display: 'block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── Case Studies ────────────────────────────────────────────── */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingInline: '96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>

          {/* Card 1: Swatch Info — vertical */}
          <Link href="/work/swatch-info" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div
              onMouseEnter={() => { setHoveredCard('swatch'); setIsSwatchHovered(true); }}
              onMouseLeave={() => { setHoveredCard(null); setIsSwatchHovered(false); }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '600px',
                transition: 'background 200ms ease',
                cursor: 'pointer',
                background: hoveredCard === 'swatch' ? 'var(--color-surface)' : 'transparent',
              }}
            >
              {/* Image */}
              <div style={{ flex: 1, overflow: 'hidden', width: '100%' }}>
                <Image
                  src="/swatch-info-project-images/swatch-main-thumbnail.png"
                  alt="Simplified Color Documentation in Illustrator"
                  width={1040}
                  height={585}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 70vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: isSwatchHovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                />
              </div>
              {/* Text */}
              <div style={{ padding: 'var(--space-4) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <h3 style={{ fontFamily: 'var(--font-baskerville), Georgia, serif', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--color-heading)', lineHeight: 1.2, margin: 0 }}>
                  Simplified Color Documentation in Illustrator
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'var(--text-body-sm)', color: 'var(--color-muted)', margin: 0 }}>Core Workflow Improvement · 2025</p>
              </div>
            </div>
          </Link>

          {/* Card 2: Generative Edit — vertical */}
          <div
            onMouseEnter={() => { setHoveredCard('generative'); setIsGenerativeHovered(true); }}
            onMouseLeave={() => { setHoveredCard(null); setIsGenerativeHovered(false); }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '620px',
              transition: 'background 200ms ease',
              background: hoveredCard === 'generative' ? 'var(--color-surface)' : 'transparent',
            }}
          >
            {/* Image */}
            <div style={{ flex: 1, overflow: 'hidden', width: '100%' }}>
              <Image
                src="/swatch-info-project-images/wip-thumbnail.png"
                alt="Generative Edit"
                width={1040}
                height={585}
                quality={90}
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: isGenerativeHovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
              />
            </div>
            {/* Text */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <h3 style={{ fontFamily: 'var(--font-baskerville), Georgia, serif', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--color-heading)', lineHeight: 1.2, margin: 0 }}>
                Generative Edit (coming soon!)
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'var(--text-body-sm)', color: 'var(--color-muted)', margin: 0 }}>0 → 1 Feature Design · 2026</p>
            </div>
          </div>

          {/* Card 3: Women's Fitness Tracker — vertical */}
          <div
            onMouseEnter={() => setHoveredCard('fitness')}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '620px',
              transition: 'background 200ms ease',
              background: hoveredCard === 'fitness' ? 'var(--color-surface)' : 'transparent',
            }}
          >
            {/* Image */}
            <div style={{ flex: 1, overflow: 'hidden', width: '100%' }}>
              <Image
                src="/swatch-info-project-images/wip-thumbnail.png"
                alt="Women's Fitness Tracker"
                width={1040}
                height={585}
                quality={90}
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Text */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <h3 style={{ fontFamily: 'var(--font-baskerville), Georgia, serif', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--color-heading)', lineHeight: 1.2, margin: 0 }}>
                Women&apos;s Fitness Tracker
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'var(--text-body-sm)', color: 'var(--color-muted)', margin: 0 }}>Personal / Thesis Project · 2024</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Sneak Peeks Marquee ───────────────────────────────────────── */}
      <div style={{ overflow: 'hidden', width: '100%', background: 'rgba(228,228,225,0.5)', padding: '8px 0' }}>
        <div style={{ display: 'flex', gap: '24px', animation: 'marquee 30s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {[...Array(40)].map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', fontFamily: 'var(--font-baskerville)', fontSize: '16px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--color-body)', whiteSpace: 'nowrap', lineHeight: 1 }}>
              sneak peeks
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/star-peeks.svg" alt="" style={{ width: '16px', height: '16px', display: 'block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ── Sneak Peeks ─────────────────────────────────────────────── */}
      <section style={{ paddingBlock: '96px' }}>
        <SneakPeeksSection />
        <div style={{ textAlign: 'center', marginTop: '96px' }}>
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
