import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Approach } from '@/components/approach'
import { Strategies } from '@/components/strategies'
import { HowItWorks } from '@/components/how-it-works'
import { RiskDisclosure } from '@/components/risk-disclosure'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Approach />
        <Strategies />
        <HowItWorks />
        <RiskDisclosure />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
