import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import { coreValues } from '../data/site.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-10 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-5">
            <Pill>About Romano Law</Pill>
            <h2 id="about-title" className="text-h2 mt-5 max-w-[14ch] text-ink">
              Practical legal services without surprises
            </h2>
          </div>
          <div className="xl:col-span-7">
            <p className="text-lead max-w-[34em] font-semibold text-ink">
              Focused on business, entertainment, employment and dispute resolution, we represent entrepreneurs,
              stakeholders and creative professionals.
            </p>
            <p className="mt-5 max-w-[38em] text-slate">
              Our purpose: to demystify law. To help our clients find calm. To ignite growth and success by reducing
              legal stress.
            </p>
            <div className="mt-8">
              <Button href="/the-firm/about/" arrow>
                About Romano Law
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10 md:mt-24">
          <h3 className="text-h3 text-ink">Our core values</h3>
          <dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.name} className="border-t-2 border-teal-700 pt-4">
                <dt className="text-xl font-semibold tracking-tight text-teal-800">{value.name}</dt>
                <dd className="mt-2 text-slate">{value.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
