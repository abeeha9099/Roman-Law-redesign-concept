import { useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'

const SEARCH_URL = 'https://www.romanolaw.com/'

// Site search runs on the existing romanolaw.com search until a new search backend exists.
export default function SearchBar({ onClose }) {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div id="site-search" className="on-light absolute inset-x-0 top-full bg-paper shadow-[0_18px_40px_rgba(10,42,48,0.22)]">
      <form
        role="search"
        action={SEARCH_URL}
        method="get"
        target="_blank"
        className="mx-auto flex w-full max-w-[1200px] items-center gap-3 px-4 py-5 md:px-6"
      >
        <label htmlFor="site-search-input" className="sr-only">
          Search romanolaw.com
        </label>
        <Search aria-hidden="true" size={22} className="shrink-0 text-teal-800" />
        <input
          ref={inputRef}
          id="site-search-input"
          name="s"
          type="search"
          required
          placeholder="Search practice areas, articles and videos"
          className="h-12 min-w-0 flex-1 border-0 border-b border-line bg-transparent font-display text-xl text-ink placeholder:text-slate/70 focus:border-teal-700 focus:outline-none"
        />
        <button
          type="submit"
          className="h-12 rounded-sm bg-teal-800 px-6 text-[15px] font-semibold text-white hover:bg-teal-900"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="inline-flex h-12 w-12 items-center justify-center text-slate hover:text-ink"
        >
          <X aria-hidden="true" size={22} />
        </button>
      </form>
    </div>
  )
}
