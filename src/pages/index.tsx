import Link from "next/link";
import ProjectGrid from "../components/ProjectGrid";

export default function HomePage() {
  return (
    <section className="container mx-auto px-6 py-12 space-y-16 bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-4xl pb-6 text-black dark:text-white">
          Arash Goodarzi
        </h1>
        <p className="text-xl text-justify text-gray-800 dark:text-gray-200">
          Hello! I am a dedicated interaction designer and full-stack developer
          with a passion for building and optimizing interactive systems,
          websites, and applications. My research pertains to understanding how
          Human-Computer Interaction (HCI), Extended Reality (XR), and
          Artificial Intelligence (AI) technologies mediate user interactions
          and experiences. I approach my work through a multidisciplinary lens
          that integrates computer science, cognitive & behavioral sciences, and
          machine learning. I am particularly interested in developing
          innovative interaction techniques within immersive environments,
          aiming to create solutions that enhance user experience and
          interaction effectiveness.
        </p>
        {/* <p className="text-sm text-gray-600 dark:text-gray-400">
          Available 40+ hrs/week • CET (UTC+1)
        </p> */}
        {/* <Link
          href="/about-me"
          className="inline-block mt-4 px-6 py-2 border border-gray-800 dark:border-gray-200 rounded
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          About Me
        </Link> */}
      </div>

      
      {/* Projects */}
      <div className="max-w-3xl mx-auto space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ProjectGrid />
        </div>
        <Link
          href="/projects"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          View all
        </Link>
      </div>

      {/* Connect
      <div className="max-w-2xl mx-auto text-center space-y-2">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Connect
        </h2>
        <p>
          <a
            href="mailto:kiaksarg@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            kiaksarg@gmail.com
          </a>
        </p>
        <Link
          href="/arashg_cv.pdf"
          target="_blank"
          className="inline-block px-6 py-2 border border-gray-800 dark:border-gray-200 rounded
                     hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Download Resume
        </Link>
      </div> */}
    </section>
  );
}
