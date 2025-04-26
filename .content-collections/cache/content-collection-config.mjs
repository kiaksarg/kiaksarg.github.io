// content-collections.ts
import { defineConfig, defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var projects = defineCollection({
  name: "projects",
  directory: "src/content/projects",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    cover: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    date: z.string().refine((d) => !Number.isNaN(Date.parse(d)), {
      message: "Must be a valid date"
    }),
    showOnHome: z.boolean().default(false),
    links: z.any().optional()
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return { ...doc, mdx };
  }
});
var blog = defineCollection({
  name: "blog",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    cover: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.string().refine((d) => !Number.isNaN(Date.parse(d)), {
      message: "Must be a valid date"
    }),
    showOnHome: z.boolean().default(false)
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return { ...doc, mdx };
  }
});
var content_collections_default = defineConfig({
  collections: [projects, blog]
});
export {
  content_collections_default as default
};
