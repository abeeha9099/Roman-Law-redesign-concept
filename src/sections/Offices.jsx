import { ExternalLink } from 'lucide-react'
import Section from '../components/ui/Section.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { offices } from '../data/site.js'

const regions = [...new Set(offices.map((o) => o.region))]

export default function Offices() {
  return (
    <Section tone="white" id="offices" labelledBy="offices-title">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 id="offices-title" className="text-h2 text-teal-900">
          Our office locations
        </h2>
        <SmartLink
          href="/contact/offices/"
          className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900"
        >
          All office details
        </SmartLink>
      </div>
      <div className="mt-10 grid gap-x-12 gap-y-12 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
        {regions.map((region) => (
          <div key={region}>
            <h3 className="border-b border-line pb-3 font-display text-xl text-teal-800">{region}</h3>
            <ul className="mt-5 grid gap-6">
              {offices
                .filter((o) => o.region === region)
                .map((o) => (
                  <li key={o.city}>
                    <a
                      href={o.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-semibold text-ink hover:text-teal-700"
                    >
                      {o.city}
                      <ExternalLink aria-hidden="true" size={14} className="opacity-60 group-hover:opacity-100" />
                      <span className="sr-only">(opens map in a new tab)</span>
                    </a>
                    <address className="mt-1 not-italic text-slate">
                      {o.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
