// Overwritten per business. Claude writes a believable, local-feeling company story from name/review signals.
// Avoid generic AI copy — match tone to the inferred aura.
import About from '../../components/About'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'About | BUSINESS_NAME',
  description: 'Learn about BUSINESS_NAME — serving CITY with quality and integrity.',
}

export default function AboutPage() {
  const phone = 'PHONE'
  const businessName = 'BUSINESS_NAME'
  const city = 'CITY'

  return (
    <main>
      <About
        name={businessName}
        city={city}
        years={10}
        story="COMPANY_STORY — written to feel local, specific, and believable. Reference the business name, the city, how they got started, and what makes them different. Match the aura tone."
        values={[
          'VALUE_ONE — specific to this business type',
          'VALUE_TWO',
          'VALUE_THREE',
        ]}
        certifications={['CERT_ONE', 'CERT_TWO']}
      />
      <CTASection
        headline="Work With a Team You Can Trust"
        subtext={`Proudly serving ${city} and the surrounding community.`}
        phone={phone}
        ctaText="Get in Touch"
        secondaryCTA="View Services"
        secondaryHref="/services"
      />
    </main>
  )
}
