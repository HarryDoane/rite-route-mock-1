/**
 * Homepage. Composition only — every section owns its own markup and copy.
 *
 * Compare with the 320-line index.html this replaces: the shape of the page is
 * now legible at a glance, and each section is editable without scrolling past
 * the others.
 */

import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import TrialOffer from '@/components/TrialOffer';
import Solutions from '@/components/Solutions';
import Journey from '@/components/Journey';
import Insights from '@/components/Insights';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <TrialOffer />
      <Solutions />
      <Journey />
      <Insights />
    </>
  );
}
