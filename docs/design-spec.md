# Design spec

Visual contract for the multi-page academic site. Colors, type, space, and radius live in `src/styles/tokens.css`. Pages read copy from `src/content/*.ts` and prefix in-site paths with `withBase()`.

This replaces the earlier single-page editorial spec.

## Pages

| Route | Role |
| --- | --- |
| `/` | Home. Name, two-line headline (second line in the accent color), short intro, pill buttons, and preview cards. A headshot renders here only when `profile.headshot` is set. |
| `/research/` | DART. Overview, four-step pipeline, skill tags, soybean case study. |
| `/publications/` | One card per paper: status, venue, year, title, authors (highlighted name in bold), and link buttons. |
| `/about/` | Education, research interests, other interests, and visible contact links. |

The nav and footer link to these routes and mark the current page. GitHub Pages serves them under the base `/wenxin_repo/`.

## Palette

| Token | Light | Dark |
| --- | --- | --- |
| `--color-bg` | `#eef3f6` | `#0e1412` |
| `--color-bg-elevated` | `#ffffff` | `#171f1c` |
| `--color-ink` | `#14211c` | `#eef4f0` |
| `--color-muted` | `#5a6b64` | `#a7b5ae` |
| `--color-line` | `#d5e1db` | `#2a3832` |
| `--color-line-strong` | `#b7c9c0` | `#3d5148` |
| `--color-accent` | `#0e7a45` | `#7dcea5` |
| `--color-accent-soft` | `#e5f4ec` | `#163028` |
| `--color-on-accent` | `#f4fbf7` | `#07140e` |

Light is the default. Dark applies for `prefers-color-scheme: dark` unless `html[data-theme]` is set. The nav toggle stores `light` or `dark` in `localStorage` under `theme`.

The page background is a faint graph-paper grid plus a soft blue-green glow. Cards sit on `--color-bg-elevated` with a hairline and a soft shadow.

## Type

Self-hosted. Inter Tight (variable, 100–900) for headings and body. IBM Plex Mono for eyebrows, nav, and tags.

Headings use weight 750–800. The home headline uses `--text-display`. Eyebrows are mono, uppercase, and accent colored. There is no serif.

## Controls

Primary pills are filled with `--color-ink` (so they flip in dark mode). Secondary pills are outlined. Hover fills the primary with the accent and the secondary with `--color-accent-soft`. Focus rings stay visible: 2px accent outline, 3px offset.

## Headshot

Leave `profile.headshot` unset and the home hero is a single column. Set it to a site-relative path such as `/headshot.jpg` and the hero gains a rounded photo column. The path is prefixed with the base.

## Contact

`visibleLinks()` hides an empty `href` and any URL containing `todo` or `placeholder`. LinkedIn stays hidden until a real URL is set. Google Scholar is shown.
