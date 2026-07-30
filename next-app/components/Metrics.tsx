/**
 * Metrics row. No 'use client' — this is a Server Component: it renders to HTML
 * at build time and ships zero JavaScript. Most of this page is like this,
 * which is the SEO argument for Next over Vite in one sentence.
 */
import { metrics } from '@/lib/content';

export default function Metrics() {
  return (
    <div className="rr-metrics">
      <div className="rr-metrics__grid">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={`rr-metric${m.pending ? ' rr-metric--todo' : ''}`}
          >
            <span className="rr-metric__num">{m.value}</span>
            <span className="rr-metric__label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
