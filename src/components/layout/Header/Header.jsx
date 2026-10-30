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
  'inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-[15px] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white aria-expanded:bg-white/10 aria-expanded:text-white'

export default function Header() {
  const scrolled = useScrolled(8)
  const [panel, setPanel] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapRef = useRef(null)
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
  useDismiss(wrapRef, panel !== null || searchOpen, dismiss)

  const togglePanel = (id) => {
    setSearchOpen(false)
    setPanel((current) => (current === id ? null : id))
  }

  return (
    <>
      <header className="on-dark fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div ref={wrapRef} className="relative mx-auto max-w-[1320px]">
          <div
            className={`flex h-16 items-center justify-between gap-3 rounded-full pl-5 pr-2 ring-1 ring-white/10 backdrop-blur-md transition-colors duration-300 md:pl-7 ${
              scrolled ? 'bg-teal-950/95 shadow-[0_10px_30px_rgba(10,42,48,0.35)]' : 'bg-teal-950/70'
            }`}
          >
            <Link to="/" aria-label="Romano Law, home" className="shrink-0">
              <img
                src="/images/logo.png"
                alt="Romano Law"
                width="275"
                height="58"
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-0.5">
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
                            className="on-light absolute left-0 top-full z-10 mt-4 w-[22rem] overflow-hidden rounded-3xl bg-white py-3 text-ink shadow-[0_18px_40px_rgba(10,42,48,0.25)]"
                          >
                            <SmartLink
                              href={item.data.href}
                              onClick={closeAll}
                              className="block px-5 py-2.5 text-lg font-semibold text-teal-800 hover:bg-teal-100"
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

            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href={PHONE.href}
                className="hidden items-center gap-2 px-3 text-[15px] font-medium text-white hover:text-teal-200 xl:inline-flex"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"
              >
                <Search aria-hidden="true" size={20} />
              </button>
              <div className="hidden xl:block">
                <BookingButton className="!min-h-[48px] text-[15px]" />
              </div>
              <a
                href={PHONE.href}
                aria-label={`Call ${PHONE.display}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
              >
                <Phone aria-hidden="true" size={20} />
              </a>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 xl:hidden"
              >
                <Menu aria-hidden="true" size={22} />
              </button>
            </div>
          </div>

          {panel === 'practice' && (
            <div id="panel-practice" className="on-light absolute inset-x-0 top-full mt-3">
              <MegaPanel areas={navigation.practiceAreas} onNavigate={closeAll} />
            </div>
          )}
          {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
