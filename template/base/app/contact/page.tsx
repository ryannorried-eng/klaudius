// Overwritten per business. Claude fills in all contact details from business.json.
import Contact from '../../components/Contact'

export const metadata = {
  title: 'Contact | BUSINESS_NAME',
  description: 'Contact BUSINESS_NAME in CITY. Call for a free estimate.',
}

export default function ContactPage() {
  const phone = 'PHONE'
  const address = 'ADDRESS'
  const city = 'CITY'
  const hours = 'HOURS'
  const emergency = false // Set true if business operates 24/7
  const businessName = 'BUSINESS_NAME'

  return (
    <main>
      <Contact
        phone={phone}
        address={address}
        city={city}
        hours={hours}
        emergency={emergency}
        businessName={businessName}
      />
    </main>
  )
}
