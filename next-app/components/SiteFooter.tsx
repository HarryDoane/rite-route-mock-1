/** Footer. Server Component — no interactivity, so no JavaScript ships. */

import Link from 'next/link';
import { footer, site } from '@/lib/content';

const SOCIAL_PATHS: Record<string, string> = {
  LinkedIn:
    'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z',
  Facebook:
    'M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.1 15.5 3 14.34 3c-2.4 0-4.04 1.47-4.04 4.16v2.44H7.55v3.2h2.75V21h3.2z',
};

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/rr-mark.png" alt="Rite Route" style={{ height: 36 }} />
              <span className="wordmark">
                <b>Rite<span>Route</span></b>
                <small>Supply Chain Solutions</small>
              </span>
            </Link>
            <p className="footer-tag">{footer.tag}</p>
            <p className="footer-flags">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/flags-coverage.png"
                alt="Proudly serving Canada, the USA and Mexico"
              />
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.head}>
              <h4>{col.head}</h4>
              <ul className="footer-links">
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>Head office</h4>
            <ul className="footer-contact">
              <li>{site.address}</li>
              <li><a href={site.phoneHref}>(647) 478-4921</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rite Route Supply Chain Solutions. All rights reserved.</span>
          <div className="footer-social">
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d={SOCIAL_PATHS[s.label]} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
