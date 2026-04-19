import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Marc",
  description:
    "An engineer shipping real products with an AI-forward toolchain — how I work and what I've built.",
};

export default function About() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        About
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-ink">
        <p>
          I&apos;m Marc — <span className="font-mono text-sm">BionicSticks</span>{" "}
          on GitHub. I&apos;m an engineer with a background in bioinformatics
          and data science, and my work spans scientific data platforms,
          consumer mobile apps, signal processing, and LLM-native products. The
          projects listed here are the ones I&apos;ve shipped end-to-end —
          design, architecture, implementation, and the decisions that
          didn&apos;t make it to the final cut.
        </p>

        <h2 className="pt-6 text-2xl font-semibold tracking-tight text-ink">
          How I work
        </h2>
        <p>
          I build AI-forward. I use Claude and Cursor every day, and I
          don&apos;t hide that: the debugging loop is tighter, the iteration
          cycle is faster, and I get more useful products out the door. What
          I do is direct the work — architecture, product thesis, data model,
          UX, the calls that matter — and let the tools accelerate the parts
          that don&apos;t need me present for every keystroke.
        </p>
        <p>
          This portfolio is deliberately AI-assisted. I also maintain a
          separate hand-coded portfolio — plain HTML and CSS, typed by hand —
          because I like being honest about what I can do without help, and
          because the two modes teach different things. If that distinction
          matters for what you&apos;re evaluating, I&apos;m happy to share it.
        </p>

        <h2 className="pt-6 text-2xl font-semibold tracking-tight text-ink">
          What I&apos;m looking for
        </h2>
        <p>
          Engineering roles where the product has real users, the problems
          span domains, and the team treats LLMs as a first-class part of the
          toolchain rather than a curiosity. Most at home working across
          frontend, backend, and whatever the product needs me to learn next.
        </p>
      </div>
    </article>
  );
}
