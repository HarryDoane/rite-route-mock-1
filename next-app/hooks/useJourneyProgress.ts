'use client';

/**
 * Scroll-driven progress for the shipment journey rail.
 *
 * Ported from the IIFE in js/futuristic.js. Two things improve in the move:
 *
 * 1. The listener is removed on unmount. The original added a scroll handler
 *    to window and never detached it, which is invisible on a static page but
 *    a leak the moment routing keeps the app alive between pages.
 * 2. It recomputes on `load` as well as scroll/resize. The original only ran
 *    on scroll, so images decoding after first paint could shift the track and
 *    leave the rail stale until the user happened to move.
 *
 * Returns the fill fraction 0..1 and the index of the last active waypoint, so
 * the component decides what to render rather than the hook writing styles.
 */

import { useEffect, useRef, useState } from 'react';

export function useJourneyProgress(waypointCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setProgress(1);
      setActiveIndex(waypointCount - 1);
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      if (rect.height === 0) return;

      // read line sits just below the viewport centre
      const focus = window.innerHeight * 0.55;
      const p = Math.max(0, Math.min(1, (focus - rect.top) / rect.height));
      setProgress(p);

      const y = p * rect.height;
      const items = Array.from(track.querySelectorAll<HTMLElement>('[data-wp]'));
      let last = -1;
      items.forEach((el, i) => {
        if (el.offsetTop <= y + 20) last = i;
      });
      setActiveIndex(last);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, [waypointCount]);

  return { trackRef, progress, activeIndex };
}
