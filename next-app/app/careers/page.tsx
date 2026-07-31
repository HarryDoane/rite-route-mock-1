import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import DemoForm from '@/components/DemoForm';
import Icon from '@/components/icons';
import { careersPage as page } from '@/lib/pages';
import { site } from '@/lib/content';

export const metadata: Metadata = page.meta;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={<>{page.hero.heading.pre} <span className="accent">{page.hero.heading.accent}</span></>}
        lede={page.hero.lede}
        actions={<a className="pg-btn" href="#apply">Say hello</a>}
      />

      <section className="pg-section">
        <div className="pg-section__inner">
          <div className="pg-head pg-head--center">
            <span className="rr-eyebrow">{page.culture.eyebrow}</span>
            <h2>{page.culture.heading}</h2>
          </div>
          <div className="pg-grid pg-grid--4">
            {page.culture.cards.map((card) => (
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
              <span className="rr-eyebrow">{page.growth.eyebrow}</span>
              <h2>{page.growth.heading}</h2>
              <p>{page.growth.body}</p>
              <p>{page.growth.body2}</p>
            </div>
            <div>
              {page.growth.cards.map((card) => (
                <div className="pg-card" key={card.tag}>
                  <span className="rr-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {'body2' in card && card.body2 && <p>{card.body2}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--rule">
        <div className="pg-section__inner">
          <div className="pg-head pg-head--center">
            <span className="rr-eyebrow">{page.team.eyebrow}</span>
            <h2>{page.team.heading}</h2>
            <p>{page.team.lede}</p>
          </div>
          <div className="pg-grid pg-grid--3">
            {Array.from({ length: page.team.placeholders }, (_, i) => (
              <div className="pg-card pg-card--pending" key={i}>
                <span className="rr-tag">Reserved</span>
                <h3>Team member</h3>
                <p>Headshot, LinkedIn and three funky questions, coming soon with real photos.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-section--rule" id="apply">
        <div className="pg-section__inner">
          <div className="pg-split">
            <div className="pg-split__copy">
              <span className="rr-eyebrow">{page.apply.eyebrow}</span>
              <h2>{page.apply.heading}</h2>
              <p>{page.apply.body}</p>
              <p>
                Prefer email? Reach us directly at{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
            <DemoForm submitLabel="Say Hello" successMessage={page.apply.success}>
              <div className="pg-field">
                <label htmlFor="c-name">Name <span className="req">*</span></label>
                <input id="c-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="pg-field">
                <label htmlFor="c-phone">Phone number</label>
                <input id="c-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="pg-field full">
                <label htmlFor="c-email">Email <span className="req">*</span></label>
                <input id="c-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="pg-field full">
                <label htmlFor="c-message">Who are you, and what drives you? <span className="req">*</span></label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  placeholder="No résumé talk. Just be yourself."
                />
              </div>
            </DemoForm>
          </div>
        </div>
      </section>

      <section className="pg-cta">
        <div className="pg-cta__inner">
          <h2>{page.cta.heading}</h2>
          <p>{page.cta.body}</p>
          <div className="pg-cta__actions">
            <a className="pg-btn" href="#apply">Say hello</a>
            <a className="pg-btn pg-btn--ghost" href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}
