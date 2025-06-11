"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedDiceProps {
  className?: string
  delay?: number
}

export function AnimatedDice({ className, delay = 0 }: AnimatedDiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, 90, 180, 270, 360],
        y: [0, -15, 0],
      }}
      transition={{
        delay,
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={cn("absolute w-10 h-10 pointer-events-none", className)}
    >
      <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-lg border border-gray-300 flex items-center justify-center text-gray-800 font-bold text-lg">
        ⚃
      </div>
    </motion.div>
  )
}
