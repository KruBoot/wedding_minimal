import {
  CalendarDays,
  Clock,
  Landmark,
  MapPin,
  Shirt,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { wedding } from "../../config/wedding";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

interface Item {
  Icon: LucideIcon;
  label: string;
  value: string;
  sub?: string;
  extra?: ReactNode;
}

export function Details() {
  const { date, venue, details, sections } = wedding;
  const items: Item[] = [
    {
      Icon: CalendarDays,
      label: "Date",
      value: date.display.en,
      sub: date.display.th,
    },
    { Icon: Clock, label: "Time", value: date.time.en, sub: date.time.th },
    {
      Icon: Landmark,
      label: "Venue",
      value: venue.name,
      sub: `${venue.hall.en} · ${venue.hall.th}`,
    },
    {
      Icon: MapPin,
      label: "Address",
      value: venue.address.en,
      sub: venue.address.th,
    },
    {
      Icon: Shirt,
      label: "Dress Code",
      value: details.dressCode.title.en,
      sub: details.dressCode.title.th,
      extra: (
        <dd className="mt-5 flex flex-wrap gap-2">
          {details.dressCode.palette.map((c) => (
            <span
              key={c.hex}
              title={c.name}
              className="size-7 rounded-full border border-charcoal/10"
              style={{ background: c.hex }}
            >
              <span className="sr-only">{c.name}</span>
            </span>
          ))}
        </dd>
      ),
    },
    {
      Icon: Sparkles,
      label: "Wedding Theme",
      value: details.theme.title.en,
      sub: details.theme.title.th,
    },
  ];

  return (
    <Section id="details">
      <SectionHeading id="details-title" {...sections.details} />
      <Reveal>
        <dl className="grid gap-px overflow-hidden border border-taupe/30 bg-taupe/30 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, label, value, sub, extra }) => (
            <div key={label} className="bg-warm px-6 py-8 sm:px-8 sm:py-10">
              <dt className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-taupe-deep">
                <Icon size={16} strokeWidth={1.25} aria-hidden />
                {label}
              </dt>
              <dd className="mt-5 break-words font-serif text-2xl leading-snug text-ink">
                {value}
              </dd>
              {sub && (
                <dd
                  lang="th"
                  className="mt-2 text-sm leading-relaxed text-taupe-deep"
                >
                  {sub}
                </dd>
              )}
              {extra}
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
