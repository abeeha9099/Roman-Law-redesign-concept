import { ArrowUpRight } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { mediaItems } from '../data/site.js'

// The reference's Titles / Categories / Date list, applied to the real media appearances.
export default function Media() {
  return (
    <section id="media" aria-labelledby="media-title" className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Pill>Media</Pill>
            <h2 id="media-title" className="text-h2 mt-5 text-ink">
              Media appearances
            </h2>
          </div>
          <Button href="/category/media-appearances/" arrow>
            View all
          </Button>
        </div>

        <div className="mt-12 md:mt-16">
          <div
            aria-hidden="true"
            className="hidden grid-cols-12 gap-8 border-b border-line pb-4 text-lg font-medium text-slate md:grid"
          >
            <span className="col-span-6">Title</span>
            <span className="col-span-3">Category</span>
            <span className="col-span-2">Date</span>
          </div>
          <ul>
            {mediaItems.map((item) => (
              <li
                key={item.href}
                className="group relative grid gap-4 border-b border-line py-6 transition-colors duration-200 hover:bg-teal-50 md:grid-cols-12 md:items-center md:gap-8 md:px-2"
              >
                <div className="flex items-center gap-5 md:col-span-6">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-[72px] w-[128px] shrink-0 rounded-xl object-cover"
                  />
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink md:text-xl">
                    <SmartLink href={item.href} className="after:absolute after:inset-0">
                      {item.title}
                    </SmartLink>
                  </h3>
                </div>
                <div className="md:col-span-3">
                  <Pill tone="card">Media appearance</Pill>
                </div>
                <p className="text-ink md:col-span-2">{item.date}</p>
                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 place-items-center justify-self-end rounded-full border border-gold text-teal-900 transition-colors duration-200 group-hover:bg-gold md:col-span-1 md:grid"
                >
                  <ArrowUpRight size={20} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
