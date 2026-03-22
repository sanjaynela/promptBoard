"use client";

import { useMemo, useState } from "react";

import { CreatePromptForm } from "@/components/dashboard/create-prompt-form";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { EmptyState } from "@/components/dashboard/empty-state";
import { PromptCard } from "@/components/dashboard/prompt-card";
import { PromptDetailSheet } from "@/components/dashboard/prompt-detail-sheet";
import { TagFilterBar } from "@/components/dashboard/tag-filter-bar";
import { prompts as seedPrompts, type PromptCategory, type PromptItem } from "@/data/prompts";

const categories: PromptCategory[] = ["review", "refactor", "frontend", "release"];

export default function DashboardPage() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<PromptItem[]>(seedPrompts);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(seedPrompts[0]?.id ?? null);

  const tags = useMemo(() => {
    const allTags = items.flatMap((item) => item.tags);
    return ["all", ...Array.from(new Set(allTags))];
  }, [items]);

  const filteredPrompts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesTag = selectedTag === "all" || item.tags.includes(selectedTag);
      const haystack = [item.title, item.description, item.promptBody ?? "", item.tags.join(" ")]
        .join(" ")
        .toLowerCase();

      return matchesTag && (!query || haystack.includes(query));
    });
  }, [items, search, selectedTag]);

  const selectedPrompt =
    filteredPrompts.find((item) => item.id === selectedPromptId) ??
    items.find((item) => item.id === selectedPromptId) ??
    null;

  function handleCreatePrompt(values: {
    title: string;
    category: PromptCategory;
    tags: string[];
    description: string;
    promptBody: string;
  }) {
    const nextPrompt: PromptItem = {
      id: String(Date.now()),
      title: values.title,
      category: values.category,
      tags: values.tags,
      description: values.description,
      promptBody: values.promptBody,
      updatedAt: "Just now",
    };

    setItems((current) => [nextPrompt, ...current]);
    setSelectedPromptId(nextPrompt.id);
    setSelectedTag("all");
    setSearch("");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#08111f_0%,#060b16_55%,#04070f_100%)] px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <DashboardHeader search={search} onSearchChange={setSearch} />
        <TagFilterBar tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_380px]">
          <section className="space-y-4">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{filteredPrompts.length} prompts in view</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Browser-friendly states: search, filters, detail, create
              </span>
            </div>
            {filteredPrompts.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPrompts.map((item) => (
                  <PromptCard
                    key={item.id}
                    item={item}
                    active={item.id === selectedPrompt?.id}
                    onOpen={() => setSelectedPromptId(item.id)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState search={search} selectedTag={selectedTag} onReset={() => {
                setSearch("");
                setSelectedTag("all");
              }} />
            )}
          </section>
          <aside className="space-y-4">
            <PromptDetailSheet prompt={selectedPrompt} />
            <CreatePromptForm categories={categories} onCreate={handleCreatePrompt} />
          </aside>
        </div>
      </div>
    </main>
  );
}
