import { ArrowUpRight } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { flatRatePlans } from '../data/site.js'

// The reference's Titles / Categories list, applied to the four real flat-rate plans.
export default function FlatRates() {
  return (
    <section id="flat-rates" aria-labelledby="flat-rates-title" className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-7">
            <Pill>Flat rates</Pill>
            <h2 id="flat-rates-title" className="text-h2 mt-5 max-w-[16ch] text-ink">
              Flat-rate legal services, without the billable hour
            </h2>
          </div>
          <div className="xl:col-span-5">
            <p className="text-slate">
              Our flat-rate model offers clients cost certainty, proactive counsel, and access to elite attorneys, all
              without the unpredictability of hourly billing.
            </p>
            <div className="mt-6">
              <Button href="/business/flat-rates/" arrow>
                How flat rates work
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="hidden grid-cols-12 gap-8 border-b border-line pb-4 text-lg font-medium text-slate md:grid"
          >
            <span className="col-span-4">Plan</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-5">What it covers</span>
          </div>
          <ul>
            {flatRatePlans.map((plan) => (
              <li
                key={plan.name}
                className="group relative grid gap-4 border-b border-line py-7 transition-colors duration-200 hover:bg-teal-50 md:grid-cols-12 md:items-center md:gap-8 md:px-2 md:py-8"
              >
                <h3 className="text-h3 text-ink md:col-span-4">
                  <SmartLink href={plan.href} className="after:absolute after:inset-0">
                    {plan.name}
                  </SmartLink>
                </h3>
                <div className="md:col-span-2">
                  <Pill tone="card">{plan.category}</Pill>
                </div>
                <div className="md:col-span-5">
                  <p className="text-ink">{plan.summary}</p>
                  <p className="mt-1 text-[15px] text-slate">{plan.detail}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 place-items-center justify-self-end rounded-full border border-gold text-teal-900 transition-colors duration-200 group-hover:bg-gold md:col-span-1 md:grid"
                >
                  <ArrowUpRight size={20} />
                </span>
                <span className="text-[15px] font-semibold text-teal-800 md:hidden">See plan</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[24em] text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Romano Law is on a mission to abolish the billable hour.
          </p>
          <BookingButton />
        </div>
      </Container>
    </section>
  )
}
