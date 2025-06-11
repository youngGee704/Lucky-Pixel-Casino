import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Play } from "lucide-react"

interface Game {
  id: number
  name: string
  type: string
  popularity: number
  image: string
}

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="group overflow-hidden border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="relative">
        <img
          src={game.image || "/placeholder.svg"}
          alt={game.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {game.type}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            size="sm"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
            asChild
          >
            <Link href={`/games/${game.id}`}>
              <Play className="mr-2 h-4 w-4" />
              Play Now
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">{game.name}</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
            <span>{game.popularity}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>Popular</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
