// Copies the generated sitemap index to a second, canonical-looking path.
// Why: Search Console's sitemap fetcher cached a permanent "Couldn't fetch"
// failure against /sitemap-index.xml that survives deletion and resubmission.
// Submitting the identical file from a fresh URL path sidesteps the poisoned
// cache entry. Runs after `astro build` as part of `npm run build`.
import { copyFile } from 'node:fs/promises';

await copyFile('dist/sitemap-index.xml', 'dist/sitemap.xml');
console.log('Copied sitemap-index.xml → sitemap.xml');
