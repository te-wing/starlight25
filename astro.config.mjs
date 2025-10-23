import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [svelte(), sitemap(), react(), vue()],
});