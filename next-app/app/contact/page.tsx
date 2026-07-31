import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import DemoForm from '@/components/DemoForm';
import Icon from '@/components/icons';
import { contactPage as page } from '@/lib/pages';
import { site } from '@/lib/content';

export const metadata: Metadata = page.meta;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={<>{page.hero.heading.pre} <span className="accent">{page.hero.heading.accent}</span></>}
        lede={page.hero.lede}
      />

      <section className="pg-section" id="form">
        <div className="pg-section__inner">
          <div className="pg-split">
            <DemoForm submitLabel="Send Message" successMessage={page.form.success}>
              <div className="pg-field">
                <label htmlFor="f-name">Name <span className="req">*</span></label>
                <input id="f-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="pg-field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="pg-field">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input id="f-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="pg-field">
                <label htmlFor="f-phone">Phone number</label>
                <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="pg-field full">
                <label>Preferred method of contact</label>
                <div className="pg-pills">
                  <input type="radio" id="pm-email" name="preferred" value="email" defaultChecked />
                  <label htmlFor="pm-email">Email</label>
                  <input type="radio" id="pm-phone" name="preferred" value="phone" />
                  <label htmlFor="pm-phone">Phone</label>
                  <input type="radio" id="pm-text" name="preferred" value="text" />
                  <label htmlFor="pm-text">Text</label>
                </div>
              </div>
              <div className="pg-field full">
                <label>Best time to reach you</label>
                <div className="pg-pills">
                  <input type="radio" id="bt-am" name="besttime" value="morning" defaultChecked />
                  <label htmlFor="bt-am">Morning</label>
                  <input type="radio" id="bt-pm" name="besttime" value="afternoon" />
                  <label htmlFor="bt-pm">Afternoon</label>
                  <input type="radio" id="bt-eve" name="besttime" value="evening" />
                  <label htmlFor="bt-eve">Evening</label>
                </div>
              </div>
              <div className="pg-field full">
                <label htmlFor="f-message">How can we help you? <span className="req">*</span></label>
                <textarea
                  id="f-message"
                  name="message"
                  required
                  placeholder="Lanes, freight type, timelines: the more detail, the faster the quote."
                />
              </div>
            </DemoForm>

            <div>
              <ul className="pg-info">
                <li>
                  <strong><Icon name="phone" /> Phone</strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <strong><Icon name="mail" /> Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <strong><Icon name="pin" /> Head office</strong>
                  182 Browns Line<br />Etobicoke, ON M8W 3T3
                </li>
                <li>
                  <strong><Icon name="globe" /> Coverage</strong>
                  Canada · USA · Mexico
                </li>
              </ul>

              <div className="pg-card" style={{ marginTop: '2rem' }}>
                <h3>{page.hurry.title}</h3>
                <p>{page.hurry.body}</p>
                <p>
                  <Link href="/shippers"><strong>For Shippers →</strong></Link>
                  <br />
                  <Link href="/carriers"><strong>Become a Partner Carrier →</strong></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
