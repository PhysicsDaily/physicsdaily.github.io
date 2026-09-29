const rawBase = import.meta.env.BASE_URL;

/** Site base path with a trailing slash, for building internal hrefs. */
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Site base path without a trailing slash; empty when served from the domain root. */
export const basePrefix = base.replace(/\/$/, '');
