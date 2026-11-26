// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gerard-caminal.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Spanish pages are built under /es/ but served at the same URLs as English
      // (see public/_redirects), so only the unprefixed URLs go in the sitemap
      filter: (page) => !page.startsWith('https://gerard-caminal.netlify.app/es/')
    })
  ]
});