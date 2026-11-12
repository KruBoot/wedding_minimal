import type { SectionCopy } from "../../config/wedding";
import { Reveal } from "./Reveal";

export function SectionHeading({
  id,
  index,
  title,
  subtitle,
}: SectionCopy & { id: string }) {
  return (
    <Reveal className="mb-12 text-center md:mb-16">
      <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-taupe-deep">
        {index}
      </p>
      <h2
        id={id}
        className="font-serif text-[length:clamp(2.4rem,10vw,3.75rem)] font-light leading-[1.05] text-ink"
      >
        {title}
      </h2>
      <p lang="th" className="mt-3 text-sm text-taupe-deep">
        {subtitle}
      </p>
    </Reveal>
  );
}
