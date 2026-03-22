type EmptyStateProps = {
  search: string;
  selectedTag: string;
  onReset: () => void;
};

export function EmptyState({ search, selectedTag, onReset }: EmptyStateProps) {
  return (
    <div className="pb-panel rounded-[1.6rem] p-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">No prompts in view</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">Your current filter is too narrow.</h2>
      <p className="mt-4 text-sm leading-7 text-slate-400">
        Search: <span className="text-slate-200">{search || "none"}</span> · Tag:{" "}
        <span className="text-slate-200">{selectedTag}</span>
      </p>
      <button
        type="button"
        onClick={onReset}
        className="focus-ring mt-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
      >
        Reset filters
      </button>
    </div>
  );
}
