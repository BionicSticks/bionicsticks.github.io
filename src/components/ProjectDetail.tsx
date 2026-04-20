import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-ink/60 transition hover:text-secondary"
      >
        ← All projects
      </Link>

      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-ink/75">
          {project.tagline}
        </p>
      </header>

      <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg border border-ink/15 bg-ink/5">
        {project.video ? (
          <video
            src={project.video}
            className="h-full w-full object-cover"
            controls
            preload="metadata"
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-ink/40">
            Screenshot coming soon
          </div>
        )}
      </div>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
          Problem
        </h2>
        <p className="text-base leading-relaxed text-ink">
          {project.problem}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
          Approach
        </h2>
        <p className="text-base leading-relaxed text-ink">
          {project.approach}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
          My role
        </h2>
        <p className="text-base leading-relaxed text-ink">
          {project.role}
        </p>
      </section>

      {project.outcome && (
        <section className="mb-10">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
            Outcome
          </h2>
          <p className="text-base leading-relaxed text-ink">
            {project.outcome}
          </p>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink/50">
            Gallery
          </h2>
          <div className="space-y-10">
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <h3 className="mb-3 text-base font-semibold tracking-tight text-ink">
                  {item.heading}
                </h3>
                <div className="overflow-hidden rounded-lg border border-ink/15 bg-ink/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {(project.liveUrl || project.githubUrl) && (
        <section className="mt-12 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-ink transition hover:opacity-90"
            >
              Visit live site →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-secondary hover:text-secondary"
            >
              GitHub
            </a>
          )}
        </section>
      )}
    </article>
  );
}
