import type { Metadata } from 'next'
import TrustBar from '../components/TrustBar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import ReviewsPreview from '../components/ReviewsPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import CTASection from '../components/CTASection'

export const metadata: Metadata = {
  title: 'Prestige Construction & Remodeling LLC | Waco, TX',
  description: 'Prestige Construction & Remodeling — trusted general contractor in Waco, TX. Kitchen remodels, room additions, renovations. Open 7 days. Free estimates.',
}

const PHONE = '(254) 981-4152'
const CITY = 'Waco'

const trustBadges = [
  { icon: '✦', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Free Estimates' },
  { icon: '★', label: '5-Star Rated' },
  { icon: '✦', label: 'Waco, TX' },
  { icon: '✦', label: 'Open 7 Days' },
]

const services = [
  {
    name: 'Kitchen Remodeling',
    description: 'Full kitchen renovations from layout changes to custom cabinetry, countertops, and tile — handled start to finish by Manny\'s crew.',
    href: '/services#kitchen-remodeling',
  },
  {
    name: 'Bathroom Renovation',
    description: 'Powder room refreshes to full master bath gut-outs. Tile work, vanities, walk-in showers — one crew, clean results.',
    href: '/services#bathroom-renovation',
  },
  {
    name: 'Room Additions',
    description: 'Seamless additions that match your existing structure. Permitted and built to last — from planning through final inspection.',
    href: '/services#room-additions',
  },
  {
    name: 'Interior Renovation',
    description: 'Whole-home or room-by-room interior work: drywall, trim, doors, painting, and finishes that make a house feel new.',
    href: '/services#interior-renovation',
  },
  {
    name: 'Flooring & Tile',
    description: 'Hardwood, LVP, porcelain tile, and more. Demo, subfloor prep, and install — no subcontractor handoffs.',
    href: '/services#flooring',
  },
  {
    name: 'General Contracting',
    description: 'Need a contractor to run the whole project? Manny coordinates trades, pulls permits, and keeps the job moving on schedule.',
    href: '/services#general-contracting',
  },
]

const reviews = [
  {
    author: 'Elster Green',
    location: 'Waco, TX',
    text: 'I have used Manny and his crew a couple times now and about to be a 3rd time on another project. I\'ve hired many people over the years and they have been one of the best I\'ve dealt with. They show up as promised and work all day. They have done good work and prices were good compared to others.',
    rating: 5,
  },
  {
    author: 'Deadra Guerra',
    location: 'Waco, TX',
    text: 'Great job — very courteous and polite, will use again. Very good prices!',
    rating: 5,
  },
]

const photos = [
  '/images/photo_1.jpg',
  '/images/photo_2.jpg',
  '/images/photo_3.jpg',
  '/images/photo_4.jpg',
  '/images/photo_5.jpg',
  '/images/photo_6.jpg',
]

const stats = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '7', label: 'Days a Week' },
  { value: 'Free', label: 'Estimates' },
]

export default function HomePage() {
  return (
    <main>
      {/* Contractor layout: TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection */}
      <TrustBar badges={trustBadges} />
      <Hero
        headline="We show up. We work all day. We do it right."
        subheadline={`Prestige Construction & Remodeling is ${CITY}'s trusted general contractor — reliable crews, honest pricing, and quality workmanship on every job. Free estimates, open 7 days.`}
        phone={PHONE}
        badge="Serving Waco, TX · Open 7 Days a Week"
        primaryCTA="Call Now — Free Estimate"
        secondaryCTA="View Our Work"
        secondaryHref="/projects"
        emergency={false}
        stats={stats}
      />
      <ReviewsPreview
        reviews={reviews}
        totalCount={3}
        rating={5.0}
        headline="What Waco homeowners say about Manny's crew"
        sectionLabel="Customer Reviews"
      />
      <ServicesPreview
        services={services}
        headline="Full-service remodeling and construction"
        sectionLabel="What We Do"
        city={CITY}
      />
      {photos.length >= 3 && (
        <ProjectsPreview
          photos={photos}
          headline="Work we're proud to put our name on"
          sectionLabel="Recent Projects"
        />
      )}
      <CTASection
        headline="Ready to start your project?"
        subtext={`Call Manny's crew for a free, no-obligation estimate. Proudly serving ${CITY} and surrounding areas — 7 days a week.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Estimate Online"
        secondaryHref="/contact"
        footnote="Licensed & Insured · Serving Waco, TX · Free Estimates · Open 7 Days"
      />
    </main>
  )
}
