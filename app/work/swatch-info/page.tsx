"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Design Explorations Tabs ────────────────────────────────────────────────

const TABS = [
  { id: 0, label: "Entry Point" },
  { id: 1, label: "Card Structure & Customization" },
  { id: 2, label: "Spec Placement" },
  { id: 3, label: "Post-creation Editing" },
];

function TabPill({
  label,
  active,
  size = 35,
}: {
  label: string;
  active: boolean;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        background: active ? "var(--color-heading)" : "var(--color-surface)",
        border: active ? "none" : "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        fontSize: 'var(--text-caption)',
        fontWeight: 600,
        color: active ? "#fff" : "var(--color-muted)",
        flexShrink: 0,
        transition: "background var(--transition-base), color var(--transition-base)",
      }}
    >
      {label}
    </div>
  );
}

function SwatchReelVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const userPaused = React.useRef(false);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) el.play();
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    const handlePause = () => { userPaused.current = true; };
    const handlePlay = () => { userPaused.current = false; };
    el.addEventListener('pause', handlePause);
    el.addEventListener('play', handlePlay);

    return () => {
      observer.disconnect();
      el.removeEventListener('pause', handlePause);
      el.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/videos/swatch-reel.mp4"
      loop
      muted
      playsInline
      controls
      className="w-full"
    />
  );
}

function LivestreamVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play();
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src="/videos/swatch-info-livestream.mp4"
      loop
      muted
      playsInline
      controls
      className="w-full"
    />
  );
}


function InsightCallout({ text }: { text: string }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-4) var(--space-5)",
        marginBottom: "var(--space-5)",
      }}
    >
      <p className="type-body" style={{ margin: 0, color: "var(--color-body)" }}>
        {text}
      </p>
    </div>
  );
}

function DesignExplorations() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <p className="text-center mb-6" style={{
        fontSize: 'var(--text-caption)',
        color: 'var(--color-body)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-dm-sans)',
      }}>
        Click through to see the BTS
      </p>
      {/* Tab navigator */}
      <div className="tab-nav">
        <div className="relative flex justify-between items-start w-full">
          {/* Line behind circles */}
          <div className="absolute left-0 right-0 h-px bg-[var(--color-border)] z-0" style={{ top: '17.5px' }} />
          {TABS.map((tab) => (
            <div
              key={tab.id}
              className="flex flex-col items-center"
              style={{ flex: 1, cursor: 'pointer' }}
              onClick={() => setActive(tab.id)}
            >
              <div className="relative z-10" style={{ background: 'var(--color-bg)', marginBottom: 'var(--space-3)' }}>
                <TabPill label={`0${tab.id + 1}`} active={active === tab.id} />
              </div>
              <span
                className="tab-label leading-tight"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: active === tab.id ? 600 : 300,
                  color: active === tab.id ? "var(--color-heading)" : "var(--color-muted)",
                  textAlign: "center",
                  transition: "color var(--transition-base), font-weight var(--transition-base)",
                  lineHeight: 1.2,
                }}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div style={{ transition: "opacity 200ms ease" }}>
        {/* Tab 01 — Entry Point */}
        {active === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <InsightCallout text="💡 Where should spec generation live?" />

            <div className="entry-point-grid">
              {[
                {
                  title: "Idea 01: Export Dialog",
                  imgSrc: "/swatch-info-project-images/export-dialog-2.png",
                  imgAlt: "Export dialog as entry point exploration",
                  feedback: [
                    { type: "reject", text: "Limited to last mile" },
                    { type: "reject", text: "Breaks design flow" },
                  ],
                },
                {
                  title: "Idea 02: Quick Actions",
                  imgSrc: "/swatch-info-project-images/quick-actions-2.png",
                  imgAlt: "Quick actions as entry point exploration",
                  feedback: [
                    { type: "reject", text: "Difficult to infer intent just from selection" },
                    { type: "reject", text: "Competes for space with more useful functions" },
                  ],
                },
                {
                  title: "Idea 03: Swatches Panel",
                  imgSrc: "/swatch-info-project-images/swatches-panel-2.png",
                  imgAlt: "Swatches panel flyout as chosen entry point",
                  feedback: [
                    { type: "accept", text: "Familiar and flexible" },
                    { type: "warn",   text: "Requires careful placement to avoid clutter" },
                  ],
                },
              ].map(({ title, imgSrc, imgAlt, feedback }) => (
                <div key={title} className="entry-point-card">
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {title}
                  </span>

                  <Image src={imgSrc} alt={imgAlt} width={662} height={882} style={{width:'100%', height:'auto'}} quality={90} />

                  {feedback.map(({ type, text }, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "var(--space-3)",
                        alignItems: "flex-start",
                        padding: "var(--space-3) var(--space-4)",
                        borderRadius: "var(--radius-md)",
                        background: type === "reject" ? "rgba(255, 222, 223, 0.5)" : type === "accept" ? "rgba(196, 243, 203, 0.5)" : "rgba(255, 243, 166, 0.5)",
                      }}
                    >
                      <span style={{ fontSize: 'var(--text-body)', lineHeight: '1', flexShrink: 0, paddingTop: '4px' }}>
                        {type === "reject" ? "❌" : type === "accept" ? "✅" : "⚠️"}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                          fontSize: "var(--text-body-sm)",
                          color: type === "reject" ? "#7F1D1D" : type === "accept" ? "#14532D" : "#713F12",
                        }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="type-body" style={{ margin: 0, marginTop: "var(--space-6)" }}>
              I chose the Swatches panel because it kept spec creation close to the source of truth, without disrupting the existing user flow. I placed the feature within the flyout menu to keep discovery easy without cluttering the everyday workspace for users who don&apos;t need specs regularly.
            </p>
          </div>
        )}

        {/* Tab 02 — Card Structure & Customization */}
        {active === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <InsightCallout text="💡 How much information does a spec actually need?" />
            <p className="type-body" style={{ margin: 0 }}>
              Ultimately, the decision of how much information to display had to
              lie with the user. My priority was to design a scalable
              structure for the card that could maintain a clear hierarchy of
              information for all types of cards.
            </p>

            {/* Three columns */}
            <div className="tab-three-col">
              {[
                { label: "Bare minimum",        imgSrc: "/swatch-info-project-images/Bare minimum.png",          imgAlt: "Bare minimum card variant" },
                { label: "Something in between", imgSrc: "/swatch-info-project-images/SOmething in- between.png",  imgAlt: "Mid-level card variant" },
                { label: "Full technical spec",  imgSrc: "/swatch-info-project-images/Full technical spec.png",   imgAlt: "Full technical spec card variant" },
              ].map(({ label, imgSrc, imgAlt }) => (
                  <div key={label} className="flex flex-col" style={{ gap: "var(--space-3)" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-muted)",
                      }}
                    >
                      {label}
                    </span>
                    <Image src={imgSrc} alt={imgAlt} width={662} height={882} style={{width:'100%', height:'auto'}} quality={90} />
                  </div>
                )
              )}
            </div>

            <p className="type-body" style={{ margin: 0 }}>
              I also had to strike the right balance between control and clarity
              for the card customization settings. I initially considered giving
              users full control, but testing showed that too many options stalled
              decision making. My decisions here were guided by two principles:
              reduce cognitive load, and stay consistent with trusted Illustrator
              patterns.
            </p>

            {/* Two images */}
            <div className="grid grid-cols-2" style={{ gap: "var(--space-5)" }}>
              <Image src="/swatch-info-project-images/sketch dialog.png" alt="Initial dialog wireframe exploration" width={1016} height={640} style={{width:'100%', height:'auto'}} quality={90} />
              <Image src="/swatch-info-project-images/final dialog.png" alt="Final Create Swatch Info dialog design" width={1016} height={640} style={{width:'100%', height:'auto'}} quality={90} />
            </div>
          </div>
        )}

        {/* Tab 03 — Spec Placement */}
        {active === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <InsightCallout text="💡 Once generated, where should specs appear?" />

            {/* Four columns */}
            <div className="tab-four-col">
              {[
                { label: "Idea 01: Outside the artboard",      imgSrc: "/swatch-info-project-images/Outside artboard.png",          imgAlt: "Spec placed outside artboard" },
                { label: "Idea 02: Creation of a new artboard", imgSrc: "/swatch-info-project-images/Creation of new artboard.png",  imgAlt: "Spec on new artboard" },
                { label: "Idea 03: Corner of working artboard", imgSrc: "/swatch-info-project-images/Corner of working artboard.png", imgAlt: "Spec in corner of artboard" },
                { label: "Idea 04: Center of viewport",         imgSrc: "/swatch-info-project-images/Center of viewport.png",         imgAlt: "Spec at center of viewport — chosen solution" },
              ].map(({ label, imgSrc, imgAlt }, i) => (
                <React.Fragment key={label}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                        fontSize: "var(--text-body-sm)",
                        color: "var(--color-muted)",
                        lineHeight: 1.4,
                      }}
                    >
                      {label}
                    </span>
                    <Image src={imgSrc} alt={imgAlt} width={484} height={646} style={{width:'100%', height:'auto'}} quality={90} />
                  </div>
                  {i === 2 && (
                    <div className="flex md:hidden" style={{ gap: "var(--space-3)", alignItems: "flex-start", padding: "var(--space-3) var(--space-4)", borderRadius: "var(--radius-md)", background: "rgba(255, 222, 223, 0.5)" }}>
                      <span style={{ fontSize: 'var(--text-body)', lineHeight: '1', flexShrink: 0, paddingTop: '4px' }}>❌</span>
                      <span style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontSize: "var(--text-body-sm)", color: "#7F1D1D" }}>
                        Users often work with multiple artboards and varying canvas sizes. Fixed placement of specs can cause workflow interruptions and misplaced specs in larger, complex files.
                      </span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Feedback row — aligned to image columns above */}
            <div className="spec-feedback-grid">
              {/* ✗ spans columns 1–3 */}
              <div className="hidden md:flex" style={{ gridColumn: "1 / span 3", gap: "var(--space-3)", alignItems: "flex-start", padding: "var(--space-3) var(--space-4)", borderRadius: "var(--radius-md)", background: "rgba(255, 222, 223, 0.5)" }}>
                <span style={{ fontSize: 'var(--text-body)', lineHeight: '1', flexShrink: 0, paddingTop: '4px' }}>❌</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "var(--text-body-sm)",
                    color: "#7F1D1D",
                  }}
                >
                  Users often work with multiple artboards and varying canvas sizes. Fixed placement of specs can cause workflow interruptions and misplaced specs in larger, complex files.
                </span>
              </div>

              {/* ✓ column 4 */}
              <div style={{ gridColumn: 4, display: "flex", gap: "var(--space-3)", alignItems: "flex-start", padding: "var(--space-3) var(--space-4)", borderRadius: "var(--radius-md)", background: "rgba(196, 243, 203, 0.5)" }}>
                <span style={{ fontSize: 'var(--text-body)', lineHeight: '1', flexShrink: 0, paddingTop: '4px' }}>✅</span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "var(--text-body-sm)",
                    color: "#14532D",
                  }}
                >
                  Easy to locate and place as needed.
                </span>
              </div>
            </div>

            <p className="type-body" style={{ margin: 0 }}>
              All fixed placement concepts failed in complex, multi-artboard
              scenarios. The viewport center ensured visibility without
              assumptions about the file structure.
            </p>
          </div>
        )}

        {/* Tab 04 — Post-creation Editing */}
        {active === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <InsightCallout text="💡 How can users refine specs without restarting the process?" />
            <p className="type-body" style={{ margin: 0 }}>
              I used the Properties panel and Control bar to surface settings
              progressively. This keeps editing lightweight, with essential
              options always visible, and advanced settings just a click away.
            </p>

            {/* Two images with labels */}
            <div className="tab-two-col">
              {[
                { label: "Properties Panel", imgSrc: "/swatch-info-project-images/Properties panel.png", imgAlt: "Properties panel editing controls" },
                { label: "Control Bar",       imgSrc: "/swatch-info-project-images/Control Bar.png",       imgAlt: "Control bar editing options" },
              ].map(({ label, imgSrc, imgAlt }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {label}
                  </span>
                  <Image src={imgSrc} alt={imgAlt} width={1016} height={640} style={{width:'100%', height:'auto'}} quality={90} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Table of Contents ───────────────────────────────────────────────────────

const TOC_ITEMS = [
  { id: "context",             label: "Context" },
  { id: "problem",             label: "Problem" },
  { id: "design-explorations", label: "Design Explorations" },
  { id: "solution",            label: "Solution" },
  { id: "impact",              label: "Impact" },
  { id: "reflections",         label: "Reflections" },
];

function TableOfContents() {
  const [active, setActive] = React.useState("context");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-20% 0px -70% 0px" }
    );
    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="toc-sidebar"
      style={{
        position: "sticky",
        top: "88px",
        alignSelf: "flex-start",
        width: "var(--space-10)",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        paddingTop: "var(--space-8)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-muted)",
          textDecoration: "none",
          transition: "color var(--transition-fast)",
          display: "block",
          marginBottom: "var(--space-7)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
      >
        ← Back
      </Link>
      {TOC_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            borderLeft: active === id
              ? "2px solid var(--color-heading)"
              : "2px solid transparent",
            padding: 0,
            paddingLeft: "var(--space-3)",
            cursor: "pointer",
            textAlign: "left",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "var(--text-ui)",
            color: active === id ? "var(--color-heading)" : "var(--color-muted)",
            fontWeight: active === id ? 600 : 400,
            textDecoration: "none",
            transition: "color var(--transition-fast)",
            lineHeight: 1.4,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        backgroundColor: "var(--color-border)",
        width: "100%",
      }}
    />
  );
}

// ─── Video Placeholder ────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SwatchInfoPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <article style={{ marginTop: "calc(-1 * var(--space-8))" }}>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <style>{`
        /* ── Hero ──────────────────────────────────────────────── */
        .hero-img {
          width: 100%; height: auto; display: block; object-position: center center;
        }

        .hero-title-wrapper {
          position: absolute; top: 72px; left: 50%;
          transform: translateX(-50%);
          width: 95%; max-width: 1100px;
          display: flex; flex-direction: column; align-items: center; gap: var(--space-3);
          text-align: center;
        }
        @media (max-width: 1023px) { .hero-title-wrapper { top: var(--space-6); } }
        @media (max-width: 767px)  { .hero-title-wrapper { top: var(--space-4); max-width: 260px; } }

        .hero-title {
          font-family: var(--font-baskerville), Georgia, serif;
          font-size: clamp(32px, 4vw, 54px); font-weight: 400; color: var(--color-heading);
          line-height: 1.2; letter-spacing: 0.00 em; margin: 0;
        }
        @media (max-width: 1023px) { .hero-title { font-size: var(--text-h2); } }
        @media (max-width: 767px)  { .hero-title { font-size: var(--text-h3); } }

        /* ── Intro block ─────────────────────────────────────── */
        .intro-block { display: flex; flex-direction: column; }
        @media (min-width: 768px) { .intro-block { flex-direction: row; align-items: flex-start; } }

        .intro-meta { flex-shrink: 0; display: flex; gap: var(--space-7); flex-wrap: wrap; }
        @media (max-width: 767px) { .intro-meta { gap: var(--space-5); } }

        /* ── Context section ─────────────────────────────────── */
        .context-section { display: flex; flex-direction: row; align-items: flex-start; }
        @media (max-width: 767px) { .context-section { flex-direction: column; } }

        .context-swatch-wrapper { flex-shrink: 0; display: flex; justify-content: center; }
        @media (max-width: 767px) { .context-swatch-wrapper > * { max-width: 200px; } }

        /* ── User-type grid (Problem 3) ──────────────────────── */
        .user-type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }
        @media (max-width: 767px) { .user-type-grid { grid-template-columns: 1fr; } }

        /* ── Tab navigator ───────────────────────────────────── */
        .tab-nav { width: 100%; margin-bottom: var(--space-8); }
        @media (max-width: 767px) { .tab-label { font-size: 11px !important; } }

        /* ── Tab grids ───────────────────────────────────────── */
        .tab-three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
        @media (max-width: 1023px) { .tab-three-col { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 767px)  { .tab-three-col { grid-template-columns: repeat(3, 1fr); gap: var(--space-2); } }

        .tab-four-col { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); }
        @media (max-width: 1023px) { .tab-four-col { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 767px)  { .tab-four-col { grid-template-columns: 1fr; } }

        .tab-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-5); }
        @media (max-width: 767px) { .tab-two-col { grid-template-columns: 1fr; } }

        /* ── Swatch cards row ────────────────────────────────── */
        .swatch-cards-row { display: flex; gap: var(--space-4); align-items: flex-start; }
        .swatch-card-col { display: flex; flex-direction: column; align-items: center; gap: var(--space-2); flex: 1; min-width: 0; }
        @media (max-width: 767px) { .swatch-card-col { flex-shrink: 0; flex: none; min-width: 140px; } }

        /* ── Pull quote ──────────────────────────────────────── */
        .pull-quote-block { max-width: 100%; overflow: hidden; }


        /* ── Entry Point comparison grid ────────────────────── */
        .entry-point-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: var(--space-5);
          row-gap: var(--space-4);
        }
        .entry-point-card {
          display: grid;
          grid-row: span 4;
          grid-template-rows: subgrid;
        }
        @media (max-width: 767px) {
          .entry-point-grid { grid-template-columns: 1fr; row-gap: var(--space-8); column-gap: 0; }
          .entry-point-card { display: flex; flex-direction: column; grid-row: auto; gap: var(--space-4); }
        }

        /* ── Spec Placement feedback grid ───────────────────── */
        .spec-feedback-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
          margin-top: var(--space-4);
        }
        @media (max-width: 767px) {
          .spec-feedback-grid { grid-template-columns: 1fr; }
          .spec-feedback-grid > div { grid-column: auto !important; }
        }

        /* ── Two-column case study layout ───────────────────── */
        .case-study-layout {
          display: flex;
          flex-direction: row;
          gap: var(--space-8);
          align-items: flex-start;
        }
        .toc-sidebar { display: flex; }
        @media (max-width: 1023px) {
          .case-study-layout { display: block; }
          .toc-sidebar { display: none; }
        }

        /* ── Section scroll offset ───────────────────────────── */
        .section-anchor { scroll-margin-top: 80px; }

`}</style>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <Image
          src="/swatch-info-project-images/correct-swatch case study hero.png"
          alt="Swatch Info feature hero"
          width={5424}
          height={2904}
          loading="eager"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
          quality={90}
        />
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            Simplified Color Documentation in Illustrator
          </h1>

        </div>
      </div>

      {/* Post-hero layout */}
      <div className="container cs-page" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
        <div className="case-study-layout">
          <TableOfContents />
          <div className="cs-content" style={{ flex: 1, minWidth: 0 }}>
        <div
          className="intro-block"
          style={{
            gap: "var(--space-8)",
            paddingTop: "var(--space-8)",
            paddingBottom: "var(--space-9)",
          }}
        >
          {/* Intro paragraph */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "var(--text-body)",
                color: "var(--color-body)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Working with color seems simple… until all those color codes have
              to be shared or documented.
              <br />
              <br />
              Through the <em>Create Swatch Info</em> feature, I turned a manual,
              error-prone process into a single, reliable in-app action. This
              led to simplified color documentation workflows, from creation to
              handoff.
            </p>
          </div>

          {/* Right: metadata sub-columns */}
          <div className="intro-meta">
            {[
              {
                label: "MY ROLE",
                values: ["Research", "Experience Design", "Usability Testing"],
              },
              {
                label: "COLLABORATORS",
                values: ["Design Manager", "Product Manager", "Engineering Team"],
              },
              {
                label: "DURATION",
                values: ["2 months"],
              },
            ].map(({ label, values }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <span className="type-overline" style={{ marginBottom: 0 }}>{label}</span>
                {values.map((v) => (
                  <span
                    key={v}
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-body)",
                      lineHeight: 1.5,
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Section 2: Context ─────────────────────────────────────────── */}
        <div
          id="context"
          className="context-section section-anchor"
          style={{
            gap: "var(--space-9)",
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          {/* Left */}
          <div style={{ flex: 1 }}>
            <span className="type-overline">CONTEXT</span>
            <h2
              className="type-h2"
              style={{ marginBottom: "var(--space-5)", marginTop: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
            >
              What are color specs?
            </h2>
            <p className="type-body" style={{ marginBottom: "var(--space-4)" }}>
              Designers share color information with printers, manufacturers,
              and collaborators through color specification documents. These
              specs capture the technical details needed to reproduce color
              accurately across media and processes.
            </p>
            <p className="type-body" style={{ margin: 0 }}>
              Simply put:{" "}
              <strong>color specs = detailed info about colors used</strong>
            </p>
          </div>

          {/* Right: Swatch card */}
          <div className="context-swatch-wrapper">
            <Image src="/swatch-info-project-images/spec-example-3.png" alt="Color spec card example" width={508} height={640} style={{width:'100%', height:'auto'}} quality={90} className="mx-auto" />
            {/* TODO: add color spec card example image */}
          </div>
        </div>

        <Divider />

        {/* ── Section 3: Problem & Opportunity ─────────────────────────── */}
        <div
          id="problem"
          className="section-anchor"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-9)",
          }}
        >
          {/* Problems 1–3 wrapper — space-10 between blocks, space-4 within each */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>

            {/* Problem 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div>
                <span className="type-overline">PROBLEM</span>
                <h2
                  className="type-h2"
                  style={{ marginTop: 0, marginBottom: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
                >
                  Color info was hidden and hard to structure.
                </h2>
              </div>
              <p className="type-body" style={{ margin: 0 }}>
                To create specs, designers had to manually check colors and copy values by hand, or rebuild specs in another tool.
              </p>
              <Image src="/swatch-info-project-images/Hidden info.png" alt="Color information hidden in Illustrator" width={2080} height={1170} style={{width:'100%', height:'auto'}} quality={90} />
              <Image src="/swatch-info-project-images/copy example 3.png" alt="Manual color copying example" width={2080} height={1170} style={{width:'100%', height:'auto'}} quality={90} />
            </div>

            {/* Problem 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <h2
                className="type-h2"
                style={{ marginTop: 0, marginBottom: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
              >
                Manual copying increases the chance of mistakes.
              </h2>
              <p className="type-body" style={{ margin: 0 }}>
                In print-critical workflows, even small errors have costly consequences.
              </p>
              <Image src="/swatch-info-project-images/copy example 2.png" alt="Copy example" width={2080} height={882} style={{width:'100%', height:'auto'}} quality={90} />
            </div>

            {/* Problem 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <h2
                className="type-h2"
                style={{ marginTop: 0, marginBottom: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
              >
                One size doesn&apos;t fit all.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p
                  className="type-caption"
                  style={{ margin: 0, color: 'var(--color-muted)' }}
                >
                  Sample files from user interviews with Daniela Venezia (Textile designer) and Kitty F. (Graphic, web &amp; textile designer)
                </p>
                <div className="user-type-grid" style={{ alignItems: "start" }}>
                  <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-col-reverse">
                    <p className="type-body" style={{ margin: 0 }}>
                      <strong>Brand designers</strong> need Pantone and ink types clearly specified to ensure consistent branding.
                    </p>
                    <div>
                      <Image src="/swatch-info-project-images/Brand designer.png" alt="Brand designer color spec needs" width={662} height={496} style={{width:'100%', height:'auto'}} quality={90} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-col-reverse">
                    <p className="type-body" style={{ margin: 0 }}>
                      <strong>Packaging designers</strong> need exhaustive detail for test prints.
                    </p>
                    <div>
                      <Image src="/swatch-info-project-images/Packaging designer 2.png" alt="Packaging designer color spec needs" width={662} height={496} style={{width:'100%', height:'auto'}} quality={90} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 items-center md:flex md:flex-col-reverse">
                    <p className="type-body" style={{ margin: 0 }}>
                      <strong>Textile designers</strong> need color order and grouping. One wrong arrangement can make a full pattern unusable.
                    </p>
                    <div>
                      <Image src="/swatch-info-project-images/Fashion designer.png" alt="Fashion designer color spec needs" width={662} height={496} style={{width:'100%', height:'auto'}} quality={90} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Opportunity callout + follow-on paragraph */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <div
              style={{
                borderLeft: "3px solid var(--color-border)",
                paddingLeft: "var(--space-6)",
              }}
            >
              <span className="type-overline">OPPORTUNITY</span>
              <p
                style={{
                  fontFamily: "var(--font-baskerville), Georgia, serif",
                  fontSize: "var(--text-quote)",
                  fontStyle: "italic",
                  color: "var(--color-heading)",
                  lineHeight: "var(--leading-quote)",
                  letterSpacing: "var(--tracking-quote)",
                  margin: 0,
                }}
              >
                Instantly turn existing swatches into flexible, ready-to-share specs.
              </p>
            </div>

            <p className="type-body" style={{ margin: 0 }}>
              Color data already lived in Illustrator in the form of swatches. I
              decided to <strong>design around this existing structure</strong> rather than
              introduce new concepts, which meant the solution could feel native
              to the app from day one.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── Section 5: Design Explorations ────────────────────────────── */}
        <div
          id="design-explorations"
          className="section-anchor"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <span className="type-overline">DESIGN EXPLORATIONS</span>
          <h2
            className="type-h2"
            style={{ marginBottom: "var(--space-4)", marginTop: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
          >
            Focused interventions at every step
          </h2>
          <p
            className="type-body"
            style={{ marginBottom: "var(--space-8)" }}
          >
            I broke the workflow down into four critical aspects, and explored design interventions at each point.
          </p>

          <DesignExplorations />
        </div>

        <Divider />

        {/* ── Section 6: Solution ───────────────────────────────────────── */}
        <div
          id="solution"
          className="section-anchor"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <span className="type-overline">SOLUTION</span>
            <h2
              className="type-h2"
              style={{ marginBottom: "var(--space-4)", marginTop: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
            >
              Fast, accurate spec generation (no more copy-paste!)
            </h2>
            <p className="type-body" style={{ margin: 0 }}>
              Instead of reconstructing color specs by hand, designers now generate structured documentation instantly, straight from the source of truth.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Select the colors that already live in the Swatches panel</p>
            <video
              src="/videos/swatch-step1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Find &quot;Create Swatch Info&quot; in the panel menu</p>
            <video
              src="/videos/swatch-step2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Adjust settings and hit &quot;Create&quot;</p>
            <video
              src="/videos/swatch-step3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>Specs appear instantly at the center of the viewport, ready to share!</p>
            <Image src="/swatch-info-project-images/swatch-step4.png" alt="Specs appear instantly at the center of the viewport" width={2080} height={1170} style={{ width: '100%', height: 'auto' }} quality={90} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <p className="type-body" style={{ margin: 0 }}>
              The swatch card pattern I created adapts to different workflows, scaling across branding, print, and digital use cases:
            </p>
          </div>

          <Image src="/swatch-info-project-images/Swatch card pattern.png" alt="Swatch card variants across branding, print, textile and digital use cases" width={2080} height={1170} style={{width:'100%', height:'auto'}} quality={90} />
          {/* TODO: add swatch card variants image — use full-width frame size */}
        </div>

        <Divider />

        {/* ── Section 7: Impact ─────────────────────────────────────────── */}
        <div
          id="impact"
          className="section-anchor"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
          }}
        >
          <div>
            <span className="type-overline">IMPACT</span>
            <h2
              className="type-h2"
              style={{ marginBottom: "var(--space-4)", marginTop: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
            >
              The best metric? A comment section full of relief.
            </h2>
          </div>

          {/* Sub-sections */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-9)",
            }}
          >
            {/* Sub 1 — community response */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <p className="type-body" style={{ margin: 0 }}>
                This was a long-overdue fix for many users. Within days of
                launch, design creators were making reels about it, racking up
                thousands of views and comment sections full of designers
                who&apos;d been waiting years for exactly this.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <SwatchReelVideo />
                <Image src="/swatch-info-project-images/Sreedhar feedback.png" alt="Internal Adobe feedback from Director of UX Design" width={2080} height={1170} style={{width:'100%', height:'auto'}} quality={90} />
              </div>
            </div>

            {/* Sub 4 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <p className="type-body" style={{ margin: 0 }}>
                The feature also earned a spotlight in Adobe&apos;s official
                livestream, validating its place within the broader Illustrator
                ecosystem.
              </p>
              <LivestreamVideo />
              <p style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--color-muted)',
                marginTop: 'var(--space-3)'
              }}>
                Watch the full video here:{' '}
                <a
                  href="https://www.youtube.com/live/yp4gjZKJwRA?si=2S-LL5iDNn1GZumS"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-body)',
                    textDecoration: 'underline'
                  }}
                >
                  link
                </a>
              </p>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── Section 8: Reflections ────────────────────────────────────── */}
        <div
          id="reflections"
          className="section-anchor"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <span className="type-overline">REFLECTIONS</span>
          <h2
            className="type-h2"
            style={{ marginBottom: "var(--space-9)", marginTop: 0, fontFamily: "var(--font-baskerville)", letterSpacing: 0 }}
          >
            Looking back + looking forward
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "var(--space-6)", alignItems: "start" }}
          >
            {[
              {
                num: "01",
                heading: "Restraint is a design decision",
                body: "Designing for a legacy product means designing around muscle memory. The goal isn't to stand out, it's to fit in so seamlessly that the feature feels like it's always been there.",
              },
              {
                num: "02",
                heading: "Small change, loud response",
                body: "This wasn't a massive feature, but it removed one step from a workflow people repeated daily. The response made clear how long that one step had been frustrating them.",
              },
              {
                num: "03",
                heading: "Solving one problem reveals the next",
                body: "This feature made spec generation dramatically faster. But specs are still static: when artwork changes, the specs don't follow. Live updates and version control are the next problems to solve.",
              },
            ].map(({ num, heading, body }) => (
              <div key={num}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: 'var(--text-ui)',
                    color: "var(--color-muted)",
                    letterSpacing: "0.06em",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {num}
                </span>
                <h4
                  className="type-h4"
                  style={{ marginBottom: "var(--space-3)", marginTop: 0, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", fontWeight: 500 }}
                >
                  {heading}
                </h4>
                <p className="type-body" style={{ margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

          </div>{/* end content column */}
        </div>{/* end case-study-layout */}
      </div>
    </article>
  );
}
