// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [nodePolyfills(), tailwindcss()],
  }
});