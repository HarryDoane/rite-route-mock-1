'use client';

/**
 * Reveal-on-scroll, ported from the IntersectionObserver block in js/main.js.
 *
 * The original queried `.reveal` globally and added a class to each match. That
 * works once, on a page that never changes. Here each element that wants the
 * behaviour asks for it, gets a ref back, and the observer disconnects on
 * unmount — so it survives client-side navigation.
 *
 * Honours prefers-reduced-motion by revealing immediately rather than animating.
 */

import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setRevealed(true);
          io.unobserve(entry.target); // fire once
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, revealed };
}
