import { GetStaticPaths, GetStaticProps } from "next";
import { allBlogs } from "content-collections";
import BlogPostPageClient from "../../components/BlogPostPageClient";
import type { Blog } from "content-collections";

// ----------  Static export helpers  -----------------
export const getStaticPaths: GetStaticPaths = () => ({
  // Use _meta.path to match your front-matter slug (e.g., slug: paruvan-language)
  paths: allBlogs.map((p) => ({ params: { slug: p._meta.path } })),
  fallback: false, // export *only* the listed pages
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params!.slug as string;

  // If your content system exposes `_meta.slug`, use that instead of `_meta.path`
  const post = allBlogs.find((p) => p._meta.path === slug) as Blog | undefined;

  return post ? { props: { post } } : { notFound: true };
};

// ----------  Page component  ------------------------
export default function BlogPostPage({ post }: { post: Blog }) {
  return <BlogPostPageClient post={post} />;
}
