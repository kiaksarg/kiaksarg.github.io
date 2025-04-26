// app/projects/[slug]/ProjectPageClient.tsx
'use client'

import { MDXContent } from '@content-collections/mdx/react'
import { mdxComponents } from '@/app/components/MDXComponents'
import type { Project } from 'content-collections'

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <MDXContent code={project.mdx} components={mdxComponents} />
    </article>
  )
}
