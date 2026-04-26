import Link from "next/link";

export const metadata = {
  title: "Generative Edit — Aabha",
  description: "Designing the generative edit experience in Illustrator",
};

export default function InstructEditPage() {
  return (
    <div className="container" style={{ paddingBlock: "var(--space-9)" }}>
      <div style={{ maxWidth: "680px" }}>
        <h1 className="type-h1" style={{ marginBottom: "var(--space-4)" }}>
          Generative Edit
        </h1>
        <p className="type-body-lg text-muted" style={{ marginBottom: "var(--space-7)" }}>
          Designing the generative edit experience in Illustrator
        </p>
        <p className="type-body">
          This case study is currently being written. Come back soon.
        </p>

        <div
          className="border-t border-border"
          style={{ marginTop: "var(--space-7)", paddingTop: "var(--space-6)" }}
        >
          <Link
            href="/"
            className="type-body-sm text-muted hover:text-body transition-colors duration-150"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
}
