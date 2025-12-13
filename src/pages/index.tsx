import Link from "next/link";
import ProjectGrid from "../components/ProjectGrid";
import { useState, useCallback } from "react";

const INITIAL_LOAD_COUNT = 7;
const LOAD_MORE_INCREMENT = 7; // Your desired increment
export default function HomePage() {
  // State: How many projects we *request* ProjectGrid to display
  const [displayLimit, setDisplayLimit] = useState(INITIAL_LOAD_COUNT);
  // State: The *actual* number of projects matching the filter (reported by ProjectGrid)
  const [actualFilteredCount, setActualFilteredCount] = useState<number | null>(
    null
  );

  // Callback function passed to ProjectGrid to receive the filtered count
  const handleVisibleCountChange = useCallback((count: number) => {
    // console.log("HomePage received filtered count:", count);
    setActualFilteredCount(count);
  }, []); // Stable function reference

  // Function to handle loading more projects
  const handleLoadMore = () => {
    setDisplayLimit((prevLimit) =>
      // Increase the limit, capped by the actual number available after filtering
      Math.min(prevLimit + LOAD_MORE_INCREMENT, actualFilteredCount ?? 0)
    );
  };

  // Determine if the "Load More" button should be shown:
  // Only if the actual count is known AND we are showing fewer than that count.
  const showLoadMoreButton =
    actualFilteredCount !== null && displayLimit < actualFilteredCount;
  return (
    <section className="container mx-auto px-6 py-12 space-y-16 bg-white text-black dark:bg-black dark:text-white">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-4xl pb-6 text-black dark:text-white">
          Arash Goodarzi
        </h1>
        <p className="text-xl text-justify text-gray-700 dark:text-gray-300">
          Hello! I am a dedicated interaction designer and full-stack developer
          with a passion for building and optimizing interactive systems,
          websites, and applications. My research pertains to understanding how
          Human-Computer Interaction (HCI), Extended Reality (XR), and
          Artificial Intelligence (AI) technologies mediate user interactions
          and experiences. I approach my work through a multidisciplinary lens
           that integrates computer science and AI with HCI approaches. 
           I am particularly interested in developing
          novel interaction techniques within immersive environments,
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
          <ProjectGrid
            limit={displayLimit}
            onVisibleCountChange={handleVisibleCountChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center  gap-4 mt-6">
          {/* Added flex container */}
          {/* Conditionally render the "Load More" button */}
          {showLoadMoreButton && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 border rounded
             border-gray-700 text-gray-700 // Changed to gray-700 for light mode
             dark:border-gray-200 dark:text-gray-200
             hover:bg-gray-100 hover:border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-100
             active:bg-gray-200 dark:active:bg-gray-700
             focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 // Adjusted ring color slightly
             transition-colors duration-200
             text-sm font-medium cursor-pointer"
            >
              Load More
            </button>
          )}
          <Link
            href="/projects"
            className="inline-flex items-center px-3 py-1
             text-blue-600 // Changed to blue-600 for light mode
             rounded-md
             hover:bg-blue-100 hover:text-blue-800 // Adjusted hover bg and text color for light mode
             dark:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-blue-200
             transition duration-300 ease-in-out font-semibold"
          >
            View all projects →
          </Link>
        </div>
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
