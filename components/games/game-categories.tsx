"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Gamepad2, Dices, Spade, Target } from "lucide-react"

const categories = [
  {
    name: "Slots",
    icon: Gamepad2,
    count: 150,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Table Games",
    icon: Spade,
    count: 25,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Dice Games",
    icon: Dices,
    count: 12,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Arcade",
    icon: Target,
    count: 30,
    color: "from-orange-400 to-red-500",
  },
]

export function GameCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Game Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassCard className="p-6 text-center cursor-pointer">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-slate-400">{category.count} Games</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
