import { useRouterState } from "@tanstack/react-router";
import { ProfileCard } from "./ProfileCard";
import { FloatingNav } from "./FloatingNav";
import { PortfolioSections } from "./Sections";
import { useScrollNav } from "@/hooks/useScrollNav";

/**
 * The main layout shell for the portfolio.
 * Provides a responsive two-pane layout with a sticky profile card on the left
 * and scrollable content sections on the right.
 *
 * @returns {ReactNode} The portfolio shell UI.
 */
export function PortfolioShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { active, registerRef, scrollToSection, scrollRef } = useScrollNav(pathname);

  return (
    <div className="min-h-screen overflow-x-clip bg-background xl:h-screen xl:overflow-hidden">
      {/* ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(55% 40% at 8% 0%, color-mix(in srgb, var(--primary) 9%, transparent), transparent 70%)",
        }}
      />

      <div className="portfolio-stage relative mx-auto flex w-full max-w-[1560px] flex-col gap-5 px-4 py-4 sm:px-6 md:flex-row md:items-start md:gap-10 md:px-8 md:py-6 xl:h-screen">
        {/* LEFT — stationary profile panel */}
        <aside className="scroll-quiet w-full shrink-0 md:sticky md:top-6 md:flex md:w-[23.5rem] md:self-start md:items-start md:justify-center md:pt-28 xl:static xl:h-[calc(100vh-3rem)] xl:overflow-y-auto">
          <ProfileCard />
        </aside>

        {/* floating icon dock */}
        <div className="pointer-events-none sticky top-3 z-40 flex justify-center md:fixed md:left-[calc(50%+11rem)] md:top-6 md:-translate-x-1/2 xl:absolute">
          <FloatingNav active={active} onSelect={scrollToSection} />
        </div>

        {/* RIGHT — independent scroll viewport */}
        <main
          ref={scrollRef}
          className="scroll-quiet min-w-0 flex-1 [container-type:inline-size] xl:h-[calc(100vh-3rem)] xl:overflow-y-auto"
        >
          <PortfolioSections registerRef={registerRef} />
        </main>
      </div>
    </div>
  );
}
