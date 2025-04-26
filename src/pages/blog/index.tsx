import React from "react";
import Card from "../../components/Card";
import { allBlogs } from "content-collections";

export const metadata = {
  title: "Blog",
  description: "All articles and insights",
};

/**
 * Server Component: lists all blog posts in a vertical archive
 */
export default function BlogIndexPage() {
  const posts = allBlogs
    .slice()
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="flex flex-col gap-6">
        {posts.map((blog) => (
          <Card
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            title={blog.title}
            // Ensure your MDX frontmatter includes `excerpt` or `summary`
            description={blog.excerpt ?? ""}
            cover={blog.cover}
            tags={blog.tags}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
}
