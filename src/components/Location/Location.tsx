import { ArrowUpRight, Check, Copy, Map as MapIcon } from "lucide-react";
import { wedding } from "../../config/wedding";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { btn } from "../../lib/ui";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Location() {
  const { venue, sections } = wedding;
  const { copied, copy } = useCopyToClipboard();

  return (
    <Section id="location">
      <SectionHeading id="location-title" {...sections.location} />
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <ImageFrame slot={venue.photo} className="w-full" />
        </Reveal>
        <Reveal delay={0.1} className="text-center md:text-left">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-taupe-deep">
            Venue
          </p>
          <h3 className="mt-4 font-serif text-[length:clamp(2rem,9vw,2.75rem)] font-light leading-tight text-ink">
            {venue.name}
          </h3>
          <p lang="th" className="mt-1 text-sm text-taupe-deep">
            {venue.nameTh} · {venue.hall.th}
          </p>
          <address className="mt-6 text-sm not-italic leading-7 text-charcoal/80">
            {venue.address.en}
            <span lang="th" className="mt-1 block text-taupe-deep">
              {venue.address.th}
            </span>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:justify-start">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btn.base, btn.primary, "w-full sm:w-auto")}
            >
              Open Google Maps{" "}
              <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => copy(`${venue.name}, ${venue.address.en}`)}
              className={cn(btn.base, btn.outline, "w-full sm:w-auto")}
            >
              {copied ? (
                <Check size={14} strokeWidth={1.5} aria-hidden />
              ) : (
                <Copy size={14} strokeWidth={1.5} aria-hidden />
              )}
              {copied ? "Copied" : "Copy Address"}
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? "Address copied to clipboard" : ""}
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        {venue.mapEmbedUrl ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] border border-taupe/30 md:aspect-[21/9]">
            <iframe
              src={venue.mapEmbedUrl}
              title={`Map to ${venue.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[50%]"
            />
          </div>
        ) : (
          <ImageFrame
            slot={venue.mapPlaceholder}
            icon={MapIcon}
            hint="EMBED URL VIA CONFIG"
            className="w-full md:!aspect-[21/9]"
          />
        )}
      </Reveal>
    </Section>
  );
}
