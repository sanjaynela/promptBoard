import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For solo developers collecting their best prompt patterns.",
    perks: ["Prompt library", "Basic tags", "Personal workflow notes"],
    featured: false,
  },
  {
    name: "Studio",
    price: "$19",
    description: "For teams who want a more durable system for prompt review and reuse.",
    perks: ["Everything in Starter", "Shared playbooks", "Prompt QA checklist", "Version snapshots"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$49",
    description: "For orgs standardizing prompt operations across multiple product surfaces.",
    perks: ["Everything in Studio", "Approval flows", "Release notes", "Usage reporting"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200/80">
            Fictional pricing, real product framing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Enough product structure to make the repo feel publishable.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.75rem] p-6 ${plan.featured ? "bg-[linear-gradient(180deg,rgba(125,246,203,0.2),rgba(9,18,36,0.9))] ring-1 ring-emerald-200/30 shadow-[0_20px_80px_rgba(125,246,203,0.12)]" : "pb-panel"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{plan.name}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-semibold text-white">{plan.price}</span>
                <span className="pb-2 text-sm text-slate-400">/month</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--pb-emerald)]" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
