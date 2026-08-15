import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { pathToSection, sectionToPath, type SectionId } from "@/lib/portfolio-data";

const DESKTOP_OFFSET = 92;
const MOBILE_OFFSET = 78;

/**
 * Custom hook to manage scroll position, active section state, and intersection observation
 * for a single-page portfolio layout.
 *
 * @param {string} pathname - The current route pathname to synchronize with the scroll position.
 * @returns {Object} An object containing the active section ID, refs for intersection observer, and the scroll handler.
 */
export function useScrollNav(pathname: string) {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [active, setActive] = useState<SectionId>(() => pathToSection(pathname));
  const activeRef = useRef<SectionId>(active);
  const lockRef = useRef(0);
  activeRef.current = active;

  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
    else sectionRefs.current.delete(id);
  }, []);

  const scrollToSection = useCallback((id: SectionId) => {
    const el = sectionRefs.current.get(id);
    const container = scrollRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const offset = isDesktop ? DESKTOP_OFFSET : MOBILE_OFFSET;

    lockRef.current = Date.now() + (reduce ? 60 : 900);

    const containerScrolls = !!container && container.scrollHeight > container.clientHeight + 4;

    if (containerScrolls && container) {
      const delta = el.getBoundingClientRect().top - container.getBoundingClientRect().top;
      // Align the section exactly at the top of the container
      const top = Math.max(container.scrollTop + delta, 0);
      container.scrollTo({ top, behavior });
    } else {
      const scroller = document.scrollingElement ?? document.documentElement;
      const top = scroller.scrollTop + el.getBoundingClientRect().top - offset;
      scroller.scrollTo({ top: Math.max(top, 0), behavior });
    }
  }, []);

  useEffect(() => {
    const target = pathToSection(window.location.pathname);
    if (target === "home") return;
    const raf = requestAnimationFrame(() => scrollToSection(target));
    return () => cancelAnimationFrame(raf);
  }, [scrollToSection]);

  useEffect(() => {
    const target = pathToSection(pathname);
    setActive(target);
    activeRef.current = target;
    const raf = requestAnimationFrame(() => scrollToSection(target));
    return () => cancelAnimationFrame(raf);
  }, [pathname, scrollToSection]);

  useEffect(() => {
    const container = scrollRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const id = visible.target.id as SectionId;
        if (id === activeRef.current) return;
        activeRef.current = id;
        setActive(id);
        void navigate({ to: sectionToPath[id], replace: true, resetScroll: false });
      },
      {
        root: container && container.scrollHeight > container.clientHeight + 4 ? container : null,
        rootMargin: "-5px 0px -50% 0px",
        threshold: 0,
      },
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigate]);

  return { active, registerRef, scrollToSection, scrollRef };
}
