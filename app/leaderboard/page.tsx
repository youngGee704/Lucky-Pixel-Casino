"use client"

import { motion } from "framer-motion"
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table"
import { LeaderboardFilters } from "@/components/leaderboard/leaderboard-filters"
import { TopPlayers } from "@/components/leaderboard/top-players"
import { GlassCard } from "@/components/ui/glass-card"

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Leaderboard
        </h1>
        <p className="text-slate-400 text-lg">See how you rank against other players</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <GlassCard className="p-6">
            <LeaderboardFilters />
            <LeaderboardTable />
          </GlassCard>
        </div>

        <div>
          <TopPlayers />
        </div>
      </div>
    </div>
  )
}
