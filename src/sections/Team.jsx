import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { team } from '../data/site.js'

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Pill>Our team</Pill>
            <h2 id="team-title" className="text-h2 mt-5 text-ink">
              Meet the team
            </h2>
          </div>
          <Button href="/the-firm/team/" arrow>
            Meet our team
          </Button>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 md:gap-x-6 xl:grid-cols-4">
          {team.map((person) => (
            <li key={person.href} className="group">
              <SmartLink href={person.href} className="block">
                <div className="overflow-hidden rounded-3xl bg-teal-100">
                  <img
                    src={person.src}
                    alt={`Portrait of ${person.name}`}
                    width="445"
                    height="500"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink group-hover:text-teal-700 md:text-2xl">
                  {person.name}
                </h3>
              </SmartLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
