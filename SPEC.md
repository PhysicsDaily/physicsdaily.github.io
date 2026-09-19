# PhysicsDaily — Rebuild Specification

This document is the contract for the rebuild. Every feature below must work
before the rebuild replaces `main`. Acceptance checks at the bottom prove it.

## Stack

- **Astro 7** (static output) + **@astrojs/starlight** (docs engine: nav, search
  via Pagefind, dark/light theme, mobile menu).
- **KaTeX** for math, via `remark-math` + `rehype-katex`.
- **TypeScript** throughout (`astro check` must pass).
- Hosting: GitHub Pages via `.github/workflows/deploy.yml` (withastro/action).
- No CSS framework. Custom CSS layered on Starlight's variables.

## Canonical structure

```
src/
  site.config.ts        # single source of truth: meta, branches, analytics IDs, feedback config
  content.config.ts     # docs collection schema (zod)
  content/docs/         # all pages; sidebar is GENERATED from this tree
  lib/                  # generateSidebar.mjs, chapters.ts, dailyQuote.ts
  components/ui/        # ArrowIcon, YouTube, Simulation, FeedbackForm, ChapterCards
  components/home/      # Hero override, Curriculum, Approach, FeedbackLink
  components/starlight/ # overrides: Head, PageFrame, Sidebar, ThemeProvider, ThemeSelect
  styles/               # global.css, fonts.css, home.css
scripts/generate-favicons.js
```

## Canonical branch slugs (ONE name per branch, forever)

| Order | Slug                 | Display name         |
|-------|----------------------|----------------------|
| 1     | `mechanics`          | Mechanics            |
| 2     | `oscillations-waves` | Oscillations & Waves |
| 3     | `thermodynamics`     | Thermodynamics       |
| 4     | `electromagnetism`   | Electromagnetism     |
| 5     | `optics`             | Optics               |
| 6     | `modern-physics`     | Modern Physics       |

Legacy names (`waves`, `oscillations`, `electrodynamics`, `modern`) must NOT
appear in new code. Old URLs redirect so no links break.


## Content conventions (the "proper structure")

- Adding a page = creating a `.md`/`.mdx` file. Sidebar picks it up on next
  build/dev-restart. No manual sidebar edits.
- Page frontmatter: `title` (required), `description`, `order` (int, reading
  order), `label` (optional sidebar label override).
- A **branch** = a directory under `docs/` with an `index.mdx` (overview) and
  chapter entries.
- A **chapter** = either a single `chapter-N-slug.md` file, or a directory
  `chapter-N-slug/` of section pages with `_meta.json`
  `{ "title": "Chapter N: Name", "collapsed": true, "order": N }`.
- Only `chapter-*` entries directly inside a branch count as chapters (homepage
  counts + chapter cards). Other files directly in a branch trigger a warning.
- Homepage = `docs/index.mdx` with `template: splash` + `hero` frontmatter;
  optional `eyebrow` and `facts` fields.

## Features (parity list)

1. **Docs system** — md/mdx pages, generated sidebar with collapsible chapter
   groups, prev/next links.
2. **Math** — `$...$` and `$$...$$` via KaTeX; KaTeX CSS loaded.
3. **Homepage** — custom hero (eyebrow, title, tagline, actions, facts), daily
   scientist portrait + cited quote, Curriculum with live chapter counts,
   Approach section, Feedback callout.
4. **Dark/light theme** — FOUC-free inline provider; toggle in header.
5. **Collapsible sidebar** — custom toggle, persisted in localStorage, a11y synced.
6. **Branch-narrowed sidebar** — route middleware; homepage/404/splash keep full nav.
7. **Search** — Pagefind via Starlight.
8. **SEO/infra** — sitemap, WebSite JSON-LD, generated favicon set + manifest,
   font preloads (Inter + Source Serif 4, `font-display: optional`).
9. **Analytics** — GA4 + Cloudflare, production hostnames only, stripped on 404.
10. **Feedback** — `/feedback/` page posting to Google Forms via hidden iframe,
    success state, homepage callout. Copy + form IDs in `site.config.ts`.
11. **Embeds** — `<YouTube>` (youtube-nocookie, lazy, 16:9) and `<Simulation>`
    (lazy iframe, configurable height).
12. **Coming-soon system** — `/coming-soon/` splash; legacy branch URLs redirect
    there; 404 JS also redirects known upcoming-branch paths.
13. **Redirects** — old URLs kept alive: `/mechanics/chapter-2-kinematics` →
    first section; legacy branch names → canonical slug or `/coming-soon/`.
14. **Deploy** — GitHub Actions: push to main + daily cron (advances daily
    quote); correct `base` handling for user/org site.
15. **404** — `noindex,nofollow`.

## Rules for the rebuild

- One config file — no duplicated branch lists, analytics IDs, or form URLs.
- Every component has a one-line what + why comment.
- No dead code, no unused CSS, no commented-out blocks.
- `npm run check` = 0 errors. `npm run build` = success.
- Small commits per layer so any layer can be reverted alone.

## Acceptance checks

- [ ] `npm run check` — 0 errors
- [ ] `npm run build` — builds, sitemap + pagefind generated
- [ ] Homepage renders hero + daily quote + curriculum counts (Mechanics = 2)
- [ ] `/mechanics/` shows chapter cards; sidebar narrowed to Mechanics
- [ ] Math renders on chapter-1-vectors
- [ ] Theme toggle + sidebar collapse persist across reload
- [ ] Old URL `/electrodynamics/` lands on coming-soon
- [ ] 404 page has noindex; analytics absent on localhost
- [ ] Feedback page renders form
