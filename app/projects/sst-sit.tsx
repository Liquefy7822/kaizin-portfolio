
// pages/projects/sit-sst.tsx
import { FC } from 'react';

const SitSST: FC = () => {
  return (
    <div className="project-page">
      {/* Header Section with Image and Info */}
      <div className="flex flex-col sm:flex-row mb-8">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-6">
          <img
            src="/path-to-your-image.jpg" // Replace with the actual path to your project image
            alt="Sit SST Project"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        {/* Info Section */}
        <div className="w-full sm:w-2/3">
          <h1 className="text-3xl font-semibold mb-2">Sit SST</h1>
          <p className="text-sm text-gray-500 mb-2">Year: 2025</p>
          <p className="text-sm text-gray-500 mb-2">Location: XYZ City</p>
        </div>
      </div>

      {/* Project Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        <p className="text-gray-700">
          Sit SST is a cutting-edge project that focuses on solving the problem of [specific issue]. The goal of this project is to [goal of the project]. 
          This section would detail the purpose, scope, and objectives of the project.
        </p>
      </section>

      {/* Learning Points Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Learning Points</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Understanding the fundamentals of [topic].</li>
          <li>Application of [skills or technology] in real-world scenarios.</li>
          <li>Collaboration and teamwork in a project-based environment.</li>
        </ul>
      </section>

      {/* Key Achievements Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Key Achievements</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Successfully developed a prototype of [feature or product].</li>
          <li>Launched a beta version for user testing.</li>
          <li>Received positive feedback from [group or community].</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700">
          The Sit SST project has been a success in terms of [summary of outcomes]. Moving forward, we aim to [future steps or improvements].
        </p>
      </section>
    </div>
  );
};

export default SitSST;
