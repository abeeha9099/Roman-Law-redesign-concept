import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import SmartLink from '../ui/SmartLink.jsx'
import { navigation } from '../../data/navigation.js'
import { PHONE, legal, socials } from '../../data/site.js'

const quickLinks = [
  { label: 'Our offices', href: '/contact/offices/' },
  { label: 'Our team', href: '/the-firm/team/' },
  { label: 'Flat rates', href: '/business/flat-rates/' },
  { label: 'Careers', href: '/the-firm/careers/' },
  { label: 'Blog', href: '/blog/' },
]

export default function Footer() {
  return (
    <footer className="on-dark bg-teal-950 pt-16 text-white md:pt-20">
      <Container>
        <div className="grid gap-12 xl:grid-cols-12">
          <div className="xl:col-span-5">
            <Link to="/" aria-label="Romano Law, home">
              <img
                src="/images/logo.png"
                alt="Romano Law"
                width="275"
                height="58"
                loading="lazy"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-8 font-display text-2xl text-teal-200">Call us today</p>
            <a href={PHONE.href} className="mt-1 inline-block font-display text-4xl hover:text-teal-200">
              {PHONE.display}
            </a>
            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Let's talk
              </Button>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 xl:col-span-7">
            <div>
              <h2 className="font-display text-xl text-white">Explore</h2>
              <ul className="mt-4 grid gap-1">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <SmartLink href={l.href} className="inline-block py-1.5 text-teal-200 hover:text-white">
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl text-white">Follow Romano Law</h2>
              <ul className="mt-4 grid gap-1">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-1.5 text-teal-200 hover:text-white"
                    >
                      {s.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <h2 className="font-display text-xl">All practice areas</h2>
          <div className="mt-4 grid gap-x-10 md:grid-cols-2 xl:grid-cols-5">
            {navigation.practiceAreas.map((area) => (
              <details key={area.href} className="group border-b border-white/15">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-2 font-medium [&::-webkit-details-marker]:hidden">
                  {area.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={18}
                    className="transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <ul className="pb-4">
                  <li>
                    <SmartLink href={area.href} className="block py-1.5 text-[15px] font-semibold text-white">
                      All {area.label} services
                    </SmartLink>
                  </li>
                  {area.children.map((c) => (
                    <li key={c.href}>
                      <SmartLink href={c.href} className="block py-1.5 text-[15px] text-teal-200 hover:text-white">
                        {c.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 py-8 text-[13px] leading-relaxed text-teal-200 md:flex-row md:items-center md:justify-between">
          <p>{legal.copyright}</p>
          <SmartLink href={legal.disclaimersHref} className="underline underline-offset-4 hover:text-white">
            ATTORNEY ADVERTISING / DISCLAIMERS
          </SmartLink>
        </div>
      </Container>
    </footer>
  )
}
