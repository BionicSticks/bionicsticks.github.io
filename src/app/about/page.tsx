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
          projects listed here are recent builds I&apos;ve shipped end-to-end,
          design, architecture, implementation. Larger full-stack products and
          data-heavy network-analysis work aren&apos;t shown here for IP
          reasons; happy to walk through them in conversation.
        </p>

        <h2 className="pt-6 text-2xl font-semibold tracking-tight text-ink">
          How I work
        </h2>
        <p>
          While my formal training is in genomic science and associated data
          analysis, where I&apos;ve developed strong Python and R skills, I
          now build AI-forward. I use Claude and Cursor every day, and I
          don&apos;t hide that: the debugging loop is tighter, the iteration
          cycle is faster, and I get more useful products out the door. I use
          the most up-to-date tools to accelerate project creation, shipping,
          and implementation, while focusing on functionality, utility, and
          testing. Most importantly, I bring together my experience as a
          research scientist, web developer, and musician to apply in-depth
          project knowledge and utility edge cases to testing and development.
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
          toolchain rather than a curiosity. At home working across the full
          stack, but most comfortable extracting insight and utility from
          complex signals and data — audio DSP on watch escapements, statistics
          and ML across proteomic arrays, or shaping raw language-model output
          into something structured enough to ship.
        </p>
      </div>
    </article>
  );
}
