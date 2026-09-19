## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Content Authoring & Formatting Guidelines

All chapter and article content must follow the standards detailed in [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md):

1. **Aesthetic & Tone**: Textbook-grade editorial aesthetic ("ink on paper"). Use Source Serif 4 for display, Inter for body. Do NOT use excessive emojis; keep it serious, clean, and elegant with minimalist SVG icons.
2. **Break Wall-of-Text Fatigue**: Never write uninterrupted blocks of dense paragraphs. Break sections into digestible chunks using `<Callout>`, `<FormulaCard>`, diagrams, and videos.
3. **KaTeX Standards**:
   - Always wrap math in `$inline$` or `$$ display $$`. Never use raw monospace code backticks for math symbols like `x_0` or `\hat{i}`.
   - Use subscripts like $(x_0, y_0, z_0)$ and vector hats like $\hat{i}, \hat{j}, \hat{k}$ properly in KaTeX.
4. **Formula Descriptions**:
   - Keep variable descriptions below formulas on **one continuous line** (`where $(x, y, z)$ are... and $(x_0, y_0, z_0)$ are...`). Do not split them into artificial bullet lists.
5. **Reusable Component Library (`src/components/ui/`)**:
   - `<FormulaCard title="..." label="...">`: Dedicated equation frame with single-line variable description.
   - `<Callout type="definition|tip|warning|note" title="...">`: Crisp boxes for units, rules, and misconceptions.
   - `<YouTube id="..." title="..." />` and `<Simulation src="..." title="..." />`: Media walkthroughs and interactive simulations.
6. **Global Changes Rule**:
   - Do NOT edit every markdown file when changing formatting. Modify the shared component in `src/components/ui/` or the global stylesheet in `src/styles/global.css` so changes propagate globally across all chapters.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
