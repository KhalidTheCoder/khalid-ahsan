import { articles, profile, projects, services, skills, testimonials } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock, Layers, LayoutTemplate, Quote, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { BentoCard, CardLabel } from "./BentoCard";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ProjectCard } from "./ProjectCard";
import { TechStackPanel } from "./TechStackPanel";

/* Reference-style two-line display heading: solid line + ghosted line */
function DisplayTitle({ top, bottom }: { top: string; bottom: string }) {
  return (
    <h2 className="display-hero md:text-[clamp(4.4rem,8.8cqw,5.75rem)]">
      <span className="block whitespace-nowrap text-foreground">{top}</span>
      <span className="block whitespace-nowrap text-ghost">{bottom}</span>
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

/** Set to true once articles are ready to publish. */
const SHOW_WRITING = false;

export function PortfolioSections({
  registerRef,
}: {
  registerRef: (id: string, el: HTMLElement | null) => void;
}) {
  return (
    <div className="flex flex-col gap-16 pb-16 sm:gap-20 md:gap-24">
      {/* HOME — hero */}
      <section
        id="home"
        ref={(el) => registerRef("home", el)}
        aria-label="Introduction"
        className="pt-8 sm:pt-12 md:pt-28"
      >
        {/* Two-column hero — mirrors the bento grid and keeps both sides equal-height. */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-6">
          {/* LEFT — title + intro + stats — occupies same 3 cols as Design Engineering card */}
          <div className="md:col-span-3 md:flex md:h-full md:flex-col">
            <DisplayTitle top="Full Stack" bottom="Developer" />
            <p className="mt-7 max-w-[32rem] text-[0.98rem] leading-relaxed text-muted-foreground">
              {profile.heroDescription}
            </p>

            {/* statistics row — oversized figures, small uppercase labels */}
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 md:mt-auto md:gap-16 md:pt-12">
              {profile.stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dd className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground sm:text-[3.5rem] md:text-[4.5rem]">
                    {s.value}
                  </dd>
                  <dt className="mt-3 whitespace-pre-line text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground md:text-[0.65rem]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — asymmetric core-stack panel */}
          <div className="h-full md:col-span-3">
            <TechStackPanel />
          </div>
        </div>

        {/* bento grid — three cards in row 1, two in row 2, full-width fill */}
        <div className="bento-grid mt-10 md:mt-12">
          <BentoCard tone="primary" interactive className="col-span-6 min-h-[13rem] sm:col-span-3">
            <Layers className="h-8 w-8" strokeWidth={1.6} />
            <h3 className="mt-16 text-[1.6rem] uppercase leading-[0.95] tracking-[-0.03em] sm:text-[1.9rem]">
              Product
              <br />
              Engineering
            </h3>
          </BentoCard>

          <BentoCard tone="accent" interactive className="col-span-6 min-h-[13rem] sm:col-span-3">
            <LayoutTemplate className="h-8 w-8" strokeWidth={1.6} />
            <h3 className="mt-16 text-[1.6rem] uppercase leading-[0.95] tracking-[-0.03em] sm:text-[1.9rem]">
              System
              <br />
              Architecture
            </h3>
          </BentoCard>

          <BentoCard tone="surface" interactive className="col-span-6 md:col-span-4">
            <CardLabel>Currently</CardLabel>
            <p className="mt-4 max-w-lg text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.02em]">
              {profile.status}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Looking to join a product-driven engineering team to build scalable, maintainable, and
              high-performance applications.
            </p>
          </BentoCard>

          <BentoCard tone="elevated" interactive className="col-span-6 md:col-span-2">
            <CardLabel>Focus</CardLabel>
            <Sparkles className="mt-6 h-6 w-6 text-primary" />
            <p className="mt-4 text-[1.05rem] font-medium leading-snug">
              End-to-end web applications
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        top="About"
        bottom="Me"
        lead="Full-stack developer building scalable web applications. I bridge the gap between robust server architecture and intuitive user interfaces to deliver complete, production-ready products."
        registerRef={registerRef}
      >
        <BentoCard tone="surface" className="col-span-6 md:col-span-4" interactive>
          <CardLabel>Intro</CardLabel>
          <p className="mt-5 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.02em]">
            I build end-to-end applications because I care about how a system functions just as much
            as how it looks.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I value clean code, scalable database schemas, and seamless user experiences that solve
            real business problems.
          </p>
        </BentoCard>

        <BentoCard tone="elevated" className="col-span-6 md:col-span-2" interactive>
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

        <BentoCard tone="surface" className="col-span-6 md:col-span-2" interactive>
          <CardLabel>Beyond work</CardLabel>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Exploring emerging tech stacks, diving into system design patterns, and constantly
            searching for the perfect cup of coffee.
          </p>
        </BentoCard>

        <BentoCard tone="outline" className="col-span-6 md:col-span-4" interactive>
          <CardLabel>Principles</CardLabel>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {[
              "Complex logic, simple interfaces.",
              "Scalability starts at the database level.",
              "Performance is a fundamental feature.",
              "Ship consistently, refactor honestly.",
            ].map((p) => (
              <p key={p} className="text-sm leading-snug text-muted-foreground">
                <span className="mr-2 text-primary">—</span>
                {p}
              </p>
            ))}
          </div>
        </BentoCard>
      </Section>

      {/* EXPERIENCE — recruiter-focused career evidence */}
      <section id="experience" ref={(el) => registerRef("experience", el)} aria-label="Experience">
        <DisplayTitle top="Professional" bottom="Experience" />
        <ExperienceTimeline />
      </section>

      {/* PROJECTS */}
      <Section
        id="projects"
        top="Selected"
        bottom="Work"
        lead="A few products where I design, engineer, and ship real software."
        registerRef={registerRef}
      >
        <ProjectCard project={projects[0]!} large className="col-span-6 md:col-span-4" />
        <div className="col-span-6 flex flex-col gap-4 md:col-span-2">
          <BentoCard tone="elevated" interactive className="flex-1">
            <CardLabel>More work</CardLabel>
            <p className="mt-4 font-display text-[2rem] font-bold leading-none tracking-[-0.04em]">
              Explore other projects
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A broader collection of product builds, technical experiments, and open-source work.
            </p>
            <a
              href="https://github.com/KhalidTheCoder"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Browse GitHub
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
        <ProjectCard project={projects[1]!} className="col-span-6 md:col-span-3" />
        <ProjectCard project={projects[2]!} className="col-span-6 md:col-span-3" />
      </Section>

      {/* SERVICES */}
      <Section id="services" top="How I Can" bottom="Help" registerRef={registerRef}>
        {services.map((s, i) => (
          <BentoCard
            key={s.title}
            tone={i === 0 ? "primary" : "surface"}
            interactive
            className={cn("col-span-6", i === 0 ? "md:col-span-4" : "md:col-span-2")}
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
            className="col-span-6 md:col-span-3"
          >
            <Quote className="h-5 w-5 text-primary" />
            <p className="mt-4 text-[1.05rem] font-medium leading-snug">{t.quote}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              {t.author} · {t.title}
            </p>
          </BentoCard>
        ))}

        {/* Writing — hidden until articles are ready; set SHOW_WRITING = true to re-enable */}
        {SHOW_WRITING && (
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
        )}
      </Section>

      {/* CONTACT */}
      <Section id="contact" top="Let's Make" bottom="Something" registerRef={registerRef}>
        <BentoCard tone="surface" className="col-span-6 md:col-span-4" interactive>
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

        <BentoCard tone="elevated" className="col-span-3 md:col-span-2" interactive>
          <CardLabel>Response time</CardLabel>
          <p className="mt-5 font-display text-[1.9rem] font-bold tracking-[-0.04em]">&lt; 24h</p>
          <p className="mt-3 text-sm text-muted-foreground">Weekdays, {profile.location}.</p>
        </BentoCard>

        <BentoCard tone="accent" className="col-span-3 md:col-span-2" interactive>
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
