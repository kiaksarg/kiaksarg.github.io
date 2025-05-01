import React from "react";
import Card from "../../components/Card";
import { allProjects } from "content-collections";

export const metadata = {
  title: "All Projects",
  description: "A complete list of all my projects",
};

/**
 * Server Component: displays an index of all projects.
 */
export default function ProjectsPage() {
  // sort by date descending
  const projects = allProjects
  .slice()
  .sort((a, b) => a.priority - b.priority);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Card
            key={project.slug}
            href={`/projects/${project.slug}`}
            title={project.title}
            description={project.excerpt}
            cover={`/${project.cover}`}
            tags={project.tags}
            date={project.date}
          />
        ))}
      </div>
    </section>
  );
}
