import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Marc",
};

export default function Contact() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Contact
      </h1>

      <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink">
        The quickest way to reach me is by email. I&apos;m also on GitHub —
        many of my repositories are private, but what&apos;s on the main page
        here is a reliable sample of the work.
      </p>

      <dl className="space-y-6">
        <div>
          <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink/50">
            Email
          </dt>
          <dd>
            <a
              href="mailto:marcw203@gmail.com"
              className="text-base text-ink underline decoration-ink/40 underline-offset-4 transition hover:text-secondary hover:decoration-secondary"
            >
              marcw203@gmail.com
            </a>
          </dd>
        </div>

        <div>
          <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-ink/50">
            GitHub
          </dt>
          <dd>
            <a
              href="https://github.com/BionicSticks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-ink underline decoration-ink/40 underline-offset-4 transition hover:text-secondary hover:decoration-secondary"
            >
              github.com/BionicSticks
            </a>
          </dd>
        </div>
      </dl>
    </article>
  );
}
