# Evan Barbers

Marketing website for [Evan Barbers](https://evanbarbers.co.uk), a walk-in barbershop with two
locations in South London: **Wimbledon** (95 The Broadway, SW19) and **Grand Drive / Morden**
(358 Grand Drive, SW20). Built with the Next.js App Router and deployed on Vercel.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- Plain JavaScript with **CSS Modules** (no TypeScript, no CSS framework)
- **lucide-react** icons, self-hosted Google fonts via `next/font` (Montserrat + Bebas Neue)
- Analytics: Vercel Analytics, Vercel Speed Insights, and GA4 via `@next/third-parties`
- **Vitest** for unit tests

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev        # start the dev server at http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project structure

```
src/
  app/                 App Router routes (/, /about, /contact, /services, /wimbledon, /grand-drive)
    layout.js          Root layout: metadata, JSON-LD structured data, analytics
    globals.css        Global styles + design tokens
    sitemap.js         Generated sitemap
    robots.js          Generated robots.txt
  components/          Shared UI (Navbar, Footer, RatingBadge, ScrollReveal, WhatsAppFloat)
  data/
    locations.js       Single source of truth for branch details, hours, and Google ratings
    reviews.js         Homepage review quotes
  utils/
    branchStatus.js    Open/closed + "next open" logic, driven by locations.js
    branchStatus.test.js
  proxy.js             Edge middleware that silently redirects bot/scanner probes
public/evanbarbers/    Images (served as WebP)
next.config.mjs        Security headers (CSP, HSTS, etc.)
```

## Maintaining the data

- **Opening hours** live in `src/data/locations.js` as the single source of truth. Both the
  open/closed logic (`branchStatus.js`) and the JSON-LD structured data (`src/app/layout.js`, via
  `getOpeningHoursSpecification`) are generated from it, so they cannot drift apart — update
  `locations.js`, never the JSON-LD directly. `branchStatus.test.js` and `openingHours.test.js`
  guard this; run `npm test` after changing hours.
- **Google review ratings** (per-branch `rating` and the homepage `combinedRating`) are maintained
  **manually** in `src/data/locations.js`. They are not fetched from any API — refresh them
  periodically from each shop's Google Business Profile. See the comments in that file.

## Deployment

Deployed on Vercel; pushes to `main` trigger a production deploy. The security headers and the
`proxy.js` scanner filter apply in production automatically.
