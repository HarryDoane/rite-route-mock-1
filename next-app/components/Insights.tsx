/**
 * Insights — case study plus a news/blog tier. Server Component.
 *
 * `insights.caseStudy` is null in content.ts, so this renders a visibly
 * reserved slot. That is deliberate: a case study is a named client, a real
 * lane and a measurable result, and inventing one would be fabricating a
 * customer reference. When there is a true one, set it in content.ts and this
 * component switches over without touching layout.
 */

import Link from 'next/link';
import { insights } from '@/lib/content';

/** Photo frame. The brief's closing line is "No stock photos. All pictures will
 *  be real." — so these stay as marked placeholders until real photography
 *  exists. Drop an <img> in and the frame becomes the crop. */
function PhotoSlot({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="rr-shot">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? ''} />
      ) : (
        <span>Photo</span>
      )}
    </div>
  );
}

export default function Insights() {
  const { caseStudy, articles } = insights;

  return (
    <section className="rr-insights">
      <div className="rr-insights__inner">
        <span className="rr-eyebrow">{insights.eyebrow}</span>
        <h2>{insights.heading}</h2>
        <p className="rr-insights__lede">{insights.lede}</p>

        <div className="rr-insights__grid">
          {caseStudy ? (
            <Link className="rr-feature" href={caseStudy.href}>
              <span className="rr-tag">Case study</span>
              <PhotoSlot src={caseStudy.image} alt="" />
              <p className="rr-feature__title">{caseStudy.title}</p>
              <p className="rr-feature__excerpt">{caseStudy.excerpt}</p>
              <span className="rr-feature__more">Read the story</span>
            </Link>
          ) : (
            <div className="rr-feature rr-feature--pending">
              <span className="rr-tag">Case study · Slot reserved</span>
              <PhotoSlot />
              <p className="rr-feature__title">Your first customer story goes here.</p>
              <p className="rr-feature__excerpt">
                A named shipper, the lane, the problem and the measurable result. This needs real
                client data and their permission to publish.
              </p>
            </div>
          )}

          <div className="rr-tier">
            {articles.map((a) => (
              <Link key={a.title} className="rr-card" href={a.href}>
                <span className="rr-tag">{a.tag}</span>
                <PhotoSlot />
                <p className="rr-card__title">{a.title}</p>
                {a.meta && <p className="rr-card__meta">{a.meta}</p>}
              </Link>
            ))}
          </div>
        </div>

        <div className="rr-insights__foot">
          <p>{insights.foot}</p>
          <a className="hero-v2__btn hero-v2__btn--primary" href="#quote">Get a freight quote</a>
        </div>
      </div>
    </section>
  );
}
