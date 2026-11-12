import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageSlot } from "../../config/wedding";
import { btn } from "../../lib/ui";
import { pad, scrollBehavior } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";

export function Carousel({
  images,
  onOpen,
}: {
  images: ImageSlot[];
  onOpen: (i: number) => void;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({
    current: 0,
    atStart: true,
    atEnd: false,
  });

  const step = () => {
    const t = track.current;
    const first = t?.firstElementChild as HTMLElement | null;
    if (!t || !first) return 0;
    return first.offsetWidth + (parseFloat(getComputedStyle(t).columnGap) || 0);
  };

  const update = useCallback(() => {
    const t = track.current;
    const s = step();
    if (!t || !s) return;
    const atEnd = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    setState({
      current: atEnd ? images.length - 1 : Math.round(t.scrollLeft / s),
      atStart: t.scrollLeft <= 4,
      atEnd,
    });
  }, [images.length]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (d: number) =>
    track.current?.scrollBy({ left: d * step(), behavior: scrollBehavior() });

  return (
    <div>
      <ul
        ref={track}
        onScroll={update}
        aria-label="Gallery carousel"
        className="no-scrollbar relative flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain sm:gap-4"
      >
        {images.map((img, i) => (
          <li
            key={img.label}
            className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-[36%]"
          >
            <button
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              className="block w-full"
            >
              <ImageFrame
                slot={{ ...img, ratio: "4 / 5" }}
                className="w-full"
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p
          className="text-[11px] tracking-[0.3em] text-taupe-deep"
          aria-live="polite"
        >
          {pad(state.current + 1)} / {pad(images.length)}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={state.atStart}
            aria-label="Previous images"
            className={btn.icon}
          >
            <ChevronLeft size={18} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={state.atEnd}
            aria-label="Next images"
            className={btn.icon}
          >
            <ChevronRight size={18} strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
