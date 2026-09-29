import type { StarlightRouteData } from '@astrojs/starlight/route-data';

type Route = Pick<StarlightRouteData, 'id' | 'entry'>;

/** Content-collection id without extension; the homepage is `index`. */
const slugOf = (route: Route): string => (route.entry?.id ?? route.id).replace(/\.mdx?$/, '');

export const isHome = (route: Route): boolean => route.id === '' || slugOf(route) === 'index';

export const is404 = (route: Route): boolean => slugOf(route) === '404';

/** The placeholder every unpublished-branch redirect lands on. */
export const isComingSoon = (route: Route): boolean => slugOf(route) === 'coming-soon';
