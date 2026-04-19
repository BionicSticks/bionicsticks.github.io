export type Project = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string;
  role: string;
  outcome?: string;
  techStack: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featuredOrder?: number;
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    id: "mathematitron",
    title: "MathematiTron",
    tagline: "A personalised AI math tutor built on Claude — persistent mastery tracking across a 111-concept prerequisite graph.",
    summary:
      "Claude-powered math tutor with per-student mastery tracking, goal-driven pacing, and a prerequisite-aware curriculum.",
    problem:
      "A generic chat interface to an LLM is not a tutor. Raw Claude can explain any concept, but it has no memory of what a student has mastered, no structural model of prerequisites, and no way to pace toward a specific goal. Students leaning on ChatGPT to learn end up with fragmented understanding and nothing tracking their progress.",
    approach:
      "A React/Express stack with Claude as the tutoring engine, wrapped by three services. An in-memory curriculum graph encodes 111 concepts and 101 prerequisite relations spanning pre-algebra through topology. A mastery layer scores per-concept progress and derives a personalised learning path. An AI service handles structured system prompts and answer-checking. Supabase provides auth and row-level-security-scoped student data. Math renders through KaTeX; the concept graph uses ReactFlow so a student can see where they are and what's unlocked next.",
    role:
      "I designed the curriculum graph, the mastery model, and the service architecture around Claude. The thesis is that the LLM should be a tutor constrained by structure, memory, and pedagogy — the Anthropic SDK is a dependency, not the product.",
    techStack: ["React", "Express", "TypeScript", "Supabase", "Claude API", "ReactFlow", "KaTeX"],
    image: "/images/Mathematitron/Homepage.png",
    githubUrl: "https://github.com/BionicSticks/MathematiTron",
    featuredOrder: 1,
    gallery: [
      {
        src: "/images/Mathematitron/ConceptMap1.png",
        caption:
          "The curriculum as a prerequisite graph in ReactFlow. Nodes are colour-coded by mastery state; clicking a concept surfaces difficulty, estimated time, and a jump into practice.",
      },
      {
        src: "/images/Mathematitron/PracticePage.png",
        caption:
          "The practice surface. The mastery layer promotes concepts that are prerequisites of the student's current goal and newly unlocked — not a flat list.",
      },
      {
        src: "/images/Mathematitron/ProgressPage.png",
        caption:
          "Per-student progress: overall mastery, streaks, an activity heatmap, and category-level breakdowns — all derived from practice outcomes.",
      },
      {
        src: "/images/Mathematitron/Settings.png",
        caption:
          "Goal configuration. Students set a custom target concept, and the pacing model works backward through prerequisites to build the learning path.",
      },
    ],
  },
  {
    id: "oprotindepth",
    title: "OProtInDepth",
    tagline: "A proteomics analysis platform for clinical research teams working with Olink NPX data.",
    summary:
      "Proteomics platform for Olink NPX data — statistics, pathway enrichment, and interactive reports for clinical research.",
    problem:
      "Olink's NPX output is a specialised format, and the teams working with it typically stitch together R scripts, Excel workbooks, and ad-hoc plotting to run an analysis end to end. The workflow is slow, hard to reproduce, and discourages iteration on analysis choices that should be cheap to revisit.",
    approach:
      "A Next.js frontend handles upload, cohort/covariate configuration, and result review. A FastAPI service runs the analysis pipeline: NPX parsing and QC, differential abundance (parametric and non-parametric options), and pathway enrichment against standard gene-set libraries. Supabase stores runs, artifacts, and per-user access. Plotly powers the interactive figures so a reviewer can drill into a volcano or enrichment plot without leaving the report view.", // TODO verify specific libraries
    role:
      "I designed the data model, the analysis pipeline, and the report UX; I used Claude and Cursor to accelerate the scaffolding and debug the harder stats edge cases, but the analytical choices and architecture are mine.",
    outcome: "Used internally for research collaborations.", // TODO verify — set to undefined if not accurate
    techStack: ["Next.js", "FastAPI", "Python", "Supabase", "Plotly", "Tailwind"],
    image: "/images/OPID/Homepage.png",
    featuredOrder: 2,
    gallery: [
      {
        src: "/images/OPID/Overview.png",
        caption:
          "Project dashboard: sample metadata, platform/group configuration, and summary statistics render immediately on NPX ingest — the downstream pipeline keys off this view.",
      },
      {
        src: "/images/OPID/QC.png",
        caption:
          "Quality-control step: NPX distributions per sample, outlier flags, and missing-data summaries. Runs on upload, no tuning required.",
      },
      {
        src: "/images/OPID/VolcanoPlots.png",
        caption:
          "Differential abundance as an interactive Plotly volcano. Hovering any protein surfaces fold change, adjusted p-value, and direction; significance thresholds are marked.",
      },
      {
        src: "/images/OPID/GO.png",
        caption:
          "Gene-ontology pathway enrichment against standard gene-set libraries, ranked by fold enrichment and shaded by adjusted p-value.",
      },
      {
        src: "/images/OPID/Diff_Network.png",
        caption:
          "Differential protein-protein interaction network: edges that shift between experimental groups, coloured by degree. Exports to Cytoscape JSON for downstream work.",
      },
      {
        src: "/images/OPID/ML.png",
        caption:
          "ML layer: cross-validated confusion matrix and L1-regularised feature importances that surface which proteins drive classification between groups.",
      },
    ],
  },
  {
    id: "foodortrash",
    title: "FoodOrTrash",
    tagline: "A food classification tool using a three-tier pipeline: database lookup, AI classification, and composite scoring.",
    summary:
      "Food quality classifier combining a local database, an AI tier, and composite scoring to give consistent verdicts.",
    problem:
      "Consumers want a quick, trustworthy answer to \"is this food actually good for me?\" — but single-source classifiers give inconsistent results. Pure LLM answers hallucinate; pure database lookups miss anything novel; raw nutritional heuristics over-penalise nuance.",
    approach:
      "A three-tier pipeline: first, a local database lookup returns a verdict for known items (fast and deterministic). If unknown, an AI classification tier runs. A composite scoring layer then weighs both sources and nutritional signals into a final answer, which keeps behaviour consistent across repeat queries for the same item. Built on Next.js and TypeScript with Tailwind for the UI.",
    role:
      "I designed the tiered classification logic and built the frontend and scoring layer; AI tools accelerated iteration on the UI and prompt-tuning, with the pipeline design and scoring heuristics being my work.",
    outcome: "Publicly live at foodortrash.com.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "AI/ML"],
    image: "/images/foodortrash.png",
    liveUrl: "https://foodortrash.com",
    githubUrl: "https://github.com/BionicSticks/FoodOrTrash",
    featuredOrder: 3,
  },
  {
    id: "watchgrapher",
    title: "WatchGrapher Mobile",
    tagline: "An iOS timegrapher that measures mechanical watch accuracy using only the phone's microphone.",
    summary:
      "iOS app that measures mechanical watch rate, beat error, and amplitude from microphone audio.",
    problem:
      "Timegraphers — the instruments watchmakers use to measure mechanical watch accuracy — are dedicated hardware that costs hundreds to thousands of pounds. The actual measurements are well-defined signal-processing problems, and every modern phone already has a microphone sensitive enough to capture a watch's tick. The friction is software.",
    approach:
      "A SwiftUI app captures microphone audio and runs a DSP chain tuned for the characteristic tick/tock of a lever escapement: bandpass filtering to isolate impulse frequencies, envelope detection for tick localisation, and period analysis between consecutive ticks for the three measurements — rate (seconds/day deviation), beat error (tick-to-tock asymmetry), and amplitude (pulse shape inference).", // TODO verify specific amplitude technique
    role:
      "I designed the DSP pipeline and the measurement UI. Claude and Cursor were used for iteration on signal-processing edge cases; the algorithmic design, tuning against real watches, and the native iOS architecture are my work.",
    techStack: ["Swift", "SwiftUI", "Signal Processing", "iOS"],
    image: "/images/watchgrapher.png",
  },
  {
    id: "atlas-chorechamp",
    title: "Atlas ChoreChamp",
    tagline: "A chore-management app for flatshares that turns shared-household fairness into something measurable.",
    summary:
      "Chore app for shared households with task assignment, leaderboards, and long-term fairness analytics.",
    problem:
      "Flatmates relitigate who does what constantly. Most shared-household apps are flat task lists without any memory of contribution over time, which means the person who actually keeps the place running has no way to surface that without it feeling like a confrontation.",
    approach:
      "React + Vite for the web app, wrapped with Capacitor for mobile. Supabase handles multi-tenant auth and realtime sync so a completion on one device appears on every flatmate's screen. The core is a contribution-weighting model: tasks have difficulty and frequency scores, completions feed a rolling leaderboard, and analytics surface long-run imbalance (who consistently over- or under-contributes).",
    role:
      "I designed the fairness model, built the full stack, and led the UX decisions around how to surface imbalance without being punitive. AI tooling accelerated the component-level implementation work.",
    techStack: ["React", "Vite", "Capacitor", "Supabase", "Tailwind"],
    image: "/images/atlas-chorechamp.png",
  },
  {
    id: "primerchecker",
    title: "PrimerChecker",
    tagline: "A PCR primer validation tool that combines dual-source genomic search with local thermodynamic analysis.",
    summary:
      "Primer validation tool — Tm, GC, specificity, and dual-source genomic search (UCSC + NCBI) in one interface.",
    problem:
      "Primer validation is a chore. You need to check thermodynamic properties (Tm, GC content, hairpins, dimers) and specificity across the genome, which today means bouncing between a local tool for the maths and at least two websites (UCSC BLAT, NCBI BLAST) for the searches. Each step is cheap; the context-switching isn't.",
    approach:
      "A Next.js frontend with a FastAPI Python backend. Local analysis modules compute Tm using nearest-neighbour thermodynamics, plus GC, hairpin, and dimer checks. Genomic specificity searches fan out in parallel to UCSC and NCBI, with results normalised into a unified specificity view. Session-based progress tracking lets the user queue multiple primers and come back for the results.",
    role:
      "I designed the pipeline and the result unification layer, and built the full stack. AI tooling accelerated the thermodynamics and API-integration code; the architecture and scientific correctness checks are my work.",
    techStack: ["Next.js", "FastAPI", "Python", "Bioinformatics"],
    image: "/images/primerchecker.png",
  },
  {
    id: "kioki",
    title: "KioKI",
    tagline: "An AI-powered drum transcription tool that turns audio into an editable, playable groove.",
    summary:
      "Drum transcription and groove editor — analyse audio, extract a pattern, edit and play it back.",
    problem:
      "Automated drum transcription has been a research topic for years, but the outputs are usually read-only transcriptions you can't modify or build on. Producers and drummers want the reverse: capture a groove you heard or played, and get something you can actually edit, loop, and ship.",
    approach:
      "A Capacitor app written in TypeScript. The pipeline extracts onset events from audio, classifies each onset into a drum voice (kick, snare, hat, etc.), and aligns them into a quantised pattern. The output is an interactive grid editor — cells for each step, controls for swing and velocity, and playback that treats the transcription as the starting point rather than the endpoint.", // TODO verify model location (on-device vs server inference)
    role:
      "I designed the pipeline and the editor UX — the key decision was to treat the model output as editable rather than authoritative. AI tools helped with the audio-processing boilerplate; the product framing and editor design are mine.",
    techStack: ["Capacitor", "AI/ML", "Audio Processing", "TypeScript"],
    image: "/images/kioki.png",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
