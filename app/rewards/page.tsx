"use client"

import { motion } from "framer-motion"
import { RewardsStore } from "@/components/rewards/rewards-store"
import { UserPoints } from "@/components/rewards/user-points"
import { RewardHistory } from "@/components/rewards/reward-history"

export default function RewardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Rewards Store
        </h1>
        <p className="text-slate-400 text-lg">Spend your points on amazing rewards</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <RewardsStore />
        </div>

        <div className="space-y-8">
          <UserPoints />
          <RewardHistory />
        </div>
      </div>
    </div>
  )
}
