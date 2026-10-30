// Verified from https://www.romanolaw.com/ — items marked CONFIRM need the firm's decision before launch.

export const BOOKING_URL = '/contact/book-an-appointment/'
export const CTA_LABEL = 'Book a 15-minute call'

// CONFIRM: the live site shows three different numbers (212-865-9848, 917-997-4758, 917-997-1421).
// 212-865-9848 is the one every "Call now" link and the header tel: link actually dial.
export const PHONE = { display: '212-865-9848', href: 'tel:2128659848' }

export const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/RomanoLaw' },
  { name: 'X (Twitter)', href: 'https://twitter.com/romano_law' },
  { name: 'Instagram', href: 'https://www.instagram.com/romanolaw/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/romano-law-pllc' },
  { name: 'YouTube', href: 'https://www.youtube.com/RomanoLawNYC' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@romanolaw' },
]

// Outlet names are read from the logo images themselves (the live site's alt text is abbreviated).
export const press = [
  { name: 'CBS News', src: '/images/press/cbs_news.png' },
  { name: 'The New York Times', src: '/images/press/the_new.png' },
  { name: 'CNN', src: '/images/press/cnn.png' },
  { name: 'BBC World News', src: '/images/press/word_news.png' },
  { name: 'Bloomberg Television', src: '/images/press/bloom.png' },
  { name: 'CNBC', src: '/images/press/cnb.png' },
  { name: 'The Wall Street Journal', src: '/images/press/the_wall.png' },
  { name: 'TIME', src: '/images/press/time.png' },
  { name: 'Fox Business', src: '/images/press/fox.png' },
]

// Copy is taken from https://www.romanolaw.com/business/flat-rates/. No prices are shown because the site shows none.
export const flatRatePlans = [
  {
    name: 'Fractional Legal Department™',
    category: 'Ongoing support',
    href: '/fractional-legal-department/',
    summary:
      'Dedicated legal support from senior attorneys who know your business, without the cost or complexity of a full-time hire.',
    detail: 'A customized flat-rate monthly retainer, with no cap on attorney hours.',
  },
  {
    name: 'Monthly Flat-Rate Litigation Services',
    category: 'Disputes',
    href: '/monthly-flat-rate-litigation-services/',
    summary: 'A monthly flat-rate option for litigation, with the scope defined together with you.',
    detail: 'Effective for complex commercial and employment disputes.',
  },
  {
    name: 'Project-Based Flat-Rate Representation',
    category: 'Single project',
    href: '/project-based-flat-rate-representation/',
    summary: 'For clients with specific, time-limited legal needs.',
    detail: 'One fixed price for a defined scope of work.',
  },
  {
    name: 'Interim Legal Department™ Services',
    category: 'Temporary cover',
    href: '/interim-legal-department-services/',
    summary: "Temporary legal support that fills gaps in a company's in-house legal team.",
    detail: 'Support for companies between General Counsel.',
  },
]

// Card photos are the firm's own photography (decorative); the descriptions are the live site's wording.
export const practiceAreas = [
  {
    name: 'Business',
    href: '/business/',
    image: '/images/photos/two-women.webp',
    text: 'We provide clarity, guidance and strategic business law counsel to our clients as they establish their entities, raise financing and buy or sell assets.',
  },
  {
    name: 'Entertainment',
    href: '/entertainment/',
    image: '/images/photos/client-team.png',
    text: 'We represent individuals and businesses in the film, television, theatre, live entertainment, music, sports, social media and publishing industries.',
  },
  {
    name: 'Disputes',
    href: '/disputes/',
    image: '/images/photos/senior-counsel.png',
    text: 'Whether you need to enforce or protect your rights, our experienced litigators can help you in federal and state courts and with arbitration and mediation.',
  },
  {
    name: 'Employment',
    href: '/employment/',
    image: '/images/photos/operations-team.jpg',
    text: 'We can advise you on your legal rights and obligations under state and federal employment laws, including those involving compensation, safe working environments, privacy, discrimination, retaliation and harassment.',
  },
  {
    name: 'Intellectual Property',
    href: '/ip/',
    image: '/images/photos/business-lawyers.webp',
    text: 'We can help you protect your ideas, creative content and brands.',
  },
  {
    name: 'Flat Rates',
    href: '/business/reimagining-legal-services-with-flat-rates/',
    image: '/images/photos/domenic-and-shaliz.jpg',
    text: 'We give businesses of all sizes access to an experienced team of legal counsel, managing risk and guiding their growth.',
  },
]

// Every figure here is counted from the live site: "over 20 years" (Flat Rates page), the ten office
// locations, the five practice areas and the four flat-rate plans.
export const stats = [
  { value: '20+', label: 'Years serving businesses', icon: 'award' },
  { value: '10', label: 'Offices across the U.S.', icon: 'map' },
  { value: '5', label: 'Practice areas', icon: 'scale' },
  { value: '4', label: 'Flat-rate plans', icon: 'layers' },
]

export const coreValues = [
  { name: 'Team', text: 'We lift each other up.' },
  { name: 'Attentive', text: 'First, we listen. Then, we do.' },
  { name: 'Positive', text: 'Attitude is a little thing that makes a big difference.' },
  { name: 'Proactive', text: 'We follow up with them, before they follow up with us.' },
  { name: 'Get it Done', text: "We've got this." },
]

export const credentials = [
  { name: 'Super Lawyers: Domenic Romano', src: '/images/badges/super-lawyers-dr.png' },
  { name: 'Super Lawyers: Shalizeh Sadig Romano', src: '/images/badges/super-lawyers-ss.png' },
  { name: 'Martindale-Hubbell Preeminent', src: '/images/badges/martindale-chambers.jpg' },
  { name: 'Martindale-Hubbell Preeminent', src: '/images/badges/martindale-bob.png' },
  { name: 'Inc. 5000', src: '/images/badges/inc5000.png' },
  { name: 'Martindale-Hubbell', src: '/images/badges/martindale-alp.png' },
  { name: 'Avvo', src: '/images/badges/avvo.png' },
  {
    name: 'Romano Law PLLC BBB Business Review',
    src: '/images/badges/bbb.webp',
    href: 'https://www.bbb.org/us/ny/new-york/profile/business-law-attorneys/romano-law-pllc-0121-130844/#sealclick',
  },
]

// CONFIRM: the live site shows no titles for the team.
export const team = [
  { name: 'Domenic Romano', href: '/team/domenic-romano/', src: '/images/team/domenic-romano.webp' },
  { name: 'Shaliz Sadig Romano', href: '/team/shaliz-sadig-romano/', src: '/images/team/shaliz-sadig-romano.png' },
  { name: 'Steven Shanker', href: '/team/steven-shanker/', src: '/images/team/steven-shanker.webp' },
  { name: 'Usman Shaikh', href: '/team/usman-shaikh/', src: '/images/team/usman-shaikh.png' },
]

export const mediaItems = [
  {
    date: 'April 16, 2026',
    title: 'Meta LIABLE: $3M Verdict & Billions More at Stake | Domenic Romano on CNN International',
    href: '/meta-liable-3m-verdict-billions-more-at-stake-domenic-romano-on-cnn-international/',
    src: '/images/media/meta-liable.webp',
    alt: 'Domenic Romano in an interview',
  },
  {
    date: 'February 20, 2026',
    title: 'Domenic Romano on the Social Media Trial in LA | CNN International',
    href: '/domenic-romano-on-the-social-media-trial-in-la-cnn-international/',
    src: '/images/media/social-media-trial.jpg',
    alt: 'Domenic Romano interviewed on CNN about the social media trial in Los Angeles',
  },
]

export const testimonials = [
  {
    quote:
      "Dave Fish is the absolute best. He is an excellent attorney who is both skilled at his practice and attentive at listening to his clients' wishes and needs. He is also extremely personable and kind. I highly recommend his services.",
    name: 'Erin Bauwens',
  },
  {
    quote:
      'Romano Law has been a great asset to our business. Prompt, punctual and willing to work with and guide us through our less than orthodox business needs. We greatly appreciate this relationship',
    name: 'Amit Jagwani',
  },
  {
    quote:
      'Romano Law was very specific and made certain that they were looking out for my best interest. He went through the contract and made me aware of what was critical important. There team are amazing and I am looking forward to working with them in the future. I needed a law firm that is direct, to the point and aggressive when advocating for what I need. They did a great job. Amazing!!!',
    name: 'Kelly Watson',
    role: 'DHS Baltimore City',
  },
]
export const REVIEWS_URL = 'https://www.google.com/search?q=Romano+Law'

// CONFIRM: the Los Angeles map link on the live site is labelled "U.S. Law Group",
// and "Washington D.C." is listed with a Bethesda, MD address.
export const offices = [
  { city: 'New York', region: 'Northeast', lines: ['One Battery Park Plaza, 7th Floor', 'New York, NY 10004'], map: 'https://share.google/w9rpHiBOr9gDG0CD2' },
  { city: 'Boston', region: 'Northeast', lines: ['One Boston Place, Ste 2600', 'Boston, MA 02108'], map: 'https://share.google/s7VvdBn66a3DT8LA7' },
  { city: 'Orange County, NY', region: 'Northeast', lines: ['45 St. John St.', 'Goshen, NY 10924'], map: 'https://share.google/6updbY3hwdRAyLcRA' },
  { city: 'Washington D.C.', region: 'Mid-Atlantic', lines: ['7200 Wisconsin Ave., Suite #500', 'Bethesda, MD 20814'], map: 'https://share.google/benRkY74MMyeft5Lb' },
  { city: 'Miami', region: 'Florida', lines: ['777 SW 37th Ave., Suite 510', 'Miami, FL 33135'], map: 'https://share.google/rUmBAjyK2bUMgNKBs' },
  { city: 'Fort Lauderdale', region: 'Florida', lines: ['101 NE Third Ave., Suite 1500', 'Fort Lauderdale, FL 33301'], map: 'https://share.google/3LOAcCKRv63IZS8dJ' },
  { city: 'Houston', region: 'Texas', lines: ['1301 McKinney St., Suite 300', 'Houston, TX 77010'], map: 'https://www.google.com/maps/place/Romano+Law/@29.7837934,-95.7926716,17z' },
  { city: 'Los Angeles', region: 'California', lines: ['427 N. Canon Drive, Suite 206', 'Beverly Hills, CA 90210'], map: 'https://www.google.com/maps/place/U.S.+Law+Group/@34.070965,-118.40172,17z' },
  { city: 'San Francisco', region: 'California', lines: ['155 Montgomery St., Suite 401', 'San Francisco, CA 94104'], map: 'https://share.google/sT5518c5YdacDqskf' },
  { city: 'San Diego', region: 'California', lines: ['2221 Camino Del Rio South, Suite 101', 'San Diego, CA 92108'], map: 'https://share.google/xhYuidJOLDOo9dE7Q' },
]

export const legal = {
  copyright: '©2005 – 2026 ROMANO LAW PLLC | ROMANO LAW LLP IN CALIFORNIA | ROMANO LAW ® | ALL RIGHTS RESERVED',
  disclaimersHref: '/attorney-advertising-disclaimers/',
}
