import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain swish.viglianisi.eu (see public/CNAME), so
// every page and asset lives at the domain root.
export default defineConfig({
  site: 'https://swish.viglianisi.eu',
  base: '/',
  output: 'static',
  // GitHub Pages serves /page from <folder>/index.html and redirects /page to
  // /page/. Declaring the trailing slash here keeps canonicals and sitemap
  // entries identical to the URL visitors actually land on.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
