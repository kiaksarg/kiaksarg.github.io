"use client";
import React from "react";

// Import the ProjectGrid component
import ProjectGrid from "../../components/ProjectGrid"; // Adjust path if needed

// Metadata can still be exported from a Client Component file
export const metadata = {
  title: "All Projects",
  description: "A complete list of all my projects",
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        All Projects
      </h1>
      {/* Render the ProjectGrid component directly */}
      {/* Pass NO props, so it shows all items and includes the filter bar */}
      <div className="max-w-3xl mx-auto">
        <ProjectGrid />
      </div>
    </section>
  );
}
