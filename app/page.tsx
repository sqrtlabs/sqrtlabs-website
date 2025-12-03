import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { TrustedSection } from "@/components/landing/trusted-section"
import { TeamSection } from "@/components/landing/team-section"
import { CTASection } from "@/components/landing/cta-section"
import { ArticleStructuredData } from "@/components/structured-data"
import { homepageMetadata } from "./page.metadata"

export const metadata: Metadata = homepageMetadata

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Structured Data */}
      <ArticleStructuredData 
        title="SQRT Labs | Web3 Development Studio"
        description="We design and develop blockchain products that actually make sense in the real world. Smart contracts, dApps, protocol engineering, and miniapps."
        date="2024-03-20T00:00:00.000Z"
        author="SQRT Labs Team"
      />
      <main className="flex-1 xl:mt-8 2xl:mt-12">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TeamSection />
        <TrustedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}