import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const services = [
  'Emergency Plumbing — Available 24/7',
  'Water Heater Installation (Gas, Electric & Tankless)',
  'Full House Re-piping',
  'Gas Line Inspection & Repair',
  'Drain Cleaning & Unclogging',
  'Emergency Leak Repair',
  'Refrigerator & Appliance Line Installation',
]

const photos = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
  '/images/photo_4.jpg',
  '/images/photo_5.jpg',
  '/images/photo_6.jpg',
  '/images/photo_7.jpg',
  '/images/photo_8.jpg',
]

const reviews = [
  {
    author: 'Brett Beasley',
    text: 'Raymond and Elias did a fantastic job! I had never used this plumbing company in Waco before, but after getting five different quotes for a 75-gallon water heater, they offered by far the best price — some other companies were charging more than twice as much! They arrived the very next afternoon and had my new water heater up and running in less than three hours.',
    rating: 5,
  },
  {
    author: 'Hadley Roth',
    text: 'I recently had a major water leak in my very old house that caused my basement to flood. Raymond came out right away, found the problem fast, and fixed it in no time — everything was done in about 20 minutes! Now my basement is dry, and all the plumbing is working perfectly.',
    rating: 5,
  },
  {
    author: 'Kyle Morrow',
    text: "We've been using this plumbing service in Waco for years and honestly, I'd give them more than 5 stars if I could. Raymond and Elias are always friendly, know exactly what they're doing, and their prices are very fair. What really stands out is how they take the time to explain repairs so you feel confident handling small fixes yourself in the future.",
    rating: 5,
  },
  {
    author: 'Ella L',
    text: "I needed a full re-pipe, a new tankless water heater, a hot water line to my utility room, and a line for my refrigerator's ice maker. Every other plumber turned down at least one request. Then I called this company, and Raymond gave me an affordable estimate within half an hour without turning down a single item.",
    rating: 5,
  },
  {
    author: 'Dylan Edwards',
    text: 'Elias and Raymond came out on time for the gas line inspection. They were friendly, skilled, and explained everything in plain language. I\'m really happy with their work. Elias and Raymond are the best plumbers I\'ve worked with — highly recommend them!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main>
      <Hero
        name="Carlos & Sons Plumbing"
        tagline="The best price in Waco. Ask anyone."
        phone="(254) 277-2617"
        rating={4.7}
        reviewCount={112}
      />
      <Services items={services} />
      <Gallery photos={photos} />
      <Reviews reviews={reviews} />
      <Contact phone="(254) 277-2617" address="3526 N 19th St #8000, Waco, TX 76708" />
    </main>
  )
}
