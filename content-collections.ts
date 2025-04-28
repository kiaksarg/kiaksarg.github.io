// content-collections.ts
import { defineConfig, defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const projects = defineCollection({
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
      message: "Must be a valid date",
    }),
    showOnHome: z.boolean().default(false),
    priority: z.number().default(0),
    links: z.any().optional(),
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return { ...doc, mdx };
  },
});

const blog = defineCollection({
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
      message: "Must be a valid date",
    }),
    showOnHome: z.boolean().default(false),
    priority: z.number().default(0),
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return { ...doc, mdx };
  },
});

export default defineConfig({
  collections: [projects, blog],
});
