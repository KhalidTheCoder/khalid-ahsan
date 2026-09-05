export const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "services",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const sectionToPath: Record<SectionId, string> = {
  home: "/",
  about: "/about",
  experience: "/experience",
  projects: "/projects",
  services: "/services",
  contact: "/contact",
};

export function pathToSection(pathname: string): SectionId {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const found = SECTION_IDS.find((id) => sectionToPath[id] === clean);
  return found ?? "home";
}

export const profile = {
  name: "Khalid Ahsan",
  role: "Full Stack Developer",
  location: "Dhaka, Bangladesh · GMT+6",
  intro:
    "Software developer specializing in modern SaaS platforms and robust web applications. I deliver end-to-end solutions, bridging scalable backend logic with seamless user experiences.",
  heroDescription:
    "I architect and build modern SaaS products and high-performance web applications. With over two years of experience delivering complete systems, I take client products from initial concept through robust backend deployment to the final user interface.",
  status: "Open to full-time opportunities",
  email: "khalidahsan2407@gmail.com",
  stats: [
    { value: "2+", label: "Years of\nExperience" },
    { value: "15+", label: "Projects\nCompleted" },
    { value: "9+", label: "Worldwide\nClients" },
  ],
};

export const socials = [
  {
    label: "GitHub",
    handle: "github.com/KhalidTheCoder",
    href: "https://github.com/KhalidTheCoder",
  },
  {
    label: "CV",
    handle: "View résumé",
    href: "https://drive.google.com/file/d/1_w34nJDpIh9XrpnFJtO428qmzSiWzW0j/view?usp=sharing",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/khalid24",
    href: "https://www.linkedin.com/in/khalid24/",
  },
];

export const experienceMetrics = [
  { value: "2+", label: "Years experience" },
  { value: "13+", label: "Projects shipped" },
  { value: "12", label: "Member team led" },
];

export const experience = [
  {
    company: "FB International BD",
    role: "Team Lead & Full Stack Developer",
    period: "2025 — 2026",
    featured: true,
    tags: ["Leadership", "Full-stack"],
    highlights: [
      "Promoted to Team Lead within 2 months",
      "Led a cross-functional team of 12 developers and designers",
      "Delivered 13+ full-stack applications across 5 global markets",
    ],
  },
  {
    company: "Independent Developer",
    role: "Full Stack Developer",
    period: "2024 — 2025",
    featured: false,
    tags: ["Independent", "Product delivery"],
    highlights: [
      "Built and deployed end-to-end web applications",
      "Delivered SaaS, commerce, and real-estate MVPs",
      "Owned database, API, and frontend implementation",
    ],
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind",
  "Git",
];

export const projects = [
  {
    name: "Cresify",
    category: "Client project · Shipped",
    description:
      "A production-grade multi-vendor marketplace engineered to connect customers, sellers, and service providers through a scalable commerce experience.",
    tech: ["Next.js"],
    image: "/cresify.png",
    live: "https://cresify.com/",
    featured: true,
  },
  {
    name: "Bright Horizons",
    category: "Client project · In development",
    description:
      "A personalized development platform engineered to deliver weekly plans, therapist-designed activities, and guided experiences for growing families.",
    tech: ["Next.js"],
    image: "/bright-horizons.png",
    live: "https://bright-horizons-collective.vercel.app/",
    featured: false,
  },
  {
    name: "Facep",
    category: "Client project · In development",
    description:
      "A scalable e-commerce platform engineered for product discovery, category browsing, personalized recommendations, deals, and seamless shopping.",
    tech: ["Next.js"],
    image: "/facep-ecommerce.png",
    live: "https://facep-ecommerce-frontend.vercel.app/",
    featured: false,
  },
];

export const services = [
  {
    title: "End-to-End Product Engineering",
    description:
      "Architecting and building scalable web applications from the database schema to the final responsive UI, ensuring robust performance across the stack.",
  },
  {
    title: "Frontend Architecture",
    description:
      "Developing maintainable, high-performance user interfaces using React, Next.js, and TypeScript that scale seamlessly as the product grows.",
  },
  {
    title: "Technical Leadership",
    description:
      "Bridging the gap between product requirements and technical execution, enforcing code quality, and driving cross-functional team delivery.",
  },
];

export const testimonials = [
  {
    quote:
      "Khalid took full ownership of our product's architecture and delivered a highly scalable platform that exceeded our expectations.",
    author: "Private client",
    title: "Product engineering engagement",
  },
  {
    quote:
      "A rare developer who writes exceptionally clean code, bridges the gap between backend and design, and effectively leads cross-functional teams.",
    author: "Team feedback",
    title: "FB International BD",
  },
];

export const articles = [
  { title: "Interfaces that survive contact with real data", date: "Jun 2026", read: "6 min" },
  { title: "Against the infinite settings page", date: "Mar 2026", read: "4 min" },
  { title: "Notes on building a bento layout that holds up", date: "Jan 2026", read: "8 min" },
];
