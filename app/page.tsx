import { HeroSection } from "@/components/home/hero-section"
import { AnimatedStats } from "@/components/home/animated-stats"
import { FeaturedGames } from "@/components/home/featured-games"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { FloatingElements } from "@/components/ui/floating-elements"

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <FloatingElements />
      <HeroSection />
      <AnimatedStats />
      <FeaturedGames />
      <NewsletterSection />
    </div>
  )
}
