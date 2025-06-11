"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to LuckyDrip Casino",
      subtitle: "Where Fortune Meets Fun",
      description:
        "Experience the thrill of premium online gaming with our exclusive collection of slots, table games, and live dealer experiences.",
      cta: "Start Playing",
      image: "/placeholder.svg?height=600&width=800&text=Casino+Hero+1",
    },
    {
      title: "Massive Jackpots Await",
      subtitle: "Win Big Today",
      description:
        "Join thousands of winners who have struck it rich with our progressive jackpots and daily tournaments.",
      cta: "View Jackpots",
      image: "/placeholder.svg?height=600&width=800&text=Casino+Hero+2",
    },
    {
      title: "VIP Treatment for All",
      subtitle: "Premium Gaming Experience",
      description:
        "Enjoy exclusive bonuses, personalized support, and premium features designed for the ultimate gaming experience.",
      cta: "Join VIP",
      image: "/placeholder.svg?height=600&width=800&text=Casino+Hero+3",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-gold-900/80 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gold-300">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-200">{slides[currentSlide].subtitle}</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">{slides[currentSlide].description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-gold-500 hover:from-purple-700 hover:to-gold-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/games">
                  <Play className="mr-2 h-5 w-5" />
                  {slides[currentSlide].cta}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                asChild
              >
                <Link href="/auth/sign-up">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gold-500 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-gold-500 opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float-delayed">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-purple-500 opacity-30 blur-lg" />
      </div>
    </section>
  )
}
