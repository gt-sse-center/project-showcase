import { defineConfig } from 'vite';
import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
// for the following see https://github.com/cypress-io/cypress/issues/25397#issuecomment-1775454875
import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');


// https://vite.dev/config/
export default defineConfig({
  base: "/project-showcase",
  plugins: [
    react(),
    tailwindcss(),
    eslintPlugin(),
  ],
  resolve: {  // resolve path aliases
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  root: path.resolve(__dirname, "."),
  build: {
    outDir: path.resolve(__dirname, "dist/"),
  },
})
