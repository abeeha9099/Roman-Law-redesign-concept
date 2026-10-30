import Section from '../components/ui/Section.jsx'
import { REVIEWS_URL, testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <Section tone="paper" id="reviews" labelledBy="reviews-title">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 id="reviews-title" className="text-h2 text-teal-900">
          Why clients trust us
        </h2>
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900"
        >
          View all reviews on Google
        </a>
      </div>
      <ul className="mt-10 grid gap-10 md:mt-14 xl:grid-cols-3 xl:gap-12">
        {testimonials.map((t) => (
          <li key={t.name} className="border-t-2 border-teal-700 pt-6">
            <figure>
              <blockquote className="font-display text-xl italic leading-snug text-ink md:text-[22px]">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 text-[15px] font-semibold text-teal-900">
                {t.name}
                {t.role && <span className="block font-normal text-slate">{t.role}</span>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  )
}
