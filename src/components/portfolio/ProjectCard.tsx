import { ArrowUpRight, Github } from "lucide-react";
import { BentoCard, CardLabel } from "./BentoCard";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  repo: string;
};

export function ProjectCard({
  project,
  large = false,
  className,
}: {
  project: Project;
  large?: boolean;
  className?: string;
}) {
  return (
    <BentoCard tone="surface" interactive padded={false} className={cn("flex flex-col", className)}>
      <div className={cn("relative overflow-hidden", large ? "h-56 sm:h-72" : "h-40")}>
        <img
          src={project.image}
          alt={`${project.name} — ${project.category}`}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[0.65rem] font-mono backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardLabel>{project.category}</CardLabel>
            <h3 className={cn("mt-2 truncate", large ? "text-3xl" : "text-xl")}>{project.name}</h3>
          </div>
          <div className="flex shrink-0 gap-1.5">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} source`}
              className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live site`}
              className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
}
