import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock } from "lucide-react"

interface RecentWinsProps {
  expanded?: boolean
}

const wins = [
  { id: 1, game: "Golden Fortune", amount: 250.5, time: "2 hours ago", multiplier: "5x" },
  { id: 2, game: "Diamond Blitz", amount: 125.75, time: "4 hours ago", multiplier: "3x" },
  { id: 3, game: "Lucky Sevens", amount: 89.25, time: "6 hours ago", multiplier: "2x" },
  { id: 4, game: "Neon Dreams", amount: 340.0, time: "1 day ago", multiplier: "8x" },
  { id: 5, game: "Mystic Gems", amount: 156.8, time: "1 day ago", multiplier: "4x" },
]

export function RecentWins({ expanded = false }: RecentWinsProps) {
  const displayWins = expanded ? wins : wins.slice(0, 3)

  return (
    <div className="space-y-3">
      {displayWins.map((win) => (
        <Card key={win.id} className="border-purple-500/10 hover:border-purple-500/20 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-gold-500 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{win.game}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {win.time}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-500">${win.amount.toFixed(2)}</p>
                <Badge variant="outline" className="text-xs">
                  {win.multiplier}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
