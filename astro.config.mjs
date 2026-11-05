// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Sitio de usuario de GitHub Pages: se publica en la raíz de hmedrano-gif.github.io.
// No toca https://hmedrano-gif.github.io/CURN/ (sitio de proyecto independiente).
export default defineConfig({
  site: "https://hmedrano-gif.github.io",
  vite: { plugins: [tailwindcss()] },
});
