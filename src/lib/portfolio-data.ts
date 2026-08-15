import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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
  location: "Dhaka, Bangladesh — GMT+6",
  intro:
    "I design and build fast, considered interfaces for teams that care about detail. Nine years of shipping product, from first sketch to production.",
  status: "Open for select projects — Q4 2026",
  email: "hello@khalidahsan.dev",
  stats: [
    { value: "+9", label: "Years of\nExperience" },
    { value: "+48", label: "Projects\nCompleted" },
    { value: "+12", label: "Worldwide\nClients" },
  ],
};

export const socials = [
  { label: "GitHub", handle: "github.com/khalidahsan", href: "https://github.com" },
  { label: "X", handle: "@khalidbuilds", href: "https://x.com" },
  { label: "LinkedIn", handle: "in/khalidahsan", href: "https://linkedin.com" },
  { label: "Read.cv", handle: "read.cv/khalid", href: "https://read.cv" },
];

export const experience = [
  {
    company: "Northlight Systems",
    role: "Staff Product Engineer",
    period: "2023 — Present",
    summary: "Own the design system and the editor surface used by 40k daily operators.",
  },
  {
    company: "Fathom Labs",
    role: "Senior Frontend Engineer",
    period: "2020 — 2023",
    summary: "Rebuilt the analytics client; cut time-to-interactive from 4.1s to 900ms.",
  },
  {
    company: "Studio Kern",
    role: "Interface Designer / Developer",
    period: "2017 — 2020",
    summary: "Design-engineering for editorial and commerce clients across 20+ launches.",
  },
];

export const skills = [
  "TypeScript",
  "React",
  "TanStack",
  "Node",
  "Postgres",
  "Tailwind",
  "Motion",
  "Figma",
  "WebGL",
  "Rust",
];

export const projects = [
  {
    name: "Meridian",
    category: "Analytics platform",
    year: "2026",
    description:
      "A realtime metrics workspace with a keyboard-first query builder and shareable boards.",
    tech: ["TypeScript", "TanStack", "ClickHouse"],
    image: project1,
    live: "https://example.com",
    repo: "https://github.com",
    featured: true,
  },
  {
    name: "Halo Field",
    category: "Mobile product",
    year: "2025",
    description: "Offline-first field reporting for climate researchers.",
    tech: ["React Native", "SQLite"],
    image: project2,
    live: "https://example.com",
    repo: "https://github.com",
    featured: false,
  },
  {
    name: "Lattice",
    category: "Open source",
    year: "2025",
    description: "A tiny graph layout engine for dependency visualisation.",
    tech: ["Rust", "WASM"],
    image: project3,
    live: "https://example.com",
    repo: "https://github.com",
    featured: false,
  },
];

export const services = [
  {
    title: "Product design engineering",
    description:
      "End-to-end: interface design, front-end architecture, shipped in weeks not quarters.",
  },
  {
    title: "Design systems",
    description: "Token architecture, component libraries, documentation your team actually uses.",
  },
  {
    title: "Performance rescue",
    description: "Audits and hands-on work to make a slow app feel instant again.",
  },
];

export const testimonials = [
  {
    quote:
      "Khalid rebuilt our core surface in six weeks and it still feels like the fastest tool we own.",
    author: "Rina Oyelaran",
    title: "VP Product, Northlight",
  },
  {
    quote: "Rare combination: designs with taste, ships with discipline.",
    author: "Tomas Vidal",
    title: "Founder, Fathom Labs",
  },
];

export const articles = [
  { title: "Interfaces that survive contact with real data", date: "Jun 2026", read: "6 min" },
  { title: "Against the infinite settings page", date: "Mar 2026", read: "4 min" },
  { title: "Notes on building a bento layout that holds up", date: "Jan 2026", read: "8 min" },
];
