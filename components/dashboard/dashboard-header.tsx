import { Search } from "lucide-react";

type DashboardHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function DashboardHeader({ search, onSearchChange }: DashboardHeaderProps) {
  return (
    <section className="pb-panel rounded-[1.75rem] px-5 py-6 sm:px-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-200/80">
            Browser-aware iteration surface
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Prompt Library
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
            Search, filter, inspect, and draft prompts in a dashboard that is intentionally rich
            enough to test in a real browser.
          </p>
        </div>
        <label className="focus-ring flex w-full items-center gap-3 rounded-[1.35rem] border border-white/10 bg-slate-950/50 px-4 py-3.5 lg:max-w-sm">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search prompts, tags, or details"
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>
    </section>
  );
}
