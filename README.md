# SWISH website

Landing page, support and legal pages for the SWISH Android game.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy-website.yml`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/swish-website/
npm run build    # static output in dist/
npm run check    # astro check
```

## Pages

- `/` — landing: hero, screenshots, features, how a shot works
- `/support/` — FAQ and contact (the Play "support" URL)
- `/privacy-policy/` — no data collected (the Play "privacy policy" URL)
- `/data-safety/` — the Data safety answers in plain words
- `/terms-of-service/`, `/content-rating/`, `/impressum/`

## Custom domain

The site is configured as a project page:
`https://emavgl.github.io/swish-website/`.

To serve it from `swish.viglianisi.eu` instead: set `site` and `base: '/'` in
`astro.config.mjs`, update `public/robots.txt`, add a `public/CNAME` containing
the domain, and point a CNAME DNS record at `emavgl.github.io`.
