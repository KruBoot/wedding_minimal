import { useEffect, useState } from "react";
import { wedding } from "../../config/wedding";
import { cn, scrollToId } from "../../lib/utils";
import { NAV_ITEMS } from "./navItems";

export function TopNav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [a, b] = wedding.couple.monogram;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden transition-[background-color,border-color] duration-500 md:block",
        scrolled
          ? "border-b border-charcoal/10 bg-warm/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-10"
      >
        <button
          type="button"
          onClick={() => scrollToId("home")}
          className="min-h-11 font-serif text-2xl text-ink"
          aria-label="Back to home"
        >
          {a}
          <span className="mx-1 italic text-taupe">&amp;</span>
          {b}
        </button>
        <ul className="flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label, match }) => {
            const isActive = match.includes(active);
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => scrollToId(id)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative min-h-11 text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300",
                    "after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-500",
                    isActive
                      ? "text-ink after:scale-x-100"
                      : "text-taupe-deep after:scale-x-0 hover:text-ink",
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
