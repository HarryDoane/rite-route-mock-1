'use client';

/**
 * Shipment journey. Client-side because of the scroll-driven rail.
 *
 * The static version wrote styles imperatively — `progress.style.height`,
 * `wp.classList.toggle('active', ...)` — from inside a scroll handler. Here the
 * hook returns numbers and this component maps them onto the render, so the
 * markup describes every possible state instead of being mutated into them.
 *
 * Numbering is kept here, unlike the service lists, because a shipment moving
 * origin → dispatch → transit → border → delivered genuinely is a sequence.
 */

import { journey } from '@/lib/content';
import { useJourneyProgress } from '@/hooks/useJourneyProgress';
import { useReveal } from '@/hooks/useReveal';

export default function Journey() {
  const { waypoints } = journey;
  const { trackRef, progress, activeIndex } = useJourneyProgress(waypoints.length);
  const { ref: headRef, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="journey rr-journey">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${revealed ? ' in' : ''}`}>
          <span className="kicker">{journey.kicker}</span>
          <h2>{journey.heading}</h2>
          <p>{journey.lede}</p>
        </div>

        <div className="j-track" ref={trackRef}>
          <div className="j-line" aria-hidden="true">
            <div className="j-progress" style={{ height: `${progress * 100}%` }} />
          </div>

          {waypoints.map((wp, i) => (
            <article
              key={wp.code}
              className={`waypoint${i <= activeIndex ? ' active' : ''}`}
              data-wp=""
            >
              <span className="wp-code">{wp.code} · {wp.stage}</span>
              <h3>{wp.heading}</h3>
              <p>{wp.body}</p>
              <span className="wp-chip">{wp.marker}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
