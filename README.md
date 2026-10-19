# Lara Cumkitten

Static editorial website for Lara Cumkitten's adult persona, sessions, content, and contact links.

The project is plain HTML, CSS, JavaScript, and local image assets. It has no build step, backend, database, or checkout integration.
German is the default language; use the header button to switch to English.

## Run locally

From the project folder, start any static file server and open the site:

```powershell
py -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173).

Opening `index.html` directly also works, but a local server is recommended for reliable asset and browser behavior.

## Project structure

- `index.html` — page structure and copy
- `styles.css` — responsive visual system and layout
- `script.js` — slideshow rotation and small interactions
- `assets/images/` — footer photography
- `assets/slideshow/` — supplied Lara photography for the hero and lifestyle sections
- `DESIGN.md` — visual direction and design tokens
- `PRODUCT.md` — product and content context

## Deployment

This is ready for GitHub Pages from the repository root. There is no framework build command and no environment configuration required. The site uses Google Fonts at runtime and all image assets are served from the repository.

The page contains adult-persona language and should be hosted and shared as an 18+ experience.
