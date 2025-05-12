import React from 'react';

// Define the type for course details
interface Course {
  name: string;
  term: string;
}

const TeachingPage: React.FC = () => {
  // Define course data based on your CV/info
  const courses: Course[] = [
    { name: 'Human-Computer Interaction', term: 'Autumn 2024' },
    { name: 'Data Structures and Algorithms (Python)', term: 'Spring 2024 & 2025' },
    { name: 'Interaction Techniques', term: 'Spring 2024 & 2025' },
    { name: 'Development of Mobile Applications', term: '(Spring & Summer 2025)' },
  ];

  return (
    // Apply base background and text colors for light/dark modes
    // Use px-6 like the example, keep max-w-3xl for content width
    <div className="container mx-auto px-6 py-12 max-w-3xl bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700 text-black dark:text-white">
        Teaching
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">
          Teaching Assistant
        </h2>
        {/* Adjusted text colors for light/dark modes */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
          Department of Computing Science, Umeå University
        </p>
        <p className="text-md text-gray-500 dark:text-gray-400 mb-4">
          January 2024 – Present
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          As a teaching assistant, I support student learning across various courses within the department. My responsibilities include assisting with lectures, providing coding tutoring, marking assignments, and contributing to the design of educational content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">
          Courses Assisted
        </h2>
        {/* Adjusted list text colors */}
        <ul className="list-disc ml-6 space-y-2 text-gray-800 dark:text-gray-200">
          {courses.map((course) => (
            <li key={course.name}>
              {/* font-medium will inherit the color */}
              <span className="font-medium">{course.name}</span> ({course.term})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">
          Contributions
        </h2>
        {/* Adjusted list text colors */}
        <ul className="list-disc ml-6 space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            Designed a practical assignment focused on heuristic evaluation for the Interaction Techniques course.
          </li>
          <li>
            Prepared and delivered a lecture and accompanying assignment on Activity Theory and context analysis in HCI.
            {/* Optional: Add a link to your slides. Upload the PDF and replace the href */}
            {/* Apply link styles similar to the example */}
             <a href="/teaching/activity-theory-in-hci.pdf" // Example path - MAKE SURE TO PLACE YOUR PDF IN THE /public FOLDER
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
             >
              (View Slides)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TeachingPage;