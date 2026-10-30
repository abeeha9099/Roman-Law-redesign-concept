import Hero from '../sections/Hero.jsx'
import PressStrip from '../sections/PressStrip.jsx'
import FlatRates from '../sections/FlatRates.jsx'
import PracticeAreas from '../sections/PracticeAreas.jsx'
import About from '../sections/About.jsx'
import Credentials from '../sections/Credentials.jsx'
import Team from '../sections/Team.jsx'
import Media from '../sections/Media.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Offices from '../sections/Offices.jsx'
import Contact from '../sections/Contact.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressStrip />
      <About />
      <PracticeAreas />
      <FlatRates />
      <Credentials />
      <Team />
      <Media />
      <Testimonials />
      <Offices />
      <Contact />
    </>
  )
}
