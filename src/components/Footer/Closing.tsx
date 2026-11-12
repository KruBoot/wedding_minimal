import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { wedding } from "../../config/wedding";
import { btn } from "../../lib/ui";
import { cn, scrollToTop } from "../../lib/utils";
import { Divider } from "../ui/Divider";
import { Reveal } from "../ui/Reveal";

export function Closing() {
  const { couple, date, closing, contact, social, isDemo } = wedding;
  return (
    <footer
      id="closing"
      aria-labelledby="closing-title"
      className="scroll-mt-2 bg-ink px-6 pb-[calc(7rem_+_env(safe-area-inset-bottom))] pt-24 text-warm sm:px-10 md:pb-16 md:pt-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Divider tone="light" />
          <h2
            id="closing-title"
            className="mt-10 font-serif text-[length:clamp(3.2rem,15vw,6rem)] font-light italic leading-none"
          >
            {closing.title}
          </h2>
          <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-warm/80">
            {closing.message.en}
          </p>
          <p
            lang="th"
            className="mx-auto mt-2 max-w-md text-sm leading-7 text-warm/65"
          >
            {closing.message.th}
          </p>
          <p className="mt-12 font-serif text-3xl">
            {couple.groom.firstName}{" "}
            <span className="italic text-taupe">&amp;</span>{" "}
            {couple.bride.firstName}
          </p>
          <p className="mt-3 text-[11px] tracking-[0.35em] text-warm/65">
            {date.short}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-8 border-t border-warm/15 pt-10 text-sm sm:grid-cols-2">
          {contact.map((c) => (
            <div key={c.name}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-warm/65">
                {c.role.en} · <span lang="th">{c.role.th}</span>
              </p>
              <p className="mt-2">{c.name}</p>
              {c.email && (
                <a
                  href={`mailto:${c.email}`}
                  className="mt-1 inline-flex min-h-11 items-center gap-2 text-warm/80 underline-offset-4 hover:underline"
                >
                  <Mail size={14} strokeWidth={1.25} aria-hidden /> {c.email}
                </a>
              )}
              {c.phone && (
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="block min-h-11 py-3 text-warm/80 hover:underline"
                >
                  {c.phone}
                </a>
              )}
            </div>
          ))}
          {social.map((s) => (
            <div key={s.url}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-warm/65">
                {s.label}
              </p>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-2 break-all text-warm/80 underline-offset-4 hover:underline"
              >
                {s.handle}{" "}
                <ArrowUpRight size={14} strokeWidth={1.25} aria-hidden />
              </a>
            </div>
          ))}
        </Reveal>

        <button
          type="button"
          onClick={scrollToTop}
          className={cn(btn.base, btn.light, "mt-14")}
        >
          <ArrowUp size={14} strokeWidth={1.5} aria-hidden /> Back to Top
        </button>

        {isDemo && (
          <p className="mt-12 text-[11px] leading-6 text-warm/55">
            Demo invitation ·{" "}
            <span lang="th">
              ชื่อ ข้อมูล และรายละเอียดทั้งหมดเป็นข้อมูลสมมติ
            </span>
          </p>
        )}
      </div>
    </footer>
  );
}
