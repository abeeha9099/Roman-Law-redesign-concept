import Section from '../components/ui/Section.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { team } from '../data/site.js'

export default function Team() {
  return (
    <Section tone="paper" id="team" labelledBy="team-title" className="!pt-8 md:!pt-12 xl:!pt-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 id="team-title" className="text-h2 text-teal-900">
          Meet the team
        </h2>
        <SmartLink
          href="/the-firm/team/"
          className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900"
        >
          Meet our team
        </SmartLink>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-14 xl:grid-cols-4 xl:gap-x-8">
        {team.map((person) => (
          <li key={person.href} className="group">
            <SmartLink href={person.href} className="block">
              <div className="overflow-hidden bg-teal-100">
                <img
                  src={person.src}
                  alt={`Portrait of ${person.name}`}
                  width="445"
                  height="500"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-4 font-display text-xl text-teal-900 group-hover:text-teal-700 md:text-2xl">
                {person.name}
              </h3>
            </SmartLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
