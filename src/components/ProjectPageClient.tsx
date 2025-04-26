"use client";

import { useState, useEffect } from "react";
import { Link2, Check } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "../components/MDXComponents";
import type { Project } from "content-collections";

export default function ProjectPageClient({ project }: { project: Project }) {
  const [copied, setCopied] = useState(false);
  const [projectHref, setProjectHref] = useState<string>("");

  /* ---------- compute href on the client only ---------- */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProjectHref(
        `${window.location.origin}/projects/${project._meta.path}`
      );
    }
  }, [project._meta.path]);

  const handleCopy = async () => {
    try {
      if (!projectHref) return;
      await navigator.clipboard.writeText(projectHref);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      console.error("Copy failed");
    }
  };

  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">
        <span className="align-middle">{project.title}</span>
        <button
          onClick={handleCopy}
          aria-label="Copy project link"
          className="
            ml-2 inline-flex items-center whitespace-nowrap
            opacity-60 hover:opacity-100 focus:outline-none
          "
        >
          {copied ? (
            <>
              <Check size={20} />
              <span className="ml-1 text-xs">Copied!</span>
            </>
          ) : (
            <Link2 size={20} />
          )}
        </button>
      </h1>

      <MDXContent code={project.mdx} components={mdxComponents} />
    </article>
  );
}
