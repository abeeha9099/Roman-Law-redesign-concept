import { Award, Layers, MapPin, Scale, Star } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import { PHONE, REVIEWS_URL, stats } from '../data/site.js'

const icons = { award: Award, map: MapPin, scale: Scale, layers: Layers }

function ScalesBackdrop() {
  // Faint scales-of-justice line drawing, purely decorative.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className="pointer-events-none absolute -left-10 top-24 hidden h-[640px] w-[640px] text-teal-200 opacity-[0.07] xl:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M200 40v300M150 340h100M60 90h280M200 40a10 10 0 1 0 0 .1" />
      <path d="M60 90 20 190c0 22 18 36 40 36s40-14 40-36L60 90ZM340 90l-40 100c0 22 18 36 40 36s40-14 40-36L340 90Z" />
      <path d="M20 190h80M300 190h80" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-white px-3 pt-3 md:px-5 md:pt-4">
      <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-teal-950 text-white md:rounded-[36px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_35%,#14525e_0%,#0e3b43_45%,#0a2a30_80%)]"
        />
        <ScalesBackdrop />

        <div className="hero-photo fade-in pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] xl:inset-x-auto xl:right-0 xl:h-full xl:w-[58%]">
          <img
            src="/images/photos/domenic-and-shaliz.jpg"
            alt="Domenic Romano and Shaliz Sadig Romano in a Romano Law conference room"
            width="1668"
            height="2500"
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_18%] brightness-[0.92] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-teal-900/35 mix-blend-multiply" />
        </div>

        <Container className="relative pt-[300px] xl:pt-48">
          <div className="max-w-[640px]">
            <Pill tone="dark">20th anniversary</Pill>
            <h1 id="hero-title" className="text-h1 mt-6">
              <span className="hero-line">Premium legal services.</span>
              <span className="hero-line" style={{ animationDelay: '140ms' }}>
                Proactive counsel.
              </span>
              <span className="hero-line text-gold" style={{ animationDelay: '280ms' }}>
                Flat rates.
              </span>
            </h1>
            <p className="text-lead mt-7 max-w-[30em] text-white/80">
              To demystify law. To help our clients find calm. To ignite growth and success by reducing legal stress.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              <BookingButton />
              <a
                href={PHONE.href}
                className="py-2 text-center text-base font-medium text-white underline decoration-gold underline-offset-4 hover:text-teal-200"
              >
                Or call {PHONE.display}
              </a>
            </div>
          </div>

          <aside
            aria-label="Client reviews"
            className="fade-in mt-10 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md xl:absolute xl:right-0 xl:top-[588px] xl:mt-0 xl:w-[300px]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal-900">
                <Star aria-hidden="true" size={20} fill="currentColor" />
              </span>
              <p className="font-semibold">Google reviews</p>
            </div>
            <p className="mt-3 text-[15px] text-white/80">See what clients say about working with Romano Law.</p>
            <Button href={REVIEWS_URL} variant="outline" className="mt-4 !min-h-[44px] !px-5 text-[15px]">
              Read reviews
            </Button>
          </aside>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/20 py-8 md:grid-cols-4 xl:mt-24">
            {stats.map((stat) => {
              const Icon = icons[stat.icon]
              return (
                <div key={stat.label}>
                  <Icon aria-hidden="true" size={22} className="text-gold" />
                  <dd className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</dd>
                  <dt className="mt-1 text-[15px] text-white/75">{stat.label}</dt>
                </div>
              )
            })}
          </dl>
        </Container>
      </div>
    </section>
  )
}
