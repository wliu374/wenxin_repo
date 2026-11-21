# Design spec

Light academic site with a fixed dark sidebar and a banner on every page. Copy lives in `src/content/*.ts`. In-site paths go through `withBase()` so they work under `/wenxin_repo/`.

## Pages

| Route | Banner | Content |
| --- | --- | --- |
| `/` | Home | Biography, education, research interests, other interests, and contact. |
| `/about/` | About Me | The same about sections. |
| `/research/` | Research | DART narrative beside an interests list, then the pipeline and the soybean case study. |
| `/publications/` | Publications | One card per paper, then the Scholar list link. |

The sidebar links to all four routes and marks the current one. Google Scholar is the only contact link until LinkedIn has a real URL.

## Layout

The sidebar is fixed, 260px wide, and full viewport height. Its background is a field photograph under a dark green overlay. At the top: a round avatar (initials `WL` until `profile.headshot` is set, then that image), the name in Lato 300, and the role plus affiliation. Nav items are a vertical list with a small icon. The active item uses a darker row. At the bottom: a Scholar icon and `© Wenxin Liu 2026`.

Below 860px the sidebar slides off-screen. A dark top bar with a menu button opens it.

Each page opens with a 220px banner. The page title is large, white, and set in Lato 300 over the drone photograph. The reading area is light gray (`#f3f4f6`) with Lato 300/400. Section titles have a thin rule underneath. Interest rows are white strips with a teal left border. Publication titles stay light; `W Liu` is bold; the type tag is teal; DOI and code are small icon buttons at the card’s lower right.

There is no dark-theme toggle. The sidebar is the dark surface; the articles stay light.

## Color and type

| Token | Value |
| --- | --- |
| `--color-bg` | `#f3f4f6` |
| `--color-surface` | `#ffffff` |
| `--color-ink` | `#3a3a3a` |
| `--color-accent` | `#1aae9f` |
| `--font-sans` | Lato, then Segoe UI |

Lato is self-hosted at weights 300, 400, and 700. Weight 700 is only for the highlighted author name.

## Photographs

Downloaded into `public/images/` and served from the site. They are not hotlinked. Neither image is from the reference site.

| File | Subject | Source | License |
| --- | --- | --- | --- |
| `public/images/banner-drone.webp` | Agricultural spray drone over a crop field. Cropped and exported as WebP, 1600×600. | Magda Ehlers, [Pexels](https://www.pexels.com/photo/drone-flying-over-agricultural-field-in-rural-area-34182315/) | [Pexels License](https://www.pexels.com/license/) |
| `public/images/sidebar-field.webp` | Dark grass field under storm clouds. Cropped and exported as WebP, 720×1028. | eberhard grossgasteiger, [Pexels](https://www.pexels.com/photo/brown-grass-field-under-black-sky-during-nighttime-976907/) | [Pexels License](https://www.pexels.com/license/) |

## Headshot

Leave `profile.headshot` unset and the avatar is initials drawn from the name. Set it to a site-relative path such as `/headshot.jpg`, plus `headshotAlt` if the picture needs its own description. The sidebar prefixes the path with the base.
