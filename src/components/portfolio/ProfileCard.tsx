import { ArrowUpRight, Copy, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { profile, socials } from "@/lib/portfolio-data";

const socialIcons = [Github, Twitter, Linkedin, ArrowUpRight];

export function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="rise relative w-full overflow-hidden rounded-[2rem] bg-ink px-5 pb-8 pt-4 text-ink-foreground shadow-panel sm:px-6 sm:pb-12 sm:pt-5">
      {/* portrait */}
      <div className="relative overflow-hidden rounded-[1.4rem]">
        <img
          src={profileImg}
          alt={`${profile.name}, ${profile.role}`}
          width={912}
          height={1104}
          className="h-[15rem] w-full object-cover object-[50%_18%] xl:h-[17rem]"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-ink-foreground/85 px-2.5 py-1 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-ink">
            Available
          </span>
        </div>
      </div>

      {/* name + one-liner */}
      <div className="mt-6 flex flex-col items-center text-center">
        <h1 className="text-[1.85rem] font-bold leading-none tracking-[-0.03em] text-ink-foreground">
          {profile.name}
        </h1>
        <p className="mt-2.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-foreground/50">
          {profile.role}
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-[16rem] text-center text-[0.8rem] leading-relaxed text-ink-foreground/60">
        {profile.intro}
      </p>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[0.68rem] text-ink-foreground/45">
        <MapPin className="h-3 w-3 shrink-0" />
        <span className="truncate">{profile.location}</span>
      </div>

      {/* social icon row */}
      <ul className="mt-6 flex items-center justify-center gap-3">
        {socials.map((s, i) => {
          const Icon = socialIcons[i] ?? ArrowUpRight;
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-xl border border-ink-foreground/10 text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
              >
                <Icon className="h-4 w-4" strokeWidth={1.9} />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 flex flex-col gap-2.5 border-t border-ink-foreground/10 pt-5">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-center gap-2 rounded-full bg-ink-foreground px-5 py-3 text-[0.83rem] font-semibold text-ink transition-transform hover:scale-[1.015]"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="flex items-center justify-center gap-2 rounded-full border border-ink-foreground/12 px-5 py-2.5 text-[0.72rem] font-medium text-ink-foreground/55 transition-colors hover:bg-ink-foreground/5"
        >
          <Copy className="h-3 w-3" />
          {copied ? "Copied to clipboard" : profile.email}
        </button>
      </div>
    </div>
  );
}
