import { ArrowUpRight } from 'lucide-react'
import Section from '../components/ui/Section.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { flatRatePlans } from '../data/site.js'

export default function FlatRates() {
  return (
    <Section tone="dark" id="flat-rates" labelledBy="flat-rates-title">
      <div className="grid gap-8 xl:grid-cols-12 xl:gap-16">
        <h2 id="flat-rates-title" className="text-h2 max-w-[16ch] xl:col-span-6">
          Flat-rate legal services, without the billable hour.
        </h2>
        <p className="text-lead text-teal-200 xl:col-span-6 xl:self-end">
          Our flat-rate model offers clients cost certainty, proactive counsel, and access to elite attorneys, all
          without the unpredictability of hourly billing.
        </p>
      </div>

      <ul className="mt-14 border-t border-gold/70 md:mt-20">
        {flatRatePlans.map((plan) => (
          <li
            key={plan.name}
            className="group relative grid gap-4 border-b border-gold/70 py-8 transition-colors duration-200 hover:bg-teal-800/40 md:grid-cols-12 md:gap-10 md:px-2 md:py-10"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100 group-focus-within:scale-y-100"
            />
            <h3 className="text-h3 md:col-span-5 md:pl-4">
              <SmartLink href={plan.href} className="after:absolute after:inset-0 focus-visible:after:outline-3">
                {plan.name}
              </SmartLink>
            </h3>
            <div className="md:col-span-5">
              <p className="text-white">{plan.summary}</p>
              <p className="mt-2 text-[15px] text-teal-200">{plan.detail}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-[15px] font-semibold md:col-span-2 md:justify-end">
              See plan
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[26em] font-display text-2xl text-white md:text-3xl">
          Romano Law is on a mission to abolish the billable hour.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookingButton variant="inverse" />
          <SmartLink
            href="/business/flat-rates/"
            className="py-2 text-center font-medium underline decoration-gold underline-offset-4 hover:text-teal-200"
          >
            How flat rates work
          </SmartLink>
        </div>
      </div>
    </Section>
  )
}
