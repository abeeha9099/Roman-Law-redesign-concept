import { ArrowUpRight } from 'lucide-react'
import SmartLink from './SmartLink.jsx'

const base =
  'group/btn inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full text-base font-semibold transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

// Gold is the primary call to action (dark teal text, 5.5:1 or better on the gold).
const variants = {
  gold: 'bg-gold text-teal-950 hover:bg-[#dcc17f]',
  primary: 'bg-teal-800 text-white hover:bg-teal-900',
  inverse: 'bg-white text-teal-900 hover:bg-teal-100',
  outline: 'border border-white/40 text-white hover:bg-white/10',
  outlineDark: 'border border-teal-800/40 text-teal-900 hover:bg-teal-100',
}

export default function Button({ href, variant = 'gold', arrow = false, className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${arrow ? 'pl-6 pr-2' : 'px-7'} ${className}`
  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-teal-950 text-gold transition-transform duration-200 group-hover/btn:rotate-45"
        >
          <ArrowUpRight size={18} />
        </span>
      )}
    </>
  )
  if (href) {
    return (
      <SmartLink href={href} className={classes} {...props}>
        {content}
      </SmartLink>
    )
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
