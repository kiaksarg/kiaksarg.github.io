import { GetStaticPaths, GetStaticProps } from "next";
import { allProjects } from "content-collections";
import ProjectPageClient from "../../components/ProjectPageClient";
import type { Project } from "content-collections";

// ----------  Static export helpers  -----------------
export const getStaticPaths: GetStaticPaths = () => ({
  paths: allProjects.map((p) => ({ params: { slug: p._meta.path } })),
  fallback: false,                // export *only* the listed pages
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = allProjects.find(
    (p) => p._meta.path === params!.slug
  ) as Project | undefined;

  return project
    ? { props: { project } }
    : { notFound: true };         // 404 at build-time if slug missing
};

// ----------  Page component  ------------------------
export default function ProjectPage({ project }: { project: Project }) {
  return <ProjectPageClient project={project} />;
}
