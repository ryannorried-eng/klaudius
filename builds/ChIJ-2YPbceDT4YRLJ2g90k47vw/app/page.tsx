import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const services = [
  'Emergency Plumbing — Available 24/7',
  'Drain Cleaning & Unclogging',
  'Toilet Repair & Replacement',
  'Pipe Repair & Replacement',
  'Fast Response — Often Same Hour',
  'Serving Waco & Surrounding Areas (Including Riesel)',
]

const reviews = [
  {
    author: 'Bob Klement',
    text: 'Very helpful and were able to come to my house within 20 minutes of my call. Very knowledgeable and courteous. I was expecting the bill to be higher than it was. I had to call them again today for a different problem, so yes, I will use them again.',
    rating: 5,
  },
  {
    author: 'jimmie bell',
    text: "Excellent service. Courteous, prompt, fair priced, and when there was an issue with our toilet they promptly responded and returned to resolve the issue. Recommend them above all name brand companies in Waco area. Didn't have to wait 3 to 5 days before arriving.",
    rating: 5,
  },
  {
    author: 'Sara Williamson',
    text: "I was told they wouldn't be able to make it till 4:30 the next day. That was ok, but at about 9:30 there was a knock at the door — they were here! They were able to fix the problem in no time! Very nice and professional, definitely keep them on speed dial.",
    rating: 5,
  },
  {
    author: 'Ross L',
    text: 'Responded promptly, arrived on time, professional, and unclogged the drain. Ensured all drains were working before leaving. I plan on using them again for any future plumbing needs. Would recommend to anyone.',
    rating: 5,
  },
  {
    author: 'T. Brad',
    text: 'Justin was very personable and knowledgeable. He arrived on time and got my water back draining in no time. Will definitely be using again if/when needed.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main>
      <Hero
        name="White's Plumbing"
        tagline="Fast, honest, fair. Waco's neighborhood plumber."
        phone="(254) 716-8849"
        rating={4.5}
        reviewCount={18}
      />
      <Services items={services} />
      <Gallery photos={[]} />
      <Reviews reviews={reviews} />
      <Contact phone="(254) 716-8849" address="1312 Turner St, Waco, TX 76704" />
    </main>
  )
}
