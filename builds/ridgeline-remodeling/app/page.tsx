import type { Metadata } from 'next'
import TrustBar from '../components/TrustBar'
import Hero from '../components/Hero'
import ReviewsPreview from '../components/ReviewsPreview'
import ServicesPreview from '../components/ServicesPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import CTASection from '../components/CTASection'

export const metadata: Metadata = {
  title: 'Ridgeline Remodeling | Waco, TX',
  description: 'Waco\'s premier remodeling contractor since 2009. Kitchen remodels, bathroom renovations & whole-home transformations. Licensed & insured. Free estimates.',
}

const PHONE = '(254) 401-7820'

export default function HomePage() {
  return (
    <main>
      <TrustBar />
      <Hero
        headline="Built to last. Finished to impress."
        subheadline="Ridgeline Remodeling has been transforming Waco homes since 2009 — kitchens, bathrooms, and whole-home remodels done right, on schedule, and built to endure."
        phone={PHONE}
        badge="Waco's Trusted Remodeler Since 2009"
        primaryCTA="Call for a Free Estimate"
        secondaryCTA="View Our Work"
        secondaryHref="/projects"
      />
      <ReviewsPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <CTASection
        headline="Ready to transform your home?"
        subtext="We give honest estimates, set a real schedule, and show up every day until the job is done. Call us to get started — no obligation."
        phone={PHONE}
        ctaLabel="Call (254) 401-7820"
        secondaryLabel="Request an Estimate Online"
        secondaryHref="/contact"
      />
    </main>
  )
}
