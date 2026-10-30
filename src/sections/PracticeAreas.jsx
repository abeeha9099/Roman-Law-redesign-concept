import { ArrowRight } from 'lucide-react'
import Section from '../components/ui/Section.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { practiceAreas } from '../data/site.js'

export default function PracticeAreas() {
  return (
    <Section tone="paper" id="practice-areas" labelledBy="practice-title">
      <div className="grid gap-10 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-4">
          <h2 id="practice-title" className="text-h2 text-teal-900 xl:sticky xl:top-28">
            Practice areas
          </h2>
        </div>
        <ul className="border-t border-line xl:col-span-8">
          {practiceAreas.map((area) => (
            <li key={area.href} className="group relative border-b border-line py-8 md:py-10">
              <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                <h3 className="text-h3 text-teal-900 transition-colors group-hover:text-teal-700 md:col-span-4">
                  <SmartLink href={area.href} className="after:absolute after:inset-0">
                    {area.name}
                  </SmartLink>
                </h3>
                <p className="max-w-[34em] text-slate md:col-span-7">{area.text}</p>
                <ArrowRight
                  aria-hidden="true"
                  size={22}
                  className="hidden text-teal-700 transition-transform duration-200 group-hover:translate-x-1 md:col-span-1 md:block md:justify-self-end"
                />
              </div>
              <span className="mt-3 inline-block text-[15px] font-semibold text-teal-800 md:hidden">Learn more</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
