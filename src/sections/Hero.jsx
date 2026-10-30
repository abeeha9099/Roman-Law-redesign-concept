import { Play } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { PHONE, mediaItems } from '../data/site.js'

const lines = ['Premium legal services.', 'Proactive counsel.', 'Flat rates.']
const latest = mediaItems[0]

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper">
      <Container className="grid items-stretch gap-10 pb-16 pt-0 md:pb-20 xl:grid-cols-12 xl:gap-16 xl:pb-0 xl:pt-0">
        <div className="order-2 flex flex-col justify-center pt-2 xl:order-1 xl:col-span-7 xl:py-24">
          <h1 id="hero-title" className="text-h1 max-w-[14ch] text-teal-900 xl:max-w-none">
            {lines.map((line, i) => (
              <span key={line} className="hero-line" style={{ animationDelay: `${i * 140}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lead mt-7 max-w-[34em] text-slate">
            To demystify law. To help our clients find calm. To ignite growth and success by reducing legal stress.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center">
            <BookingButton />
            <a href={PHONE.href} className="py-2 text-center text-base font-medium text-teal-800 underline underline-offset-4 hover:text-teal-900">
              Or call {PHONE.display}
            </a>
          </div>
          <SmartLink
            href={latest.href}
            className="mt-12 inline-flex max-w-[34em] items-start gap-3 border-t border-line pt-5 text-[15px] text-slate hover:text-teal-800"
          >
            <Play aria-hidden="true" size={16} className="mt-1 shrink-0 text-teal-700" />
            <span>
              Latest media appearance: Domenic Romano on CNN International, {latest.date}
            </span>
          </SmartLink>
        </div>

        <div className="order-1 -mx-4 md:-mx-6 xl:order-2 xl:col-span-5 xl:mx-0 xl:-mr-[max(0px,calc((100vw-1200px)/2+24px))]">
          <img
            src="/images/photos/domenic-and-shaliz.jpg"
            alt="Domenic Romano and Shaliz Sadig Romano in a Romano Law conference room"
            width="1668"
            height="2500"
            fetchPriority="high"
            className="h-[340px] w-full object-cover object-[50%_28%] md:h-[460px] xl:h-full xl:min-h-[680px]"
          />
        </div>
      </Container>
    </section>
  )
}
