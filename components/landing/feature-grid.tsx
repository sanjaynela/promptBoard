import { Blocks, ImageIcon, LayoutDashboard, SearchCheck, ShieldCheck, Workflow } from "lucide-react";

const features = [
  {
    title: "Organize prompts like product assets",
    body: "Keep the prompts worth reusing in a visible library instead of scattered notes and chat history.",
    icon: Blocks,
  },
  {
    title: "Guide the visual direction with generated assets",
    body: "Bring image-based art direction into the repo so the UI has something concrete to react to.",
    icon: ImageIcon,
  },
  {
    title: "Inspect real dashboard states in the browser",
    body: "Search, filter, open details, and verify responsiveness with the rendered interface as the source of truth.",
    icon: LayoutDashboard,
  },
  {
    title: "Refine with targeted browser-aware fixes",
    body: "Improve hierarchy, spacing, and touch targets without turning the project into an uncontrolled redesign.",
    icon: SearchCheck,
  },
  {
    title: "Lock behavior down with Playwright",
    body: "Codex can iterate visually, but the repo still needs a repeatable test harness for confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Document the workflow in the repo",
    body: "Readers can inspect the prompts, assets, tests, and guidance without guessing how the experiment worked.",
    icon: Workflow,
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
            What PromptBoard demonstrates
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            A frontend repo that shows the whole loop, not just generated code.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            The app is intentionally scoped to cover both the visual design problem and the real
            browser verification problem.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="pb-panel rounded-[1.75rem] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[var(--pb-emerald)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
