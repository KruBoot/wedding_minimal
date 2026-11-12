import { wedding } from "../config/wedding";

/** Override สีจาก config ณ runtime โดยไม่ต้องแก้ CSS */
export function applyTheme() {
  const root = document.documentElement;
  Object.entries(wedding.theme.colors).forEach(([key, value]) => {
    if (value) root.style.setProperty(`--color-${key}`, value);
  });
}
