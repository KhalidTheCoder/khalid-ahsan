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
    <div className="min-h-screen bg-background lg:h-screen lg:overflow-hidden">
      {/* ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(55% 40% at 8% 0%, color-mix(in srgb, var(--primary) 9%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1560px] flex-col gap-5 px-4 py-4 sm:px-6 lg:h-screen lg:flex-row lg:gap-10 lg:px-8 lg:py-6">
        {/* LEFT — stationary profile panel */}
        <aside className="scroll-quiet w-full shrink-0 lg:flex lg:h-[calc(100vh-3rem)] lg:w-[21.5rem] lg:items-start lg:justify-center lg:overflow-y-auto lg:pt-28 xl:w-[23.5rem]">
          <ProfileCard />
        </aside>

        {/* floating icon dock */}
        <div className="pointer-events-none sticky top-3 z-40 flex justify-center lg:absolute lg:left-[calc(50%+11rem)] lg:top-6 lg:-translate-x-1/2">
          <FloatingNav active={active} onSelect={scrollToSection} />
        </div>

        {/* RIGHT — independent scroll viewport */}
        <main
          ref={scrollRef}
          className="scroll-quiet min-w-0 flex-1 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto"
        >
          <PortfolioSections registerRef={registerRef} />
        </main>
      </div>
    </div>
  );
}
