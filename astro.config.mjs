import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site: https://emavgl.github.io/swish-website/
// If you attach a custom domain (e.g. swish.viglianisi.eu), set base to '/'
// and site to that domain, then add the CNAME file in public/.
export default defineConfig({
  site: 'https://emavgl.github.io',
  base: '/swish-website',
  output: 'static',
  // GitHub Pages serves /page from <folder>/index.html and redirects /page to
  // /page/. Declaring the trailing slash here keeps canonicals and sitemap
  // entries identical to the URL visitors actually land on.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
