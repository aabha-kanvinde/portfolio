import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  href: string;
  imageSrc?: string;
  status: "live" | "progress" | "soon";
}

export default function CaseStudyCard({
  title,
  href,
  imageSrc,
  status,
}: CaseStudyCardProps) {
  const isClickable = status !== "soon";
  const displayTitle = status === "soon" ? "Coming soon" : title;

  const card = (
    <div className={`group ${isClickable ? "cursor-pointer" : "cursor-default"}`}>
      {/* ── Image block ────────────────────────────────────────────── */}
      <div
        className="overflow-hidden rounded-[var(--radius-md)]"
        style={{ aspectRatio: "3/2" }}
      >
        <div
          className="w-full h-full group-hover:scale-[1.03]"
          style={{ transition: `transform var(--transition-base)` }}
        >
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={displayTitle}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                backgroundColor:
                  status === "soon"
                    ? "var(--color-surface)"
                    : "var(--color-border)",
              }}
            />
          )}
        </div>
      </div>

      {/* ── Title below ────────────────────────────────────────────── */}
      <p
        style={{
          marginTop: "var(--space-3)",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontSize: "var(--text-body)",
          fontWeight: 500,
          color:
            status === "soon"
              ? "var(--color-muted)"
              : "var(--color-body)",
        }}
      >
        {displayTitle}
      </p>
    </div>
  );

  return isClickable ? <Link href={href}>{card}</Link> : card;
}
