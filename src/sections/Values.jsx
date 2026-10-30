import Section from '../components/ui/Section.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { coreValues } from '../data/site.js'

export default function Values() {
  return (
    <Section tone="light" id="values" labelledBy="values-title">
      <div className="grid gap-14 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-6">
          <h2 id="values-title" className="text-h2 max-w-[16ch] text-teal-900">
            Practical legal services without surprises
          </h2>
          <div className="mt-8 grid max-w-[34em] gap-7">
            <div>
              <h3 className="font-display text-xl text-teal-800">Our commitment to you</h3>
              <p className="mt-2 text-slate">
                Focused on business, entertainment, employment and dispute resolution, we represent entrepreneurs,
                stakeholders and creative professionals.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-teal-800">Our purpose</h3>
              <p className="mt-2 text-slate">
                To demystify law. To help our clients find calm. To ignite growth and success by reducing legal stress.
              </p>
            </div>
          </div>
          <SmartLink
            href="/the-firm/about/"
            className="mt-8 inline-block font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900"
          >
            About Romano Law
          </SmartLink>
          <img
            src="/images/photos/business-lawyers.webp"
            alt="Two Romano Law attorneys walking down a New York street"
            width="321"
            height="482"
            loading="lazy"
            className="mt-12 hidden w-[240px] xl:block"
          />
        </div>

        <div className="xl:col-span-6">
          <h3 className="font-display text-2xl text-teal-900">Our core values</h3>
          <dl className="mt-6 border-t border-teal-700/30">
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="grid gap-1 border-b border-teal-700/30 py-5 md:grid-cols-[10rem_1fr] md:gap-6"
              >
                <dt className="text-h3 text-teal-800">{value.name}</dt>
                <dd className="text-ink">{value.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <BookingButton />
          </div>
        </div>
      </div>
    </Section>
  )
}
