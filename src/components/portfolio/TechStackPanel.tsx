import type { IconType } from "react-icons";
import {
  SiGit,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface StackTool {
  icon: IconType;
  label: string;
}

const SERVER_TOOLS: StackTool[] = [
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiNestjs, label: "NestJS" },
];

const DATA_TOOLS: StackTool[] = [
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiRedis, label: "Redis" },
];

const DELIVERY_TOOLS: StackTool[] = [
  { icon: SiVercel, label: "Vercel" },
  { icon: SiGit, label: "Git" },
];

function ToolList({ tools, inverse = false }: { tools: StackTool[]; inverse?: boolean }) {
  return (
    <ul className="mt-2.5 space-y-2 md:mt-3 md:space-y-2.5">
      {tools.map(({ icon: Icon, label }) => (
        <li key={label} className="flex min-w-0 items-center gap-2 md:gap-2.5">
          <span
            className={
              inverse
                ? "grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-primary/10"
                : "grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-primary"
            }
          >
            <Icon aria-hidden className="h-3.5 w-3.5" />
          </span>
          <span className="truncate text-[0.75rem] font-medium md:text-sm">{label}</span>
        </li>
      ))}
    </ul>
  );
}

/** A static, asymmetric overview of the developer's strongest technologies. */
export function TechStackPanel() {
  return (
    <section
      aria-labelledby="core-technologies-title"
      className="flex h-full min-h-[24rem] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-surface/45 p-3 shadow-lift md:min-h-[26rem] md:p-4"
    >
      <header className="flex items-center px-1 pb-3 md:pb-4">
        <h2 id="core-technologies-title" className="text-eyebrow text-foreground/70">
          Core technologies
        </h2>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] grid-rows-[minmax(0,1fr)_minmax(0,1.15fr)_auto] gap-2.5 md:gap-3">
        <article className="group relative row-span-2 flex min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-primary/50 bg-primary p-4 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 md:p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-14 top-1/2 h-52 w-52 -translate-y-1/2 opacity-[0.09] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 md:h-64 md:w-64"
          >
            <SiReact className="h-full w-full" />
          </div>
          <p className="text-eyebrow relative z-10 opacity-70">Interface</p>
          <div className="relative z-10 mt-auto">
            <h3 className="font-display text-[1.65rem] leading-[0.98] tracking-[-0.04em] md:text-[2.15rem] 2xl:text-[2.55rem]">
              React +
              <br />
              TypeScript
            </h3>
            <div className="mt-4 flex items-center gap-2.5 md:mt-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary-foreground/25 bg-primary-foreground/[0.06]">
                <SiNextdotjs aria-hidden className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold">Next.js</span>
            </div>
          </div>
        </article>

        <article className="min-w-0 rounded-[1.35rem] border border-accent/70 bg-accent p-3.5 text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 md:p-4">
          <h3 className="text-eyebrow opacity-70">Server</h3>
          <ToolList tools={SERVER_TOOLS} inverse />
        </article>

        <article className="min-w-0 rounded-[1.35rem] border border-white/[0.08] bg-elevated/65 p-3.5 text-foreground/85 transition-colors duration-300 hover:border-primary/20 md:p-4">
          <h3 className="text-eyebrow text-primary/75">Data</h3>
          <ToolList tools={DATA_TOOLS} />
        </article>

        <article className="col-span-2 flex min-w-0 items-center justify-between gap-3 rounded-[1.35rem] border border-white/[0.08] bg-elevated/55 px-4 py-3.5 transition-colors duration-300 hover:border-primary/20 md:gap-4 md:px-5 md:py-4">
          <h3 className="text-eyebrow shrink-0 text-primary/75">Delivery</h3>
          <ul className="flex min-w-0 flex-1 items-center justify-end gap-4 sm:gap-8">
            {DELIVERY_TOOLS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex min-w-0 items-center gap-2.5">
                <Icon aria-hidden className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate text-[0.8rem] font-medium text-foreground/85 md:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
