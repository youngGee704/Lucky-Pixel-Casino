"use client"

import { GlassCard } from "@/components/ui/glass-card"

export function DashboardChart() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Earnings Overview</h3>
      <div className="h-64 flex items-center justify-center text-slate-400">
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <p>Chart visualization would go here</p>
        </div>
      </div>
    </GlassCard>
  )
}
