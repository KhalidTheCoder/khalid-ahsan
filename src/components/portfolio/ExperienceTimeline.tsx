import { ArrowUpRight, Check, TrendingUp } from "lucide-react";
import { experience, experienceMetrics } from "@/lib/portfolio-data";
import { BentoCard, CardLabel } from "./BentoCard";

const CRAFT_BREAKDOWN = [
  { label: "Interface engineering", value: 95 },
  { label: "Product design", value: 82 },
  { label: "Systems & tooling", value: 74 },
];

type Experience = (typeof experience)[number];

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <article
      className={
        job.featured
          ? "group relative overflow-hidden rounded-[1.6rem] border border-primary/20 bg-elevated/45 p-5 shadow-lift transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/35 sm:p-7"
          : "group relative overflow-hidden rounded-[1.6rem] border border-border bg-elevated/45 p-5 transition-[border-color,transform,box-shadow] duration-300 hover:border-primary/20 sm:p-7"
      }
    >
      {job.featured ? (
        <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-accent sm:w-2" />
      ) : null}

      <span
        aria-hidden
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-primary/30 text-primary transition-colors group-hover:bg-primary/10 sm:right-7 sm:top-7"
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </span>

      <div className="grid min-w-0 gap-7 pr-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
        <header className="min-w-0">
          <h3 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.025em] text-foreground sm:text-[1.55rem]">
            {job.company}
          </h3>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-primary sm:text-[0.76rem]">
            {job.role}
          </p>
          <p className="mt-3 font-mono text-[0.68rem] tracking-[0.08em] text-muted-foreground/70">
            {job.period}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${job.company} focus areas`}>
            {job.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-primary/25 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary/85"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <ul className="divide-y divide-border/80">
          {job.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 text-[0.82rem] leading-relaxed text-foreground/80 sm:text-[0.9rem]"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/45 text-primary">
                <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ExperienceTimeline() {
  return (
    <>
      <dl className="mt-8 grid gap-3 sm:grid-cols-3">
        {experienceMetrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-h-20 items-center gap-4 rounded-2xl border border-primary/20 bg-surface/35 px-5 py-4 transition-colors hover:border-primary/35"
          >
            <dd className="font-display text-[2.35rem] font-bold leading-none tracking-[-0.04em] text-primary sm:text-[2.6rem]">
              {metric.value}
            </dd>
            <dt className="font-mono text-[0.62rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-primary/80">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>

      <ol className="mt-6 flex flex-col gap-6">
        {experience.map((job) => (
          <li key={job.company}>
            <ExperienceCard job={job} />
          </li>
        ))}
      </ol>

      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
        <BentoCard tone="primary" interactive className="min-h-[12rem]">
          <div className="flex items-start justify-between gap-5">
            <div>
              <CardLabel className="opacity-70">Performance impact</CardLabel>
              <p className="mt-7 font-display text-[2.45rem] font-bold leading-none tracking-[-0.05em] sm:text-[3rem]">
                4.1s → 0.9s
              </p>
              <p className="mt-3 text-sm leading-relaxed opacity-70">
                Time-to-interactive improvement on a rebuilt analytics client.
              </p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary-foreground/30">
              <TrendingUp aria-hidden className="h-5 w-5" strokeWidth={1.7} />
            </span>
          </div>
        </BentoCard>

        <BentoCard tone="outline" className="min-h-[12rem] border-primary/25">
          <CardLabel className="text-primary opacity-80">Core craft</CardLabel>
          <dl className="mt-6 space-y-4">
            {CRAFT_BREAKDOWN.map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <dt>{row.label}</dt>
                  <dd className="font-mono text-primary">{row.value}</dd>
                </div>
                <div className="mt-2 h-1 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>
            ))}
          </dl>
        </BentoCard>
      </div>
    </>
  );
}
