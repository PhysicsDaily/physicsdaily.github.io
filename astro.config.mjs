// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { generateSidebar } from './src/lib/generateSidebar.mjs';
import { site, analytics, branches } from './src/site.config.ts';

const [repositoryOwner = '', repositoryName = ''] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubPagesBuild = Boolean(repositoryOwner && repositoryName);
// Owner and repository names are case-insensitive on GitHub, and Pages serves the
// user/organization site from a lowercase host, so normalize before comparing.
const host = `${repositoryOwner.toLowerCase()}.github.io`;
const isUserOrOrganizationSite = repositoryName.toLowerCase() === host;

const base =
	process.env.BASE_PATH ??
	(isGitHubPagesBuild && !isUserOrOrganizationSite ? `/${repositoryName}` : '/');
// Astro prefixes a redirect's own route with the base but writes its destination out
// as given, so the destination has to carry the base itself. `/` leaves no prefix.
const basePrefix = base.replace(/\/$/, '');

/**
 * Redirects keep old URLs alive. Not-yet-published branches and the
 * split-chapter's old single page land on `/coming-soon/` or the chapter's
 * first section.
 *
 * Legacy slugs from the deleted pre-rebuild site (electrodynamics, waves, …)
 * deliberately get NO redirect entry: they fall through to the real 404 page,
 * whose 404 status tells crawlers the old URLs are gone for good so Google
 * de-indexes them. Human visitors are still forwarded to `/coming-soon/` by
 * the client-side script in Head.astro. Built from site.config.ts so branch
 * names exist in exactly one place.
 */
const redirects = Object.fromEntries([
	['/mechanics/chapter-2-kinematics', `${basePrefix}/mechanics/chapter-2-kinematics/introduction-to-kinematics/`],
	// Driven by the `live` flag: flipping a branch to live in site.config.ts
	// automatically drops its coming-soon redirect so the real page is served.
	...branches.filter((b) => !b.live).map((b) => [b.slug, `${basePrefix}/coming-soon/`]),
]);

// Analytics snippets. Loaded conditionally (not via static attrs) so dev sessions
// on localhost/127.0.0.1 never report, matching the guard in Head.astro.
/** @type {{ tag: 'script'; content: string }[]} */
const analyticsHead = [
	{
		tag: 'script',
		content: `if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
var ga = document.createElement('script');
ga.async = true;
ga.src = 'https://www.googletagmanager.com/gtag/js?id=${analytics.gaId}';
document.head.appendChild(ga);
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics.gaId}');
}`,
	},
	{
		tag: 'script',
		content: `if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  var cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cf.setAttribute('data-cf-beacon', '{"token": "${analytics.cloudflareToken}"}');
  document.head.appendChild(cf);
}`,
	},
];

export default defineConfig({
	site: process.env.SITE_URL ?? (isGitHubPagesBuild ? `https://${host}` : site.url),
	base,
	redirects,
	integrations: [
		starlight({
			title: site.name,
			description: site.description,
			// The logo is the mark alone — the wordmark beside it is the real site title,
			// rendered as HTML so it picks up Source Serif 4.
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
				alt: '',
			},
			components: {
				Head: './src/components/starlight/Head.astro',
				Hero: './src/components/home/Hero.astro',
				PageFrame: './src/components/starlight/PageFrame.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				ThemeProvider: './src/components/starlight/ThemeProvider.astro',
				ThemeSelect: './src/components/starlight/ThemeSelect.astro',
			},
			routeMiddleware: './src/routeMiddleware.ts',
			head: analyticsHead,
			customCss: ['./src/styles/fonts.css', 'katex/dist/katex.min.css', './src/styles/global.css'],
			// The sidebar is generated from the files in src/content/docs/ — adding a page
			// means creating the file; its `order` frontmatter places it in reading order.
			sidebar: [
				{ label: 'Introduction to Physics', slug: 'introduction-to-physics' },
				{ label: 'Mechanics', collapsed: true, items: generateSidebar('mechanics') },
			],
		}),
	],
	markdown: {
		processor: unified({
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}),
	},
});
