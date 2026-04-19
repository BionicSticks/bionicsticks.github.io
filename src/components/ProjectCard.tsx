import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}/`}
      className="group block overflow-hidden rounded-lg border border-ink/15 bg-tertiary transition hover:border-secondary"
    >
      <div className="relative aspect-video w-full bg-ink/5">
        {project.video ? (
          <video
            src={project.video}
            className="h-full w-full object-cover"
            preload="metadata"
            muted
          />
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-ink/40">
            Screenshot coming soon
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-ink/70">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}
