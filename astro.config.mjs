// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://gt-sse-center.github.io/project-showcase",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [nodePolyfills(), tailwindcss()],
  },
  outDir: "build",
});