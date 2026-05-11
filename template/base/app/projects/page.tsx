// Overwritten per business. If fewer than 3 real photos exist, replace Gallery with a text-based proof section.
// Never leave a broken or empty gallery — either fill it or remove it.
import Gallery from '../../components/Gallery'
import CTASection from '../../components/CTASection'

export const metadata = {
  title: 'Projects | BUSINESS_NAME',
  description: 'View completed projects by BUSINESS_NAME in CITY.',
}

export default function ProjectsPage() {
  const phone = 'PHONE'
  const city = 'CITY'

  // Populated from business.json photo paths — use relative paths from /public/images/
  const photos: string[] = []

  return (
    <main>
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '0.75rem', lineHeight: 1.1,
        }}>
          Our Projects
        </h1>
        <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '1rem' }}>
          Real work completed for customers in {city}.
        </p>
      </section>

      <Gallery photos={photos} title="Project Gallery" minPhotos={3} />

      <CTASection
        headline="Want Results Like These?"
        subtext="Call today for a free estimate on your project."
        phone={phone}
        ctaText="Call Now"
        secondaryCTA="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  )
}
