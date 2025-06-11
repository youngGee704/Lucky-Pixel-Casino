"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, TrendingUp } from "lucide-react"

const featuredGames = [
  {
    id: 1,
    name: "Golden Fortune",
    type: "Slots",
    image: "/placeholder.svg?height=300&width=200&text=Golden+Fortune",
    rating: 4.8,
    players: 1243,
    isHot: true,
    isNew: false,
  },
  {
    id: 2,
    name: "European Roulette",
    type: "Roulette",
    image: "/placeholder.svg?height=300&width=200&text=European+Roulette",
    rating: 4.9,
    players: 756,
    isHot: false,
    isNew: false,
  },
  {
    id: 3,
    name: "Diamond Blitz",
    type: "Slots",
    image: "/placeholder.svg?height=300&width=200&text=Diamond+Blitz",
    rating: 4.7,
    players: 987,
    isHot: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Classic Blackjack",
    type: "Blackjack",
    image: "/placeholder.svg?height=300&width=200&text=Classic+Blackjack",
    rating: 4.9,
    players: 1102,
    isHot: false,
    isNew: false,
  },
]

export function FeaturedGames() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-gold-500">
            Featured Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular games, handpicked for the ultimate gaming experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredGames.map((game) => (
            <Card
              key={game.id}
              className="group overflow-hidden border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex gap-1">
                  {game.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-white">NEW</Badge>}
                  {game.isHot && <Badge className="bg-red-500 hover:bg-red-600 text-white">HOT</Badge>}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    asChild
                  >
                    <Link href={`/games/${game.id}`}>Play Now</Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{game.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{game.type}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{game.players}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-purple-500/20 hover:bg-purple-500/10" asChild>
            <Link href="/games">
              View All Games
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
