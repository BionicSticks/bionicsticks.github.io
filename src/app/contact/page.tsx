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
        If you&apos;re here from my CV, you already have my direct details.
        For everything else, drop a line via the button below or find me on
        GitHub.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:m.enquiries@protonmail.com?subject=Portfolio%20enquiry"
          className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-ink transition hover:opacity-90"
        >
          Get in touch →
        </a>
        <a
          href="https://github.com/BionicSticks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-secondary hover:text-secondary"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
