"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 rounded-full blur-xl"
      />
    </div>
  )
}
