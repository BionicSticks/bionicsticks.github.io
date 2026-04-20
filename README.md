# Portfolio

Personal site — a curated showcase of shipped work across full-stack web, native mobile, and scientific tooling. Built to communicate engineering depth and an AI-forward workflow to readers at AI labs and product-led companies.

The thesis: many of the underlying repos are private, so GitHub alone doesn't convey scope. This site is the index.

## Stack

- **Next.js 16** (App Router) with static export — deployed as plain HTML/JS to GitHub Pages
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**

## Design

Writing-forward and technically dense. Palette sourced from the PrimerChecker project:

- Primary `#B6FF00` (lime) — accent + decorative
- Secondary `#00C2FF` (cyan) — accent + decorative
- Card surface `#FFFFFF`
- Page background `#ECECEA` — sits a notch darker than the cards so card edges read crisply
- Text `#000000`

Two fixed decorative squares (lime + cyan, ~15% opacity, rotated, top-right) live behind `main` but above the navbar — configured in `src/app/layout.tsx`.

## Project content

Project entries live in `src/data/projects.ts`. Each project has a problem / approach / role / outcome breakdown rendered at `/projects/<id>/`. The home page surfaces a featured carousel (entries with `featuredOrder` set) plus the full grid.

Projects can also declare an optional `gallery` — an array of `{ src, heading, caption }` items rendered as a vertical stack on the detail page: each item is a bold heading, the screenshot, and a one-sentence caption.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

```bash
npm run build
```

This produces a fully static `out/` directory (configured via `output: "export"` in `next.config.ts`). The contents of `out/` are what gets served by GitHub Pages — no Node runtime required on the host.

## Images

Screenshots are organised per project under `public/images/<Project>/`. The `image:` field in `src/data/projects.ts` picks one hero shot; any `gallery` items point at sibling files in the same directory.

- Heroes render at 16:9 with `object-cover` in both the carousel and the detail page, so crop to a 16:9 framing before drop-in. Recommended size: **1600 × 900**, under 400 KB.
- Gallery images render at intrinsic aspect (no CSS crop). Static export with `images.unoptimized: true` means no build-time transform either — crop at source.
- Workflow for cropping: open a new Figma Design file, create a 1600 × 900 frame with **Clip content** on, drag each screenshot into the frame, resize and reposition to taste, then select the frame(s) and export as PNG (1x). The frame name becomes the filename.
- Optional looping clips go in `public/videos/`.

## Notes

This codebase is targeted at Next.js 16, which has breaking changes vs. earlier versions. See `AGENTS.md`.
