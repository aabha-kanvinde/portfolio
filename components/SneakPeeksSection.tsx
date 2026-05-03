"use client";

import { useState, useEffect, useRef } from "react";

type SneakPeek = {
  id: number;
  title: string;
  feature: string;
  shipped: string;
  stat: string;
  description: string;
  gradient: string;
  aspectRatio: string;
};

const items: SneakPeek[] = [
  {
    id: 4,
    title: "Helped 218k+ designers find and apply gradients quickly",
    feature: "Gradient presets",
    shipped: "July 2025",
    stat: "25% of total MAU in the first month after release.",
    description: "Finding a gradient you love, but having to recreate it from scratch every time is such a pain. Previously there was no way to save or reapply a gradient without going through a separate libraries panel. I revamped the gradient panel to include a library of presets and user-saved gradients, so that users can quickly apply gradients without opening any more panels.",
    gradient: "linear-gradient(135deg, #D4B8C8 0%, #B8C8B4 100%)",
    aspectRatio: "2/3",
  },
  {
    id: 3,
    title: "Transformed the pencil tool experience from guesswork to instant feedback",
    feature: "Real-Time Pencil with Live Curve Fitting",
    shipped: "July 2025",
    stat: "61% adoption one month after release.",
    description: "The old Pencil tool only rendered effects after you stopped drawing. Every stroke was a guess. This feature changed that completely by giving real-time feedback to users as they draw. The main challenge was onboarding- how do you get designers with years of existing habits to actually discover and trust something new in a tool they already feel comfortable with?",
    gradient: "linear-gradient(135deg, #E8C4B8 0%, #B8D4C4 100%)",
    aspectRatio: "4/3",
  },
  {
    id: 6,
    title: "One click centre- because why should it take two?",
    feature: "Horizontal and vertical Align Center",
    shipped: "February 2026",
    stat: "Long-overdue quality-of-life fix, received enthusiastically by the community.",
    description: "The Align panel had separate buttons for horizontal and vertical centering, but no way to do both at once. Even though it's a small friction, designers encounter this multiple times a day, and the frustration adds up. The solution to this was super simple in theory. The tricky part for me was fitting a new action into an old panel that already felt complete, without making it feel cluttered.",
    gradient: "linear-gradient(135deg, #E8C8A8 0%, #A8C8B8 100%)",
    aspectRatio: "2/3",
  },
  {
    id: 5,
    title: "~Actually useful~ gradient suggestions based on existing colors",
    feature: "Gradient suggestions",
    shipped: "July 2025",
    stat: "Eliminated the most frustrating first step of gradient workflow, showcased at Adobe MAX.",
    description: "Previously, when a gradient was applied to an object, Illustrator defaulted to a generic black-to-white, ignoring the object's existing color entirely. I designed this intervention to help designers start the gradient workflow on the right foot. The feature reads the selected object's color and suggests relevant starting points. This eliminated the most common first step of manually adjusting the gradient to something usable.",
    gradient: "linear-gradient(135deg, #B8B8E0 0%, #C8C4E8 100%)",
    aspectRatio: "16/10",
  },
  {
    id: 7,
    title: "Made Illustrator's settings *slightly* less chaotic",
    feature: "Search Bar in Preferences modal",
    shipped: "April 2025",
    stat: "Reduced time to find Preferences options.",
    description: "Illustrator's Preferences modal has hundreds of settings across multiple categories. If you didn't know exactly where something lived, you had to scroll through everything. I designed a search and navigation experience for this modal. This was the kind of fix that makes you wonder why it wasn't there from the start.",
    gradient: "linear-gradient(135deg, #C8E0D8 0%, #E0E8C8 100%)",
    aspectRatio: "4/3",
  },
  {
    id: 9,
    title: "Ungroup complex, nested artworks in one click",
    feature: "Ungroup All",
    shipped: "November 2024",
    stat: "Finally solved a problem so obvious that it's funny :P",
    description: "This feature request had been sitting in community forums for years. Illustrator's Ungroup function works one layer at a time. Fully ungrouping an artwork meant repeating the same action over and over. I designed the 'Ungroup All' functionality through multiple access points- a small but highly rewarding quality-of-life fix.",
    gradient: "linear-gradient(135deg, #B8C8E0 0%, #C8E0D4 100%)",
    aspectRatio: "16/10",
  },
  {
    id: 2,
    title: "Increased Firefly Boards usage via interop with Illustrator",
    feature: "Illustrator X Firefly Interoperability",
    shipped: "February 2026",
    stat: "Increased cross-product engagement.",
    description: "Firefly Boards is a powerful moodboarding tool, but Illustrator users did not have a natural path to get there. I looked for the moments in the Illustrator workflow where that bridge made sense, and designed the interior workflow and onboarding that helped users discover and use Boards.",
    gradient: "linear-gradient(135deg, #A8D4C8 0%, #D4E8A8 100%)",
    aspectRatio: "2/3",
  },
  {
    id: 1,
    title: "Revamped homescreen to jumpstart creation with Firefly",
    feature: "Homescreen redesign X Firefly",
    shipped: "May 2026",
    stat: "Cross-product initiative within a 2-week sprint window.",
    description: "The Illustrator homescreen used to house various static marketing touts. Working across multiple product teams within a tight sprint, the tout area was replaced with a Firefly prompt bar that lets users start by generating inspiration for their artworks, alongside a condensed card row for discovery.",
    gradient: "linear-gradient(135deg, #C4B5E8 0%, #A8C4E0 100%)",
    aspectRatio: "4/3",
  },
];

const row1Ids = [4, 3];
const row2Ids = [5, 6, 2];
const row3Ids = [7, 9, 1];

function getRow(ids: number[]): SneakPeek[] {
  return ids.map((id) => items.find((item) => item.id === id)!);
}

export default function SneakPeeksSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const active = items.find((item) => item.id === activeId) ?? null;
  const fireflyVideoRef = useRef<HTMLVideoElement>(null);
  const alignCenterVideoRef = useRef<HTMLVideoElement>(null);
  const gradientPresetsVideoRef = useRef<HTMLVideoElement>(null);
  const gradientSuggestionsVideoRef = useRef<HTMLVideoElement>(null);
  const realTimePencilVideoRef = useRef<HTMLVideoElement>(null);
  const ungroupAllVideoRef = useRef<HTMLVideoElement>(null);
  const searchPreferencesVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    if (activeId !== null) {
      const rafId = requestAnimationFrame(() => setModalVisible(true));
      return () => cancelAnimationFrame(rafId);
    } else {
      setModalVisible(false);
    }
  }, [activeId]);

  function playVideo(id: number) {
    switch (id) {
      case 2: fireflyVideoRef.current?.play(); break;
      case 3: realTimePencilVideoRef.current?.play(); break;
      case 4: gradientPresetsVideoRef.current?.play(); break;
      case 5: gradientSuggestionsVideoRef.current?.play(); break;
      case 6: alignCenterVideoRef.current?.play(); break;
      case 7: searchPreferencesVideoRef.current?.play(); break;
      case 9: ungroupAllVideoRef.current?.play(); break;
    }
  }

  function pauseResetVideo(id: number) {
    const elMap: Record<number, HTMLVideoElement | null> = {
      2: fireflyVideoRef.current,
      3: realTimePencilVideoRef.current,
      4: gradientPresetsVideoRef.current,
      5: gradientSuggestionsVideoRef.current,
      6: alignCenterVideoRef.current,
      7: searchPreferencesVideoRef.current,
      9: ungroupAllVideoRef.current,
    };
    const el = elMap[id];
    if (el) { el.pause(); el.currentTime = 0; el.load(); }
  }

  function handleMouseEnter(id: number) {
    setHoveredId(id);
    playVideo(id);
  }

  function handleMouseLeave(id: number) {
    setHoveredId(null);
    pauseResetVideo(id);
  }

  function handleModalClose() {
    setActiveId(null);
  }

  const mediaStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    display: "block",
  };

  function renderCardMedia(item: SneakPeek) {
    switch (item.id) {
      case 1:
        // eslint-disable-next-line @next/next/no-img-element
        return <img src="/sneak-peeks/aiXff.png" alt="" style={mediaStyle} />;
      case 2:
        return <video ref={fireflyVideoRef} src="/sneak-peeks/IllustratorXFireflyBoards.mp4" poster="/sneak-peeks/AiXFFBoards.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 3:
        return <video ref={realTimePencilVideoRef} src="/sneak-peeks/pencil.mp4" poster="/sneak-peeks/pencil.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 4:
        return <video ref={gradientPresetsVideoRef} src="/sneak-peeks/gradient-presets-2.mp4" poster="/sneak-peeks/presets2.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 5:
        return <video ref={gradientSuggestionsVideoRef} src="/sneak-peeks/gradient-suggestions-2.mp4" poster="/sneak-peeks/suggestions2.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 6:
        return <video ref={alignCenterVideoRef} src="/sneak-peeks/align-center.mp4" poster="/sneak-peeks/align2.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 7:
        return <video ref={searchPreferencesVideoRef} src="/sneak-peeks/search-preferences.mp4" poster="/sneak-peeks/search-preferences.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      case 9:
        return <video ref={ungroupAllVideoRef} src="/sneak-peeks/ungroup-all-2.mp4" poster="/sneak-peeks/ungroup-all.png" muted loop playsInline aria-label={item.title} style={mediaStyle} />;
      default:
        return <div style={{ width: "100%", aspectRatio: "16/9", background: item.gradient, display: "block" }} />;
    }
  }

  function renderCard(item: SneakPeek) {
    const hovered = hoveredId === item.id;
    return (
      <div
        key={item.id}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={() => handleMouseLeave(item.id)}
        onClick={() => setActiveId(item.id)}
      >
        <div
          style={{
            borderRadius: 0,
            overflow: "hidden",
            width: "100%",
            aspectRatio: "16/9",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered ? "0 8px 24px rgba(45, 26, 10, 0.12)" : "none",
            transition: "transform 200ms ease, box-shadow 200ms ease",
          }}
        >
          {renderCardMedia(item)}
        </div>
        <h3
          style={{
            margin: "var(--space-3) 0 0 0",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "var(--text-body)",
            color: "var(--color-heading)",
            lineHeight: 1.4,
          }}
        >
          {item.title}
        </h3>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .sneak-columns {
          padding-inline: 48px;
        }
        @media (min-width: 768px) { .sneak-columns { padding-inline: 48px; } }
        @media (min-width: 1024px) { .sneak-columns { padding-inline: 48px; } }
      `}</style>

      <div className="sneak-columns gap-8 md:gap-[72px]" style={{ display: "flex", flexDirection: "column" }}>
        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[72px]">
          {getRow(row1Ids).map((item) => renderCard(item))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[72px]">
          {getRow(row2Ids).map((item) => renderCard(item))}
        </div>

        {/* Row 3: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[72px]">
          {getRow(row3Ids).map((item) => renderCard(item))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-6)",
          }}
          onClick={handleModalClose}
        >
          <div
            style={{
              position: "relative",
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              maxWidth: "1100px",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              opacity: modalVisible ? 1 : 0,
              transform: modalVisible ? "scale(1)" : "scale(0.97)",
              transition: "opacity 150ms ease-out, transform 150ms ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleModalClose}
              style={{
                position: "absolute",
                top: "var(--space-4)",
                right: "var(--space-4)",
                zIndex: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "18px",
                color: "var(--color-heading)",
                lineHeight: 1,
                padding: "4px",
              }}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Image */}
            {active.id === 1 ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/sneak-peeks/aiXff.png"
                alt=""
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block', flexShrink: 1, minHeight: 0 }}
              />
            ) : active.id === 7 ? (
              <video
                src="/sneak-peeks/search-preferences.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 9 ? (
              <video
                src="/sneak-peeks/ungroup-all-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 6 ? (
              <video
                src="/sneak-peeks/align-center.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 5 ? (
              <video
                src="/sneak-peeks/gradient-suggestions-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 4 ? (
              <video
                src="/sneak-peeks/gradient-presets-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 3 ? (
              <video
                src="/sneak-peeks/pencil.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
              />
            ) : active.id === 2 ? (
              <div style={{ position: 'relative' }}>
                <video
                  src="/sneak-peeks/IllustratorXFireflyBoards.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full"
                  style={{ aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  background: 'rgba(249, 247, 244, 0.5)',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-body-sm)',
                  color: 'rgba(26, 25, 22, 0.85)',
                  fontFamily: 'var(--font-dm-sans)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 10,
                }}>
                  *visuals taken from official marketing content
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: active.gradient,
                  flexShrink: 1,
                  minHeight: 0,
                }}
              />
            )}

            {/* Content */}
            <div style={{ padding: "var(--space-6)", flexShrink: 0 }}>
              <h3
                style={{
                  fontFamily: "var(--font-baskerville), Georgia, serif",
                  fontSize: "var(--text-h2)",
                  fontWeight: 400,
                  color: "var(--color-heading)",
                  letterSpacing: "var(--tracking-h2)",
                  lineHeight: "var(--leading-h2)",
                  margin: "0 0 var(--space-3) 0",
                }}
              >
                {active.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 600,
                  color: "var(--color-body)",
                  margin: 0,
                }}
              >
                {active.feature} &middot; {active.shipped}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "var(--text-body-sm)",
                  fontWeight: 600,
                  color: "var(--color-body)",
                  margin: "0 0 var(--space-5) 0",
                }}
              >
                {active.stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: "var(--text-body)",
                  color: "var(--color-body)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {active.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
