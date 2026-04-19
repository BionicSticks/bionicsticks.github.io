export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-ink/20 px-3 py-1 text-xs font-medium text-ink">
      {label}
    </span>
  );
}
