/**
 * Resolve a file from `public/` against the deploy base path.
 *
 * GitHub Pages serves this site from /Sortla-Website/, so a bare "/logo.png"
 * would 404. Vite rewrites imported assets for us, but not string literals.
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
