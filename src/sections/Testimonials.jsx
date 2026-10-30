import { Quote } from 'lucide-react'
import PanelSection from '../components/ui/PanelSection.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import { REVIEWS_URL, testimonials } from '../data/site.js'

function Background() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,#14525e_0%,#0e3b43_45%,#0a2a30_85%)]"
    />
  )
}

export default function Testimonials() {
  return (
    <PanelSection id="reviews" labelledBy="reviews-title" background={<Background />}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Pill tone="dark">Testimonials</Pill>
          <h2 id="reviews-title" className="text-h2 mt-5">
            Why clients <span className="text-gold">trust us</span>
          </h2>
        </div>
        <Button href={REVIEWS_URL} variant="outline">
          View all reviews on Google
        </Button>
      </div>
      <ul className="mt-12 grid gap-5 md:mt-16 xl:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm">
              <Quote aria-hidden="true" size={28} className="text-gold" />
              <blockquote className="mt-4 flex-1 font-serif text-xl italic leading-snug text-white md:text-[22px]">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/15 pt-4 text-[15px] font-semibold">
                {t.name}
                {t.role && <span className="block font-normal text-teal-200">{t.role}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </PanelSection>
  )
}
