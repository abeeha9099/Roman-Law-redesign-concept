import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react'
import PanelSection from '../components/ui/PanelSection.jsx'
import Pill from '../components/ui/Pill.jsx'
import SmartLink from '../components/ui/SmartLink.jsx'
import { navigation } from '../data/navigation.js'
import { practiceAreas } from '../data/site.js'

// "38 topics" etc. are counted from the existing menu, so every sub-page stays reachable from the area page.
const topicCount = (name) => {
  const match = navigation.practiceAreas.find((a) => a.short === name || a.label === name)
  return match ? `${match.children.length} topics` : '4 plans'
}

function Background() {
  return (
    <>
      <img
        src="/images/photos/senior-counsel.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_25%] opacity-25 blur-[3px] grayscale"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,42,48,0.92)_0%,rgba(14,59,67,0.85)_55%,rgba(10,42,48,0.95)_100%)]"
      />
    </>
  )
}

export default function PracticeAreas() {
  const trackRef = useRef(null)
  const bubbleRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const [edges, setEdges] = useState({ start: true, end: false })
  const [dragging, setDragging] = useState(false)

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    const card = el.querySelector('li')
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    const el = trackRef.current
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false }
  }
  const onPointerMove = (e) => {
    const bubble = bubbleRef.current
    if (bubble && e.pointerType === 'mouse') {
      const rect = trackRef.current.getBoundingClientRect()
      bubble.style.transform = `translate(${e.clientX - rect.left - 36}px, ${e.clientY - rect.top - 36}px)`
      bubble.style.opacity = '1'
    }
    const d = drag.current
    if (!d.active) return
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > 5 && !d.moved) {
      d.moved = true
      setDragging(true)
    }
    if (d.moved) trackRef.current.scrollLeft = d.startScroll - dx
  }
  const endDrag = () => {
    if (drag.current.active) {
      drag.current.active = false
      setDragging(false)
    }
  }
  const onClickCapture = (e) => {
    // A drag that ends over a card must not follow that card's link.
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  return (
    <PanelSection id="practice-areas" labelledBy="practice-title" background={<Background />}>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Pill tone="dark">Practice areas</Pill>
          <h2 id="practice-title" className="text-h2 mt-5">
            Explore our <span className="text-gold">practice areas</span>
          </h2>
        </div>
        <div className="flex items-center gap-6 md:max-w-[26rem] md:flex-col md:items-end md:gap-5">
          <p className="hidden text-white/80 md:block md:text-right">
            Focused on business, entertainment, employment and dispute resolution.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous practice areas"
              disabled={edges.start}
              onClick={() => scrollByCard(-1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/30 text-white transition-colors enabled:hover:bg-white enabled:hover:text-teal-900 disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <button
              type="button"
              aria-label="Next practice areas"
              disabled={edges.end}
              onClick={() => scrollByCard(1)}
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-teal-900 transition-colors enabled:hover:bg-gold disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 md:mt-14">
        <ul
          ref={trackRef}
          aria-label="Practice areas"
          onScroll={updateEdges}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={(e) => {
            endDrag()
            if (bubbleRef.current) bubbleRef.current.style.opacity = '0'
          }}
          onClickCapture={onClickCapture}
          className={`-mx-4 flex scroll-px-4 gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:-mx-6 md:scroll-px-6 md:px-6 [&::-webkit-scrollbar]:hidden ${
            dragging ? 'cursor-grabbing select-none' : 'cursor-grab snap-x snap-mandatory'
          }`}
        >
          {practiceAreas.map((area) => (
            <li key={area.href} className="w-[285px] shrink-0 snap-start md:w-[330px]">
              <article className="group relative flex h-full flex-col rounded-3xl bg-white p-5 text-ink transition-colors duration-300 hover:bg-teal-800 hover:text-white">
                <Pill tone="card" className="self-start group-hover:border-white/30 group-hover:bg-transparent group-hover:text-white">
                  {topicCount(area.name)}
                </Pill>
                <h3 className="text-h3 mt-4">
                  <SmartLink href={area.href} draggable={false} className="after:absolute after:inset-0 after:rounded-3xl">
                    {area.name}
                  </SmartLink>
                </h3>
                <img
                  src={area.image}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  loading="lazy"
                  className="mt-4 h-[170px] w-full rounded-2xl object-cover object-[50%_25%] grayscale transition duration-500 group-hover:grayscale-0"
                />
                <p className="mt-4 flex-1 text-[15px] text-slate group-hover:text-white/85">{area.text}</p>
                <span className="mt-5 flex items-center justify-between text-[15px] font-semibold">
                  Learn more
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold bg-white text-teal-900 transition-colors group-hover:bg-gold">
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </span>
                </span>
              </article>
            </li>
          ))}
        </ul>
        <div
          ref={bubbleRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-white text-[11px] font-bold text-teal-900 opacity-0 shadow-lg transition-opacity duration-200 md:flex"
        >
          <MoveHorizontal size={16} />
          Drag
        </div>
      </div>
    </PanelSection>
  )
}
