import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SmartLink from '../../ui/SmartLink.jsx'

export default function MegaPanel({ areas, onNavigate }) {
  const [active, setActive] = useState(0)
  const area = areas[active]

  return (
    <div className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl bg-white text-ink shadow-[0_18px_40px_rgba(10,42,48,0.25)]">
      <div className="grid grid-cols-[280px_1fr] gap-10 px-8 py-8">
        <ul aria-label="Practice areas" className="border-r border-line pr-6">
          {areas.map((a, i) => (
            <li key={a.href}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-xl font-semibold tracking-tight transition-colors ${
                  i === active ? 'rounded-2xl bg-teal-100 text-teal-800' : 'rounded-2xl hover:bg-teal-50'
                }`}
              >
                {a.label}
                <ArrowRight aria-hidden="true" size={16} className={i === active ? 'opacity-100' : 'opacity-0'} />
              </button>
            </li>
          ))}
        </ul>
        <div>
          <SmartLink
            href={area.href}
            onClick={onNavigate}
            className="mb-4 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-teal-800 underline decoration-teal-700/40 underline-offset-4 hover:decoration-teal-700"
          >
            All {area.label} services
            <ArrowRight aria-hidden="true" size={18} />
          </SmartLink>
          <ul className="columns-3 gap-8 text-[15px] leading-snug">
            {area.children.map((child) => (
              <li key={child.href} className="break-inside-avoid">
                <SmartLink
                  href={child.href}
                  onClick={onNavigate}
                  className="block py-1.5 text-slate hover:text-teal-800 hover:underline"
                >
                  {child.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
