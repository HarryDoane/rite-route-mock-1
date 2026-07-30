/**
 * Page copy, lifted out of the markup.
 *
 * In the static build every one of these strings was hard-coded inline, which
 * meant a copy change was a hunt through 320 lines of HTML. Here the words are
 * data and the components are shape. It is also the seam a CMS would plug into
 * later — swap these exports for a fetch and nothing else has to move.
 *
 * Source of truth for all of it: `Website - Final.pdf` and riteroute.ca.
 */

export const site = {
  name: 'Rite Route',
  tagline: 'Supply Chain Solutions',
  phone: '647-478-4921',
  phoneHref: 'tel:+16474784921',
  email: 'ship@riteroute.ca',
  address: '182 Browns Line, Etobicoke, ON M8W 3T3',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Shippers', href: '/shippers' },
  { label: 'Carriers', href: '/carriers' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
] as const;

export const hero = {
  eyebrow: 'Etobicoke, Ontario · Five decades in freight',
  heading: 'Over the road, technology driven.',
  lede:
    'We move full and partial truckloads across Canada, the USA and Mexico, backed by ' +
    '45,000 carriers and five decades in freight. You get one person who answers, 24/7/365.',
  paths: [
    { label: 'Ship freight', href: '/shippers' },
    { label: 'Haul freight', href: '/carriers' },
    { label: site.phone, href: site.phoneHref },
  ],
} as const;

export type Metric = {
  value: string;
  label: string;
  /** true while the client still owes us a real figure */
  pending?: boolean;
};

export const metrics: Metric[] = [
  { value: '45,000', label: 'Carriers in the network' },
  { value: '50+', label: 'Years combined experience' },
  { value: '24-7-365', label: 'No call centres, no voicemail' },
  { value: '—', label: 'Coverage stat to confirm', pending: true },
];

export const trial = {
  eyebrow: 'Trial offer',
  heading: 'Experience the ease. Try us once.',
  body:
    'We’ll match any price on your North American trucking shipment. ' +
    'If you don’t experience the ease, you don’t pay.',
  terms: 'One shipment · Any lane · Price matched',
} as const;

export const solutions = {
  eyebrow: 'North American trucking solutions',
  heading: 'If it moves on a truck, we’ve got a solution.',
  lede:
    'One stop for all your North American trucking needs across Canada, the USA and Mexico. ' +
    'Proudly Canadian owned and operated.',
  technology: {
    head: 'Technology-driven',
    items: [
      'Real-time pricing across all lanes',
      'Online LTL partnerships',
      'AI-driven dynamic spot rates',
      'Individual truck tracking in real time',
    ],
    note: 'Our second-generation, best-in-class TMS powers everything we do.',
  },
  services: {
    head: 'Our services',
    items: [
      'Full truckload, LTL and expedited freight',
      'Temperature control, hazmat and high-value shipments',
      'Drayage and intermodal',
      'Projects and seasonal surges',
      'Dedicated routes and drop trailers',
      'Trade shows',
    ],
  },
} as const;

export type Waypoint = {
  code: string;
  stage: string;
  heading: string;
  body: string;
  /** a real document milestone, never invented telemetry */
  marker: string;
};

export const journey = {
  kicker: 'Shipment lifecycle',
  heading: 'Follow one load, dock to door',
  lede: 'What every Rite Route shipment looks like, from rate to signed POD.',
  waypoints: [
    {
      code: '01',
      stage: 'Origin',
      heading: 'Quoted in real time',
      body:
        'Your lane and freight profile hit the market as it stands right now. Live pricing comes ' +
        'back in minutes, built on today’s conditions rather than last year’s contract.',
      marker: 'Rate confirmation issued',
    },
    {
      code: '02',
      stage: 'Dispatch',
      heading: 'Matched across 45,000+ fleets',
      body:
        'The platform finds the right truck across full truckload, LTL and expedited, then ' +
        'dispatches it with the complete shipment file already attached. Nobody rekeys anything.',
      marker: 'Carrier assigned',
    },
    {
      code: '03',
      stage: 'In transit',
      heading: 'Tracked to the minute',
      body:
        'Position, ETA and exceptions update in real time. You watch the load move, so nobody ' +
        'has to make a check call.',
      marker: 'Tracking link sent',
    },
    {
      code: '04',
      stage: 'Border',
      heading: 'Cross-border, cleared',
      body:
        'Canada, the USA and Mexico are one network to us. Customs paperwork is prepared and ' +
        'filed ahead of the wheels, backed by decades of border experience.',
      marker: 'Customs filed',
    },
    {
      code: '05',
      stage: 'Delivered',
      heading: 'Proof of delivery, instantly',
      body:
        'The signed POD lands in your inbox the moment the freight lands on the dock. If ' +
        'anything needs a human, yours is a call, text or email away, 24-7-365.',
      marker: 'Signed POD returned',
    },
  ] satisfies Waypoint[],
} as const;

export type CaseStudy = {
  title: string;
  excerpt: string;
  href: string;
  image?: string;
};

export type Article = {
  tag: string;
  title: string;
  meta?: string;
  href: string;
};

export const insights = {
  eyebrow: 'Insights',
  heading: 'Straight talk from inside the industry.',
  lede:
    'Commentary on trucking, freight and the supply chain, written by people who have spent ' +
    'decades living it.',
  /**
   * Deliberately empty. A case study is a named client, a real lane and a
   * measurable result — fabricating one would be inventing a customer
   * reference. The component renders a visibly reserved slot until this is
   * filled with something true.
   */
  caseStudy: null as CaseStudy | null,
  articles: [
    {
      tag: 'Blog post',
      title: 'Prepare for sticker shock in the warehouse market',
      meta: '4 minute read',
      href: '/news',
    },
    {
      tag: 'News',
      title: 'Fight the inside jobs of cargo theft',
      meta: '3 minute read',
      href: '/news',
    },
  ] satisfies Article[],
  foot: 'Ready to move something? Get a rate on your lane.',
};

export const footer = {
  tag: 'Technology-driven logistics for all of North America.',
  columns: [
    {
      head: 'Company',
      links: [
        { label: 'Shippers', href: '/shippers' },
        { label: 'Carriers', href: '/carriers' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
      ],
    },
    {
      head: 'Get started',
      links: [
        { label: 'Request a quote', href: '/contact' },
        { label: 'Become a partner carrier', href: '/carriers' },
        { label: 'Contact us', href: '/contact' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
  ],
} as const;
