"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { RotateCw } from "lucide-react"

export function SpinTheWheel() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    const newRotation = rotation + 1800 + Math.random() * 360
    setRotation(newRotation)

    setTimeout(() => {
      setIsSpinning(false)
    }, 3000)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <GlassCard className="p-8 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Spin the Wheel
          </h2>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-6xl"
            >
              🎯
            </motion.div>
          </div>
          <Button
            onClick={handleSpin}
            disabled={isSpinning}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            <RotateCw className={`w-5 h-5 mr-2 ${isSpinning ? "animate-spin" : ""}`} />
            {isSpinning ? "Spinning..." : "Spin Now"}
          </Button>
        </GlassCard>
      </div>
    </section>
  )
}
