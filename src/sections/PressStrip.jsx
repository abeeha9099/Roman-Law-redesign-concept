import Container from '../components/ui/Container.jsx'
import { press } from '../data/site.js'

// The source logos are white on transparent, so they are flattened to ink for the light strip.
export default function PressStrip() {
  return (
    <section aria-labelledby="press-title" className="bg-white py-12 md:py-14">
      <Container className="flex flex-col items-center gap-6 xl:flex-row xl:gap-12">
        <h2 id="press-title" className="shrink-0 text-xl font-semibold tracking-tight text-ink">
          Featured on
        </h2>
        <ul className="grid w-full grid-cols-3 items-center justify-items-center gap-x-6 gap-y-6 sm:grid-cols-5 xl:flex xl:flex-1 xl:justify-between">
          {press.map((outlet) => (
            <li key={outlet.src}>
              <img
                src={outlet.src}
                alt={outlet.name}
                loading="lazy"
                className="h-8 w-auto max-w-[110px] object-contain brightness-0 opacity-70 md:h-9"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
