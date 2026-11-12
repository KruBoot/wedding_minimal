import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { wedding } from "../../config/wedding";
import { btn } from "../../lib/ui";
import { EASE, cn } from "../../lib/utils";
import { Divider } from "../ui/Divider";

export function Opening({ onOpen }: { onOpen: () => void }) {
  const { couple, date, isDemo } = wedding;
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => btnRef.current?.focus({ preventScroll: true }), []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="opening-title"
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-warm px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))]"
      exit={{
        opacity: 0,
        transition: { duration: 0.8, delay: 0.35, ease: EASE },
      }}
    >
      <motion.div
        className="w-full max-w-[380px] border border-taupe/40 bg-warm p-2 shadow-[0_40px_80px_-40px_rgba(24,24,24,0.2)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.1, ease: EASE },
        }}
        exit={{
          opacity: 0,
          y: -28,
          scale: 0.98,
          transition: { duration: 0.7, ease: EASE },
        }}
      >
        <div className="flex flex-col items-center border border-taupe/25 px-6 py-12 text-center sm:py-14">
          {isDemo && (
            <span className="mb-9 border border-taupe/40 px-3 py-1 text-[9px] font-medium tracking-[0.32em] text-taupe-deep">
              DEMO
            </span>
          )}
          <p className="text-[10px] font-medium tracking-[0.42em] text-taupe-deep">
            WEDDING INVITATION
          </p>
          <p
            id="opening-title"
            className="mt-10 font-serif text-[length:clamp(4rem,22vw,5.5rem)] font-light leading-none text-ink"
          >
            {couple.monogram[0]}
            <span className="mx-2 italic text-taupe">&amp;</span>
            {couple.monogram[1]}
          </p>
          <Divider className="my-9" />
          <p className="font-serif text-2xl italic text-charcoal">
            {couple.groom.firstName} &amp; {couple.bride.firstName}
          </p>
          <p className="mt-3 text-[11px] tracking-[0.32em] text-taupe-deep">
            {date.short}
          </p>
          <button
            ref={btnRef}
            type="button"
            onClick={onOpen}
            className={cn(btn.base, btn.primary, "mt-11 w-full max-w-[240px]")}
          >
            Open Invitation
          </button>
          <p lang="th" className="mt-4 text-[11px] text-taupe-deep">
            แตะเพื่อเปิดการ์ดเชิญ
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
