export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-tertiary">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Marc</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/BionicSticks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-secondary"
          >
            GitHub
          </a>
          <a href="/contact/" className="text-ink hover:text-secondary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
