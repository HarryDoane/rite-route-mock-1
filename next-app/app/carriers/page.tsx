import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Icon from '@/components/icons';
import { carriersPage as page } from '@/lib/pages';
import { site } from '@/lib/content';

export const metadata: Metadata = page.meta;

export default function CarriersPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={<>{page.hero.heading.pre} <span className="accent">{page.hero.heading.accent}</span></>}
        lede={page.hero.lede}
        actions={<Link className="pg-btn" href="/contact">Become a Partner Carrier</Link>}
      />

      <section className="pg-section">
        <div className="pg-section__inner">
          <div className="pg-head">
            <span className="rr-eyebrow">{page.promise.eyebrow}</span>
            <h2>{page.promise.heading}</h2>
          </div>
          <div className="pg-grid pg-grid--2">
            {page.promise.cards.map((card) => (
              <div className="pg-card" key={card.title}>
                <div className="pg-card__icon"><Icon name={card.icon} /></div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--rule">
        <div className="pg-section__inner">
          <div className="pg-split">
            <div className="pg-split__copy">
              <span className="rr-eyebrow">{page.payment.eyebrow}</span>
              <h2>{page.payment.heading}</h2>
              <p>{page.payment.body}</p>
              <Link className="pg-btn" href="/contact">Become a Partner Carrier</Link>
            </div>
            <ul className="rr-list">
              {page.payment.points.map((item) => (
                <li key={item.lead}>
                  <span>{item.lead}</span>
                  <small>{item.detail}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pg-cta">
        <div className="pg-cta__inner">
          <h2>{page.cta.heading}</h2>
          <p>{page.cta.body}</p>
          <div className="pg-cta__actions">
            <Link className="pg-btn" href="/contact">Become a Partner Carrier</Link>
            <a className="pg-btn pg-btn--ghost" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
