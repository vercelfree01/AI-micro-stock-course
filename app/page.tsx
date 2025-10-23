import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CourseContent } from "@/components/course-content"
import { Bonuses } from "@/components/bonuses"
import { Guarantee } from "@/components/guarantee"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CourseContent />
      <Bonuses />
      <Guarantee />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
