export const cn = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

/** แปลง path ใน public/ ให้ถูกต้องตาม base path (รองรับ GitHub Pages) */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const pad = (n: number) => String(n).padStart(2, "0");

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReduced() ? "auto" : "smooth",
    block: "start",
  });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
}

export const scrollBehavior = (): ScrollBehavior =>
  prefersReduced() ? "auto" : "smooth";
