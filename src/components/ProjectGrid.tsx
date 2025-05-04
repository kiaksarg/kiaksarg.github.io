// components/ProjectGrid.js
"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import Card from "./Card";
import { allProjects, Project } from "content-collections";

// Define props type for TypeScript (optional but good practice)
interface ProjectGridProps {
  limit?: number; // Make limit optional
}

// Add the limit prop to the function signature
export default function ProjectGrid({ limit }: ProjectGridProps) {
  const all: Project[] = allProjects;
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

  // Sort projects by priority
  visible.sort((a, b) => {
    const pa = a.priority ?? Infinity;
    const pb = b.priority ?? Infinity;
    return pa - pb;
  });

  // Apply the limit *after* filtering and sorting
  const displayProjects = limit ? visible.slice(0, limit) : visible;

  return (
    <>
      {/* Only show FilterBar if no limit is applied (i.e., on the full projects page) */}
      {!limit && (
        <FilterBar tags={tags} activeTag={activeTag} onTagClick={setActiveTag} />
      )}

      {/* Render the limited or full list of projects */}
      <div className="flex flex-col gap-6 max-w-3xl ">
        {/* Map over the potentially sliced array */}
        {displayProjects.map((p) => (
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