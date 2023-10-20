import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.mrs4ndman.dev',
	base: 'portfolio',
	integrations: [mdx(), sitemap()],
	integrations: [preact(), tailwind()],
});
