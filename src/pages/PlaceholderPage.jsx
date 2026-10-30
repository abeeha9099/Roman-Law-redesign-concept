import { useLocation } from 'react-router-dom'
import Section from '../components/ui/Section.jsx'
import Button from '../components/ui/Button.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'

// Only the homepage is redesigned so far. Every other existing URL keeps its path and
// points to the live page until that template is built.
export default function PlaceholderPage() {
  const { pathname } = useLocation()
  const liveUrl = `https://www.romanolaw.com${pathname}`
  return (
    <Section tone="paper" labelledBy="placeholder-title" className="min-h-[60vh]">
      <h1 id="placeholder-title" className="text-h2 max-w-[18ch] text-teal-900">
        This page has not been redesigned yet
      </h1>
      <p className="mt-6 max-w-[34em] text-slate">
        The redesign covers the homepage so far. This page keeps its existing address and is still available on the
        current Romano Law website.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href={liveUrl}>View this page on romanolaw.com</Button>
        <BookingButton variant="primary" className="!bg-transparent !text-teal-800 border border-teal-800 hover:!bg-teal-100" />
      </div>
    </Section>
  )
}
