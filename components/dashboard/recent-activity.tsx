"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Trophy, TrendingDown, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "win",
    game: "Blackjack",
    amount: "+$125.50",
    time: "2 hours ago",
    icon: Trophy,
  },
  {
    id: 2,
    type: "loss",
    game: "Slots",
    amount: "-$50.00",
    time: "4 hours ago",
    icon: TrendingDown,
  },
  {
    id: 3,
    type: "win",
    game: "Dice",
    amount: "+$75.25",
    time: "6 hours ago",
    icon: Trophy,
  },
]

export function RecentActivity() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${activity.type === "win" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  <Icon className={`w-4 h-4 ${activity.type === "win" ? "text-green-400" : "text-red-400"}`} />
                </div>
                <div>
                  <p className="text-white font-medium">{activity.game}</p>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </div>
                </div>
              </div>
              <span className={`font-bold ${activity.type === "win" ? "text-green-400" : "text-red-400"}`}>
                {activity.amount}
              </span>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}
