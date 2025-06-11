"use client"

import { motion } from "framer-motion"

interface AnimatedCardProps {
  suit: string
  value: string
  delay?: number
}

export function AnimatedCard({ suit, value, delay = 0 }: AnimatedCardProps) {
  const isRed = suit === "♥" || suit === "♦"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: 180 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        rotateY: 15,
        transition: { duration: 0.3 },
      }}
      className="relative w-16 h-24 md:w-20 md:h-32 perspective-1000"
    >
      <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg border border-gray-300 flex flex-col justify-between p-2 transform-style-preserve-3d">
        <div className={`text-lg md:text-xl font-bold ${isRed ? "text-red-500" : "text-black"}`}>{value}</div>
        <div className={`text-2xl md:text-3xl ${isRed ? "text-red-500" : "text-black"} self-center`}>{suit}</div>
        <div className={`text-lg md:text-xl font-bold ${isRed ? "text-red-500" : "text-black"} self-end rotate-180`}>
          {value}
        </div>
      </div>
    </motion.div>
  )
}
