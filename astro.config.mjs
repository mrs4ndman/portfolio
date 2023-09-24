import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mrs4ndman.dev',
	integrations: [mdx(), sitemap()],
	integrations: [preact(), tailwind()],
});
