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
      // "/" only redirects to /es/ or /en/, so keep it out of the sitemap
      filter: (page) => page !== 'https://gerard-caminal.netlify.app/',
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' }
      }
    })
  ]
});