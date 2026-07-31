// See docs/SITE_PLAN.md Section 6 for the remaining inputs still needed from the client
// (office address, email, bar admission year).
export const SITE = {
  name: 'Carol I. Zacheiss, Attorney at Law',
  shortName: 'Carol Zacheiss',
  description:
    'Criminal defense attorney serving Hopewell, Prince George, and Petersburg, Virginia, with 34 years of experience.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/contact', label: 'Contact' },
  ],
  footerLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/contact', label: 'Contact' },
  ],
  contactEmail: 'contact@example.com',
  phone: '(804) 352-3550',
  phoneHref: 'tel:+18043523550',
  yearStarted: 1992,
} as const;
