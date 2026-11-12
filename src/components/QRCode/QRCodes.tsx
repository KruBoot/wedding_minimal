import { Download, QrCode } from "lucide-react";
import { wedding } from "../../config/wedding";
import { btn } from "../../lib/ui";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../ui/ImageFrame";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function QRCodes() {
  const { qrCodes, sections } = wedding;
  return (
    <Section id="qr" className="bg-ivory">
      <SectionHeading id="qr-title" {...sections.qr} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {qrCodes.map((q, i) => (
          <li key={q.id}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <article className="flex h-full flex-col items-center border border-taupe/30 bg-warm px-6 py-8 text-center">
                <span className="mb-6 border border-taupe/40 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.3em] text-taupe-deep">
                  {q.type}
                </span>
                <ImageFrame
                  slot={q.image}
                  icon={QrCode}
                  hint="QR CODE"
                  fit="contain"
                  className="w-full max-w-[220px] bg-warm"
                />
                <h3 className="mt-7 font-serif text-2xl text-ink">
                  {q.title.en}
                </h3>
                <p lang="th" className="mt-1 text-sm text-taupe-deep">
                  {q.title.th}
                </p>
                <p className="mt-4 text-sm leading-6 text-charcoal/75">
                  {q.description.en}
                </p>
                <p lang="th" className="mt-1 text-xs leading-6 text-taupe-deep">
                  {q.description.th}
                </p>
                {q.meta && (
                  <dl className="mt-5 w-full space-y-1 border-t border-taupe/25 pt-5 text-xs">
                    {q.meta.map((m) => (
                      <div key={m.label} className="flex justify-between gap-4">
                        <dt className="uppercase tracking-[0.2em] text-taupe-deep">
                          {m.label}
                        </dt>
                        <dd className="text-right text-charcoal">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {q.image.src && (
                  <a
                    href={q.image.src}
                    download
                    className={cn(btn.base, btn.outline, "mt-6 w-full")}
                  >
                    <Download size={14} strokeWidth={1.5} aria-hidden /> Save QR
                  </a>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
