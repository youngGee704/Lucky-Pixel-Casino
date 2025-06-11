import { Clock, TrendingUp, TrendingDown } from "lucide-react"

const gameHistory = [
  { id: 1, game: "Golden Fortune", date: "2023-06-10 14:30", result: "win", amount: 125.5, bet: 25.0 },
  { id: 2, game: "European Roulette", date: "2023-06-10 13:45", result: "loss", amount: -50.0, bet: 50.0 },
  { id: 3, game: "Classic Blackjack", date: "2023-06-10 12:15", result: "win", amount: 75.0, bet: 25.0 },
  { id: 4, game: "Diamond Blitz", date: "2023-06-09 19:20", result: "win", amount: 200.25, bet: 30.0 },
  { id: 5, game: "Lucky Sevens", date: "2023-06-09 18:10", result: "loss", amount: -40.0, bet: 40.0 },
  { id: 6, game: "Neon Dreams", date: "2023-06-09 16:45", result: "win", amount: 89.75, bet: 15.0 },
]

export function GameHistory() {
  return (
    <div className="space-y-3">
      {gameHistory.map((session) => (
        <div
          key={session.id}
          className="flex items-center justify-between p-4 rounded-lg border border-purple-500/10 hover:border-purple-500/20 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                session.result === "win" ? "bg-green-500/10" : "bg-red-500/10"
              }`}
            >
              {session.result === "win" ? (
                <TrendingUp className="h-5 w-5 text-green-500" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div>
              <p className="font-medium">{session.game}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {session.date}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-bold ${session.result === "win" ? "text-green-500" : "text-red-500"}`}>
              {session.result === "win" ? "+" : ""}${session.amount.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">Bet: ${session.bet.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
