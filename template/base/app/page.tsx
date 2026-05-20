// Home page — overwritten per business.
// Section ORDER is determined by aura layout_variant.section_order.
// Replace all PLACEHOLDER values with real data from business.json.
//
// Section order by aura (reorder imports and JSX below accordingly):
//   industrial:  TrustBar → Hero → ServicesPreview → ReviewsPreview → ProjectsPreview → CTASection
//   contractor:  TrustBar → Hero → ReviewsPreview → ServicesPreview → ProjectsPreview → CTASection
//   coastal:     Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
//   luxury:      Hero → ProjectsPreview → ServicesPreview → ReviewsPreview → CTASection
//   minimal:     Hero → ServicesPreview → ReviewsPreview → CTASection
import type { Metadata } from 'next'
import TrustBar from '../components/TrustBar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import ReviewsPreview from '../components/ReviewsPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import CTASection from '../components/CTASection'

export const metadata: Metadata = {
  title: 'BUSINESS_NAME | CITY',
  description: 'BUSINESS_NAME — professional CATEGORY services in CITY. Licensed & insured. Free estimates.',
}

const PHONE = 'PHONE'
const CITY = 'CITY'

// — Trust badges — adapt to aura (see design system JSON trustBadges)
const trustBadges = [
  { icon: '✦', label: 'Licensed & Insured' },
  { icon: '✦', label: 'Free Estimates' },
  { icon: '✦', label: '5-Star Rated' },
  { icon: '✦', label: 'Locally Owned' },
]

// — Services preview (max 6 items, populate from business.json) —
const services = [
  {
    name: 'SERVICE_NAME',
    description: 'SERVICE_DESCRIPTION — specific to this business, local keywords, trust language.',
    href: '/services#service-slug',
  },
]

// — Featured reviews (max 3, from business.json reviews array) —
const reviews = [
  {
    author: 'AUTHOR_NAME',
    location: 'CITY, STATE',
    text: 'REVIEW_TEXT — use verbatim from business.json reviews.',
    rating: 5,
  },
]

// — Real photo paths from public/images/ — set to [] if fewer than 3 exist —
const photos: string[] = []

// — Hero stats (optional, from business.json if available) —
const stats = [
  { value: 'XX+', label: 'Years in Business' },
  { value: 'XXX+', label: 'Projects Completed' },
  { value: '5.0', label: 'Google Rating' },
]

export default function HomePage() {
  return (
    <main>
      {/* DEFAULT section order: industrial/contractor — reorder per aura */}
      <TrustBar badges={trustBadges} />
      <Hero
        headline="TAGLINE_HEADLINE"
        subheadline={`TAGLINE_SUBHEADLINE. Serving ${CITY} and surrounding areas.`}
        phone={PHONE}
        badge={`Serving ${CITY} Since YEAR`}
        primaryCTA="Call Now — Free Estimate"
        secondaryCTA="View Our Work"
        secondaryHref="/projects"
        emergency={false}
        stats={stats}
      />
      <ReviewsPreview
        reviews={reviews}
        totalCount={0}
        rating={5.0}
        headline="What Our Customers Say"
        sectionLabel={`${CITY} Reviews`}
      />
      <ServicesPreview
        services={services}
        headline="Trusted services built for CITY"
        sectionLabel="What We Do"
        city={CITY}
      />
      {photos.length >= 3 && (
        <ProjectsPreview
          photos={photos}
          headline="Work we stand behind"
          sectionLabel="Recent Projects"
        />
      )}
      <CTASection
        headline="Ready to Get Started?"
        subtext={`Contact us today for a free estimate. Proudly serving ${CITY}.`}
        phone={PHONE}
        ctaLabel={`Call Now — ${PHONE}`}
        secondaryLabel="Request an Estimate Online"
        secondaryHref="/contact"
        footnote={`Licensed & Insured · Serving ${CITY} · Free Estimates`}
      />
    </main>
  )
}
