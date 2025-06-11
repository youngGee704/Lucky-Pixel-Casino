"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Users, Award, DollarSign, Clock } from "lucide-react"

const stats = [
  {
    id: 1,
    label: "Active Players",
    value: 25000,
    prefix: "",
    suffix: "+",
    icon: Users,
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    label: "Jackpots Won",
    value: 1250,
    prefix: "",
    suffix: "",
    icon: Award,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    label: "Total Payouts",
    value: 15000000,
    prefix: "$",
    suffix: "",
    icon: DollarSign,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    label: "Games Played",
    value: 5000000,
    prefix: "",
    suffix: "+",
    icon: Clock,
    color: "from-orange-400 to-red-500",
  },
]

export function AnimatedStats() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) =>
        prev.map((value, index) => {
          const target = stats[index].value
          const increment = Math.ceil(target / 50)
          const newValue = Math.min(value + increment, target)
          return newValue
        }),
      )
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            LuckyPixel by the Numbers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of players enjoying our premium gaming experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                    {stat.prefix}
                    {animatedStats[index].toLocaleString()}
                    {stat.suffix}
                  </h3>
                  <p className="text-slate-400">{stat.label}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
