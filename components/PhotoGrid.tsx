// TODO: micro-animation — photos scale slightly on hover
interface Photo {
  src?: string;
  alt: string;
  category: string;
  color: string;
}

const photos: Photo[] = [
  { alt: "Powerlifting — placed at competition", category: "Powerlifting", color: "#D4C5B0" },
  { alt: "High altitude trek",                   category: "Trekking",     color: "#B8C4C2" },
  { alt: "Home cooking",                         category: "Cooking",      color: "#C8B89A" },
  { alt: "Home barista coffee",                  category: "Coffee",       color: "#A89070" },
  { alt: "Animals",                              category: "Animals",      color: "#C4C8B0" },
  { alt: "Painting",                             category: "Painting",     color: "#B0B4C8" },
];

export default function PhotoGrid() {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gridAutoRows: "180px",
        gap: "var(--space-3)",
      }}
    >
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-[var(--radius-md)] ${i % 3 === 0 ? "row-span-2" : ""}`}
          style={{ backgroundColor: photo.color }}
        >
          {photo.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-end"
              style={{ padding: "var(--space-3)" }}
            >
              <span className="type-overline" style={{ color: "rgba(44,42,39,0.5)", marginBottom: 0 }}>
                {photo.category}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
