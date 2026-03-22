import { ArrowUpRight, Clock3 } from "lucide-react";

import { type PromptItem } from "@/data/prompts";
import { formatCategory } from "@/lib/utils";

type PromptCardProps = {
  item: PromptItem;
  active: boolean;
  onOpen: () => void;
};

export function PromptCard({ item, active, onOpen }: PromptCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`focus-ring text-left ${active ? "ring-1 ring-emerald-200/40" : ""} pb-panel rounded-[1.6rem] p-5 transition hover:border-white/20 hover:bg-white/[0.08]`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">
            {formatCategory(item.category)}
          </span>
          <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h2>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 text-slate-400" />
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <Clock3 className="h-3.5 w-3.5" />
        <span>Updated {item.updatedAt}</span>
      </div>
    </button>
  );
}
