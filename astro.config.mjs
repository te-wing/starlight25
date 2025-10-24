import { defineConfig, passthroughImageService } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://starlight25.pages.dev',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  image: {
    service: passthroughImageService(),
  },
  integrations: [svelte(), sitemap(), react(), vue(), mdx()],
  markdown: {
    remarkplugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});