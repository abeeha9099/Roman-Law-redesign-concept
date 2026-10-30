const tones = {
  light: 'border-ink/25 text-ink',
  dark: 'border-white/30 bg-white/5 text-white',
  card: 'border-line bg-white text-ink',
}

export default function Pill({ tone = 'light', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1 text-[13px] font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
