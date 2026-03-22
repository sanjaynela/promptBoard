import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="px-5 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="pb-panel rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                Designed for the article workflow
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Build better prompt workflows with something you can inspect, test, and publish.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                PromptBoard keeps the story concrete: generated art direction, a real interface to
                inspect, and verification that survives beyond a demo video.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
              >
                Start Exploring
              </Link>
              <a
                href="https://github.com/sanjaynela/promptBoard"
                className="focus-ring rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
