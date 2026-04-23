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
  gallery?: { src: string; heading: string; caption: string }[];
  draft?: boolean;
};

export const projects: Project[] = [
  {
    id: "foodortrash",
    title: "FoodOrTrash",
    tagline: "A food classification tool using a three-tier pipeline: database lookup, AI classification, and ingredient decomposition.",
    summary:
      "Food quality classifier combining a local database, an AI tier, and ingredient-level scoring to give consistent verdicts.",
    problem:
      "Consumers want a quick, trustworthy answer to \"is this food actually good for me?\" — but single-source classifiers give inconsistent results. Pure LLM answers hallucinate; pure database lookups miss anything novel; raw nutritional heuristics over-penalise nuance.",
    approach:
      "A three-tier pipeline. First, a local database of 1,345 hand-classified items (1,159 real foods and 186 trash items across 27 categories) returns a verdict for known inputs — fast and deterministic, with Fuse.js handling typos and plurals. If the item is unknown, Cloudflare Workers AI running Llama 3.1 8B classifies it with a whole-food-first prompt. For compound inputs like recipes, an ingredient-decomposition layer breaks the item into components, scores each, and weighs them into a composite 0–100 verdict — which keeps behaviour consistent across repeat queries for the same item. Built on Next.js and TypeScript with Tailwind and Framer Motion for the UI.",
    role:
      "The scope is three classification tiers — curated lookup, AI fallback for unknowns, and ingredient decomposition for compound foods — plus editorial long-form that explains the scoring philosophy. The purpose is to give a consumer a trustworthy, consistent verdict on real-food-vs-processed for any input, with the reasoning exposed on the verdict card rather than hidden behind an opaque LLM call.",
    outcome: "Publicly live at foodortrash.com.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "AI/ML"],
    image: "/images/FoodOrTrash/FoTHomePage.png",
    liveUrl: "https://foodortrash.com",
    githubUrl: "https://github.com/BionicSticks/FoodOrTrash",
    featuredOrder: 2,
    gallery: [
      {
        src: "/images/FoodOrTrash/Verdict.png",
        heading: "The verdict surface",
        caption:
          "A bold food-or-trash call with a 0–100 score and an ingredient-level rationale. When the verdict is Trash, a suggested real-food recipe appears so the user leaves with an action, not just a rejection.",
      },
      {
        src: "/images/FoodOrTrash/Categories.png",
        heading: "Browse the underlying database",
        caption:
          "1,345 hand-classified items across 27 categories (1,159 real food and 186 trash) drive the deterministic tier before the AI layer ever runs.",
      },
      {
        src: "/images/FoodOrTrash/FoodPyramidLie.png",
        heading: "Long-form context",
        caption:
          "Essays that explain the scoring heuristics and the nutrition history behind them. The classifier returns a verdict; the writing explains why the scoring lands where it does.",
      },
    ],
  },
  {
    id: "primerchecker",
    title: "PrimerChecker",
    tagline: "A PCR primer validation tool that combines three-source genomic search with local thermodynamic analysis.",
    summary:
      "Primer validation tool — Tm, GC, specificity, and three-source genomic search in one interface.",
    problem:
      "Primer validation is a chore. You need to check thermodynamic properties (Tm, GC content, hairpins, dimers) and specificity across the genome, which today means bouncing between a local tool for the maths and at least two websites (UCSC BLAT, NCBI BLAST) for the searches. Each step is cheap; the context-switching isn't.",
    approach:
      "A Next.js frontend on a FastAPI Python backend. Local analysis modules compute melting temperature via nearest-neighbour thermodynamics (SantaLucia, 1998), plus GC content, hairpin risk, and self- and cross-dimer checks, with a traffic-light verdict (green / amber / red) rolled up at the top of the report. Genomic specificity fans out in parallel to three sources — NCBI Primer-BLAST, NCBI BLAST E-utilities, and EBI BLAST + Ensembl REST — and a confidence score (high / medium / low) is assigned based on how many sources agree. Recent searches are cached in localStorage (max 8, deduped by primer pair and mode) so prior queries are one click away.",
    role:
      "The scope is primer validation end-to-end — local thermodynamic analysis (Tm, GC, hairpin, dimer), cross-database specificity against three genomic sources, and a unified traffic-light verdict. The purpose is to collapse the pre-order validation chore from a tour of separate websites and manual cross-referencing into a single panel a scientist can read in under a minute.",
    techStack: ["Next.js", "FastAPI", "Python", "Bioinformatics"],
    image: "/images/PrimerChecker/PCHero.png",
    gallery: [
      {
        src: "/images/PrimerChecker/Landing.png",
        heading: "Primer input and target selection",
        caption:
          "Pick a target type — genomic DNA or cDNA/RT-qPCR — paste the forward and reverse sequences, and queue the run.",
      },
      {
        src: "/images/PrimerChecker/Search.png",
        heading: "Genome search kicks off in parallel",
        caption:
          "On submit, specificity searches fan out across the three configured genomic sources; a recent-searches panel keeps prior queries one click away.",
      },
      {
        src: "/images/PrimerChecker/PrimerAnalysis.png",
        heading: "Per-primer thermodynamics",
        caption:
          "Tm, GC, hairpin risk, and self-dimer severity assessed for each primer, with a traffic-light verdict at the top of the report.",
      },
      {
        src: "/images/PrimerChecker/Working.png",
        heading: "Dimer check + specificity status",
        caption:
          "Cross-primer dimer analysis lands immediately from the local tier; genomic specificity loads in a second phase from NCBI Primer-BLAST, NCBI BLAST, and EBI / Ensembl REST.",
      },
    ],
  },
  {
    id: "mathematitron",
    title: "MathematiTron",
    tagline: "A personalised AI math tutor built on Claude — per-student mastery tracking across a 111-concept curriculum graph.",
    summary:
      "Claude-powered math tutor with per-student mastery tracking, goal-driven pacing, and a prerequisite-aware curriculum.",
    problem:
      "A generic chat interface to an LLM is not a tutor. Raw Claude can explain any concept, but it has no memory of what a student has mastered, no structural model of prerequisites, and no way to pace toward a specific goal. Students leaning on ChatGPT to learn end up with fragmented understanding and nothing tracking their progress.",
    approach:
      "A React 19 + Express 5 stack with Claude Sonnet as the tutoring engine. A curriculum graph encodes 111 concepts across 15 categories — pre-algebra through topology — rendered in ReactFlow. A mastery layer scores per-concept progress against a 60% threshold and derives a personalised learning path. The tutor prompt is assembled from five layers (tutor identity, student profile, concept context, conversation history, and behavioural rules) and streams responses over Server-Sent Events. Supabase provides Postgres, auth, and row-level security; math renders in KaTeX with MathLive for expression input.",
    role:
      "MathematiTron is scoped around the full tutoring loop — a curriculum graph, a mastery model, and a tutor service that wraps Claude with per-student context. The thesis is that an LLM should be a tutor constrained by structure, memory, and pedagogy, rather than a generic chat: the Anthropic SDK is a dependency, not the product. The audience is students preparing for a specific goal — exam, degree prerequisite, or self-guided curriculum — who need pacing and progress tracking, not a transcript.",
    techStack: ["React", "Express", "TypeScript", "Supabase", "Claude API", "ReactFlow", "KaTeX"],
    image: "/images/Mathematitron/MathHero.png",
    githubUrl: "https://github.com/BionicSticks/MathematiTron",
    featuredOrder: 3,
    gallery: [
      {
        src: "/images/Mathematitron/ConceptMap1.png",
        heading: "Curriculum as a prerequisite graph",
        caption:
          "The curriculum in ReactFlow. Nodes are colour-coded by mastery state; clicking a concept surfaces a description, difficulty, time estimate, prerequisites, and mastery percentage.",
      },
      {
        src: "/images/Mathematitron/PracticePage.png",
        heading: "The practice surface",
        caption:
          "Problems render in KaTeX; three-level progressive hints surface on request; at session end a summary panel shows the mastery delta against the student's target concept.",
      },
      {
        src: "/images/Mathematitron/ProgressPage.png",
        heading: "Per-student progress dashboard",
        caption:
          "Overall mastery ring, a 90-day streak heatmap, a 15-category breakdown in Recharts, and a mastery timeline with a range selector — all derived from practice outcomes.",
      },
      {
        src: "/images/Mathematitron/Settings.png",
        heading: "Goal configuration",
        caption:
          "Students set a target concept; the pacing model works backward through prerequisites to build the learning path.",
      },
    ],
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
      "A React + TypeScript + Vite web app wrapped in Capacitor 6 for iOS and Android. The AI pipeline runs server-side on FastAPI + Python + Railway: librosa extracts onsets, a custom convolutional classifier ('KioDrum', six drum classes — kick, snare, hi-hat, tom, crash, ride) tags each onset, and the hits are aligned into a quantised pattern. The output opens directly in the editor as a starting point, not an endpoint — the user tweaks hits, adds measures, swings, adjusts velocity, and plays back with real samples. Exports include PDF (via jsPDF + VexFlow), General MIDI drum map, and MusicXML 4.0.",
    role:
      "KioKI covers the full transcription loop — audio in, onset detection, drum-voice classification, quantisation, and a grid editor. The key product decision is that the model output is editable, not authoritative: producers and drummers get something they can tweak, loop, and ship, rather than a read-only transcription they can't build on.",
    techStack: ["React", "TypeScript", "Capacitor", "FastAPI", "librosa"],
    image: "/images/KioKi/Home.png",
    gallery: [
      {
        src: "/images/KioKi/Editor.png",
        heading: "The editable drum grid",
        caption:
          "A step grid with per-instrument rows, swing, time signature, and velocity controls. AI transcriptions land here as a starting point — the user adds measures, tweaks hits, and plays back with real samples.",
      },
      {
        src: "/images/KioKi/Transcribe.png",
        heading: "Audio in, chart out",
        caption:
          "Upload an audio file and the server-side pipeline runs onset detection, drum-voice classification, and quantisation. The output opens directly in the editor, ready to edit.",
      },
      {
        src: "/images/KioKi/Score.png",
        heading: "Notation and export",
        caption:
          "Rendered drum notation with export to PDF (via jsPDF + VexFlow), General MIDI drum map, and MusicXML 4.0. The editor is for composing; the score view is for handing a chart to anyone else in the chain — producer, drummer, teacher.",
      },
      {
        src: "/images/KioKi/Library.png",
        heading: "Chart library",
        caption:
          "Every chart the user has transcribed or composed, tagged with BPM, bar count, and hit count. Import and export via .kioki JSON keep charts portable between projects.",
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
      "A Next.js frontend handles upload, cohort/covariate configuration, and result review. A FastAPI service runs the analysis pipeline across thirteen modules: NPX parsing and QC, differential abundance via Welch's t-test with Benjamini-Hochberg FDR correction, ElasticNet logistic regression with nested cross-validation, sparse co-expression networks via Graphical Lasso and Louvain community detection, and pathway enrichment against Enrichr (GO + KEGG), STRING PPI, and Reactome. Supabase stores runs, artifacts, and per-user access; Plotly powers the interactive figures so a reviewer can drill into a volcano or enrichment plot without leaving the report view. Methods text is auto-generated with citations for inclusion in manuscripts.",
    role:
      "The scope covers the complete proteomics analysis loop for Olink NPX data — ingest and QC through differential abundance, pathway enrichment, co-expression networks, classification, and auto-generated methods text. The purpose is to give bench scientists without dedicated bioinformatics support a no-code path from raw NPX file to publication-ready figures, while preserving the statistical rigour a reviewer will scrutinise.",
    outcome: "Feature-complete: 13 analysis modules and 116 passing tests.",
    techStack: ["Next.js", "FastAPI", "Python", "Supabase", "Plotly", "Tailwind"],
    image: "/images/OPID/HomePageCropped.png",
    featuredOrder: 1,
    gallery: [
      {
        src: "/images/OPID/QC.png",
        heading: "Quality control",
        caption:
          "Quality-control step: NPX distributions per sample, outlier flags, and missing-data summaries. Runs on upload, no tuning required.",
      },
      {
        src: "/images/OPID/HeroVP.png",
        heading: "Differential abundance — volcano plot",
        caption:
          "Differential abundance by Welch's t-test with Benjamini-Hochberg correction, rendered as an interactive Plotly volcano. Hovering any protein surfaces fold change, adjusted p-value, and direction; significance thresholds are marked.",
      },
      {
        src: "/images/OPID/Hero GO1.png",
        heading: "Pathway enrichment",
        caption:
          "Enrichment against Enrichr (GO + KEGG), STRING PPI, and Reactome, ranked by fold enrichment and shaded by adjusted p-value.",
      },
      {
        src: "/images/OPID/Hero DiffNet.png",
        heading: "Differential interaction network",
        caption:
          "A sparse co-expression network via Graphical Lasso with Louvain community detection, visualising the edges that shift between experimental groups.",
      },
      {
        src: "/images/OPID/Hero ML3.png",
        heading: "Classification & feature importance",
        caption:
          "ML layer: cross-validated confusion matrix and ElasticNet-regularised feature importances that surface which proteins drive classification between groups.",
      },
    ],
  },
  {
    id: "watchgrapher",
    title: "WatchGrapher Mobile",
    tagline: "An iOS timegrapher that measures mechanical watch rate and beat error from contact-mic audio.",
    summary:
      "iOS app that measures mechanical watch rate and beat error from wired-mic audio pressed against the case.",
    problem:
      "Timegraphers — the instruments watchmakers use to measure mechanical watch accuracy — are dedicated hardware that costs hundreds to thousands of pounds. The actual measurements are well-defined signal-processing problems, and every modern phone already has the compute to do them. The friction is software, and the right pickup.",
    approach:
      "A SwiftUI app on iOS 17+, capturing audio through AVAudioEngine. A vDSP-backed DSP chain runs a 1500–15000 Hz IIR biquad bandpass to isolate the escapement impulse, rectifies and smooths with an asymmetric EMA (fast attack, slow release) for envelope detection, and uses autocorrelation plus epoch folding (~+20 dB SNR) over sample-based inter-tick intervals to derive beat rate and beat error. Measurement is done with wired EarPods pressed against the watch case as a contact microphone — Bluetooth audio is blocked because its latency destroys the timing.",
    role:
      "WatchGrapher Mobile covers the full timegrapher loop on iOS — audio capture, the DSP chain that derives rate and beat error, calibration per watch movement, and a per-watch history. The purpose is to put a timegrapher in a watch enthusiast's pocket for the cost of a pair of wired EarPods, rather than the hundreds to thousands of pounds that dedicated hardware runs.",
    techStack: ["Swift", "SwiftUI", "AVAudioEngine", "vDSP", "iOS"],
    image: "/images/WGM/composed/03.png",
    gallery: [
      {
        src: "/images/WGM/composed/07.png",
        heading: "The entry surface",
        caption:
          "A single Start Measuring action, a summary of the most recent recording, and jumps into history or settings — mechanical watches don't need a dashboard.",
      },
      {
        src: "/images/WGM/composed/01.png",
        heading: "Calibration",
        caption:
          "Beats-per-hour and lift angle are the two parameters the DSP needs from the user. The movement lookup fills both in from a database of common calibres.",
      },
      {
        src: "/images/WGM/composed/03.png",
        heading: "Live measurement",
        caption:
          "Rate in BPH, timing error against the configured BPH, and beat error as tick/tock asymmetry. Audio is captured through wired EarPods pressed against the case and rendered as a live waveform below the timing graph.",
      },
      {
        src: "/images/WGM/composed/04.png",
        heading: "End of a recording",
        caption:
          "When the user stops a capture, the timing graph freezes and the screen becomes a save-or-discard decision.",
      },
      {
        src: "/images/WGM/composed/05.png",
        heading: "Persist the run",
        caption:
          "Name the watch, add optional notes, and a summary panel recaps the run — which is how you end up with a history per watch rather than a flat log of sessions.",
      },
      {
        src: "/images/WGM/composed/06.png",
        heading: "Per-watch history",
        caption:
          "Recordings ranked with an at-a-glance status badge derived from the measurements: Excellent, Good, or Needs Service. Tapping any entry reopens its timing graph and waveform.",
      },
    ],
  },
];

// Drafts render in `npm run dev` so you can preview WIP entries, but are
// excluded from the static export so they never ship to the live site.
const includeDrafts = process.env.NODE_ENV !== "production";

export const visibleProjects = projects.filter((p) => includeDrafts || !p.draft);

export const featuredProjects = visibleProjects
  .filter((p) => p.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
