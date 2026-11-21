# Wenxin Liu

Personal academic site for Wenxin Liu. Static Astro build, deployed to GitHub Pages at [https://wliu374.github.io/wenxin_repo/](https://wliu374.github.io/wenxin_repo/) from the repository `wliu374/wenxin_repo`.

## Run

```bash
npm install
npm run dev       # http://127.0.0.1:4391
npm run build     # writes dist/
npm run preview   # serves dist/ on http://127.0.0.1:4391
npm run check     # astro check (types). npm run lint runs the same check.
```

Node 22.23.4 or newer.

## Edit content

Components do not hardcode page copy. Change the data files, then refresh.

| File | What it feeds |
| --- | --- |
| `src/content/types.ts` | Shared TypeScript types |
| `src/content/profile.ts` | Name, headline, summary, education, interests, contact links, optional headshot |
| `src/content/research.ts` | Research areas, pipeline steps, and the case study |
| `src/content/publications.ts` | Papers, the highlighted author string, and the Scholar “full list” URL |

Each section is its own page: `/`, `/research/`, `/publications/`, and `/about/`. The nav highlights the current page. Routes are prefixed with the site base, so the public paths are `/wenxin_repo/`, `/wenxin_repo/research/`, and so on.

### Contact links

`visibleLinks()` in `profile.ts` drops a link when `href` is empty or contains `todo` or `placeholder`. LinkedIn is in the data with an empty `href` and `todo: true`, so it is not rendered. Set `href` to the real profile URL and it will show on the about page and in the footer. Google Scholar stays.

### Headshot

Leave `profile.headshot` unset and the home hero stays a single column. To add one, put an image in `public/` and set `headshot` to a site-relative path such as `/headshot.jpg` (plus `headshotAlt`). The home page prefixes that path with the base.

### Publications

Each entry has `title`, `authors`, `venue`, `year`, `status` (`published`, `under review`, or `in prep`), and optional `links.pdf`, `links.doi`, and `links.code`. The author string that matches `highlightedAuthor` is bold. Add a DOI only after checking it.

## Visual system

Colors, type, spacing, and radii are CSS variables in `src/styles/tokens.css`. The layout notes are in `docs/design-spec.md`. Headings use Inter Tight. Labels use IBM Plex Mono.

The nav theme button stores `light` or `dark` in `localStorage` under the key `theme`. With no stored choice, the site follows `prefers-color-scheme`.

## GitHub Pages

The workflow `.github/workflows/deploy.yml` builds on every push to `main` and deploys with `actions/deploy-pages`. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

`astro.config.mjs` sets `site` to `https://wliu374.github.io` and `base` to `/wenxin_repo`. In-site links, the favicon, and a future headshot go through `withBase()` (`import.meta.env.BASE_URL`) in `src/lib/withBase.ts`. Bundled CSS and font files are emitted under that base by the Astro build. External URLs (Scholar, DOI, code) are not prefixed.
