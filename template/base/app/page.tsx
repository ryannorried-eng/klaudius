// This file is overwritten per business by the pipeline.
// Claude populates it with real business data from business.json.
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
  )
}
