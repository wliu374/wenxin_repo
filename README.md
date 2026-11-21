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
| `src/content/profile.ts` | About: name, role, education, interests, contact links |
| `src/content/research.ts` | Research areas |
| `src/content/publications.ts` | Papers, the highlighted author string, and the Scholar “full list” URL |

The page is one document with three anchors: `#about`, `#research`, `#publications`.

### Contact links

`visibleLinks()` in `profile.ts` drops a link when `href` is empty or contains `todo` or `placeholder`. LinkedIn is in the data with an empty `href` and `todo: true`, so it is not rendered. Set `href` to the real profile URL and it will show in the hero and the footer. Google Scholar stays.

### Headshot

Leave `profile.headshot` unset and the photo slot is not rendered. To add one, put an image in `public/` and set `headshot` to a site-relative path such as `/headshot.jpg` (plus `headshotAlt`). The intro prefixes that path with the base.

### Publications

Each entry has `title`, `authors`, `venue`, `year`, `status` (`published`, `under review`, or `in prep`), and optional `links.pdf`, `links.doi`, and `links.code`. The author string that matches `highlightedAuthor` is bold. Add a DOI only after checking it.

## Visual system

Colors, type, spacing, and radii are CSS variables in `src/styles/tokens.css`. The layout notes are in `docs/design-spec.md`. Section components should keep using those tokens.

The nav theme button stores `light` or `dark` in `localStorage` under the key `theme`. With no stored choice, the site follows `prefers-color-scheme`.

## GitHub Pages

The workflow `.github/workflows/deploy.yml` builds on every push to `main` and deploys with `actions/deploy-pages`. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

`astro.config.mjs` sets `site` to `https://wliu374.github.io` and `base` to `/wenxin_repo`. In-site links, the favicon, and a future headshot go through `withBase()` (`import.meta.env.BASE_URL`) in `src/lib/withBase.ts`. Bundled CSS and font files are emitted under that base by the Astro build. External URLs (Scholar, DOI, code) are not prefixed.
