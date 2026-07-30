/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export: produces a plain `out/` folder of HTML/CSS/JS that deploys
  // to GitHub Pages, S3 or any CDN — no Node server required.
  //
  // The trade-off is that the server half of Next is switched off: no API
  // routes, no on-demand SSR, no ISR, and next/image cannot optimise at
  // request time (hence unoptimized below). Pages are still pre-rendered at
  // build time, so SEO is intact — which was the reason for choosing Next
  // over Vite in the first place.
  //
  // To deploy on Vercel with the server features instead, delete `output`
  // and `images.unoptimized`.
  output: 'export',
  images: { unoptimized: true },

  // GitHub Pages serves project sites from /<repo>, so the app needs a base
  // path there. Set BASE_PATH=/rite-route-mock-1 at build time for Pages;
  // leave it unset for local dev and root-domain hosting.
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
};

export default nextConfig;
