import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Marc",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Contact</h1>

      <p className="mb-8 text-gray-600 leading-relaxed">
        Interested in working together or have questions about any of my
        projects? Feel free to reach out.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">
            GitHub
          </h2>
          <a
            href="https://github.com/BionicSticks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            github.com/BionicSticks
          </a>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Email
          </h2>
          <p className="text-gray-600">
            {/* Replace with your email */}
            your.email@example.com
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">
            LinkedIn
          </h2>
          <p className="text-gray-600">
            {/* Replace with your LinkedIn URL */}
            linkedin.com/in/your-profile
          </p>
        </div>
      </div>
    </div>
  );
}
