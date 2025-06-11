"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCoinProps {
  className?: string
  delay?: number
}

export function FloatingCoin({ className, delay = 0 }: FloatingCoinProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        rotateY: [0, 180, 360],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={cn("absolute w-12 h-12 pointer-events-none", className)}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg flex items-center justify-center text-white font-bold text-lg border-2 border-yellow-300">
        $
      </div>
    </motion.div>
  )
}
