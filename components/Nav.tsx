"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavScrollState = "atTop" | "hidden" | "visible";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<NavScrollState>("atTop");
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);
  const lastScrollY = useRef(0);

  const isCaseStudy = pathname.startsWith("/work/");

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => {
    if (!isCaseStudy) {
      setScrollState("atTop");
      prevScrollY.current = 0;
      return;
    }
  }, [isCaseStudy, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isCaseStudy) return null;

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "rgba(248, 248, 246, 0.8)",
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 300ms ease",
  };

  const navLinkStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "var(--color-muted)",
    textDecoration: "none",
    pointerEvents: "none" as const,
  };

  return (
    <header style={headerStyle}>
      <div className="nav-bar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Name */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "var(--color-muted)",
            textDecoration: "none",
          }}
        >
          Aabha Kanvinde
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center" style={{ gap: "48px" }}>
          <span style={navLinkStyle}>about</span>
          <span style={navLinkStyle}>side quests</span>
          <span style={navLinkStyle}>resume</span>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col p-2 -mr-2"
          style={{ gap: "6px" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-5 h-px bg-body transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-body transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-body transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-bg border-b border-border flex flex-col"
          style={{ padding: "var(--space-3) var(--space-5) var(--space-5)", gap: "var(--space-5)" }}
        >
          <Link href="/" className="type-body-lg font-medium text-body hover:text-heading transition-colors duration-150">Work</Link>
          <span className="type-body-lg font-medium" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>About</span>
          <span className="type-body-lg font-medium" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>Side Quests</span>
          <span className="type-body-lg font-medium" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>Resume</span>
        </div>
      )}

      <style>{`
        .nav-bar { padding: 12px; }
        @media (min-width: 1024px) { .nav-bar { padding: 12px 96px; } }
      `}</style>
    </header>
  );
}
