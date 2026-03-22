import { useState } from "react";

import { type PromptCategory } from "@/data/prompts";
import { splitTags } from "@/lib/utils";

type CreatePromptFormProps = {
  categories: PromptCategory[];
  onCreate: (values: {
    title: string;
    category: PromptCategory;
    tags: string[];
    description: string;
    promptBody: string;
  }) => void;
};

export function CreatePromptForm({ categories, onCreate }: CreatePromptFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<PromptCategory>(categories[0]);
  const [tags, setTags] = useState("review, ui");
  const [description, setDescription] = useState("");
  const [promptBody, setPromptBody] = useState("");
  const [error, setError] = useState("");

  function submitForm() {
    if (!title.trim() || !description.trim() || !promptBody.trim()) {
      setError("Title, description, and prompt body are required.");
      return;
    }

    onCreate({
      title: title.trim(),
      category,
      tags: splitTags(tags),
      description: description.trim(),
      promptBody: promptBody.trim(),
    });

    setTitle("");
    setCategory(categories[0]);
    setTags("review, ui");
    setDescription("");
    setPromptBody("");
    setError("");
  }

  return (
    <section className="pb-panel rounded-[1.75rem] p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
          Create prompt
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
          Draft a new workflow card
        </h2>
      </div>
      <form
        className="mt-6 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          submitForm();
        }}
      >
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Title</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="focus-ring w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            placeholder="Review the dashboard chip hierarchy"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as PromptCategory)}
            className="focus-ring w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Tags</span>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            className="focus-ring w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            placeholder="mobile, layout, qa"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Description</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            className="focus-ring w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            placeholder="What should the next inspection or rewrite accomplish?"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Prompt body</span>
          <textarea
            value={promptBody}
            onChange={(event) => setPromptBody(event.target.value)}
            rows={5}
            className="focus-ring w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            placeholder="Inspect the mobile dashboard, look for cramped controls, and fix only the spacing and sizing issues."
          />
        </label>
        {error ? (
          <p role="alert" className="text-sm text-amber-300">
            {error}
          </p>
        ) : null}
        <button
          type="button"
          onClick={submitForm}
          className="focus-ring w-full rounded-full bg-[var(--pb-violet)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
        >
          Add prompt
        </button>
      </form>
    </section>
  );
}
