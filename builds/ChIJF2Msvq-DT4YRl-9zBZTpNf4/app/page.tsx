import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const services = [
  'Emergency Plumbing — Available 24/7',
  'Boiler Installation & Repair',
  'Water Heater Installation (Gas & Electric)',
  'Pipe Replacement & Full Re-piping',
  'Sump Pump Installation',
  'Leak Detection & Repair',
  'Drain Cleaning',
]

const photos = [
  '/images/photo_1.jpg',
]

const reviews = [
  {
    author: 'Tony Simpson',
    text: 'Update: I had a free plumbing inspection with one of the employees, and it was a quick and smooth experience. They offered me various options for updates and replacements in a professional manner without being pushy. It was another great experience with Declan & Sons Plumbing!',
    rating: 5,
  },
  {
    author: 'Axel Underwood',
    text: 'From start to finish, our experience with Declan & Sons Plumbing was fantastic. They are the best plumbers we\'ve ever hired in Waco, and you can tell they truly care about doing quality work. All the work was properly permitted, and the inspector was really impressed with the plumbing job.',
    rating: 4,
  },
  {
    author: 'russell fischer',
    text: 'I highly recommend Declan & Sons Plumbing. We noticed our boiler was leaking this morning. After that, we called Declan & Sons Plumbing and got an appointment the same day. The plumber arrived, quickly found the source of the leak, ordered the needed part, and came back later in the day to finish the job.',
    rating: 5,
  },
  {
    author: 'Eli Conner',
    text: 'Had a really great experience with this plumbing company for a toilet fix. They were cordial and professional. The plumber was particularly mindful of my budget and worked swiftly, ensuring there were no leaks and everything was functioning properly.',
    rating: 5,
  },
  {
    author: 'Nancy Jarvis',
    text: 'They called me early the next morning and let me know when they were on their way. The plumbers were very polite and treated me with respect, explaining everything clearly. Best of all, they fixed the leaking faucets for real!',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main>
      <Hero
        name="Declan & Sons Plumbing"
        tagline="Waco's 24/7 plumber. We answer when others don't."
        phone="(254) 294-3299"
        rating={4.8}
        reviewCount={81}
      />
      <Services items={services} />
      <Gallery photos={photos} />
      <Reviews reviews={reviews} />
      <Contact phone="(254) 294-3299" address="215 S University Parks Dr #9180, Waco, TX 76701" />
    </main>
  )
}
