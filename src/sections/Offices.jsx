import { ExternalLink } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import { offices } from '../data/site.js'

const regions = [...new Set(offices.map((o) => o.region))]

export default function Offices() {
  return (
    <section id="offices" aria-labelledby="offices-title" className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Pill>Offices</Pill>
            <h2 id="offices-title" className="text-h2 mt-5 text-ink">
              Our office locations
            </h2>
          </div>
          <Button href="/contact/offices/" arrow>
            All office details
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <div key={region} className="rounded-3xl border border-line p-6 md:p-7">
              <h3 className="text-xl font-semibold tracking-tight text-teal-800">{region}</h3>
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
      </Container>
    </section>
  )
}
