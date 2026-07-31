'use client';

/**
 * Reveal-on-scroll wrapper — the homepage's .reveal/.in pattern (see
 * futuristic.css and useReveal) made composable for the inner pages.
 *
 * `delay` staggers siblings that enter the viewport together: each card in a
 * grid observes independently, so a shared entrance cascades left-to-right
 * instead of thudding in as one block. The element renders as `as` (default
 * div) so grid children and articles keep their semantics.
 */

import { createElement, type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  children: ReactNode;
  className?: string;
  /** transition-delay in ms, for staggering grid siblings */
  delay?: number;
  as?: 'div' | 'article' | 'section';
  id?: string;
};

export default function Reveal({ children, className, delay = 0, as = 'div', id }: Props) {
  const { ref, revealed } = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      id,
      className: `reveal${revealed ? ' in' : ''}${className ? ` ${className}` : ''}`,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
