"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { TrendingUp, DollarSign, Trophy, Clock } from "lucide-react"

const stats = [
  {
    title: "Balance",
    value: "$1,234.56",
    change: "+12.5%",
    icon: DollarSign,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Total Winnings",
    value: "$5,678.90",
    change: "+8.2%",
    icon: TrendingUp,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Games Won",
    value: "42",
    change: "+15.3%",
    icon: Trophy,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Play Time",
    value: "24h 30m",
    change: "+5.7%",
    icon: Clock,
    color: "from-orange-400 to-red-500",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400">{stat.title}</p>
            </GlassCard>
          </motion.div>
        )
      })}
    </div>
  )
}
