interface SneakPeekCardProps {
  title: string;
  imageSrc?: string;
}

export default function SneakPeekCard({ title, imageSrc }: SneakPeekCardProps) {
  return (
    <div className="group cursor-default">
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
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{ backgroundColor: "var(--color-surface)" }}
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
          color: "var(--color-body)",
        }}
      >
        {title}
      </p>
    </div>
  );
}
