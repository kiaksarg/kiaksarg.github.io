"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
 import Card from "./Card";
import { allProjects, Project } from "content-collections";

export default function ProjectGrid() {
  const all: Project[] = allProjects;
  //   const tags = Array.from(new Set(all.flatMap((p) => p.tags ?? [])));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allowedTags = [
    "XR",
    "Interaction Design",
    "Prototyping",
    "Software Development",
    "Full-stack",
  ];
  const tags = allowedTags;

  const visible = activeTag
    ? all.filter((p) => (p.tags ?? []).includes(activeTag))
    : all;

  return (
    <>
      <FilterBar tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />

      {/* one column by default, two columns at md breakpoint */}
      <div className="flex flex-col gap-6 max-w-3xl ">
        {visible.map((p) => (
          <Card
            key={p.slug}
            href={`/projects/${p.slug}`}
            title={p.title}
            description={p.excerpt}
            cover={p.cover}
            tags={p.tags}
            date={p.date}
          />
        ))}
      </div>
    </>
  );
}
