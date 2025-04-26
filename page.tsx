// app/blog/[slug]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { allBlogs } from "content-collections";
import MDXRenderer from "@/app/components/RenderMDX";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  // Find the matching post
  const post = slug && allBlogs.find((p) => p.slug === slug);

  // Redirect to a real 404 if nothing matches
  useEffect(() => {
    if (!post) {
      router.replace("/404");
    }
  }, [post, router]);

  // Avoid flicker while redirecting
  if (!post) {
    return null;
  }

  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <MDXRenderer code={post.mdx} />
    </article>
  );
}
