// project-data.tsx
export interface Project {
  title: string;
  year: number;
  description: string;
  url: string; // This corresponds to the project-specific pages inside 'projects-info'
}

export const projects: Project[] = [
  {
    title: "SIT-SST DISCOVERY Week",
    year: 2024,
    description: "3 Day camp at SIT",
    url: "sit-sst", // This corresponds to pages/projects/projects-info/sit-sst.tsx
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "opendeeplearning", // This corresponds to pages/projects/projects-info/opendeeplearning.tsx
  },
];
