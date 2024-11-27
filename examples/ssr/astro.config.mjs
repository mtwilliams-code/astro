import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [svelte()],
	i18n: {
		locales: ['en','es'],
		defaultLocale: 'en',
		fallback: {es:'en'},
		routing: {
			'fallbackType': 'rewrite'
		}
	}
});
