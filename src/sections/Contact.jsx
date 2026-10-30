import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import PanelSection from '../components/ui/PanelSection.jsx'
import Pill from '../components/ui/Pill.jsx'
import Button from '../components/ui/Button.jsx'
import BookingButton from '../components/ui/BookingButton.jsx'
import { PHONE } from '../data/site.js'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) errors.phone = 'Enter a phone number we can reach you on.'
  else if (digits.length < 10) errors.phone = 'Enter a phone number with at least 10 digits.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Enter an email address like name@example.com.'
  return errors
}

function Field({ id, label, error, required = true, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[15px] font-semibold text-ink">
        {label}
        {required ? <span className="font-normal text-slate"> (required)</span> : null}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-[14px] font-medium text-error">
          <AlertCircle aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (error) =>
  `w-full rounded-xl border bg-teal-50 px-4 py-3 text-base text-ink placeholder:text-slate/70 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/40 ${
    error ? 'border-error' : 'border-line'
  }`

function Background() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_90%,#14525e_0%,#0e3b43_45%,#0a2a30_85%)]"
    />
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', email: '', message: '', trap: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (values.trap) return // honeypot filled: ignore silently
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('invalid')
      const first = ['name', 'phone', 'email'].find((k) => found[k])
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    // No form backend is connected yet, so nothing is sent. See the notice below.
    setStatus('not-connected')
  }

  return (
    <PanelSection id="contact" labelledBy="contact-title" background={<Background />}>
      <div className="grid gap-12 xl:grid-cols-12 xl:gap-16">
        <div className="xl:col-span-5">
          <Pill tone="dark">Contact</Pill>
          <h2 id="contact-title" className="text-h2 mt-5">
            Schedule an appointment for a case evaluation
          </h2>
          <p className="text-lead mt-6 max-w-[28em] text-teal-200">
            For more information or to speak to an experienced professional, book now.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookingButton />
            <a
              href={PHONE.href}
              className="py-2 text-center text-lg font-medium underline decoration-gold underline-offset-4 hover:text-teal-200"
            >
              {PHONE.display}
            </a>
          </div>
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          aria-label="Case evaluation request"
          className="on-light grid gap-6 rounded-3xl bg-white p-6 text-ink md:p-10 xl:col-span-7"
        >
          <Field id="contact-name" label="Name" error={errors.name}>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={onChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={inputClass(errors.name)}
            />
          </Field>
          <div className="grid gap-6 md:grid-cols-2">
            <Field id="contact-phone" label="Phone number" error={errors.phone}>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={onChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className={inputClass(errors.phone)}
              />
            </Field>
            <Field id="contact-email" label="Email address" error={errors.email}>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={inputClass(errors.email)}
              />
            </Field>
          </div>
          <Field id="contact-message" label="Please describe your case" required={false}>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={onChange}
              className={inputClass(false)}
            />
          </Field>

          {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input name="trap" tabIndex={-1} autoComplete="off" value={values.trap} onChange={onChange} />
            </label>
          </div>

          {status === 'invalid' && (
            <p role="alert" className="text-[15px] font-medium text-error">
              Fix the highlighted fields and send again.
            </p>
          )}
          {status === 'not-connected' && (
            <div role="status" className="rounded-2xl border-l-4 border-teal-700 bg-teal-50 p-4 text-[15px]">
              <p className="font-semibold text-teal-900">Your details were not sent.</p>
              <p className="mt-1 text-slate">
                Online submission is not connected yet. To reach the firm now, book a call online or phone{' '}
                <a href={PHONE.href} className="font-semibold text-teal-800 underline">
                  {PHONE.display}
                </a>
                .
              </p>
            </div>
          )}

          <div>
            <Button type="submit" arrow>
              Send request
            </Button>
          </div>
        </form>
      </div>
    </PanelSection>
  )
}
