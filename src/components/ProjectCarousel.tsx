import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";
import { featuredProjects } from "@/data/projects";

export default function ProjectCarousel() {
  return (
    <div
      className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      style={{ scrollbarWidth: "thin" }}
    >
      {featuredProjects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}/`}
          className="group block min-w-[85%] shrink-0 snap-center overflow-hidden rounded-lg border border-ink/15 bg-tertiary transition hover:border-secondary sm:min-w-[60%] lg:min-w-[48%]"
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

          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-ink/70">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
