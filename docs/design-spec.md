# Design spec

Visual contract for the academic site. Implement every color, font, size, space, and radius through the custom properties in `src/styles/tokens.css`. Section components should not introduce new hex values, font stacks, or raw spacing.

The designer attachment named in the original brief was not present in the workspace when this scaffold was built. This document is the system the site ships with. If the original file is recovered, replace this one and update `tokens.css` to match it.

## Palette

| Token | Light | Dark |
| --- | --- | --- |
| `--color-bg` | `#f7f5f0` | `#121410` |
| `--color-bg-elevated` | `#fcfbf8` | `#1c1f1a` |
| `--color-ink` | `#1c1914` | `#f4f0e7` |
| `--color-muted` | `#5c564c` | `#a39c90` |
| `--color-line` | `#e6e0d5` | `#31352e` |
| `--color-accent` | `#1b5640` | `#9fceb6` |
| `--color-accent-soft` | `#e4f0e9` | `#1a2c23` |
| `--color-on-accent` | `#f7fbf8` | `#102117` |

Light is the default on `:root`. Dark applies when `prefers-color-scheme: dark` and the visitor has not chosen light. `html[data-theme="light"]` and `html[data-theme="dark"]` override the system preference. The nav toggle writes that attribute and stores it in `localStorage` (`theme`).

## Fonts

Self-hosted variable fonts.

| Token | Stack |
| --- | --- |
| `--font-serif` | Newsreader Variable, then Iowan Old Style, Palatino, Georgia |
| `--font-sans` | Source Sans 3 Variable, then Source Sans 3, Segoe UI |

Use the serif for the name, research titles, publication titles, and the footer name. Use the sans for UI, body, nav, and the numbered section labels.

| Token | Value |
| --- | --- |
| `--weight-regular` | 440 |
| `--weight-medium` | 560 |
| `--weight-semibold` | 650 |

## Type scale

| Token | Value |
| --- | --- |
| `--text-xs` | 0.75rem |
| `--text-sm` | 0.875rem |
| `--text-base` | 1.0625rem |
| `--text-md` | 1.3125rem |
| `--text-lg` | 1.75rem |
| `--text-xl` | 2.25rem |
| `--text-display` | clamp(2.75rem, 6vw, 4.25rem) |

| Token | Value |
| --- | --- |
| `--leading-tight` | 1.05 |
| `--leading-snug` | 1.28 |
| `--leading-body` | 1.65 |
| `--tracking-label` | 0.16em |

Section labels use `--text-xs`, `--tracking-label`, and uppercase.

## Spacing

| Token | Value |
| --- | --- |
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-5` | 1.5rem |
| `--space-6` | 2.25rem |
| `--space-7` | 3.5rem |
| `--space-8` | 5.5rem |
| `--space-9` | 8rem |

| Token | Value |
| --- | --- |
| `--page-width` | 70rem |
| `--measure` | 40rem |
| `--nav-height` | 4.5rem |
| `--gutter` | clamp(1.25rem, 4vw, 2.75rem) |

## Radii

| Token | Value |
| --- | --- |
| `--radius-sm` | 2px |
| `--radius-md` | 8px |
| `--radius-pill` | 999px |

Use the pill for the theme toggle and skill chips. Use `--radius-md` only if a headshot is set. Do not draw an empty portrait frame.

## Layout

### Nav

Sticky bar under a 3px accent rule. Name on the left, linking to `#about`. Anchor links About (`#about`), Research (`#research`), Publications (`#publications`), then the theme toggle. On narrow viewports the tools row wraps under the name. The bar uses the page background with a hairline along the bottom.

### Hero

`#about`. Department as a small uppercase kicker, then the name at `--text-display`, then role and affiliation. Prior degrees, research interests, and personal interests follow in the same column (`--measure`). Contact links sit under that copy. Render a link only when its URL is present and is not a placeholder. Render a headshot only when `headshot` is set.

### Section headings

Research and publications use one label, set in the sans, uppercase, accent colored:

`01 / RESEARCH`

`02 / PUBLICATIONS`

The index, a muted slash, and the title are one heading. Body copy stays inside `--measure` (40rem). Publication entries (`.pub`) span 46rem; the publications heading and the Scholar link stay on `--measure`. Within a year group, the year is shown on the first entry and the year column is blank after that. DOI and code links are small outline pills: 1px `--color-line` border, pill radius, `--text-xs`, padding 2px 10px, `--color-accent-soft` fill on hover, with the shared focus ring. Sections are separated with a top border.

### Footer

Top border. Name, role and department, affiliation, and the same visible contact links as the hero. No email, GitHub, CV, or X.

## Theme behavior

1. No stored choice: follow `prefers-color-scheme`.
2. Toggle: set `data-theme` to the opposite of the current effective theme and save it.
3. Reload: the inline script in the document head applies the stored choice before paint.
