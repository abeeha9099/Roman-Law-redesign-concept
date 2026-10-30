import Button from './Button.jsx'
import { BOOKING_URL, CTA_LABEL } from '../../data/site.js'

// The one booking call to action, used everywhere so the label and destination never drift.
export default function BookingButton({ variant = 'gold', arrow = true, className = '' }) {
  return (
    <Button href={BOOKING_URL} variant={variant} arrow={arrow} className={className}>
      {CTA_LABEL}
    </Button>
  )
}
