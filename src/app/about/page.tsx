import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Marc",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">About</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          I&apos;m a software engineer with a background in bioinformatics and
          data science. I build full-stack web applications, mobile apps, and
          scientific analysis tools.
        </p>

        <p>
          My work spans proteomics data platforms, consumer mobile apps, signal
          processing, and AI-powered tools. I enjoy solving complex problems
          across domains and turning research into usable products.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-gray-900">
          Technical Skills
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Mobile: Swift/SwiftUI, Capacitor</li>
          <li>Backend: FastAPI, Python, Node.js</li>
          <li>Data: R, Python (pandas, scikit-learn), Bioinformatics pipelines</li>
          <li>Infrastructure: Supabase, Vercel, Railway, GitHub Actions</li>
        </ul>
      </div>
    </div>
  );
}
