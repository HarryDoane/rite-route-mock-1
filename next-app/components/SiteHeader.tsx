'use client';

/**
 * Masthead. Client-side for two reasons: the mobile nav toggle, and the shadow
 * that appears once the page scrolls.
 *
 * `usePathname` replaces the hand-written `aria-current="page"` that had to be
 * edited on every copy of the header across six HTML files. One component, and
 * the active state is derived.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav } from '@/lib/content';

export default function SiteHeader() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile nav when the route changes
  useEffect(() => setNavOpen(false), [pathname]);

  const classes = [
    'site-header',
    'rr-header',
    scrolled ? 'scrolled' : '',
    navOpen ? 'nav-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      <div className="container header-inner">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/favicon.png" alt="" />
          <span className="wordmark">
            <b>Rite<span>Route</span></b>
            <small>Supply Chain Solutions</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="btn btn-red header-cta" href="/contact">Request a quote</Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
