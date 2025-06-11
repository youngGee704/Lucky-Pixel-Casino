"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/ui/animated-card"
import { FloatingCoin } from "@/components/ui/floating-coin"
import { AnimatedDice } from "@/components/ui/animated-dice"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingCoin className="top-20 left-20" delay={0} />
        <FloatingCoin className="top-40 right-32" delay={1} />
        <FloatingCoin className="bottom-32 left-32" delay={2} />
        <AnimatedDice className="top-32 right-20" delay={0.5} />
        <AnimatedDice className="bottom-20 right-20" delay={1.5} />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Welcome to the Future of Gaming</span>
            <Zap className="w-5 h-5 text-purple-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lucky
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Pixel
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the ultimate casino adventure with cutting-edge graphics, immersive gameplay, and rewards that
            will blow your mind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/games">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Play className="w-6 h-6 mr-2" />
                Start Playing
              </Button>
            </Link>

            <Link href="/auth/register">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
              >
                Join Free
              </Button>
            </Link>
          </motion.div>

          {/* Animated Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-4 mt-16"
          >
            <AnimatedCard suit="♠" value="A" delay={0} />
            <AnimatedCard suit="♥" value="K" delay={0.2} />
            <AnimatedCard suit="♣" value="Q" delay={0.4} />
            <AnimatedCard suit="♦" value="J" delay={0.6} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
