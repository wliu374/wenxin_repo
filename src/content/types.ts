/** Shared content types. Section components import data files, not these shapes alone. */

export type ProfileLink = {
  label: string;
  /**
   * Destination URL. An empty string, or any placeholder URL, is not rendered.
   * See `visibleLinks` in profile.ts.
   */
  href: string;
  /** True while the real URL is still unknown. */
  todo?: boolean;
};

export type Education = {
  degree: string;
  institution: string;
  focus: string;
  /** The program currently underway. */
  current?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  department: string;
  affiliation: string;
  /** Prose used for the page description and the about section. */
  summary: string;
  /** First line of the home headline. */
  headlineLead: string;
  /** Second line of the home headline, shown in the accent color. */
  headlineAccent: string;
  education: Education[];
  researchInterests: string[];
  personalInterests: string[];
  links: ProfileLink[];
  /**
   * Optional headshot. A site-relative path such as `/headshot.jpg` (a file in
   * `public/`) is prefixed with the Astro base. When unset, the photo slot is
   * not rendered.
   */
  headshot?: string;
  headshotAlt?: string;
};

export type PipelineStep = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  title: string;
  detail: string;
};

export type ResearchArea = {
  id: string;
  title: string;
  /** Expanded form of an acronym, when `title` is one. */
  expansion?: string;
  summary: string;
  description: string;
  skills: string[];
  /** Ordered stages. Omitted when a project has no pipeline to show. */
  pipeline?: PipelineStep[];
  caseStudy?: CaseStudy;
};

export type PublicationStatus = "published" | "under review" | "in prep";

export type PublicationLinks = {
  pdf?: string;
  doi?: string;
  code?: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: PublicationStatus;
  links?: PublicationLinks;
};
