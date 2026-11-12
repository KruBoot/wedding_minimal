import { motion } from "motion/react";
import { EASE, cn, scrollToId } from "../../lib/utils";
import { NAV_ITEMS } from "./navItems";

export function BottomNav({ active }: { active: string }) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-warm/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {NAV_ITEMS.map(({ id, label, Icon, match }) => {
          const isActive = match.includes(active);
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToId(id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative flex h-16 w-full flex-col items-center justify-center gap-1 text-[10px] transition-colors duration-300",
                  isActive ? "text-ink" : "text-taupe-deep",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="bottom-nav-line"
                    className="absolute top-0 h-px w-8 bg-ink"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
                <Icon
                  size={19}
                  strokeWidth={isActive ? 1.6 : 1.25}
                  aria-hidden
                />
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
