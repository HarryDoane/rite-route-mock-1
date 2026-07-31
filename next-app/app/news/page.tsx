import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { newsPage as page } from '@/lib/pages';

export const metadata: Metadata = page.meta;

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={<>{page.hero.heading.pre} <span className="accent">{page.hero.heading.accent}</span></>}
        lede={page.hero.lede}
      />

      <section className="pg-section">
        <div className="pg-section__inner">
          <div className="pg-grid pg-grid--3">
            {page.posts.map((post) => (
              /* the homepage's ruled feature entry; no anchor because the full
                 posts haven't migrated — an honest entry beats a dead link */
              <article className="rr-feature" key={post.title}>
                <span className="rr-tag">{post.tag}</span>
                <h3 className="rr-feature__title">{post.title}</h3>
                <p className="rr-feature__excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-cta">
        <div className="pg-cta__inner">
          <h2>{page.cta.heading}</h2>
          <p>{page.cta.body}</p>
          <div className="pg-cta__actions">
            <Link className="pg-btn" href="/contact">Request a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
