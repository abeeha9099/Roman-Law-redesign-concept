import { Play } from 'lucide-react'
import Section from '../components/ui/Section.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { mediaItems } from '../data/site.js'

export default function Media() {
  const [feature, ...rest] = mediaItems
  return (
    <Section tone="light" id="media" labelledBy="media-title">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 id="media-title" className="text-h2 text-teal-900">
          Media appearances
        </h2>
        <SmartLink
          href="/category/media-appearances/"
          className="font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-900"
        >
          View all
        </SmartLink>
      </div>

      <div className="mt-10 grid gap-10 md:mt-14 xl:grid-cols-12 xl:gap-12">
        {[feature, ...rest].map((item, i) => (
          <article key={item.href} className={`group ${i === 0 ? 'xl:col-span-7' : 'xl:col-span-5'}`}>
            <SmartLink href={item.href} className="block">
              <div className="relative overflow-hidden bg-teal-900">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-900">
                  <Play aria-hidden="true" size={18} fill="currentColor" />
                </span>
              </div>
              <p className="mt-5 text-[15px] text-slate">{item.date}</p>
              <h3 className="text-h3 mt-1 text-teal-900 group-hover:text-teal-700">{item.title}</h3>
            </SmartLink>
          </article>
        ))}
      </div>
    </Section>
  )
}
