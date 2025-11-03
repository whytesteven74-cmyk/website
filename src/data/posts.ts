export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "cycling-europe-lived-experience",
    title: "Cycling Europe: A Year of Lived Experience",
    date: "2025-01-10",
    excerpt: "What 5000+ miles on a bike taught me about homelessness, dignity, and community.",
    tags: ["journey", "lived-experience", "europe"],
    content: [
      "For one year, I lived the realities of homelessness while cycling across Europe.",
      "I used services, slept rough, and spoke with the people who make support possible.",
      "This post shares what worked, what didn’t, and where we can do better—together.",
    ],
  },
  {
    slug: "designing-services-with-dignity",
    title: "Designing Services with Dignity",
    date: "2025-01-24",
    excerpt: "A framework for making access simple, humane, and effective.",
    tags: ["service-design", "policy", "dignity"],
    content: [
      "The most effective services start with dignity, not gatekeeping.",
      "From intake to follow-up, small design choices either invite people in or push them away.",
      "Here’s a simple, practical framework to spot barriers and remove them.",
    ],
  },
];
