/**
 * Root layout — the equivalent of everything that used to be duplicated in the
 * <head> and around <main> of all six HTML files.
 *
 * Two Next features earn their place here:
 *
 * 1. `metadata` replaces hand-written <title>/<meta> tags, and is typed. This
 *    is the SEO argument for Next: it renders into real HTML at build time, so
 *    crawlers see it without executing JavaScript.
 * 2. `next/font` self-hosts Archivo and IBM Plex Mono instead of hitting
 *    fonts.googleapis.com at runtime. No third-party round trip, no flash of
 *    unstyled text. The families are exposed as CSS variables that the
 *    stylesheet's --rr-display / --rr-body / --rr-data tokens point at.
 */

import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

import '@/styles/futuristic.css';
import '@/styles/riteroute.css';
import '@/styles/pages.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Over the Road Technology-Driven Logistics | Rite Route',
  description:
    'Rite Route moves full and partial truckloads across Canada, the USA and Mexico, backed by ' +
    '45,000 carriers and five decades in freight. Get a spot rate on your lane.',
  icons: { icon: '/assets/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
