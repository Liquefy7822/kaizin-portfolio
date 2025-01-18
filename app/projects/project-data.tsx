// project-data.tsx
export interface Project {
  title: string;
  year: number;
  description: string;
  url: string; // Internal path used for dynamic routing
}

export const projects: Project[] = [
  {
    title: "SIT-SST DISCOVERY Week",
    year: 2024,
    description: "3 Day camp at SIT",
    url: "sit-sst", // URL for the dynamic route
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "opendeeplearning", // URL for the dynamic route
  },
];
