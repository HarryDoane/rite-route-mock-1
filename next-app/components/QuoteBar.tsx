'use client';

/**
 * Freight quote bar.
 *
 * Worth comparing against the original js/quote.js, because this is the whole
 * point of the port. That file kept the truth in the DOM and pushed changes
 * into it by hand:
 *
 *   btn.setAttribute('aria-checked', 'true')
 *   btn.parentNode.setAttribute('data-mode', mode)
 *   modeField.value = mode
 *   laneText.innerHTML = bits.join(' ')
 *
 * Four writes to keep one fact — the selected mode — consistent in four
 * places, plus an innerHTML assignment building markup from strings.
 *
 * Here `mode`, `from`, `to` and `pickup` are the truth. The lane notation is
 * derived from them on every render, so it cannot fall out of sync, and there
 * is no innerHTML anywhere. If you've used useState in React Native, this is
 * the same model — the difference is only that the output is DOM.
 */

import { useId, useState } from 'react';

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
] as const;

type Mode = 'FTL' | 'LTL';

/**
 * Date inputs hand back YYYY-MM-DD. Parse the parts directly rather than via
 * `new Date(value)` — that constructor treats a bare date as UTC and shifts it
 * a day backwards for anyone west of Greenwich, which is everyone here.
 */
function formatPickup(value: string): string {
  const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!parts) return '';
  const month = MONTHS[Number(parts[2]) - 1];
  if (!month) return '';
  return `${Number(parts[3])} ${month}`;
}

export default function QuoteBar() {
  const [mode, setMode] = useState<Mode>('FTL');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [pickup, setPickup] = useState('');

  // useId keeps label/input pairs unique if this ever renders twice on a page
  const uid = useId();
  const fromId = `${uid}-from`;
  const toId = `${uid}-to`;
  const dateId = `${uid}-date`;

  const pickupLabel = formatPickup(pickup);
  const hasLane = from.trim() !== '' || to.trim() !== '';

  return (
    <>
      <form className="quote-bar" id="quote" action="/contact" method="get">
        <div className="qb-modes" role="radiogroup" aria-label="Shipment mode">
          {(['FTL', 'LTL'] as const).map((m) => (
            <button
              key={m}
              type="button"
              className="qb-mode"
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
        {/* still submitted with the form, but no longer hand-synced */}
        <input type="hidden" name="mode" value={mode} />

        <div className="qb-field">
          <label htmlFor={fromId}>From</label>
          <input
            id={fromId}
            name="from"
            type="text"
            autoComplete="postal-code"
            placeholder="Postal or ZIP"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="qb-field">
          <label htmlFor={toId}>To</label>
          <input
            id={toId}
            name="to"
            type="text"
            autoComplete="postal-code"
            placeholder="Postal or ZIP"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="qb-field qb-field--date">
          <label htmlFor={dateId}>Pickup</label>
          <input
            id={dateId}
            name="pickup"
            type="date"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>

        <button className="qb-submit" type="submit">Get rates</button>
      </form>

      {/* The lane read back in broker notation. Derived, never stored. */}
      <p className="lane-line" aria-live="polite">
        {hasLane && (
          <>
            <b>{from.trim().toUpperCase() || '—'}</b>{' '}
            <span className="lane-strip__arrow">→</span>{' '}
            <b>{to.trim().toUpperCase() || '—'}</b>{' '}
            {`· ${mode}${mode === 'FTL' ? ' dry van' : ' partial'}`}
            {pickupLabel && (
              <>
                {' '}
                <span style={{ whiteSpace: 'nowrap' }}>{`· pickup ${pickupLabel}`}</span>
              </>
            )}
          </>
        )}
      </p>
    </>
  );
}
