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

## Domain

The site is served from `swish.viglianisi.eu`: `public/CNAME` holds the domain and
`astro.config.mjs` uses `site: 'https://swish.viglianisi.eu'` with `base: '/'`.
The DNS record is a CNAME from `swish` to `emavgl.github.io`.
