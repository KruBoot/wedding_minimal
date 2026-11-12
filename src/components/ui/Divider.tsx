import { cn } from "../../lib/utils";

export function Divider({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const line = tone === "dark" ? "bg-taupe/50" : "bg-warm/30";
  const mark = tone === "dark" ? "border-taupe" : "border-warm/50";
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span className={cn("h-px w-12", line)} />
      <span className={cn("size-1.5 rotate-45 border", mark)} />
      <span className={cn("h-px w-12", line)} />
    </div>
  );
}
