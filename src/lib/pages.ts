import { withBase } from "./withBase";

export const pages = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about/", label: "About Me", icon: "user" },
  { href: "/research/", label: "Research", icon: "research" },
  { href: "/publications/", label: "Publications", icon: "publications" },
] as const;

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

/** True when `pathname` is the site route for `href` (base and trailing slash ignored). */
export function isCurrentPath(pathname: string, href: string): boolean {
  return normalize(pathname) === normalize(withBase(href));
}
