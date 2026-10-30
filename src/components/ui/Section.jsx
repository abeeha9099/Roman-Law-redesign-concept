import Container from './Container.jsx'

const tones = {
  paper: 'bg-paper text-ink',
  white: 'bg-white text-ink',
  light: 'bg-teal-100 text-ink',
  dark: 'on-dark bg-teal-900 text-white',
  darkest: 'on-dark bg-teal-950 text-white',
}

export default function Section({ tone = 'paper', id, labelledBy, className = '', innerClassName = '', children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-[72px] md:py-24 xl:py-32 ${className}`}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  )
}
