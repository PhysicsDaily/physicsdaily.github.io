import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../site.config';
import { base } from '../lib/paths';

// A fresh, single-file sitemap path: Search Console caches "Couldn't fetch" per URL,
// so the auto-generated sitemap-index.xml / sitemap-0.xml can stay stuck.
export const GET: APIRoute = async ({ site: configured }) => {
	const origin = configured?.origin ?? site.url;
	const docs = await getCollection('docs');
	const paths = docs
		.map((doc) => doc.id.replace(/(^|\/)index$/, ''))
		.filter((slug) => slug !== 'coming-soon')
		.map((slug) => (slug ? `${base}${slug}/` : base))
		.sort();

	const urls = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
