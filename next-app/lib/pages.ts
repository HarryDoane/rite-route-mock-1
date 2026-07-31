/**
 * Inner-page copy — shippers, carriers, careers, news, contact — lifted out
 * of the five static HTML files exactly as content.ts did for the homepage.
 * Headlines are split at the red accent so the pages can compose the span
 * without parsing markup out of strings.
 *
 * Source of truth: `Website - Final.pdf` and riteroute.ca.
 */

export type Card = { title: string; body: string };
export type ListItem = { lead: string; detail: string };

export const shippersPage = {
  meta: {
    title: 'Shippers | Rite Route | Technology-Driven Freight Solutions',
    description:
      'Real-time tracking, live market rates and a single point of contact 24/7/365. ' +
      'Rite Route is transforming logistics one customer at a time.',
  },
  hero: {
    eyebrow: 'For shippers',
    heading: { pre: 'Transforming logistics', accent: 'one customer at a time.' },
    lede:
      'Technology revolutionized taxis, hotels and retail, yet since deregulation, very little ' +
      'has changed in how logistics companies operate. We’re changing that.',
  },
  different: {
    eyebrow: 'How we’re different',
    heading: 'Revolutionizing the logistics industry',
    lede: 'Four things every Rite Route shipper gets on day one. No enterprise contract required.',
    cards: [
      {
        title: 'Real-time visibility',
        body:
          'A complete visibility platform that tracks your shipments in real time across ' +
          '45,000+ connected fleets. Know where your freight is, always, without picking up the phone.',
      },
      {
        title: 'End-to-end technology & AI',
        body:
          'Automation across the entire shipment lifecycle eliminates the human error behind most ' +
          'freight failures (missed pickups, wrong docs, silent delays) and raises your service level.',
      },
      {
        title: 'A single point of contact, 24/7/365',
        body:
          'One dedicated person who knows your freight and is a phone call, text or email away, ' +
          'around the clock, every day of the year. The supply chain doesn’t sleep; neither do we.',
      },
      {
        title: 'Live market pricing',
        body:
          'Instant access to real-time rates built on up-to-the-minute market conditions. ' +
          'When the market moves in your favour, your rate does too.',
      },
    ] satisfies Card[],
  },
  oneStop: {
    eyebrow: 'North American trucking solutions',
    heading: 'One stop for all your trucking needs',
    body:
      'If it moves on a truck, we’ve got a sustainable solution. And our second-generation, ' +
      'best-in-class TMS powers everything we do: real-time pricing across all lanes, online LTL ' +
      'partnerships with access to our LTL rate portal, AI-driven dynamic spot rates, and ' +
      'individual truck tracking in real time.',
    services: [
      { lead: 'Full truckload, LTL & expedited freight', detail: 'Every major lane, planned or urgent' },
      { lead: 'Temperature control, hazmat & high-value', detail: 'Specialized freight handled with care and compliance' },
      { lead: 'Drayage & intermodal', detail: 'Port, rail and yard connected to the road' },
      { lead: 'Projects & seasonal surges', detail: 'Capacity that scales when your volume spikes' },
      { lead: 'Dedicated routes & drop trailers', detail: 'Committed lanes and equipment for a clockwork dock' },
      { lead: 'Trade shows', detail: 'Time-definite freight that can’t miss the floor' },
    ] satisfies ListItem[],
  },
  cta: {
    heading: 'Experience the ease. Try us once.',
    body:
      'We’ll match any price on your North American trucking shipment. If you don’t ' +
      'experience the ease, you don’t pay.',
  },
} as const;

export const carriersPage = {
  meta: {
    title: 'Carriers | Rite Route | Partner With Us',
    description:
      'Value and integrity for carrier partners: fast payments, custom payment plans, ' +
      'automated paperwork and a direct partnership model.',
  },
  hero: {
    eyebrow: 'Our carrier promise',
    heading: { pre: 'No games. No BS.', accent: 'Just honest partnership.' },
    lede:
      'Our carriers are trusted partners. Honest relationships built on respect and consistency, ' +
      'with regular lanes that are yours, every time.',
  },
  promise: {
    eyebrow: 'The promise',
    heading: 'What partnership means here',
    cards: [
      {
        title: 'Partnership mindset',
        body:
          'Our carriers are trusted partners. No games. No BS. Just honest relationships built on ' +
          'respect and consistency. You’ll get regular lanes that are yours, every time, with ' +
          'right of first refusal on committed lanes.',
      },
      {
        title: 'Fast, fair payment',
        body:
          '30-day payment terms with quick-pay options. If cash flow’s tight, we’ll work ' +
          'with you to create a custom payment plan. No need for factoring. We’ll do it faster ' +
          'and cheaper.',
      },
      {
        title: '24-7-365 access',
        body:
          'We never close. When issues arise, we jump in fast to keep your wheels turning. ' +
          'Nights, weekends, holidays: a real person answers.',
      },
      {
        title: 'Ease of doing business',
        body: 'Accurate updates. Honest answers. Industry pros who pick up the phone and keep their promises.',
      },
    ] satisfies Card[],
  },
  payment: {
    eyebrow: 'Get paid fast',
    heading: 'A fast, efficient payment process',
    body:
      'Cash flow is the lifeblood of a fleet. Ours is one of the most carrier-friendly payment ' +
      'programs in the industry.',
    points: [
      { lead: '30-day terms', detail: 'Reliable payment with quick-pay options when you want them' },
      { lead: 'Cash flow tight?', detail: 'We’ll build a custom payment plan that works for your fleet' },
      { lead: 'Skip the factoring', detail: 'We’ll do it faster and cheaper, so you keep more of every load' },
    ] satisfies ListItem[],
  },
  cta: {
    heading: 'Good freight. Fast pay. Real partnership.',
    body: 'Join a network built by people who’ve spent fifty years on your side of the business.',
  },
} as const;

export const careersPage = {
  meta: {
    title: 'Careers | Rite Route | Job or Career?',
    description:
      'If you want a career in trucking, a place to grow, learn and belong, Rite Route trains ' +
      'you from day one. No résumés, no interviews, no games.',
  },
  hero: {
    eyebrow: 'Our employee promise',
    heading: { pre: 'Job or', accent: 'career?' },
    lede:
      'We’re building careers, not filling seats. If you want to grow, learn and belong in the ' +
      'supply chain industry, you’re in the right place.',
  },
  culture: {
    eyebrow: 'Why people stay',
    heading: 'A workplace worth showing up for',
    cards: [
      {
        title: 'A culture you’ll look forward to',
        body:
          'A positive, energetic atmosphere where people enjoy the work and each other. ' +
          'We take the work seriously, and ourselves a little less so.',
      },
      {
        title: 'One team',
        body: 'We win and lose together. No silos, no politics — shared goals and shared credit.',
      },
      {
        title: 'Family comes first',
        body: 'Not lip service. We mean it. Your family comes before our freight, every time.',
      },
      {
        title: 'Comprehensive family benefits',
        body:
          'Premium health coverage for you and your family, because careers are built on ' +
          'stable foundations.',
      },
    ] satisfies Card[],
  },
  growth: {
    eyebrow: 'No experience needed',
    heading: 'Every one of us was trained here',
    body:
      'None of our team came from trucking. Every one of us was trained here, by a crew with over ' +
      '50 years of combined experience, to become true supply chain pros.',
    body2:
      'Clear path to career growth: we are committed to growing, and when we grow, you grow. ' +
      'Simple as that.',
    cards: [
      {
        tag: 'How we hire',
        title: 'A conversation, not an audition',
        body:
          'We look for integrity, passion and work ethic first. If we see a fit, we’ll invite ' +
          'you to spend time with the team at our office — you’ll see how we work, and ' +
          'we’ll see where you’d thrive.',
        body2: 'The goal isn’t a performance. It’s finding out whether we work well together.',
      },
      {
        tag: 'Where we work',
        title: 'A welcoming, street-level office',
        body:
          'A company-owned office in South Etobicoke, steps from the TTC and Long Branch ' +
          'GO Station.',
      },
    ],
  },
  team: {
    eyebrow: 'Our team',
    heading: 'The people who pick up the phone',
    lede:
      'Photos of our real team are on their way — no stock photography, ever. Each teammate ' +
      'will have a headshot, a LinkedIn profile and a short introduction.',
    /** three reserved slots until the real headshots arrive — same honest-
     *  pending treatment as the homepage's empty case-study slot */
    placeholders: 3,
  },
  apply: {
    eyebrow: 'Get in touch',
    heading: 'Think you’d be a good fit?',
    body:
      'No résumé required to start the conversation. Tell us who you are and what drives you, ' +
      'and if we see the integrity, passion and work ethic we value, we’ll invite you in ' +
      'to meet the team.',
    success: 'Thank you — we’ve received your message and will be in touch soon.',
  },
  cta: {
    heading: 'When we grow, you grow.',
    body: 'Come build a career with a team that invests in developing its own supply chain professionals.',
  },
} as const;

export const newsPage = {
  meta: {
    title: 'News | Rite Route | Industry Insights',
    description:
      'Insights and commentary on trucking, freight and the supply chain from the Rite Route team.',
  },
  hero: {
    eyebrow: 'News & insights',
    heading: { pre: 'Straight talk from', accent: 'inside the industry.' },
    lede:
      'Commentary on trucking, freight and the supply chain, written by people who’ve spent ' +
      'five decades living it.',
  },
  /** full posts live on the old blog; until they migrate, these render as
   *  entries without links rather than anchors that go nowhere */
  posts: [
    {
      tag: 'Market outlook',
      title: 'Brace for a wild ride in 2022',
      excerpt:
        'Last year was the best of times for truckers: the biggest freight boom in over two ' +
        'decades, when every shipper in town was your new best friend. What comes next?',
    },
    {
      tag: 'Sales & hiring',
      title: 'How to hire a sales rep',
      excerpt:
        'Fleet owners often ask if we know sales reps with a big book of business who are ' +
        'looking for a new home. We tell them all the same thing…',
    },
    {
      tag: 'Business development',
      title: 'Big customers carry risks and rewards alike',
      excerpt:
        'Every freight sales rep wakes up hoping today’s the day they close that massive ' +
        'deal, the one that doubles the fleet and the commission cheques. But…',
    },
    {
      tag: 'Operations',
      title: 'When going the extra mile, be sure you’re paid',
      excerpt:
        'Lessons from the move from the C-suite to the front line at MSM Transportation, and why ' +
        'extra service should never be free by accident.',
    },
    {
      tag: 'Warehousing',
      title: 'Prepare for sticker shock in the warehouse market',
      excerpt:
        'The smartest players consider themselves to be in the real estate business, not the ' +
        'trucking business. The numbers explain why.',
    },
    {
      tag: 'Security',
      title: 'Fight the inside jobs of cargo theft',
      excerpt:
        'Hard-won lessons from the graveyard shift on a loading dock: most cargo theft isn’t ' +
        'strangers in the night. It starts closer to home.',
    },
  ],
  cta: {
    heading: 'Want insights like these in your supply chain?',
    body: 'Fifty years of experience is one quote request away.',
  },
} as const;

export const contactPage = {
  meta: {
    title: 'Contact | Rite Route | Request a Quote',
    description:
      'Get in touch with Rite Route. Request a quote, become a partner carrier, or reach our ' +
      'Etobicoke head office: (647) 478-4921, ship@riteroute.ca.',
  },
  hero: {
    eyebrow: 'Contact us',
    heading: { pre: 'What can we', accent: 'help you with?' },
    lede:
      'A real person reads every message, and the supply chain never sleeps, so neither does ' +
      'our inbox.',
  },
  form: {
    success: 'Message sent. We’ll get back to you shortly. Thanks!',
  },
  hurry: {
    title: 'In a hurry?',
    body: 'Shippers can jump straight to a quote; carriers can start the partner process right away.',
  },
} as const;
