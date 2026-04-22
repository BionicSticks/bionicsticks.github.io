import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, visibleProjects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return visibleProjects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

type RouteProps = { params: Promise<{ id: string }> };

export async function generateMetadata(props: RouteProps): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found | Marc" };
  return {
    title: `${project.title} | Marc`,
    description: project.tagline,
  };
}

export default async function ProjectPage(props: RouteProps) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
