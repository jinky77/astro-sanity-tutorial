import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: "kzn3z33b",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-12-07",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  optimizeDeps: {
    exclude: ["react-compiler-runtime", "lodash/startCase.js"],
  },
  adapter: cloudflare(),
  output: "server",
});
