import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageSlot } from "../../config/wedding";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { btn } from "../../lib/ui";
import { EASE, pad } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";

const slide: Variants = {
  enter: (d: number) => ({ x: d * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d * -48, opacity: 0 }),
};

interface Props {
  images: ImageSlot[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, index, onChange, onClose }: Props) {
  const [dir, setDir] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(true);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      onChange((index + d + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => prev?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const img = images[index];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery viewer"
      className="fixed inset-0 z-[80] flex flex-col bg-warm/97 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div className="flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-8">
        <p
          className="text-[11px] tracking-[0.3em] text-taupe-deep"
          aria-live="polite"
        >
          {pad(index + 1)} / {pad(images.length)}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className={btn.icon}
        >
          <X size={18} strokeWidth={1.25} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-8">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) go(1);
              else if (info.offset.x > 60 || info.velocity.x > 500) go(-1);
            }}
            className="flex h-[min(68svh,640px)] max-w-full cursor-grab items-center justify-center active:cursor-grabbing"
          >
            <ImageFrame
              slot={img}
              fit="contain"
              className="h-full max-w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className={btn.icon}
        >
          <ChevronLeft size={18} strokeWidth={1.25} />
        </button>
        <p className="w-32 text-center text-[10px] uppercase tracking-[0.25em] text-taupe-deep">
          <span className="md:hidden">Swipe</span>
          <span className="hidden md:inline">← → Keys</span>
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className={btn.icon}
        >
          <ChevronRight size={18} strokeWidth={1.25} />
        </button>
      </div>
    </motion.div>
  );
}
