import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site. The account already serves Pages
// from the custom domain viglianisi.eu, so this project lands at
// https://viglianisi.eu/swish-website/. If you later give it its own domain
// (e.g. swish.viglianisi.eu), set base to '/' and site to that domain, then
// add a CNAME file in public/.
export default defineConfig({
  site: 'https://viglianisi.eu',
  base: '/swish-website',
  output: 'static',
  // GitHub Pages serves /page from <folder>/index.html and redirects /page to
  // /page/. Declaring the trailing slash here keeps canonicals and sitemap
  // entries identical to the URL visitors actually land on.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
