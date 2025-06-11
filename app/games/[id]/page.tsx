"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, TrendingUp, Play, ArrowLeft } from "lucide-react"
import { GamePreview } from "@/components/game-preview"

// Mock data for games
const GAMES = [
  {
    id: "1",
    name: "Golden Fortune",
    type: "slots",
    popularity: 4.8,
    players: 1243,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Spin the reels of fortune and discover golden treasures in this exciting slot game with multiple bonus features and free spins.",
  },
  {
    id: "2",
    name: "Diamond Blitz",
    type: "slots",
    popularity: 4.7,
    players: 987,
    image: "/placeholder.svg?height=400&width=600",
    description: "A dazzling slot experience with cascading diamonds and multipliers that can lead to massive payouts.",
  },
  {
    id: "3",
    name: "European Roulette",
    type: "roulette",
    popularity: 4.9,
    players: 756,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "The classic European roulette with a single zero pocket, offering better odds and an elegant gaming experience.",
  },
  {
    id: "4",
    name: "Classic Blackjack",
    type: "blackjack",
    popularity: 4.9,
    players: 1102,
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Test your skills in this classic blackjack game where strategy and luck combine for the perfect gaming experience.",
  },
]

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [game, setGame] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundGame = GAMES.find((g) => g.id === params.id)
      setGame(foundGame || GAMES[0])
      setIsLoading(false)
    }, 800)
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6 group" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Games
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden border border-purple-500/20 shadow-xl shadow-purple-500/10">
            {isPlaying ? (
              <GamePreview game={game} />
            ) : (
              <div className="relative">
                <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-[60vh] object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full w-20 h-20 bg-purple-600 hover:bg-purple-700 hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-700/50"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className="h-10 w-10" />
                    <span className="sr-only">Play Game</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline" className="bg-gold-500/10 text-gold-500 border-gold-500/20">
                {game.type.charAt(0).toUpperCase() + game.type.slice(1)}
              </Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
                <span>{game.popularity}</span>
              </div>
            </div>
            <p className="text-gray-400">{game.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-sm text-gray-400">Active Players</span>
              </div>
              <p className="text-2xl font-bold">{game.players.toLocaleString()}</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-sm text-gray-400">Win Rate</span>
              </div>
              <p className="text-2xl font-bold">96.5%</p>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-700/30"
            onClick={() => setIsPlaying(true)}
          >
            Play Now
          </Button>

          <Button variant="outline" size="lg" className="w-full border-purple-500/20 hover:bg-purple-500/10">
            Add to Favorites
          </Button>
        </div>
      </div>
    </div>
  )
}
