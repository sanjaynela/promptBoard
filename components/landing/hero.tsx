import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pb-shell relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(circle_at_top_left,rgba(125,246,203,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(148,161,255,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 flex items-center justify-between gap-6">
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--pb-emerald)] shadow-[0_0_20px_rgba(125,246,203,0.8)]" />
            PromptBoard
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="focus-ring rounded-full px-2 py-1 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="focus-ring rounded-full px-2 py-1 hover:text-white">
              Pricing
            </a>
            <Link href="/dashboard" className="focus-ring rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/8">
              Open Dashboard
            </Link>
          </nav>
        </header>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100">
              <Sparkles className="h-3.5 w-3.5" />
              Built for developers using coding agents every day
            </div>
            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Build prompt systems that survive longer than one good afternoon.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              PromptBoard gives you a cleaner way to save, test, and reuse the prompts that actually
              work, with a visual workflow designed to feel as polished as the code it supports.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--pb-emerald)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
              >
                Explore Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#workflow"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                See Workflow
              </a>
            </div>
            <div id="workflow" className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["3 visual directions", "Generated art direction lives inside the repo."],
                ["Browser-first fixes", "Dashboard states are built for inspection, not screenshots."],
                ["Repeatable verification", "Playwright keeps the polished states from drifting."],
              ].map(([title, body]) => (
                <div key={title} className="pb-panel rounded-3xl p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -translate-y-4 translate-x-4 rounded-[2rem] bg-[radial-gradient(circle,rgba(148,161,255,0.18),transparent_58%)] blur-3xl" />
            <div className="pb-grid-glow pb-panel relative rounded-[2rem] p-4">
              <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-xs text-slate-200">
                Image-guided concept
              </div>
              <Image
                src="/generated/hero-concept-2.svg"
                alt="PromptBoard premium dark-mode hero concept"
                width={1600}
                height={1000}
                className="rounded-[1.5rem] border border-white/10 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
