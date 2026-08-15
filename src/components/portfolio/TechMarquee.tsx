import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
} from "react-icons/si";

/** A single tech-stack item rendered inside the marquee. */
interface TechItem {
  icon: IconType;
  label: string;
}

/** Column A — scrolls upward. */
export const COLUMN_A: TechItem[] = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNestjs, label: "NestJS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPrisma, label: "Prisma" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiGraphql, label: "GraphQL" },
  { icon: SiDocker, label: "Docker" },
];

/** Column B — scrolls downward. */
export const COLUMN_B: TechItem[] = [
  { icon: SiRedis, label: "Redis" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiNginx, label: "Nginx" },
  { icon: SiSocketdotio, label: "Socket.io" },
  { icon: SiExpress, label: "Express" },
  { icon: SiVite, label: "Vite" },
  { icon: SiWebpack, label: "Webpack" },
  { icon: SiJest, label: "Jest" },
];

/**
 * A single vertical marquee column.
 *
 * @param direction - "up" scrolls bottom→top, "down" scrolls top→bottom.
 * @param items     - Array of { icon, label } tech items to display.
 * @param duration  - CSS animation duration string (e.g. "22s").
 */
function MarqueeColumn({
  direction,
  items,
  duration,
}: {
  direction: "up" | "down";
  items: TechItem[];
  duration: string;
}) {
  const animClass = direction === "up" ? "animate-marquee-up" : "animate-marquee-down";

  return (
    <div className="flex w-[11rem] flex-col gap-3" style={{ animationDuration: duration }}>
      {/* Duplicate the list for seamless infinite loop. */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={cn("flex flex-col gap-3", animClass)}
          style={{ animationDuration: duration }}
        >
          {items.map((item) => (
            <div
              key={`${copy}-${item.label}`}
              className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-elevated/70 px-3.5 py-2.5 backdrop-blur-sm transition-colors hover:border-white/[0.14]"
            >
              <item.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Dual vertical marquee: two columns of tech-stack icons scrolling in
 * opposite directions. Column A goes up, Column B goes down.
 *
 * Hidden on viewports below `lg` — the hero section stacks on mobile.
 */
export function TechMarquee() {
  return (
    <div className="relative hidden h-full max-h-[22rem] overflow-hidden lg:flex lg:gap-5">
      {/* Top + bottom fade masks so icons dissolve into the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-background) 0%, transparent 15%, transparent 85%, var(--color-background) 100%)",
        }}
      />

      <MarqueeColumn direction="up" items={COLUMN_A} duration="22s" />
      <MarqueeColumn direction="down" items={COLUMN_B} duration="28s" />
    </div>
  );
}
