# Personal Website

Portfolio website for Jonathan Goh, built with Vite and Three.js.

## Project Structure

- `index.html` and the other root-level `.html` files are the site pages.
- `styles.css` contains the main site styles.
- `script.js`, `landing.js`, `compendium.js`, and `refugeeProj.js` contain page-specific JavaScript.
- `carousel.js` shares the image carousel behavior between project pages.
- `images/` contains portfolio images used by the HTML pages.
- `documents/` contains source copies of resume/CV files.
- `public/` contains files served unchanged from the site root: the model, PDFs, sharing thumbnail, and custom-domain `CNAME`.
- `test/` checks carousel interactions and production pages for missing files.

## Local Development

Use Node.js 24 (at least 24.8). With nvm installed:

```bash
nvm install
nvm use
```

Install the exact dependencies recorded in the lockfile:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Validate the HTML and JavaScript, build the site, and run the tests:

```bash
npm run check
```

## Assets and Deployment

Import images used by JavaScript so Vite includes them in the build. Plain strings such as `/images/example.png` in JavaScript do not cause Vite to copy a file. Files that need a stable public URL belong in `public/`: for example, `public/documents/cv_UXR_111323.pdf` is served at `/documents/cv_UXR_111323.pdf`.

GitHub Pages must use **GitHub Actions** as its publishing source. The workflow validates and builds pull requests; successful pushes to `main` publish only the generated `dist/` folder. Do not publish the repository root or edit `dist/` by hand.

Three.js is pinned to the version used to create the existing model's appearance. Review lighting, materials, and interaction in the browser before upgrading it.

## Git Notes

The repo intentionally ignores generated and machine-specific files such as `node_modules/`, `dist/`, `.DS_Store`, and editor settings. Dependencies are recreated with `npm ci`; production files are recreated with `npm run build`.
