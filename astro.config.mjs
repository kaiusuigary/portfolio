// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The v5 redesign page moved into WORKS (CASE 02 since 2026-10-17)
  redirects: {
    '/projects/app-renewal': '/#case-02',
    '/en/projects/app-renewal': '/en/#case-02',
  },
});
