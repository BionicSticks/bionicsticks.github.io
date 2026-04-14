import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Hi, I&apos;m Marc
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
          Software engineer building web apps, mobile apps, and data science
          tools. Here&apos;s a selection of my work.
        </p>
      </section>

      {/* Projects grid */}
      <section>
        <h2 className="mb-8 text-2xl font-semibold text-gray-900">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
