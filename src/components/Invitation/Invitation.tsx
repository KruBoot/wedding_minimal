import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { wedding, type Lang } from "../../config/wedding";
import { EASE, cn } from "../../lib/utils";
import { Divider } from "../ui/Divider";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const LANGS: { id: Lang; label: string }[] = [
  { id: "th", label: "ไทย" },
  { id: "en", label: "English" },
];

export function Invitation() {
  const { couple, parents, date, venue, invitation, sections } = wedding;
  const [lang, setLang] = useState<Lang>("th");
  const t = invitation[lang];
  const isTh = lang === "th";
  const nameClass = isTh
    ? "font-sans text-[length:clamp(1.6rem,7vw,2.25rem)] font-light"
    : "font-serif text-[length:clamp(2.2rem,10vw,3.25rem)] font-light";

  return (
    <Section id="invitation" className="bg-ivory">
      <SectionHeading id="invitation-title" {...sections.invitation} />

      <Reveal className="mb-10 flex justify-center">
        <div
          role="tablist"
          aria-label="Language"
          className="inline-flex border border-charcoal/15 bg-warm p-1"
        >
          {LANGS.map((l) => (
            <button
              key={l.id}
              id={`inv-tab-${l.id}`}
              role="tab"
              type="button"
              aria-selected={lang === l.id}
              aria-controls="inv-panel"
              onClick={() => setLang(l.id)}
              className={cn(
                "relative min-h-11 min-w-24 px-5 text-xs tracking-[0.15em] transition-colors duration-300",
                lang === l.id ? "text-warm" : "text-charcoal/70 hover:text-ink",
              )}
            >
              {lang === l.id && (
                <motion.span
                  layoutId="lang-pill"
                  className="absolute inset-0 bg-ink"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <article className="mx-auto max-w-xl border border-taupe/40 bg-warm p-2 sm:p-3">
          <div className="min-h-[640px] border border-taupe/25 px-6 py-14 text-center sm:px-12 sm:py-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={lang}
                id="inv-panel"
                role="tabpanel"
                aria-labelledby={`inv-tab-${lang}`}
                lang={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.38em] text-taupe-deep">
                  {t.eyebrow}
                </p>
                <p
                  className={cn(
                    "mt-8 text-charcoal",
                    isTh ? "text-base" : "font-serif text-xl italic",
                  )}
                >
                  {t.intro}
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-charcoal/75">
                  {t.request}
                </p>

                <div className="mt-10">
                  <p className={cn("leading-tight text-ink", nameClass)}>
                    {isTh ? couple.groom.fullNameTh : couple.groom.fullName}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-taupe-deep">
                    {t.sonOf} {parents.groom[lang]}
                  </p>
                  <p className="my-5 font-serif text-3xl italic text-taupe">
                    &amp;
                  </p>
                  <p className={cn("leading-tight text-ink", nameClass)}>
                    {isTh ? couple.bride.fullNameTh : couple.bride.fullName}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-taupe-deep">
                    {t.daughterOf} {parents.bride[lang]}
                  </p>
                </div>

                <Divider className="my-10" />

                <p
                  className={cn(
                    "text-ink",
                    isTh ? "text-lg" : "font-serif text-2xl",
                  )}
                >
                  {date.display[lang]}
                </p>
                <p className="mt-1 text-sm text-taupe-deep">
                  {date.time[lang]}
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-charcoal">
                  {isTh ? venue.nameTh : venue.name}
                </p>
                <p className="mt-1 text-sm text-taupe-deep">
                  {venue.hall[lang]}
                </p>

                <p
                  className={cn(
                    "mx-auto mt-10 max-w-xs text-charcoal/80",
                    isTh ? "text-sm" : "font-serif text-lg italic",
                  )}
                >
                  {t.closing}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
