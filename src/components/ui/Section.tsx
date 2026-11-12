import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "scroll-mt-2 px-6 py-24 sm:px-10 md:scroll-mt-16 md:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
