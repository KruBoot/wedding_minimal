import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { wedding } from "../../config/wedding";
import { EASE, scrollToId } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";

export function Hero({ ready }: { ready: boolean }) {
  const { couple, date, venue, hero, isDemo } = wedding;
  const item = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 + i * 0.14 },
  });

  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="px-6 pb-20 pt-[max(4rem,calc(env(safe-area-inset-top)_+_2.5rem))] sm:px-10 md:pb-28 md:pt-32"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="text-center md:text-left">
          <motion.p
            {...item(0)}
            className="text-[10px] font-medium uppercase tracking-[0.4em] text-taupe-deep"
          >
            {hero.tagline}
          </motion.p>
          <motion.h1
            {...item(1)}
            id="home-title"
            className="mt-8 font-serif text-[length:clamp(3.4rem,17vw,6.75rem)] font-light leading-[0.92] text-ink"
          >
            <span className="block">{couple.groom.firstName}</span>
            <span className="my-2 block text-[0.5em] italic text-taupe">
              &amp;
            </span>
            <span className="block">{couple.bride.firstName}</span>
          </motion.h1>
          <motion.p
            {...item(2)}
            lang="th"
            className="mt-6 text-sm tracking-wide text-taupe-deep"
          >
            {couple.groom.nameTh} &amp; {couple.bride.nameTh}
          </motion.p>

          <motion.div
            {...item(3)}
            className="mt-10 border-y border-taupe/30 py-6"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-charcoal">
              Wedding Invitation
            </p>
            <p className="mt-4 font-serif text-xl text-ink sm:text-2xl">
              <time dateTime={date.iso}>{date.display.en}</time>
            </p>
            <p className="mt-1 text-sm text-taupe-deep">
              {venue.name} · {venue.city}
            </p>
          </motion.div>

          {isDemo && (
            <motion.p
              {...item(4)}
              className="mt-6 text-[10px] tracking-[0.2em] text-taupe-deep"
            >
              DEMO · SAMPLE CONTENT
            </motion.p>
          )}
        </div>

        <motion.div {...item(2)}>
          <ImageFrame slot={hero.photo} priority className="w-full" />
        </motion.div>
      </div>

      <motion.div {...item(5)} className="mt-14 flex justify-center">
        <button
          type="button"
          onClick={() => scrollToId("gallery")}
          className="flex min-h-11 flex-col items-center gap-1 px-4 text-[10px] uppercase tracking-[0.35em] text-taupe-deep transition-colors hover:text-ink"
        >
          Scroll
          <ChevronDown
            size={16}
            strokeWidth={1.25}
            className="motion-safe:animate-bounce"
            aria-hidden
          />
        </button>
      </motion.div>
    </section>
  );
}
