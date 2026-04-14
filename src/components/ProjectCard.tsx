import Image from "next/image";
import TechBadge from "./TechBadge";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Media slot */}
      <div className="relative aspect-video w-full bg-gray-100">
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
          <div className="flex h-full items-center justify-center text-gray-400">
            Screenshot coming soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
