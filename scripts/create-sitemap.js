import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const sourcePath = resolve('dist/sitemap-0.xml');
const sitemapPath = resolve('dist/sitemap.xml');
const source = await readFile(sourcePath, 'utf8');
const urlset = source.match(/<urlset\b[^>]*>([\s\S]*?)<\/urlset>/);

if (!urlset) {
	throw new Error(`Expected Astro to generate a URL sitemap at ${sourcePath}`);
}

const entries = [...urlset[1].matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/g)].map(([, entry]) => {
	const location = entry.match(/<loc>([\s\S]*?)<\/loc>/);

	if (!location) {
		throw new Error('An Astro sitemap URL entry is missing its <loc> element');
	}

	return `  <url><loc>${location[1]}</loc></url>`;
});

if (entries.length === 0) {
	throw new Error('Astro generated an empty URL sitemap');
}

const sitemap = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...entries,
	'</urlset>',
	'',
].join('\n');

await writeFile(sitemapPath, sitemap, 'utf8');
console.log(`Created ${sitemapPath} with ${entries.length} URLs`);
