import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [svelte(), sitemap(), react()],
});