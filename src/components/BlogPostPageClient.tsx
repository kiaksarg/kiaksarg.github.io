// components/BlogPostPageClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Link2, Check } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "../components/MDXComponents";
import type { Blog } from "content-collections";

type Props = { post: Blog };

export default function BlogPostPageClient({ post }: Props) {
  const [copied, setCopied] = useState(false);
  const [href, setHref] = useState<string>("");

  // Compute canonical href client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHref(`${window.location.origin}/blog/${post._meta.path}`);
    }
  }, [post._meta.path]);

  const handleCopy = async () => {
    try {
      if (!href) return;
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      console.error("Copy failed");
    }
  };

  const formattedDate = useMemo(() => {
    const d = post?.date;
    if (!d) return null;
    try {
      return new Date(d).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    } catch {
      return String(d);
    }
  }, [post]);

  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      {/* Title + copy link */}
      <h1 className="text-4xl font-bold mb-2">
        <span className="align-middle">{post.title}</span>
        <button
          onClick={handleCopy}
          aria-label="Copy blog link"
          className="ml-2 inline-flex items-center whitespace-nowrap opacity-60 hover:opacity-100 focus:outline-none"
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

      {/* Meta row */}
      {(formattedDate || post?.tags?.length) && (
        <div className="text-sm text-muted-foreground my-6 not-prose flex flex-wrap items-center gap-3">
          {formattedDate && (
            <time dateTime={String(post.date)}>{formattedDate}</time>
          )}
          {post?.tags?.length ? (
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <li key={t} className="px-2 py-0.5 rounded-full border text-xs">
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}

      {/* Cover image
      {post?.cover && (
        <figure className="mb-8">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-xl"
          />
        </figure>
      )} */}

      {/* Excerpt */}
      {/* {post?.excerpt && <p className="lead mb-8">{post.excerpt}</p>} */}

      {/* MDX */}
      <MDXContent code={post.mdx} components={mdxComponents} />
    </article>
  );
}
