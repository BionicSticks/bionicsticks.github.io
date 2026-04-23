"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TechBadge from "./TechBadge";
import { featuredProjects } from "@/data/projects";

export default function ProjectCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(":scope > a");
    const step =
      (firstCard?.getBoundingClientRect().width ?? el.clientWidth * 0.48) + 24;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "thin" }}
      >
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}/`}
            className="group block w-[85%] shrink-0 snap-center overflow-hidden rounded-lg border border-ink/15 bg-tertiary transition hover:border-secondary sm:w-[60%] lg:w-[48%]"
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

      <button
        type="button"
        aria-label="Previous project"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollLeft}
        className="absolute left-2 top-[28%] z-10 -translate-y-1/2 rounded-full border border-ink/15 bg-tertiary p-2 text-ink shadow-sm transition hover:border-secondary hover:text-secondary disabled:pointer-events-none disabled:opacity-0"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next project"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollRight}
        className="absolute right-2 top-[28%] z-10 -translate-y-1/2 rounded-full border border-ink/15 bg-tertiary p-2 text-ink shadow-sm transition hover:border-secondary hover:text-secondary disabled:pointer-events-none disabled:opacity-0"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
