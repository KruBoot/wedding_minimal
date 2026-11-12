import { GalleryHorizontal, LayoutGrid } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { wedding } from "../../config/wedding";
import { EASE, cn } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Carousel } from "./Carousel";
import { Lightbox } from "./Lightbox";

type View = "grid" | "carousel";
const VIEWS: { id: View; label: string; Icon: typeof LayoutGrid }[] = [
  { id: "grid", label: "Grid", Icon: LayoutGrid },
  { id: "carousel", label: "Slide", Icon: GalleryHorizontal },
];

export function Gallery() {
  const { gallery: images, story, sections } = wedding;
  const [view, setView] = useState<View>("grid");
  const [index, setIndex] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <SectionHeading id="gallery-title" {...sections.gallery} />

      <div className="mb-20 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <Reveal>
          <ImageFrame
            slot={story.portrait}
            className="mx-auto w-full max-w-sm md:max-w-none"
          />
        </Reveal>
        <Reveal delay={0.1} className="text-center md:text-left">
          <p className="font-serif text-[length:clamp(1.6rem,6.5vw,2.25rem)] font-light italic leading-snug text-ink">
            “{story.quote.en}”
          </p>
          <p lang="th" className="mt-2 text-sm text-taupe-deep">
            {story.quote.th}
          </p>
          <p className="mt-8 text-sm leading-7 text-charcoal/80">
            {story.text.en}
          </p>
          <p lang="th" className="mt-4 text-sm leading-7 text-taupe-deep">
            {story.text.th}
          </p>
        </Reveal>
      </div>

      <Reveal className="mb-8 flex justify-center">
        <div
          role="group"
          aria-label="Gallery layout"
          className="inline-flex border border-charcoal/15 p-1"
        >
          {VIEWS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              aria-pressed={view === id}
              onClick={() => setView(id)}
              className={cn(
                "relative flex min-h-11 min-w-24 items-center justify-center px-4 text-[10px] font-medium uppercase tracking-[0.28em] transition-colors duration-300",
                view === id ? "text-warm" : "text-charcoal/70 hover:text-ink",
              )}
            >
              {view === id && (
                <motion.span
                  layoutId="gallery-view-pill"
                  className="absolute inset-0 bg-ink"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <Icon size={14} strokeWidth={1.25} aria-hidden />
                {label}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait" initial={false}>
        {view === "grid" ? (
          <motion.ul
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="columns-2 gap-3 sm:gap-4 md:columns-3"
          >
            {images.map((img, i) => (
              <li key={img.label} className="mb-3 break-inside-avoid sm:mb-4">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Open image ${i + 1} of ${images.length}`}
                  className="group block w-full overflow-hidden rounded-[3px]"
                >
                  <ImageFrame
                    slot={img}
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            key="carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Carousel images={images} onOpen={setIndex} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {index !== null && (
          <Lightbox
            images={images}
            index={index}
            onChange={setIndex}
            onClose={() => setIndex(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
