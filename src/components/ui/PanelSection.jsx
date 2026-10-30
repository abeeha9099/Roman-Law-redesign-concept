import Container from './Container.jsx'

// A dark, rounded panel inset from the page edges (the reference's dark bands).
export default function PanelSection({ id, labelledBy, background = null, className = '', children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="bg-white px-3 py-3 md:px-5 md:py-4">
      <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-teal-950 text-white md:rounded-[36px]">
        {background}
        <Container className={`relative z-10 py-[72px] md:py-24 xl:py-28 ${className}`}>{children}</Container>
      </div>
    </section>
  )
}
