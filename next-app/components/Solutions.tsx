import { solutions } from '@/lib/content';

/** Ruled list — no icons and no numerals: these are unordered capability and
 *  service lists, so numbering them would imply a sequence that isn't there. */
function RuledList({ items }: { items: readonly string[] }) {
  return (
    <ul className="rr-list">
      {items.map((item) => (
        <li key={item}><span>{item}</span></li>
      ))}
    </ul>
  );
}

export default function Solutions() {
  const { technology, services } = solutions;
  return (
    <section className="rr-solutions">
      <div className="rr-solutions__inner">
        <span className="rr-eyebrow">{solutions.eyebrow}</span>
        <h2>{solutions.heading}</h2>
        <p className="rr-solutions__lede">{solutions.lede}</p>

        <div className="rr-cols">
          <div>
            <p className="rr-col__head">{technology.head}</p>
            <RuledList items={technology.items} />
            <p className="rr-col__note">{technology.note}</p>
          </div>
          <div>
            <p className="rr-col__head">{services.head}</p>
            <RuledList items={services.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
