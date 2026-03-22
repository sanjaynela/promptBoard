export type PromptCategory = "review" | "refactor" | "frontend" | "release";

export type PromptItem = {
  id: string;
  title: string;
  category: PromptCategory;
  tags: string[];
  description: string;
  promptBody?: string;
  updatedAt?: string;
};

export const prompts: PromptItem[] = [
  {
    id: "1",
    title: "Review React PR for visual regressions",
    category: "review",
    tags: ["react", "ui", "qa"],
    description:
      "Inspect component changes for layout regressions, broken states, accessibility gaps, and spacing drift.",
    promptBody:
      "Check visual hierarchy, keyboard focus, hover states, mobile wrapping, and any spacing regressions introduced by the PR.",
    updatedAt: "2 hours ago",
  },
  {
    id: "2",
    title: "Rewrite the landing hero for a sharper CTA",
    category: "frontend",
    tags: ["copy", "marketing", "hero"],
    description:
      "Tighten the value proposition and supporting copy so the dashboard CTA feels immediate instead of generic.",
    promptBody:
      "Keep the tone premium and realistic. Improve the headline, subhead, and CTA hierarchy without sounding inflated.",
    updatedAt: "Today",
  },
  {
    id: "3",
    title: "Convert utility-heavy JSX into reusable UI blocks",
    category: "refactor",
    tags: ["tailwind", "cleanup", "components"],
    description:
      "Refactor repetitive layout patterns into maintainable components while preserving visuals and browser behavior.",
    promptBody:
      "Extract reusable cards, badges, and layout shells. Keep the current visual direction and do not add unnecessary abstractions.",
    updatedAt: "Yesterday",
  },
  {
    id: "4",
    title: "Draft release notes for prompt workflow changes",
    category: "release",
    tags: ["docs", "release", "workflow"],
    description:
      "Summarize dashboard improvements, testing coverage, and any changes to the agent-guidance workflow.",
    promptBody:
      "Focus on user-facing improvements, browser verification steps, and guidance for future contributors.",
    updatedAt: "3 days ago",
  },
  {
    id: "5",
    title: "Audit the mobile dashboard for cramped controls",
    category: "review",
    tags: ["mobile", "layout", "qa"],
    description:
      "Inspect the dashboard under a narrow viewport and identify where the layout feels compressed or hard to use.",
    promptBody:
      "Look for weak hierarchy, chip wrapping issues, touch target problems, and places where spacing feels tighter than it should.",
    updatedAt: "This week",
  },
  {
    id: "6",
    title: "Generate premium art direction for the PromptBoard hero",
    category: "frontend",
    tags: ["design", "hero", "assets"],
    description:
      "Create an image prompt that explores dark-mode SaaS visuals, subtle glow, and believable product-marketing depth.",
    promptBody:
      "Generate a premium dark-mode SaaS hero visual with floating prompt cards, deep navy tones, emerald and violet accents, and realistic glass panels.",
    updatedAt: "This week",
  },
];
