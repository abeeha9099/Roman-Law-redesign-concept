import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Phone, X } from 'lucide-react'
import { navigation } from '../../../data/navigation.js'
import { PHONE } from '../../../data/site.js'
import BookingButton from '../../ui/BookingButton.jsx'
import SmartLink from '../../ui/SmartLink.jsx'

function Accordion({ label, level = 1, children }) {
  const [open, setOpen] = useState(false)
  const id = `acc-${label.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <div className={level === 1 ? 'border-b border-white/15' : 'border-t border-white/10'}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between text-left ${
          level === 1 ? 'min-h-16 text-3xl font-semibold tracking-tight' : 'min-h-14 pl-4 text-xl font-semibold tracking-tight text-teal-200'
        }`}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          size={level === 1 ? 24 : 20}
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div id={id} hidden={!open}>
        {children}
      </div>
    </div>
  )
}

function LinkList({ links, onNavigate, indent = true }) {
  return (
    <ul className={`pb-3 ${indent ? 'pl-4' : ''}`}>
      {links.map((l) => (
        <li key={l.href + l.label}>
          <SmartLink
            href={l.href}
            onClick={onNavigate}
            className="block min-h-12 py-3 text-base leading-snug text-white/90 hover:text-white"
          >
            {l.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}

export default function MobileMenu({ open, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const el = ref.current
    const previous = document.activeElement
    const focusable = () =>
      [...el.querySelectorAll('a[href], button:not([disabled])')].filter((n) => n.offsetParent !== null)
    focusable()[0]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusable()
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="on-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-teal-950 text-white"
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-4 md:px-6">
        <img src="/images/logo.png" alt="Romano Law" width="275" height="58" className="h-8 w-auto brightness-0 invert" />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-12 w-12 items-center justify-center"
        >
          <X aria-hidden="true" size={26} />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-4 pb-8 md:px-6">
        <Accordion label="Practice areas">
          {navigation.practiceAreas.map((area) => (
            <Accordion key={area.href} label={area.label} level={2}>
              <LinkList
                onNavigate={onClose}
                links={[{ label: `All ${area.label} services`, href: area.href }, ...area.children]}
              />
            </Accordion>
          ))}
        </Accordion>
        <Accordion label="Flat rates">
          <LinkList
            onNavigate={onClose}
            indent={false}
            links={[{ label: 'All flat-rate services', href: navigation.flatRates.href }, ...navigation.flatRates.children]}
          />
        </Accordion>
        <Accordion label="About">
          <LinkList
            onNavigate={onClose}
            indent={false}
            links={[{ label: 'About Romano Law', href: navigation.about.href }, ...navigation.about.children]}
          />
        </Accordion>
        {[
          ['Team', '/the-firm/team/'],
          ['Media', '/category/media-appearances/'],
          ['Contact', '/contact/'],
        ].map(([label, href]) => (
          <div key={label} className="border-b border-white/15">
            <SmartLink href={href} onClick={onClose} className="flex min-h-16 items-center text-3xl font-semibold tracking-tight">
              {label}
            </SmartLink>
          </div>
        ))}

        <div className="mt-8 grid gap-3">
          <BookingButton />
          <a
            href={PHONE.href}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/40 text-base font-semibold hover:bg-white/10"
          >
            <Phone aria-hidden="true" size={18} />
            Call {PHONE.display}
          </a>
        </div>
      </nav>
    </div>
  )
}
