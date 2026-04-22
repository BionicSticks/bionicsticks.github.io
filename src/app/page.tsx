import ProjectCard from "@/components/ProjectCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import { visibleProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <section className="mb-20 max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Engineer shipping real products with an{" "}
          <span className="bg-primary px-1">AI-forward</span> toolchain.
        </h1>
        <p className="text-lg leading-relaxed text-ink/75">
          I build full-stack web apps, native mobile, and scientific tools —
          across bioinformatics, audio ML, iOS signal processing, and
          LLM-native products. What follows is a selection of what I&apos;ve
          shipped.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink/50">
          Featured
        </h2>
        <ProjectCarousel />
      </section>

      <section>
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-ink/50">
          All projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
