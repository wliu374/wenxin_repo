// @ts-check
import { defineConfig } from "astro/config";

// Project site: https://wliu374.github.io/wenxin_repo/
// Repository: wliu374/wenxin_repo. `site` is the origin; `base` is the repo path.
export default defineConfig({
  site: "https://wliu374.github.io",
  base: "/wenxin_repo",
  output: "static",
});
