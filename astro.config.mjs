// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The v5 redesign page moved into WORKS as CASE 06 (2026-10-14)
  redirects: {
    '/projects/app-renewal': '/#case-06',
    '/en/projects/app-renewal': '/en/#case-06',
  },
});
