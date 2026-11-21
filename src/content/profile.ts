import type { Profile, ProfileLink } from "./types";

/**
 * About-section content. UI components read this module and do not hardcode copy.
 *
 * TODO: set the LinkedIn `href` to Wenxin Liu's real profile URL.
 * Leave it empty until then. `visibleLinks` hides empty and placeholder URLs,
 * so the link stays off the page.
 */
export const profile: Profile = {
  name: "Wenxin Liu",
  role: "PhD student",
  department: "Biological Systems Engineering",
  affiliation: "University of Nebraska–Lincoln",
  summary:
    "PhD student in Biological Systems Engineering at the University of Nebraska–Lincoln. M.S. at the University of Wisconsin–Madison in machine learning and signal processing.",
  headlineLead: "Real-time vision",
  headlineAccent: "for field weeds.",
  education: [
    {
      degree: "Ph.D. student",
      institution: "University of Nebraska–Lincoln",
      focus: "Biological Systems Engineering",
      current: true,
    },
    {
      degree: "M.S.",
      institution: "University of Wisconsin–Madison",
      focus: "machine learning and signal processing",
    },
  ],
  researchInterests: [
    "computer vision",
    "machine learning",
    "deep learning",
    "remote sensing",
    "precision agriculture",
  ],
  personalInterests: ["startups", "app development", "stock trading"],
  links: [
    {
      label: "LinkedIn",
      href: "",
      todo: true,
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=T3-JDD4AAAAJ&hl=en",
    },
  ],
};

const placeholderUrl = /todo|placeholder/i;

/** Links that are safe to render. Empty and placeholder URLs are omitted. */
export function visibleLinks(links: readonly ProfileLink[]): ProfileLink[] {
  return links.filter((link) => {
    const href = link.href.trim();
    if (!href) return false;
    if (placeholderUrl.test(href)) return false;
    return true;
  });
}
