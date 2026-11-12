import { motion } from "motion/react";
import { wedding } from "../../config/wedding";
import { EASE } from "../../lib/utils";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Schedule() {
  const { schedule, sections } = wedding;
  return (
    <Section id="schedule" className="bg-ivory">
      <SectionHeading id="schedule-title" {...sections.schedule} />
      <div className="relative mx-auto max-w-xl">
        <motion.span
          aria-hidden
          className="absolute bottom-3 left-[5px] top-3 w-px origin-top bg-taupe/50"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        <ol className="space-y-12">
          {schedule.map((s, i) => (
            <li key={`${s.time}-${i}`} className="relative pl-10 sm:pl-14">
              <span
                aria-hidden
                className="absolute left-0 top-[0.8rem] size-[11px] rounded-full border border-taupe bg-ivory"
              />
              <Reveal delay={i * 0.08}>
                <p className="font-serif text-3xl font-light text-ink">
                  <time>{s.time}</time>
                </p>
                <h3 className="mt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-charcoal">
                  {s.title.en}
                </h3>
                <p lang="th" className="mt-1 text-sm text-taupe-deep">
                  {s.title.th}
                </p>
                {s.description && (
                  <p className="mt-3 text-sm leading-7 text-charcoal/75">
                    {s.description.en}{" "}
                    <span lang="th" className="block text-taupe-deep">
                      {s.description.th}
                    </span>
                  </p>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
