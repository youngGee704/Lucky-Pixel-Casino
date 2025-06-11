"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { AchievementsBadges } from "@/components/dashboard/achievements-badges"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Welcome back, Player!
        </h1>
        <p className="text-slate-400 text-lg">Here's what's happening in your gaming world</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DashboardStats />
          <DashboardChart />
          <RecentActivity />
        </div>

        <div className="space-y-8">
          <QuickActions />
          <AchievementsBadges />
        </div>
      </div>
    </div>
  )
}
