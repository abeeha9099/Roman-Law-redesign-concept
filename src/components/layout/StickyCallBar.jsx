import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { PHONE } from '../../data/site.js'
import BookingButton from '../ui/BookingButton.jsx'

// Mobile and tablet only. Hides while the contact form is on screen so it never covers the fields.
export default function StickyCallBar() {
  const [hidden, setHidden] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const target = document.getElementById('contact')
    if (!target) return undefined
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0.05 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <div aria-hidden="true" className="h-[76px] bg-white xl:hidden" />
      <div
        className={`on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_1fr] gap-3 border-t border-white/15 bg-teal-950 p-3 transition-transform duration-200 xl:hidden ${
          hidden ? 'translate-y-full' : ''
        }`}
      >
        <a
          href={PHONE.href}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-base font-semibold text-white"
        >
          <Phone aria-hidden="true" size={18} />
          Call
        </a>
        <BookingButton className="!pl-4 !pr-2 text-[15px]" />
      </div>
    </>
  )
}
