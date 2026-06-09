"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sreedhar Ranganathan",
    title: "Director - User Experience Design",
    quote:
      "Aabha has delivered a wide range of features and demonstrated a strong ability to context-switch across different problem spaces. Her turnaround time is notably swift.",
  },
  {
    name: "Bhavya Minocha",
    title: "Senior Product Designer",
    quote:
      "She is dependable, fast, and handles feedback with a lot of maturity, which is not easy when things are moving quickly.",
  },
  {
    name: "Vidushi Keshwani",
    title: "Product Manager 2",
    quote:
      "She is detail oriented, with the urge to understand the problem. Her questions are always precise and design directions are data driven. The feature she worked on - Gradient Presets - was presented on the MAX stage and garnered a very loud cheer from the audience.",
  },
  {
    name: "Ishita Singh",
    title: "Product Designer",
    quote:
      "Aabha is a calm presence in the midst of chaos, with a natural clarity in communicating her ideas. Her positivity and thoughtful approach make a meaningful impact on both the product and the team culture.",
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "none",
        paddingTop: 0,
        paddingRight: "96px",
        paddingBottom: "var(--space-10)",
        paddingLeft: "96px",
      }}
    >
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-8)",
          paddingTop: "var(--space-8)",
        }}
      >
        {/* Left: Photo */}
        <Image
          src="/images/about-photo.jpg"
          width={424}
          height={520}
          quality={90}
          alt="Aabha Kanvinde"
          style={{ objectFit: "cover", width: "42%", flexShrink: 0 }}
        />

        {/* Right: Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-5)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-baskerville), Georgia, serif",
              fontSize: "var(--text-h1)",
              fontWeight: 400,
              color: "var(--color-heading)",
              lineHeight: 1.15,
              margin: 0,
              marginBottom: "var(--space-5)",
            }}
          >
            I design tools that creatives like myself live and work in.
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {[
              "My path here wasn't straight. I started in illustration, took on projects that pulled me through visual and brand design, motion, marketing and creative direction, and eventually landed in product design. I didn't plan any of it. I just kept following the most interesting problem in the room.",
              "That's still how I work. I move fast, question everything, and obsess over details that most people don't notice (I will absolutely notice when that button is 2px off).",
              "I care about this because tools aren't just software. They shape how people think, create, and get things done every day. That weight matters to me.",
              "I'm drawn to projects that don't fit in one box. The best work I've done was always the kind I didn't know I could do until I did it. I want to keep expanding into new problems, new domains, and directions I haven't even thought of yet.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-body)",
                  lineHeight: 1.75,
                  margin: 0,
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hobbies ───────────────────────────────────────────────────── */}
      <section style={{ paddingTop: "var(--space-9)" }}>
        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-body)",
            marginBottom: "var(--space-4)",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
          }}
        >
          Outside of work, I enjoy powerlifting, high-altitude trekking, petting animals and experimenting with recipes.
        </p>

        <div style={{ display: "flex", gap: "4px" }}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div
              key={n}
              style={{
                flex: 1,
                aspectRatio: "1/1",
                background: "var(--color-surface)",
                overflow: "hidden",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: "var(--space-9)" }}>
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            color: "var(--color-body)",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 300,
            textAlign: "center",
            marginBottom: "var(--space-7)",
          }}
        >
          But wait, don&apos;t take my word for it :P
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-5)",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-6)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
            >
              {/* Avatar + Name row */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "var(--color-border)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-heading)",
                      fontWeight: 600,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    {t.name}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {t.title}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-body)",
                  lineHeight: 1.75,
                  margin: 0,
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 300,
                }}
              >
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
