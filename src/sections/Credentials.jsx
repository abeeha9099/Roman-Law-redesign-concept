import Container from '../components/ui/Container.jsx'
import { credentials } from '../data/site.js'

export default function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="border-t border-line bg-paper py-14 md:py-16">
      <Container>
        <h2 id="credentials-title" className="font-display text-2xl text-teal-900 md:text-3xl">
          Credentials and awards
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 xl:grid-cols-8">
          {credentials.map((badge) => {
            const img = (
              <img
                src={badge.src}
                alt={badge.name}
                loading="lazy"
                className="mx-auto h-24 w-full object-contain"
              />
            )
            return (
              <li key={badge.src}>
                {badge.href ? (
                  <a href={badge.href} target="_blank" rel="noopener noreferrer" className="block">
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
