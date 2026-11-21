/**
 * Prefix an in-site path or hash with `import.meta.env.BASE_URL`.
 * Astro's base may or may not include a trailing slash; joining always
 * treats it as a directory so `/favicon.svg` becomes `/wenxin_repo/favicon.svg`
 * and `#about` becomes `/wenxin_repo/#about`.
 * Absolute http(s), protocol-relative, data, and mailto URLs are left unchanged.
 */
export function withBase(path: string): string {
  const raw = import.meta.env.BASE_URL || "/";
  const base = raw.endsWith("/") ? raw : `${raw}/`;
  if (!path) return base;
  if (
    /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }
  if (path.startsWith("#")) return `${base}${path}`;
  const relative = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${relative}`;
}
