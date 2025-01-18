export interface Project {
  title: string;
  year: number;
  description: string;
  url: string; // This will now correspond to internal paths
}

export const projects: Project[] = [
  {
    title: "Mithril AI",
    year: 2024,
    description: "Open science AI research lab",
    url: "mithril-ai", // Internal path as a route
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "opendeeplearning", // Internal path as a route
  },
];
