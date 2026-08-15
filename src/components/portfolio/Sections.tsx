import {
  articles,
  experience,
  profile,
  projects,
  services,
  skills,
  testimonials,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock, Layers, LayoutTemplate, Quote, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { BentoCard, CardLabel } from "./BentoCard";
import { ProjectCard } from "./ProjectCard";
import { TechMarquee } from "./TechMarquee";

/* Reference-style two-line display heading: solid line + ghosted line */
function DisplayTitle({ top, bottom }: { top: string; bottom: string }) {
  return (
    <h2 className="display-hero">
      <span className="block text-foreground">{top}</span>
      <span className="block text-ghost">{bottom}</span>
    </h2>
  );
}

function Section({
  id,
  top,
  bottom,
  lead,
  children,
  registerRef,
}: {
  id: string;
  top: string;
  bottom: string;
  lead?: string;
  children: ReactNode;
  registerRef: (id: string, el: HTMLElement | null) => void;
}) {
  return (
    <section id={id} ref={(el) => registerRef(id, el)} aria-label={`${top} ${bottom}`}>
      <header className="mb-8">
        <DisplayTitle top={top} bottom={bottom} />
        {lead ? (
          <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-relaxed text-muted-foreground">
            {lead}
          </p>
        ) : null}
      </header>
      <div className="bento-grid">{children}</div>
    </section>
  );
}

export function PortfolioSections({
  registerRef,
}: {
  registerRef: (id: string, el: HTMLElement | null) => void;
}) {
  return (
    <div className="flex flex-col gap-20 pb-[70vh] sm:gap-24">
      {/* HOME — hero */}
      <section
        id="home"
        ref={(el) => registerRef("home", el)}
        aria-label="Introduction"
        className="pt-28"
      >
        {/* Two-column hero: left = title/intro/stats, right = tech marquee */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[auto_auto] lg:gap-10">
          {/* LEFT — title + intro + stats */}
          <div>
            <DisplayTitle top="Full Stack" bottom="Developer" />
            <p className="mt-7 max-w-[32rem] text-[0.98rem] leading-relaxed text-muted-foreground">
              {profile.intro}
            </p>

            {/* statistics row — oversized figures, small uppercase labels */}
            <dl className="mt-12 flex gap-10 sm:gap-16">
              {profile.stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dd className="font-display text-[3.5rem] font-bold leading-none tracking-[-0.04em] text-foreground sm:text-[4.5rem]">
                    {s.value}
                  </dd>
                  <dt className="mt-3 whitespace-pre-line text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — dual vertical marquee, height matched to left content */}
          <TechMarquee />
        </div>

        {/* bento grid — three cards in row 1, two in row 2, full-width fill */}
        <div className="bento-grid mt-12">
          <BentoCard
            tone="primary"
            interactive
            className="col-span-6 min-h-[13rem] sm:col-span-3 lg:col-span-3"
          >
            <Layers className="h-8 w-8" strokeWidth={1.6} />
            <h3 className="mt-16 text-[1.6rem] uppercase leading-[0.95] tracking-[-0.03em] sm:text-[1.9rem]">
              Design
              <br />
              Engineering
            </h3>
          </BentoCard>

          <BentoCard
            tone="accent"
            interactive
            className="col-span-6 min-h-[13rem] sm:col-span-3 lg:col-span-3"
          >
            <LayoutTemplate className="h-8 w-8" strokeWidth={1.6} />
            <h3 className="mt-16 text-[1.6rem] uppercase leading-[0.95] tracking-[-0.03em] sm:text-[1.9rem]">
              React
              <br />
              TypeScript
            </h3>
          </BentoCard>

          <BentoCard tone="surface" interactive className="col-span-6 lg:col-span-4">
            <CardLabel>Currently</CardLabel>
            <p className="mt-4 max-w-lg text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.02em]">
              {profile.status}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Two engagements per quarter, deep involvement, no hand-offs to a junior team.
            </p>
          </BentoCard>

          <BentoCard tone="elevated" interactive className="col-span-6 lg:col-span-2">
            <CardLabel>Focus</CardLabel>
            <Sparkles className="mt-6 h-6 w-6 text-primary" />
            <p className="mt-4 text-[1.05rem] font-medium leading-snug">
              Interfaces for product teams
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        top="About"
        bottom="Me"
        lead="Design engineer working with small product teams — shaping the interface, writing the front-end, and keeping the system coherent as it grows."
        registerRef={registerRef}
      >
        <BentoCard tone="surface" className="col-span-6 lg:col-span-4" interactive>
          <CardLabel>Intro</CardLabel>
          <p className="mt-5 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.02em]">
            I started in editorial design and moved into engineering because I wanted to control the
            final pixel and the final millisecond.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I care about typography, latency, and interfaces that don't need a tutorial.
          </p>
        </BentoCard>

        <BentoCard tone="elevated" className="col-span-6 lg:col-span-2" interactive>
          <CardLabel>Toolkit</CardLabel>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.66rem] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {s}
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard tone="surface" className="col-span-6 lg:col-span-2" interactive>
          <CardLabel>Beyond work</CardLabel>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Long-distance running, film photography, and a slowly growing collection of Bengali type
            specimens.
          </p>
        </BentoCard>

        <BentoCard tone="outline" className="col-span-6 lg:col-span-4" interactive>
          <CardLabel>Principles</CardLabel>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              "Fewer screens, better defaults.",
              "Motion explains, it doesn't decorate.",
              "Performance is a design decision.",
              "Ship weekly, review honestly.",
            ].map((p) => (
              <p key={p} className="text-sm leading-snug text-muted-foreground">
                <span className="mr-2 text-primary">—</span>
                {p}
              </p>
            ))}
          </div>
        </BentoCard>
      </Section>

      {/* EXPERIENCE — reference-style editorial list */}
      <section id="experience" ref={(el) => registerRef("experience", el)} aria-label="Experience">
        <DisplayTitle top="9 Years of" bottom="Experience" />

        <ol className="mt-10">
          {experience.map((job) => (
            <li
              key={job.company}
              className="group border-b border-border py-8 first:border-t first:border-border"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0 max-w-[34rem]">
                  <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em]">{job.company}</h3>
                  <p className="mt-1.5 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-primary">
                    {job.role}
                  </p>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>
                  <p className="mt-5 font-mono text-[0.72rem] text-muted-foreground/70">
                    {job.period}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-primary transition-all duration-300 group-hover:bg-primary/10">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="bento-grid mt-10">
          <BentoCard tone="accent" className="col-span-6 lg:col-span-2" interactive>
            <CardLabel className="opacity-70">Impact</CardLabel>
            <div className="mt-6 font-display text-[2rem] font-bold leading-none tracking-[-0.04em]">
              4.1s → 0.9s
            </div>
            <p className="mt-3 text-sm leading-relaxed opacity-75">
              Time-to-interactive on a rebuilt analytics client.
            </p>
          </BentoCard>

          <BentoCard tone="surface" className="col-span-6 lg:col-span-4" interactive>
            <CardLabel>Craft breakdown</CardLabel>
            <div className="mt-5 space-y-3.5">
              {[
                { k: "Interface engineering", v: 95 },
                { k: "Product design", v: 82 },
                { k: "Systems & tooling", v: 74 },
              ].map((row) => (
                <div key={row.k}>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{row.k}</span>
                    <span className="font-mono">{row.v}</span>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-700"
                      style={{ width: `${row.v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        top="Selected"
        bottom="Projects"
        lead="A few products where design and engineering were the same job."
        registerRef={registerRef}
      >
        <ProjectCard project={projects[0]!} large className="col-span-6 lg:col-span-4" />
        <div className="col-span-6 flex flex-col gap-4 lg:col-span-2">
          <BentoCard tone="elevated" interactive className="flex-1">
            <CardLabel>Archive</CardLabel>
            <p className="mt-4 font-display text-[2rem] font-bold leading-none tracking-[-0.04em]">
              48
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Releases shipped since 2017 across product, tooling and open source.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Browse the archive
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </BentoCard>
          <BentoCard tone="outline" interactive>
            <CardLabel>Latest commit</CardLabel>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              feat(editor): snap guides on drag
            </p>
          </BentoCard>
        </div>
        <ProjectCard project={projects[1]!} className="col-span-6 lg:col-span-3" />
        <ProjectCard project={projects[2]!} className="col-span-6 lg:col-span-3" />
      </Section>

      {/* SERVICES */}
      <Section id="services" top="How I Can" bottom="Help" registerRef={registerRef}>
        {services.map((s, i) => (
          <BentoCard
            key={s.title}
            tone={i === 0 ? "primary" : "surface"}
            interactive
            className={cn("col-span-6", i === 0 ? "lg:col-span-4" : "lg:col-span-2")}
          >
            <CardLabel className={cn(i === 0 && "opacity-70")}>0{i + 1}</CardLabel>
            <h3
              className={cn(
                "mt-4 tracking-[-0.025em]",
                i === 0 ? "text-[1.9rem]" : "text-[1.2rem]",
              )}
            >
              {s.title}
            </h3>
            <p
              className={cn(
                "mt-3 text-sm leading-relaxed",
                i === 0 ? "opacity-80" : "text-muted-foreground",
              )}
            >
              {s.description}
            </p>
          </BentoCard>
        ))}

        {testimonials.map((t, i) => (
          <BentoCard
            key={t.author}
            tone={i === 0 ? "elevated" : "surface"}
            interactive
            className="col-span-6 lg:col-span-3"
          >
            <Quote className="h-5 w-5 text-primary" />
            <p className="mt-4 text-[1.05rem] font-medium leading-snug">{t.quote}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {t.author} · {t.title}
            </p>
          </BentoCard>
        ))}

        <BentoCard tone="surface" className="col-span-6" interactive>
          <CardLabel>Writing</CardLabel>
          <ul className="mt-4 divide-y divide-border">
            {articles.map((a) => (
              <li key={a.title}>
                <a
                  href="#"
                  className="group/row flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-primary"
                >
                  <span className="min-w-0 truncate text-sm font-medium">{a.title}</span>
                  <span className="flex shrink-0 items-center gap-3 font-mono text-[0.68rem] text-muted-foreground">
                    <span className="hidden sm:inline">{a.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {a.read}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </BentoCard>
      </Section>

      {/* CONTACT */}
      <Section id="contact" top="Let's Make" bottom="Something" registerRef={registerRef}>
        <BentoCard tone="surface" className="col-span-6 lg:col-span-4" interactive>
          <CardLabel>Say hello</CardLabel>
          <p className="mt-5 text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.1rem]">
            Tell me what you're building and where it's stuck.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {profile.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </BentoCard>

        <BentoCard tone="elevated" className="col-span-3 lg:col-span-2" interactive>
          <CardLabel>Response time</CardLabel>
          <p className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.04em]">&lt; 24h</p>
          <p className="mt-3 text-sm text-muted-foreground">Weekdays, {profile.location}.</p>
        </BentoCard>

        <BentoCard tone="accent" className="col-span-3 lg:col-span-2" interactive>
          <CardLabel className="opacity-70">Next opening</CardLabel>
          <p className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.04em]">Oct 2026</p>
          <p className="mt-3 text-sm opacity-75">Booking discovery calls now.</p>
        </BentoCard>

        <BentoCard tone="outline" className="col-span-6" interactive>
          <p className="text-xs text-muted-foreground">
            © 2026 {profile.name} — designed and built in Dhaka.
          </p>
        </BentoCard>
      </Section>
    </div>
  );
}
