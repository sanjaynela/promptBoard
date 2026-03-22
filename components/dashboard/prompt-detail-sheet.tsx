import Image from "next/image";
import { CheckCheck, FileStack, MonitorSmartphone, Sparkles } from "lucide-react";

import { type PromptItem } from "@/data/prompts";
import { formatCategory } from "@/lib/utils";

type PromptDetailSheetProps = {
  prompt: PromptItem | null;
};

const checkpoints = [
  { label: "Visual direction", icon: Sparkles },
  { label: "Browser inspection", icon: MonitorSmartphone },
  { label: "Repeatable verification", icon: CheckCheck },
];

export function PromptDetailSheet({ prompt }: PromptDetailSheetProps) {
  if (!prompt) {
    return (
      <section className="pb-panel rounded-[1.75rem] p-6">
        <p className="text-sm text-slate-400">Select a prompt to inspect its detail view.</p>
      </section>
    );
  }

  return (
    <section className="pb-panel rounded-[1.75rem] p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
          {formatCategory(prompt.category)}
        </span>
        <span className="text-xs text-slate-500">Updated {prompt.updatedAt}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{prompt.title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300">{prompt.description}</p>
      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-slate-950/55 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <FileStack className="h-4 w-4 text-[var(--pb-violet)]" />
          Prompt body
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-400">{prompt.promptBody}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        {checkpoints.map((checkpoint) => {
          const Icon = checkpoint.icon;
          return (
            <div
              key={checkpoint.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
            >
              <Icon className="h-4 w-4 text-[var(--pb-emerald)]" />
              <span>{checkpoint.label}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
        <Image
          src="/generated/dashboard-mood.svg"
          alt="Dashboard atmosphere reference"
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
