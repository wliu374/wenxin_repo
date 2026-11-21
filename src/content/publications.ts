import type { Publication } from "./types";

/**
 * Author strings use the Google Scholar short form.
 * Full names were checked against Crossref on 2026-11-21:
 * Md Didarul Islam, Wenxin Liu, Pascal Izere, Puranjit Singh, Chong Yu,
 * Benjamin Riggan, Kuan Zhang, Amit J. Jhala, Stevan Knezevic, Yufeng Ge,
 * Santosh Pitla, Joe Luck, Yeyin Shi; and Wenxin Liu, Jing Zhou, Biwen Wang,
 * Martin Costa, Shawn M. Kaeppler, Zhou Zhang.
 *
 * DOIs below resolve at doi.org and match those Crossref records.
 * The same Scholar URL is duplicated in profile.ts so this section does not
 * import the profile module.
 */
export const highlightedAuthor = "W Liu";

export const scholarProfileUrl =
  "https://scholar.google.com/citations?user=T3-JDD4AAAAJ&hl=en";

export const publications: Publication[] = [
  {
    title:
      "Towards real-time weed detection and segmentation with lightweight CNN models on edge devices",
    authors: [
      "MD Islam",
      "W Liu",
      "P Izere",
      "P Singh",
      "C Yu",
      "B Riggan",
      "K Zhang",
      "AJ Jhala",
      "S Knezevic",
      "Y Ge",
      "S Pitla",
      "J Luck",
      "Y Shi",
    ],
    venue: "Computers and Electronics in Agriculture 237, 110600",
    year: 2025,
    status: "published",
    kind: "Journal Article",
    links: {
      doi: "https://doi.org/10.1016/j.compag.2025.110600",
    },
  },
  {
    title:
      "IntegrateNet: A Deep Learning Network for Maize Stand Counting From UAV Imagery by Integrating Density and Local Count Maps",
    authors: [
      "W Liu",
      "J Zhou",
      "B Wang",
      "M Costa",
      "SM Kaeppler",
      "Z Zhang",
    ],
    venue: "IEEE Geoscience and Remote Sensing Letters 19, 1–5",
    year: 2022,
    status: "published",
    kind: "Journal Article",
    links: {
      doi: "https://doi.org/10.1109/LGRS.2022.3186544",
      code: "https://github.com/wliu374/Plant_Counting",
    },
  },
];
