import { Link } from "@tanstack/react-router";
import { Briefcase, FolderOpen, Home, Mail, PenLine, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { sectionToPath, type SectionId } from "@/lib/portfolio-data";

const items: { id: SectionId; label: string; icon: LucideIcon }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: PenLine },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "services", label: "Services", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
];

export function FloatingNav({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect?: (id: SectionId) => void;
}) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="pointer-events-auto flex items-center gap-1 rounded-[1.35rem] border border-white/[0.06] bg-elevated/90 p-1.5 backdrop-blur-xl shadow-panel"
    >
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <Link
            key={id}
            to={sectionToPath[id]}
            resetScroll={false}
            title={label}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onSelect?.(id)}
            className={cn(
              "group/nav relative grid h-10 w-10 place-items-center rounded-[1rem] transition-colors duration-300 sm:h-11 sm:w-11",
              isActive
                ? "bg-white/[0.08] text-foreground"
                : "text-muted-foreground hover:bg-white/[0.05] hover:text-foreground",
            )}
          >
            <Icon className="h-[1.05rem] w-[1.05rem] shrink-0" strokeWidth={1.75} />
            <span className="sr-only">{label}</span>
            {isActive ? (
              <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-primary" />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
