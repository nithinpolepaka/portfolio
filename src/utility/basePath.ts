const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-relative `public/` asset path with the Next.js `basePath`.
 *
 * Next.js only applies `basePath` to routes and to optimized image URLs. Raw
 * strings handed to `<Image unoptimized>`, a plain `<img>` or any manual
 * `src` are emitted verbatim, so they need the prefix applied by hand.
 * `basePath` is an empty string outside of GitHub Pages, which makes this a
 * no-op during local development.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;

  return `${basePath}${path}`;
}

export default withBasePath;
