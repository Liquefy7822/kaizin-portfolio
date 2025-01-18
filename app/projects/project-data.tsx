export interface Project {
  title: string;
  year: number;
  description: string;
  url: string; // This will now correspond to internal paths
}

export const projects: Project[] = [
  {
    title: "SIT-SST DISCOVERY Week",
    year: 2024,
    description: "3 Day camp at SIT",
    url: "sst-sit", // Internal path as a route
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "opendeeplearning", // Internal path as a route
  },
];
