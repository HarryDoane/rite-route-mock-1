'use client';

/**
 * Hero. Client-side only because of the image fade — the photo is ~250KB and
 * decodes after first paint, so it fades in on load rather than popping
 * against the paper background.
 *
 * In the static build this was a class added by a stray IIFE at the bottom of
 * quote.js. Here it is just state on the element that owns it.
 */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import QuoteBar from './QuoteBar';
import { hero } from '@/lib/content';

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  /**
   * onLoad alone is not enough. The browser frequently finishes decoding this
   * image *before* React hydrates, so the load event fires with no listener
   * attached and the fade never runs — leaving a fully-loaded photo stuck at
   * opacity 0. Check `complete` once on mount to catch that case.
   *
   * The original vanilla script guarded against this; porting it to onLoad
   * quietly lost the guard.
   */
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setImgLoaded(true);
  }, []);

  return (
    <section className="hero-v2 hero-v2--dark">
      <div className="hero-v2__media" aria-hidden="true">
        {/* Static hero still with a very slow, seamless Ken Burns drift applied
            in CSS (see .hero-v2__img). It never restarts and honours
            prefers-reduced-motion. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- plain img keeps
            the DOM identical to the static build so the CSS needs no changes;
            next/image wraps in a span and would need selector edits */}
        <img
          ref={imgRef}
          src="/assets/hero-highway.jpg"
          alt=""
          width={2000}
          height={1116}
          fetchPriority="high"
          decoding="async"
          className={imgLoaded ? 'hero-v2__img is-loaded' : 'hero-v2__img'}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </div>

      <div className="hero-v2__inner">
        <div className="hero-v2__copy">
          <span className="hero-v2__eyebrow">{hero.eyebrow}</span>
          <h1>{hero.heading}</h1>
          <p className="hero-v2__lede">{hero.lede}</p>

          <QuoteBar />

          <div className="hero-v2__paths">
            {hero.paths.map((p) =>
              p.href.startsWith('tel:') ? (
                <a key={p.label} href={p.href}>{p.label}</a>
              ) : (
                <Link key={p.label} href={p.href}>{p.label}</Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
