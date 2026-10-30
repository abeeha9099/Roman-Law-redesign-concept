import SmartLink from './SmartLink.jsx'

const base =
  'inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm px-7 text-base font-semibold transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-teal-800 text-white hover:bg-teal-900',
  inverse: 'bg-white text-teal-900 hover:bg-teal-100',
  outline: 'border border-white/40 text-white hover:bg-white/10',
}

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <SmartLink href={href} className={classes} {...props}>
        {children}
      </SmartLink>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
