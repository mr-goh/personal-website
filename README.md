# Personal Website

Portfolio website for Jonathan Goh, built with Vite and Three.js.

## Project Structure

- `index.html` and the other root-level `.html` files are the site pages.
- `styles.css` contains the main site styles.
- `script.js`, `landing.js`, `compendium.js`, and `refugeeProj.js` contain page-specific JavaScript.
- `images/` contains portfolio images used by the HTML pages.
- `documents/` contains public resume/CV files linked from the site.
- `public/` contains static files served from the site root, such as 3D model assets.

## Local Development

Install dependencies once:

```bash
npm install
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

## Git Notes

The repo intentionally ignores generated and machine-specific files such as `node_modules/`, `dist/`, `.DS_Store`, and editor settings. Dependencies are recreated with `npm install`; production files are recreated with `npm run build`.

