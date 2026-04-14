export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "oprotindepth",
    title: "OProtInDepth",
    description:
      "A proteomics analysis platform for Olink data. Handles NPX data processing, statistical analysis, pathway enrichment, and interactive report generation for clinical research.",
    techStack: ["Next.js", "FastAPI", "Python", "Supabase", "Plotly", "Tailwind"],
    image: "/images/oprotindepth.png",
  },
  {
    id: "foodortrash",
    title: "FoodOrTrash",
    description:
      "A food classification web app using a three-tier system: local database lookup, AI classification, and composite scoring to help users determine food quality.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "AI/ML"],
    image: "/images/foodortrash.png",
    liveUrl: "https://foodortrash.com",
    githubUrl: "https://github.com/BionicSticks/FoodOrTrash",
  },
  {
    id: "watchgrapher",
    title: "WatchGrapher Mobile",
    description:
      "An iOS timegrapher app that measures mechanical watch accuracy through microphone-based signal processing. Captures tick sounds and computes rate, beat error, and amplitude.",
    techStack: ["Swift", "SwiftUI", "Signal Processing", "iOS"],
    image: "/images/watchgrapher.png",
  },
  {
    id: "atlas-chorechamp",
    title: "Atlas ChoreChamp",
    description:
      "A household chore management app for flatshares. Features task assignment, leaderboards, analytics, and gamification to keep shared living spaces fair and organized.",
    techStack: ["React", "Vite", "Capacitor", "Supabase", "Tailwind"],
    image: "/images/atlas-chorechamp.png",
  },
  {
    id: "primerchecker",
    title: "PrimerChecker",
    description:
      "A PCR primer validation tool with dual-source genomic search (UCSC + NCBI). Performs local analysis including Tm calculation, GC content, and specificity checks.",
    techStack: ["Next.js", "FastAPI", "Python", "Bioinformatics"],
    image: "/images/primerchecker.png",
  },
  {
    id: "kioki",
    title: "KioKI",
    description:
      "An AI-powered drum transcription and groove editor. Analyzes audio to extract drum patterns and provides an interactive editor for modification and playback.",
    techStack: ["Capacitor", "AI/ML", "Audio Processing", "TypeScript"],
    image: "/images/kioki.png",
  },
];
