import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Target, Clock, Trophy } from "lucide-react"

const stats = [
  { label: "Total Winnings", value: "$2,456.75", icon: TrendingUp, color: "text-green-500" },
  { label: "Games Played", value: "127", icon: Target, color: "text-blue-500" },
  { label: "Play Time", value: "24h 15m", icon: Clock, color: "text-purple-500" },
  { label: "Achievements", value: "8", icon: Trophy, color: "text-gold-500" },
]

export function UserStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const IconComponent = stat.icon
        return (
          <Card key={stat.label} className="border-purple-500/10">
            <CardContent className="p-4 text-center">
              <IconComponent className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
