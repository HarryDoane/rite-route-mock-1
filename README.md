# Rite Route — Website

Marketing website for [Rite Route Supply Chain Solutions](https://riteroute.ca), a technology-driven logistics company serving Canada, the USA, and Mexico.

Static site — plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no dependencies. Clone it, open it, deploy it anywhere.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Shippers | `shippers.html` |
| Carriers | `carriers.html` |
| Careers | `careers.html` |
| News | `news.html` |
| Contact | `contact.html` |

## Structure

```
├── index.html … contact.html   # one file per page
├── css/styles.css              # design system + all page styles
├── js/main.js                  # mobile nav, header scroll state, reveal animations, form demo handler
└── assets/                     # logo, favicon
```

Brand tokens (colors, spacing, type scale) are CSS custom properties at the top of `css/styles.css` — change them there and the whole site follows.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploying

Any static host works as-is:

- **GitHub Pages** — Settings → Pages → deploy from `main` branch root.
- **Netlify / Vercel / Cloudflare Pages** — point at the repo, no build command, publish directory `/`.

## Roadmap / not yet wired up

- **Forms** (contact, careers) are visual mockups — submitting shows a demo confirmation. Wire the `<form>` elements to [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or a backend endpoint.
- **News** is a static grid of current articles. For self-serve publishing, back it with a headless CMS or markdown + a static site generator.
- **Quote request / carrier portal** buttons link to the existing external tools; swap URLs as those move.
