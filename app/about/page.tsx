import Button from "@/components/Button";
import PhotoGrid from "@/components/PhotoGrid";

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBlock: "var(--space-8)" }}>
      <div style={{ maxWidth: "680px" }}>

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <section style={{ marginBottom: "var(--space-9)" }}>
          <h1 className="type-h1" style={{ marginBottom: "var(--space-6)" }}>
            A little about me.
          </h1>
          <div className="space-y-5">
            <p className="type-body-lg">
              I&apos;m a product designer with roots in visual and brand design — which
              means I tend to see things other product designers miss, and care about
              things that might otherwise get deprioritized.
            </p>
            <p className="type-body-lg">
              I&apos;ve spent the last two years at Adobe Illustrator, working on
              everything from GenAI features to small quality-of-life improvements
              that users actually noticed. I care about the full picture: the
              strategy, the flow, and the 2px detail that makes something feel right.
            </p>
          </div>
        </section>

        {/* ── What excites me ───────────────────────────────────────── */}
        <section
          className="border-t border-border"
          style={{ paddingTop: "var(--space-8)", marginBottom: "var(--space-9)" }}
        >
          <h2 className="type-h2" style={{ marginBottom: "var(--space-5)" }}>
            What gets me excited
          </h2>
          <div className="space-y-5">
            <p className="type-body-lg">
              {/* Aabha to write — placeholder copy below */}
              Designing for creative professionals means designing for people who
              notice everything. The stakes feel higher, the feedback is sharper,
              and the satisfaction of shipping something elegant is unmatched.
            </p>
            <p className="type-body-lg">
              I&apos;m drawn to the intersection of craft and systems — the moments
              where a well-thought-out design pattern makes a product feel smarter
              without the user ever noticing why.
            </p>
            <p className="type-body-lg">
              GenAI in creative tools is the most interesting space in design right
              now. Done well, it amplifies the creator. Done poorly, it just adds
              noise. That tension is exactly where I want to work.
            </p>
          </div>
        </section>

        {/* ── What I'm chasing ──────────────────────────────────────── */}
        <section
          className="border-t border-border"
          style={{ paddingTop: "var(--space-8)", marginBottom: "var(--space-9)" }}
        >
          <h2 className="type-h2" style={{ marginBottom: "var(--space-5)" }}>
            What I&apos;m chasing
          </h2>
          <div className="space-y-5">
            {/* Aabha to write — placeholder copy below */}
            <p className="type-body-lg">
              I want to go deeper into motion and interaction design — the layer
              where static screens come alive. I&apos;m also curious about design
              leadership: what it looks like to raise the craft of a whole team,
              not just your own work.
            </p>
          </div>
        </section>
      </div>

      {/* ── Side Quests ───────────────────────────────────────────────── */}
      <section
        className="border-t border-border"
        style={{ paddingTop: "var(--space-8)", marginBottom: "var(--space-9)" }}
      >
        {/* TODO: micro-animation — photos scale slightly on hover */}
        <h2
          className="type-h2"
          style={{ fontStyle: "italic", marginBottom: "var(--space-3)" }}
        >
          Outside the screen
        </h2>
        <p className="type-body" style={{ marginBottom: "var(--space-7)" }}>
          I&apos;m a big believer that a full life makes better work.
        </p>
        <PhotoGrid />
      </section>

      {/* ── Resume CTA ────────────────────────────────────────────────── */}
      <section
        className="border-t border-border"
        style={{ paddingTop: "var(--space-8)", maxWidth: "680px" }}
      >
        <h2 className="type-h2" style={{ marginBottom: "var(--space-3)" }}>
          Want the full picture?
        </h2>
        <p className="type-body text-muted" style={{ marginBottom: "var(--space-6)" }}>
          Download my resume for a structured look at my experience.
        </p>
        <Button href="/resume.pdf" variant="outline" download>
          Download Resume
        </Button>
      </section>
    </div>
  );
}
