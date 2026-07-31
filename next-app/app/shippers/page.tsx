import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { shippersPage as page } from '@/lib/pages';
import { site } from '@/lib/content';

export const metadata: Metadata = page.meta;

export default function ShippersPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={<>{page.hero.heading.pre} <span className="accent">{page.hero.heading.accent}</span></>}
        lede={page.hero.lede}
      />

      <section className="pg-section">
        <div className="pg-section__inner">
          <Reveal className="pg-head">
            <span className="rr-eyebrow">{page.different.eyebrow}</span>
            <h2>{page.different.heading}</h2>
            <p>{page.different.lede}</p>
          </Reveal>
          <div className="pg-grid pg-grid--2">
            {page.different.cards.map((card, i) => (
              <Reveal className="pg-card" delay={(i % 2) * 90} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--rule">
        <div className="pg-section__inner">
          <div className="pg-split">
            <Reveal className="pg-split__copy">
              <span className="rr-eyebrow">{page.oneStop.eyebrow}</span>
              <h2>{page.oneStop.heading}</h2>
              <p>{page.oneStop.body}</p>
              <Link className="pg-btn" href="/contact">Request a quote</Link>
            </Reveal>
            <Reveal delay={90}>
              <ul className="rr-list">
                {page.oneStop.services.map((item) => (
                  <li key={item.lead}>
                    <span>{item.lead}</span>
                    <small>{item.detail}</small>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pg-cta">
        <Reveal className="pg-cta__inner">
          <h2>{page.cta.heading}</h2>
          <p>
            {page.cta.body} Call <a href={site.phoneHref}>(647) 478-4921</a> to learn more.
          </p>
          <div className="pg-cta__actions">
            <Link className="pg-btn" href="/contact">Request a quote</Link>
            <a className="pg-btn pg-btn--ghost" href={`mailto:${site.email}`}>Email {site.email}</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
