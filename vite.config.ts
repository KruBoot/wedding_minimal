import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: './' → asset path แบบ relative ใช้ได้ทั้ง user.github.io และ user.github.io/repo-name
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: { target: "es2020", cssCodeSplit: true, sourcemap: false },
});
