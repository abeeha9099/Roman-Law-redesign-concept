import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, Search } from 'lucide-react'
import { navigation } from '../../../data/navigation.js'
import { PHONE } from '../../../data/site.js'
import useScrolled from '../../../hooks/useScrolled.js'
import useDismiss from '../../../hooks/useDismiss.js'
import BookingButton from '../../ui/BookingButton.jsx'
import SmartLink from '../../ui/SmartLink.jsx'
import MegaPanel from './MegaPanel.jsx'
import MobileMenu from './MobileMenu.jsx'
import SearchBar from './SearchBar.jsx'

const navItems = [
  { id: 'practice', label: 'Practice areas', kind: 'mega' },
  { id: 'flat', label: 'Flat rates', kind: 'menu', data: navigation.flatRates },
  { id: 'about', label: 'About', kind: 'menu', data: navigation.about },
  { label: 'Team', href: '/the-firm/team/' },
  { label: 'Media', href: '/category/media-appearances/' },
  { label: 'Contact', href: '/contact/' },
]

const navLink =
  'relative inline-flex h-11 items-center gap-1 px-3 text-[15px] font-medium text-white after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:after:scale-x-100 aria-expanded:after:scale-x-100'

export default function Header() {
  const scrolled = useScrolled(8)
  const [panel, setPanel] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const triggerRefs = useRef({})
  const location = useLocation()

  const closeAll = useCallback(() => {
    setPanel(null)
    setSearchOpen(false)
  }, [])

  useEffect(() => {
    closeAll()
    setMenuOpen(false)
  }, [location.pathname, closeAll])

  const dismiss = useCallback(
    (viaEscape) => {
      if (viaEscape && panel) triggerRefs.current[panel]?.focus()
      closeAll()
    },
    [panel, closeAll],
  )
  useDismiss(headerRef, panel !== null || searchOpen, dismiss)

  const togglePanel = (id) => {
    setSearchOpen(false)
    setPanel((current) => (current === id ? null : id))
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`on-dark fixed inset-x-0 top-0 z-50 bg-teal-900 text-white transition-[box-shadow] duration-200 ${
          scrolled ? 'shadow-[0_6px_24px_rgba(10,42,48,0.35)]' : ''
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 transition-[height] duration-200 md:px-6 ${
            scrolled ? 'h-16' : 'h-16 xl:h-20'
          }`}
        >
          <Link to="/" aria-label="Romano Law, home" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Romano Law"
              width="275"
              height="58"
              className="h-8 w-auto brightness-0 invert xl:h-9"
            />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.kind ? (
                    <>
                      <button
                        type="button"
                        ref={(el) => {
                          triggerRefs.current[item.id] = el
                        }}
                        className={navLink}
                        aria-expanded={panel === item.id}
                        aria-controls={`panel-${item.id}`}
                        onClick={() => togglePanel(item.id)}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          size={16}
                          className={`transition-transform duration-200 ${panel === item.id ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {item.kind === 'menu' && panel === item.id && (
                        <div
                          id={`panel-${item.id}`}
                          className="on-light absolute left-0 top-full z-10 w-[22rem] bg-paper py-3 text-ink shadow-[0_18px_40px_rgba(10,42,48,0.22)]"
                        >
                          <SmartLink
                            href={item.data.href}
                            onClick={closeAll}
                            className="block px-5 py-2.5 font-display text-lg text-teal-800 hover:bg-teal-100"
                          >
                            {item.id === 'flat' ? 'All flat-rate services' : 'About Romano Law'}
                          </SmartLink>
                          <ul>
                            {item.data.children.map((child) => (
                              <li key={child.href}>
                                <SmartLink
                                  href={child.href}
                                  onClick={closeAll}
                                  className="block px-5 py-2 text-[15px] hover:bg-teal-100 hover:text-teal-800"
                                >
                                  {child.label}
                                </SmartLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <SmartLink href={item.href} className={navLink}>
                      {item.label}
                    </SmartLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href={PHONE.href}
              className="hidden items-center gap-2 px-2 text-[15px] font-medium text-white hover:text-teal-200 xl:inline-flex"
            >
              <Phone aria-hidden="true" size={16} />
              {PHONE.display}
            </a>
            <button
              type="button"
              aria-label="Search the site"
              aria-expanded={searchOpen}
              aria-controls="site-search"
              onClick={() => {
                setPanel(null)
                setSearchOpen((v) => !v)
              }}
              className="inline-flex h-12 w-12 items-center justify-center text-white hover:text-teal-200"
            >
              <Search aria-hidden="true" size={20} />
            </button>
            <div className="hidden xl:block">
              <BookingButton variant="inverse" className="!min-h-[44px] !px-5 text-[15px]" />
            </div>
            <a
              href={PHONE.href}
              aria-label={`Call ${PHONE.display}`}
              className="inline-flex h-12 w-12 items-center justify-center text-white hover:text-teal-200 xl:hidden"
            >
              <Phone aria-hidden="true" size={20} />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-12 w-12 items-center justify-center text-white hover:text-teal-200 xl:hidden"
            >
              <Menu aria-hidden="true" size={24} />
            </button>
          </div>
        </div>

        {panel === 'practice' && (
          <div id="panel-practice" className="on-light absolute inset-x-0 top-full">
            <MegaPanel areas={navigation.practiceAreas} onNavigate={closeAll} />
          </div>
        )}
        {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
      </header>
      <div aria-hidden="true" className="h-16 xl:h-20" />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
