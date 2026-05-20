import type { Metadata } from 'next'
import TrustBar from '../components/TrustBar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import ReviewsPreview from '../components/ReviewsPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import CTASection from '../components/CTASection'

export const metadata: Metadata = {
  title: 'Rodriguez Construction & Remodeling | Waco, TX',
  description: 'Rodriguez Construction & Remodeling — home builds, additions, remodeling, and painting in Waco, TX. Luis and his crew. 4.9 stars, 14 reviews. Free estimates.',
}

const PHONE = '(254) 447-7325'
const CITY = 'Waco'

const trustBadges = [
  { icon: '✦', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Free Estimates' },
  { icon: '★', label: '4.9-Star Rated' },
  { icon: '✦', label: 'Waco, TX' },
  { icon: '✦', label: 'Family-Owned' },
]

const services = [
  {
    name: 'New Home Construction',
    description: 'Luis and his crew have handled the majority of new home builds from foundation to finish — one crew, one price, no surprises.',
    href: '/services#new-construction',
  },
  {
    name: 'Room & Garage Additions',
    description: 'Seamless additions that look like they were always part of the house. Garage conversions, guest suites, expanded living areas.',
    href: '/services#additions',
  },
  {
    name: 'Kitchen & Bath Remodeling',
    description: 'Full kitchen renovations and bathroom remodels — tile, fixtures, cabinetry, and layout changes all handled in-house.',
    href: '/services#kitchen-bath',
  },
  {
    name: 'Interior Painting',
    description: 'Professional interior painting with proper prep and clean results. Condos, single-family homes, and rental properties.',
    href: '/services#painting',
  },
  {
    name: 'Drywall Repair & Finishing',
    description: 'Crack repair, patch work, texture matching, and new drywall installation. Luis\'s crew shows up on time and cleans up after.',
    href: '/services#drywall',
  },
  {
    name: 'Flooring Installation',
    description: 'Hardwood, luxury vinyl plank, and tile flooring — demo, subfloor prep, and install handled by Rodriguez\'s own crew.',
    href: '/services#flooring',
  },
]

const reviews = [
  {
    author: 'Zane Christian',
    location: 'Waco, TX',
    text: 'We used Rodriguez Construction for the overwhelming majority of our new home build and they were exceptional. Luis and his crew do great work and they stand behind their work. Couldn\'t have been happier with the experience and the process. I\'ve recommended him to family and friends and he has never disappointed.',
    rating: 5,
  },
  {
    author: 'Genevieve Blackwelder',
    location: 'Waco, TX',
    text: 'Luis and his crew did a marvelous job with our garage addition. He supervised the whole project and completed all the details himself. The results were amazing. They were always respectful and ready to help. Their work was very professional and the personal detail was wonderful. We would recommend them.',
    rating: 5,
  },
  {
    author: 'Carl Grillo',
    location: 'Waco, TX',
    text: 'Luis and his crew met our limited timeframe to get interior painting done. They did a great job on our condo! They cleaned up after the job. Friendly and professional!',
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
  { value: '4.9★', label: 'Google Rating' },
  { value: '14', label: 'Reviews' },
  { value: 'Free', label: 'Estimates' },
]

export default function HomePage() {
  return (
    <main>
      {/* Contractor layout: TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection */}
      <TrustBar badges={trustBadges} />
      <Hero
        headline="Fast estimates. Reliable crews. Built right."
        subheadline={`Rodriguez Construction & Remodeling handles ${CITY} projects from new home builds to garage additions, interior remodeling, and painting. Luis and his crew show up on time and stand behind the work.`}
        phone={PHONE}
        badge="Serving Waco, TX · 4.9 Stars · 14 Reviews"
        primaryCTA="Call Now — Free Estimate"
        secondaryCTA="See Our Work"
        secondaryHref="/projects"
        emergency={false}
        stats={stats}
      />
      <ReviewsPreview
        reviews={reviews}
        totalCount={14}
        rating={4.9}
        headline="What Waco homeowners say about Luis's crew"
        sectionLabel="Customer Reviews"
      />
      <ServicesPreview
        services={services}
        headline="Construction and remodeling done right"
        sectionLabel="What We Do"
        city={CITY}
      />
      {photos.length >= 3 && (
        <ProjectsPreview
          photos={photos}
          headline="Real work, real results"
          sectionLabel="Recent Projects"
        />
      )}
      <CTASection
        headline="Ready to start your project?"
        subtext={`Call Luis for a free, no-obligation estimate. Proudly serving ${CITY} and surrounding communities.`}
        phone={PHONE}
        ctaLabel={`Call ${PHONE}`}
        secondaryLabel="Request an Estimate Online"
        secondaryHref="/contact"
        footnote="Licensed & Insured · Serving Waco, TX · Free Estimates"
      />
    </main>
  )
}
