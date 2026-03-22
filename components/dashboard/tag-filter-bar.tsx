type TagFilterBarProps = {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
};

export function TagFilterBar({ tags, selectedTag, onSelectTag }: TagFilterBarProps) {
  return (
    <section className="flex flex-wrap gap-3">
      {tags.map((tag) => {
        const active = tag === selectedTag;

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectTag(tag)}
            className={`focus-ring rounded-full px-4 py-2.5 text-sm font-medium transition ${
              active
                ? "bg-[var(--pb-emerald)] text-slate-950"
                : "pb-tag text-slate-300 hover:border-white/20 hover:bg-white/8"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </section>
  );
}
