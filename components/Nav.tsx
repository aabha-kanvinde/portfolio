"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavScrollState = "atTop" | "hidden" | "visible";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<NavScrollState>("atTop");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

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

  if (isCaseStudy) return null;

  const linkBase =
    "type-ui text-body transition-colors relative " +
    "after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px " +
    "after:bg-heading after:transition-all after:duration-150 " +
    "hover:text-heading hover:after:w-full";

  const linkClass = (href: string) =>
    `${linkBase} ${pathname === href ? "text-heading after:w-full" : ""}`;

  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: (isCaseStudy && scrollState === "hidden") ? "-80px" : 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: (isCaseStudy && scrollState === "atTop") ? "transparent" : "var(--color-bg)",
    ...(isCaseStudy && scrollState === "atTop" && {
      backdropFilter: "none",
      borderBottom: "none",
      boxShadow: "none",
    }),
    height: "64px",
    overflow: "visible",
    ...(isCaseStudy && {
      transition: "background 150ms ease, top 300ms ease 50ms",
      willChange: "transform",
    }),
  };

  return (
    <header style={headerStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          maxWidth: "1200px",
          marginInline: "auto",
          overflow: "visible",
        }}
        className="nav-inner"
      >
        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "var(--space-6)" }}
        >
          <Link href="/" className={linkClass("/")}>Work</Link>
          <span className="type-ui" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>About</span>
          <span className="type-ui" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>Side Quests</span>
          <span className="type-ui" style={{ color: "var(--color-muted)", pointerEvents: "none" }}>Resume</span>
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
        .nav-inner { padding-inline: 24px; }
        @media (min-width: 768px) {
          .nav-inner { padding-inline: 24px; }
        }
        @media (min-width: 1024px) {
          .nav-inner { padding-inline: 24px; }
        }
      `}</style>
    </header>
  );
}
