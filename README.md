# Queen Sam

Static bilingual website for Queen Sam's adult persona, services, social links, and booking requests.

The project uses plain HTML, CSS, and JavaScript with local image assets. It has no build step, backend, database, booking transmission, persistence, or payment processing. French is the default language; use the header button to switch to English. The booking form generates and copies a request in the browser and can open the X compose page.

## Run locally

From the project folder, start a static file server:

```powershell
py -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173).

## Project structure

- `index.html` — page structure and copy
- `styles.css` — responsive visual system and layout
- `script.js` — language toggle, request generation, slideshow
- `assets/images/` — footer photography extracted from the supplied video archive
- `assets/slideshow/` — 17 hero and 13 editorial stills extracted from the supplied video archive
- `DESIGN.md` — visual direction and design tokens
- `PRODUCT.md` — product and content context

## Deployment

The static files can be hosted from the repository root. The site contains adult persona language and is intended for an 18+ audience. Booking requests must be confirmed in X DMs; the website does not send them to Queen Sam.
