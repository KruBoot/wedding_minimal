import { Camera, type LucideIcon } from "lucide-react";
import type { ImageSlot } from "../../config/wedding";
import { cn } from "../../lib/utils";

interface Props {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
  icon?: LucideIcon;
  fit?: "cover" | "contain";
  /** ข้อความบรรทัดล่างใน placeholder (ค่าเริ่มต้น = สัดส่วนภาพ) */
  hint?: string;
}

/** ถ้ามี slot.src → แสดงภาพจริง / ถ้าไม่มี → แสดง Placeholder */
export function ImageFrame({
  slot,
  className,
  priority = false,
  icon: Icon = Camera,
  fit = "cover",
  hint,
}: Props) {
  const ratio = slot.ratio ?? "4 / 5";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[3px] bg-ivory",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {slot.src ? (
        <img
          src={slot.src}
          alt={slot.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "absolute inset-0 h-full w-full",
            fit === "cover" ? "object-cover" : "object-contain",
          )}
        />
      ) : (
        <div
          role="img"
          aria-label={`Image placeholder: ${slot.alt}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-2.5 rounded-[2px] border border-taupe/35"
          />
          {(
            [
              "left-2.5 top-2.5 border-l border-t",
              "right-2.5 top-2.5 border-r border-t",
              "bottom-2.5 left-2.5 border-b border-l",
              "bottom-2.5 right-2.5 border-b border-r",
            ] as const
          ).map((pos) => (
            <span
              key={pos}
              aria-hidden
              className={cn(
                "pointer-events-none absolute size-3 border-taupe",
                pos,
              )}
            />
          ))}
          <span
            aria-hidden
            className="flex size-11 items-center justify-center rounded-full border border-taupe/45 text-taupe-deep"
          >
            <Icon size={18} strokeWidth={1.25} />
          </span>
          <span className="text-center text-[9px] font-medium leading-relaxed tracking-[0.22em] text-taupe-deep sm:text-[10px]">
            [ {slot.label} ]
          </span>
          <span aria-hidden className="text-[9px] tracking-[0.2em] text-taupe">
            {hint ?? ratio.replace(/\s/g, "").replace("/", " : ")}
          </span>
        </div>
      )}
    </div>
  );
}
