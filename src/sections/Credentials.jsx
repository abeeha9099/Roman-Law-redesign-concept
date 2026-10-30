import Container from '../components/ui/Container.jsx'
import { credentials } from '../data/site.js'

export default function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="bg-white pb-20 md:pb-24">
      <Container>
        <div className="rounded-[28px] bg-teal-50 px-6 py-10 md:rounded-[36px] md:px-12 md:py-14">
          <h2 id="credentials-title" className="text-h3 text-ink">
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
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    img
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
