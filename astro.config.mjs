// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { generateSidebar } from './src/data/generateSidebar.mjs';

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

export default defineConfig({
	site: process.env.SITE_URL ?? (isGitHubPagesBuild ? `https://${host}` : 'https://physicsdaily.github.io'),
	base,
	// A chapter split into sections has no page of its own, so the chapter's own URL
	// — published while the chapter was still a single page, and the natural thing to
	// link or type — sends the reader to the section the chapter begins at.
	redirects: {
		'/mechanics/chapter-2-kinematics': `${basePrefix}/mechanics/chapter-2-kinematics/introduction-to-kinematics/`,
		'/electromagnetism': `${basePrefix}/coming-soon/`,
		'/electromagnetism/current-resistance-emf': `${basePrefix}/coming-soon/`,
		'/electromagnetism/capacitance-dielectrics': `${basePrefix}/coming-soon/`,
		'/electrodynamics': `${basePrefix}/coming-soon/`,
		'/optics': `${basePrefix}/coming-soon/`,
		'/optics/diffraction': `${basePrefix}/coming-soon/`,
		'/optics/chapter44': `${basePrefix}/coming-soon/`,
		'/thermodynamics': `${basePrefix}/coming-soon/`,
		'/thermodynamics/temperature-heat': `${basePrefix}/coming-soon/`,
		'/modern': `${basePrefix}/coming-soon/`,
		'/modern-physics': `${basePrefix}/coming-soon/`,
		'/oscillations': `${basePrefix}/coming-soon/`,
		'/waves': `${basePrefix}/coming-soon/`,
	},
	integrations: [
		starlight({
			title: 'PhysicsDaily',
			description:
				'Clear, structured physics notes with diagrams, videos, equations, and interactive simulations.',
			// The logo is the mark alone — the wordmark beside it is the real site title,
			// rendered as HTML so it picks up Source Serif 4. An SVG loaded through <img>
			// cannot reach the page's @font-face rules, so a wordmark baked into the file
			// would fall back to a different font on every OS.
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
				alt: '',
			},
			components: {
				Head: './src/components/overrides/Head.astro',
				Hero: './src/components/overrides/Hero.astro',
				PageFrame: './src/components/overrides/PageFrame.astro',
				Sidebar: './src/components/overrides/Sidebar.astro',
				ThemeProvider: './src/components/overrides/ThemeProvider.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro',
			},
			routeMiddleware: './src/starlightRouteData.ts',
			// Google Analytics 4 — loads on real production pages. Excludes localhost and 127.0.0.1.
			// Loaded conditionally (not via static attrs) so dev sessions on
			// localhost/127.0.0.1 never report or load gtag.js, matching Cloudflare.
			head: [
				{
					tag: 'script',
					content: `if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
	var ga = document.createElement('script');
	ga.async = true;
	ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-NEB8S7WNYL';
	document.head.appendChild(ga);
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-NEB8S7WNYL');
}`,
				},
				// Cloudflare Web Analytics — free, ~4KB, deferred module so it never
				// blocks rendering. More resistant to adblockers than gtag.js, so the
				// Cloudflare dashboard is the accurate count; GA4 is the deep detail.
				// Loaded conditionally (not via static attrs) so dev sessions on
				// localhost/127.0.0.1 never report to Cloudflare, matching the gtag guard.
				{
					tag: 'script',
					content: `if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  var cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cf.setAttribute('data-cf-beacon', '{"token": "d9af8c2cb2c2421392420889bf7212d4"}');
  document.head.appendChild(cf);
}`,
				},
			],
			customCss: [
				'./src/styles/fonts.css',
				'katex/dist/katex.min.css',
				'./src/styles/custom.css',
			],
			// The sidebar is generated from the files in src/content/docs/ — see
			// generateSidebar.mjs. Adding a page means creating the file; its `order`
			// frontmatter places it in the reading order.
			sidebar: [
				{ label: 'Introduction to Physics', slug: 'introduction-to-physics' },
				{
					label: 'Mechanics',
					collapsed: true,
					items: generateSidebar('mechanics'),
				},
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
