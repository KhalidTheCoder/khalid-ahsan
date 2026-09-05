import { ArrowUpRight, Copy, FileText, Github, Linkedin, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { profile, socials } from "@/lib/portfolio-data";

const socialIcons = [Github, FileText, Linkedin];
const COPY_FEEDBACK_DURATION_MS = 1600;

type CopyStatus = "idle" | "copied" | "error";

export function ProfileCard() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const copyResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (copyResetTimeout.current) clearTimeout(copyResetTimeout.current);
    },
    [],
  );

  const copyEmail = async () => {
    if (copyResetTimeout.current) clearTimeout(copyResetTimeout.current);

    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }

    copyResetTimeout.current = setTimeout(() => setCopyStatus("idle"), COPY_FEEDBACK_DURATION_MS);
  };

  const copyLabel =
    copyStatus === "copied"
      ? "Copied to clipboard"
      : copyStatus === "error"
        ? "Copy unavailable"
        : profile.email;

  return (
    <article className="rise relative w-full overflow-hidden rounded-[2rem] bg-profile p-4 text-profile-foreground shadow-panel sm:p-5">
      {/* portrait */}
      <div className="relative mb-2 mr-2">
        <div
          aria-hidden
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.4rem] bg-primary/80"
        />
        <div className="relative overflow-hidden rounded-[1.4rem]">
          <img
            src={profileImg}
            alt={`${profile.name}, ${profile.role}`}
            width={912}
            height={1104}
            className="h-[15rem] w-full object-cover object-[50%_18%] md:h-[17rem]"
          />
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg bg-accent px-2.5 py-1.5 text-accent-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em]">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* editorial identity block */}
      <div className="mt-7 text-left">
        <p className="font-mono text-[0.67rem] font-medium uppercase tracking-[0.18em] text-profile-foreground/50">
          {profile.role}
        </p>
        <h1 className="mt-2 text-[1.95rem] font-bold leading-none tracking-[-0.04em] text-profile-foreground">
          {profile.name}
        </h1>
      </div>

      <p className="mt-5 text-left text-[0.78rem] leading-[1.7] text-profile-foreground/60">
        {profile.intro}
      </p>

      <div className="mt-5 flex min-w-0 items-center justify-between gap-2 border-b border-profile-foreground/10 pb-5">
        <div className="flex min-w-0 items-center gap-1.5 text-[0.66rem] text-profile-foreground/50">
          <MapPin aria-hidden className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{profile.location}</span>
        </div>

        <ul className="flex shrink-0 items-center gap-1.5">
          {socials.map((social, index) => {
            const Icon = socialIcons[index] ?? ArrowUpRight;
            const isExternal = social.href.startsWith("http");
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-accent/15 text-accent transition-colors hover:border-accent/35 hover:bg-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-profile"
                >
                  <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={1.9} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-[0.83rem] font-semibold text-accent-foreground transition-[transform,background-color] hover:scale-[1.01] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-profile"
        >
          Start a project
          <ArrowUpRight aria-hidden className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="flex items-center justify-center gap-2 rounded-xl border border-accent/25 px-5 py-2.5 text-[0.7rem] font-medium text-accent transition-colors hover:border-accent/40 hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-profile"
        >
          <Copy aria-hidden className="h-3.5 w-3.5" />
          <span aria-live="polite">{copyLabel}</span>
        </button>
      </div>
    </article>
  );
}
