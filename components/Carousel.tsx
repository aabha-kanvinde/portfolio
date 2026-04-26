"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export interface CarouselItem {
  title: string;
  href: string;
  imageSrc?: string;
  status: "live" | "progress" | "soon";
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  // Clone last item at front, first item at back for seamless infinite loop
  const extended = [items[items.length - 1], ...items, items[0]];
  const n = extended.length;
  const slideWidthPct = 100 / n;

  const [currentIndex, setCurrentIndex] = useState(1); // start at first real item
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 3000);
  }, [advance]);

  // Autoplay — start/stop based on pause state
  useEffect(() => {
    if (!isPaused) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startTimer]);

  // Re-enable transition after a silent index jump (double-RAF ensures
  // the browser has painted the new position before animating again)
  useEffect(() => {
    if (!isTransitioning) {
      let raf1: number;
      const raf0 = requestAnimationFrame(() => {
        raf1 = requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => {
        cancelAnimationFrame(raf0);
        cancelAnimationFrame(raf1);
      };
    }
  }, [isTransitioning]);

  const handleTransitionEnd = () => {
    if (currentIndex >= n - 1) {
      // Reached clone of first item — jump silently to real first
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      // Reached clone of last item — jump silently to real last
      setIsTransitioning(false);
      setCurrentIndex(items.length);
    }
  };

  const goNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    startTimer(); // reset the 3s autoplay timer
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    startTimer();
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center" style={{ gap: "var(--space-5)" }}>

        {/* ── Left arrow ──────────────────────────────────────────── */}
        <button
          onClick={goPrev}
          className="carousel-arrow"
          aria-label="Previous project"
        >
          &#8249;
        </button>

        {/* ── Track ───────────────────────────────────────────────── */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex"
            style={{
              width: `${n * 100}%`,
              transform: `translateX(-${currentIndex * slideWidthPct}%)`,
              transition: isTransitioning ? "transform 400ms ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((item, i) => {
              const isClickable = item.status !== "soon";
              const displayTitle =
                item.status === "soon" ? "Coming soon" : item.title;
              const slideStyle = { width: `${slideWidthPct}%` };

              const inner = (
                <>
                  {/* Image */}
                  <div
                    className="overflow-hidden rounded-[var(--radius-md)]"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <div
                      className="w-full h-full group-hover:scale-[1.03]"
                      style={{ transition: `transform var(--transition-base)` }}
                    >
                      {item.imageSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.imageSrc}
                          alt={displayTitle}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundColor:
                              item.status === "soon"
                                ? "var(--color-surface)"
                                : "var(--color-border)",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <p
                    style={{
                      marginTop: "var(--space-3)",
                      fontFamily:
                        "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: "var(--text-body)",
                      fontWeight: 500,
                      color:
                        item.status === "soon"
                          ? "var(--color-muted)"
                          : "var(--color-body)",
                    }}
                  >
                    {displayTitle}
                  </p>
                </>
              );

              return isClickable ? (
                <Link
                  key={i}
                  href={item.href}
                  style={slideStyle}
                  className="block group"
                >
                  {inner}
                </Link>
              ) : (
                <div key={i} style={slideStyle} className="group cursor-default">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right arrow ─────────────────────────────────────────── */}
        <button
          onClick={goNext}
          className="carousel-arrow"
          aria-label="Next project"
        >
          &#8250;
        </button>

      </div>
    </div>
  );
}
