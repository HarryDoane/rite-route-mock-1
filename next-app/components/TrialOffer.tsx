import { trial, site } from '@/lib/content';

export default function TrialOffer() {
  return (
    <section className="rr-trial">
      <div className="rr-trial__inner">
        <div>
          <span className="rr-trial__eyebrow">{trial.eyebrow}</span>
          <h2>{trial.heading}</h2>
          <p>{trial.body}</p>
        </div>
        <div className="rr-trial__aside">
          <p className="rr-trial__terms">{trial.terms}</p>
          <a className="rr-trial__phone" href={site.phoneHref}>{site.phone}</a>
        </div>
      </div>
    </section>
  );
}
