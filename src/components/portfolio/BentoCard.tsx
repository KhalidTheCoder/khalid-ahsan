import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "surface" | "elevated" | "ink" | "primary" | "accent" | "outline" | "white" | "slate";

const toneClass: Record<Tone, string> = {
  surface: "bg-surface text-surface-foreground border border-border",
  elevated: "bg-elevated text-surface-foreground border border-border",
  ink: "bg-ink text-ink-foreground border border-ink/20",
  primary: "bg-primary text-primary-foreground border border-primary/40",
  accent: "bg-accent text-accent-foreground border border-accent/40",
  outline: "bg-transparent text-foreground border border-border",
  white: "bg-[oklch(0.96_0.01_260)] text-[oklch(0.12_0.01_260)] border border-white/20",
  slate: "bg-[oklch(0.22_0.02_260)] text-[oklch(0.92_0.01_260)] border border-white/[0.06]",
};

export function BentoCard({
  children,
  className,
  tone = "surface",
  interactive = false,
  padded = true,
  label,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  interactive?: boolean;
  padded?: boolean;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        toneClass[tone],
        padded && "p-6 sm:p-7",
        interactive && "hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      {label ? (
        <span className="text-eyebrow mb-4 block text-muted-foreground group-data-[tone=ink]:text-ink-foreground/50">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}

export function CardLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return <span className={cn("text-eyebrow block opacity-60", className)}>{children}</span>;
}
