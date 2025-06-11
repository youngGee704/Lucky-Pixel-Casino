import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Crown, Medal, Award } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "CryptoKing", avatar: "/placeholder.svg", winnings: 15420.5, icon: Crown },
  { rank: 2, name: "LuckyLady", avatar: "/placeholder.svg", winnings: 12350.75, icon: Medal },
  { rank: 3, name: "SlotMaster", avatar: "/placeholder.svg", winnings: 9876.25, icon: Award },
  { rank: 4, name: "GoldRush", avatar: "/placeholder.svg", winnings: 8543.0, icon: null },
  { rank: 5, name: "DiamondHands", avatar: "/placeholder.svg", winnings: 7234.5, icon: null },
]

export function Leaderboard() {
  return (
    <div className="space-y-3">
      {leaderboard.map((player) => {
        const IconComponent = player.icon
        return (
          <div
            key={player.rank}
            className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <span className="text-lg font-bold text-muted-foreground">#{player.rank}</span>
                {IconComponent && (
                  <IconComponent
                    className={`absolute -top-1 -right-1 h-4 w-4 ${
                      player.rank === 1 ? "text-gold-500" : player.rank === 2 ? "text-gray-400" : "text-orange-500"
                    }`}
                  />
                )}
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                <AvatarFallback className="bg-purple-600 text-white text-xs">
                  {player.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium">{player.name}</span>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-500">${player.winnings.toLocaleString()}</p>
              {player.rank <= 3 && (
                <Badge variant="outline" className="text-xs">
                  Top {player.rank}
                </Badge>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
