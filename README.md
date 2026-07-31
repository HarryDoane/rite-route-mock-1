# Rite Route — Website

Marketing website for [Rite Route Supply Chain Solutions](https://riteroute.ca), a technology-driven logistics company serving Canada, the USA, and Mexico.

Next.js (App Router) with static export — the whole app lives in [`next-app/`](next-app/). The original static-HTML site this replaced is in git history if you ever need it.

## Pages

| Page | Route | Source |
|---|---|---|
| Home | `/` | `next-app/app/page.tsx` |
| Shippers | `/shippers` | `next-app/app/shippers/page.tsx` |
| Carriers | `/carriers` | `next-app/app/carriers/page.tsx` |
| Careers | `/careers` | `next-app/app/careers/page.tsx` |
| News | `/news` | `next-app/app/news/page.tsx` |
| Contact | `/contact` | `next-app/app/contact/page.tsx` |

## Structure

```
next-app/
├── app/                # one folder per route; layout.tsx wraps header/footer
├── components/         # sections and shared pieces (Hero, PageHero, QuoteBar, …)
├── lib/
│   ├── content.ts      # homepage copy as data
│   └── pages.ts        # inner-page copy as data
├── styles/
│   ├── riteroute.css   # design tokens + homepage sections
│   └── pages.css       # inner-page system built on the same tokens
└── public/assets/      # logo, hero photography, favicon
```

Brand tokens (colors, type scale, motion) are CSS custom properties at the top of `next-app/styles/riteroute.css` — change them there and the whole site follows.

## Local preview

```sh
cd next-app
npm install
npm run dev
# → http://localhost:3000
```

## Deploying

`npm run build` produces a fully static export in `next-app/out/` — any static host works:

- **Vercel** — point at the repo, root directory `next-app`.
- **Netlify / Cloudflare Pages** — base directory `next-app`, build command `npm run build`, publish directory `next-app/out`.
- **GitHub Pages** — publish the `next-app/out` folder.

## Roadmap / not yet wired up

- **Forms** (contact, careers) are visual mockups — submitting shows a demo confirmation. Wire `components/DemoForm.tsx` to [Formspree](https://formspree.io), a serverless function, or a backend endpoint.
- **News** posts are teasers without detail pages; the full articles haven't migrated. Back them with a headless CMS or MDX when they do.
- **Metrics** — one homepage stat is still a visibly reserved slot awaiting a real figure (`lib/content.ts`).
- **Team photos** — the careers page renders reserved slots until real headshots arrive.
