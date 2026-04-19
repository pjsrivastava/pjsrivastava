import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.pjsrivastava.com",
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
  vite: {
    server: {
      // Allow CodeSandbox / StackBlitz / similar proxy URLs during dev.
      // Safe to leave on; it only affects the dev server, not the built site.
      allowedHosts: true,
    },
  },
});
