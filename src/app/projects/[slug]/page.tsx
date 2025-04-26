// app/projects/[slug]/page.tsx
import { allProjects } from 'content-collections';
import ProjectPageClient from './ProjectPageClient';
import { notFound } from 'next/navigation';

// 1️⃣  still needed for static export on GitHub Pages
export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p._meta.path }));
}

// 2️⃣  Correctly typed server component
type Params = Promise<{ slug: string }>;

export default async function ProjectPage({
  params,
}: {
  params: Params;              // <-- promise
  searchParams?: Promise<Record<string, unknown>>; // optional but harmless
}) {
  // 3️⃣  await before using
  const { slug } = await params;

  const project = allProjects.find((p) => p._meta.path === slug);
  if (!project) notFound();

  return <ProjectPageClient project={project} />;
}
