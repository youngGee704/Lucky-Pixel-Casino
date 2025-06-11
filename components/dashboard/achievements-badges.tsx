"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Trophy, Star, Target, Award } from "lucide-react"

const achievements = [
  { name: "First Win", icon: Trophy, earned: true },
  { name: "High Roller", icon: Star, earned: true },
  { name: "Lucky Streak", icon: Target, earned: false },
  { name: "Jackpot Winner", icon: Award, earned: false },
]

export function AchievementsBadges() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Achievements</h3>
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon
          return (
            <div
              key={achievement.name}
              className={`p-4 rounded-lg text-center ${
                achievement.earned ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20" : "bg-slate-800/50"
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-2 ${achievement.earned ? "text-cyan-400" : "text-slate-600"}`} />
              <p className={`text-sm ${achievement.earned ? "text-white" : "text-slate-500"}`}>{achievement.name}</p>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}
