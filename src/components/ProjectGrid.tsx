// components/ProjectGrid.js
"use client";

// Import useEffect along with useState and useMemo
import { useState, useMemo, useEffect } from "react";
import FilterBar from "./FilterBar";
import Card from "./Card";
import { allProjects, Project } from "content-collections";

interface ProjectGridProps {
  limit?: number;
  onVisibleCountChange?: (count: number) => void;
}

export default function ProjectGrid({ limit, onVisibleCountChange }: ProjectGridProps) {
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

  const visible = useMemo(() => {
    // console.log("Recalculating visible projects. Active tag:", activeTag);
    const filtered = activeTag
      ? all.filter((p) => (p.tags ?? []).includes(activeTag))
      : all;
    const sorted = [...filtered].sort((a, b) => {
      const pa = a.priority ?? Infinity;
      const pb = b.priority ?? Infinity;
      return pa - pb;
    });
    return sorted;
  }, [activeTag, all]);

  const displayProjects = limit ? visible.slice(0, limit) : visible;

  // Effect to notify parent about the count of potentially visible items
  // *** Correction: This should be useEffect, not useState ***
  useEffect(() => {
    // Notify initially and whenever 'visible' count changes (due to filter)
    // console.log("Visible count changed:", visible.length);
    onVisibleCountChange?.(visible.length);
  }, [visible.length, onVisibleCountChange]); // Correct dependencies


  const handleTagClick = (tag: string | null) => {
    // console.log("Setting active tag:", tag);
    setActiveTag(tag);
  };

  return (
    <>
      <FilterBar tags={tags} activeTag={activeTag} onTagClick={handleTagClick} />
      <div className="flex flex-col gap-6 max-w-3xl mt-6">
        {displayProjects.length > 0 ? (
            displayProjects.map((p) => (
              <Card
                key={p.slug}
                href={`/projects/${p.slug}`}
                title={p.title}
                description={p.excerpt}
                cover={p.cover}
                tags={p.tags}
                date={p.date}
              />
            ))
        ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No projects found matching the selected filter.
            </p>
        )}
      </div>
    </>
  );
}