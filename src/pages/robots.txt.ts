import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { basePrefix } from '../lib/paths';

// Built from the configured site URL so the sitemap link follows SITE_URL and BASE_PATH.
export const GET: APIRoute = ({ site: configured }) => {
	const origin = configured?.origin ?? site.url;
	return new Response(
		[
			'# Allow all crawlers. Site is fully public educational content.',
			'User-agent: *',
			'Allow: /',
			'',
			`Sitemap: ${origin}${basePrefix}/sitemap.xml`,
			'',
		].join('\n'),
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
};
