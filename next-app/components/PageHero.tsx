/**
 * Inner-page masthead. Server Component — the homepage hero cut down to a
 * band: same night-highway photograph and scrim family (painted in CSS, see
 * .pg-hero), no drift, no quote bar. Pages pass the headline as JSX so the
 * red accent span stays a typographic decision, not a data format.
 */

import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  actions?: ReactNode;
};

export default function PageHero({ eyebrow, title, lede, actions }: Props) {
  return (
    <section className="pg-hero">
      <div className="pg-hero__inner">
        <span className="pg-hero__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lede && <p className="pg-hero__lede">{lede}</p>}
        {actions && <div className="pg-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}
