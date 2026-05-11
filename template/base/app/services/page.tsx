// Overwritten per business. Claude writes real service descriptions with local keywords from business.json.
import Services from '../../components/Services'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'Services | BUSINESS_NAME',
  description: 'Professional services in CITY. BUSINESS_NAME — licensed, insured, and trusted locally.',
}

export default function ServicesPage() {
  const phone = 'PHONE'
  const city = 'CITY'
  const businessName = 'BUSINESS_NAME'

  const services = [
    {
      name: 'SERVICE_NAME',
      description: 'SERVICE_DESCRIPTION — written with local keywords, trust language, and specific detail about what this service includes.',
      features: ['Feature one', 'Feature two', 'Feature three', 'Feature four'],
    },
  ]

  return (
    <main>
      <Services services={services} businessName={businessName} city={city} phone={phone} />
      <CTASection
        headline="Get a Free Estimate"
        subtext={`Serving ${city} and surrounding areas. Call today.`}
        phone={phone}
        ctaText="Call Now"
        secondaryCTA="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  )
}
