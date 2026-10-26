# Studio Reset website

Static rebuild of [studioreset.io](https://studioreset.io), previously on Squarespace.
Built with [Astro](https://astro.build), the same stack as warrenheise.com.

## Work on it

Needs Node 24 (see `.node-version`) and pnpm.

```sh
pnpm install
pnpm dev       # local preview at http://localhost:4321
pnpm build     # production build into dist/
pnpm preview   # serve the production build
```

On Windows, use `pnpm.cmd` if PowerShell blocks `pnpm`.

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/pages/` (`index`, `team`, `theeventide`) |
| Header, footer, page metadata | `src/layouts/Base.astro` |
| Links, socials, Steam URL, studio facts | `src/data/site.ts` |
| Colours and type | `src/styles/global.css` |
| Images (originals) | `src/assets/images/` (the build makes compressed WebP copies) |
| Background video | `public/video/` (compressed from the 93 MB original) |

## Layout

Each page section is a `Section` with a grid copied from Squarespace's layout
engine: 8 columns on mobile, 24 on desktop. Each `Block` takes the original
grid areas: `m` for mobile, `d` for desktop, written as
`row-start/column-start/row-end/column-end`.
Columns 1 and 10 (mobile) or 1 and 26 (desktop) are the page margins.

## Deploying

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. Day-to-day work goes on `develop`.

GitHub Pages can't send security headers, so the Content Security Policy is a
`<meta>` tag configured in `astro.config.mjs`. Add any new third-party host
there before embedding from it.

Preview builds tell search engines not to index them (`robots.txt`). Only a
build for `https://studioreset.io` allows indexing.

## Not done yet

- Newsletter: set `PUBLIC_NEWSLETTER_ACTION` to the signup service's form URL
  (and add that host to `form-action` in the CSP). Until then the form says
  signups open soon.
