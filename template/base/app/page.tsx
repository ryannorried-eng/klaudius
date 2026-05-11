// Overwritten per business. Section order is determined by the inferred aura layout_variant.section_order.
// Replace all PLACEHOLDER values with real data from business.json before deploy.
import TrustBar from '../components/TrustBar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import ReviewsPreview from '../components/ReviewsPreview'
import Gallery from '../components/Gallery'
import CTASection from '../components/CTASection'

export default function Home() {
  // — Business data (all populated from business.json) —
  const name = 'BUSINESS_NAME'
  const tagline = 'TAGLINE'
  const phone = 'PHONE'
  const city = 'CITY'
  const rating = 5.0
  const reviewCount = 0
  const emergency = false

  // — Trust badges (adapt to aura: 24/7 for industrial, Licensed for contractor, etc.) —
  const trustBadges = ['Licensed & Insured', 'Free Estimates', '5-Star Rated', 'Locally Owned']

  // — Services preview (max 6 shown, links to /services) —
  const services = [
    { name: 'SERVICE_NAME', description: 'SERVICE_DESCRIPTION', icon: '' },
  ]

  // — Real photo paths from public/images/ — set to [] if fewer than 3 exist —
  const photos: string[] = []

  // — Featured reviews (max 3 shown) —
  const reviews = [{ author: 'AUTHOR', text: 'REVIEW_TEXT', rating: 5 }]

  // Default section order — reorder based on aura layout_variant.section_order:
  // industrial:  Hero → TrustBar → ServicesPreview → ReviewsPreview → Gallery → CTASection
  // contractor:  TrustBar → Hero → ReviewsPreview → ServicesPreview → Gallery → CTASection
  // coastal:     Hero → Gallery → ServicesPreview → ReviewsPreview → CTASection
  // luxury:      Hero → Gallery → ServicesPreview → ReviewsPreview → CTASection
  // minimal:     Hero → ServicesPreview → ReviewsPreview → CTASection
  return (
    <main>
      <TrustBar badges={trustBadges} />
      <Hero name={name} tagline={tagline} phone={phone} city={city} rating={rating} reviewCount={reviewCount} emergency={emergency} />
      <ServicesPreview services={services} city={city} />
      <ReviewsPreview reviews={reviews} totalCount={reviewCount} rating={rating} />
      <Gallery photos={photos} title="Our Work" minPhotos={3} />
      <CTASection
        headline="Ready to Get Started?"
        subtext="Contact us today for a free estimate."
        phone={phone}
        ctaText="Call Now"
        secondaryCTA="Get a Quote"
        secondaryHref="/contact"
      />
    </main>
  )
}
