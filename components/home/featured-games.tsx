"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Play, Star, Users } from "lucide-react"
import Link from "next/link"

const games = [
  {
    id: 1,
    name: "Spin the Wheel",
    description: "Test your luck with our exciting wheel of fortune",
    image: "/placeholder.svg?height=200&width=300&text=Spin+Wheel",
    rating: 4.9,
    players: "12.5K",
    href: "/games",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Blackjack Pro",
    description: "Classic card game with modern twists",
    image: "/placeholder.svg?height=200&width=300&text=Blackjack",
    rating: 4.8,
    players: "8.2K",
    href: "/games/blackjack",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    name: "Lucky Slots",
    description: "Premium slot machines with massive jackpots",
    image: "/placeholder.svg?height=200&width=300&text=Slots",
    rating: 4.7,
    players: "15.3K",
    href: "/games/slots",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Dice Master",
    description: "Roll the dice and win big rewards",
    image: "/placeholder.svg?height=200&width=300&text=Dice",
    rating: 4.6,
    players: "6.8K",
    href: "/games/dice",
    gradient: "from-orange-400 to-red-500",
  },
]

export function FeaturedGames() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Games
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover our most popular games with stunning graphics and exciting gameplay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={game.href}>
                      <Button size="sm" className={`bg-gradient-to-r ${game.gradient} hover:opacity-90 text-white`}>
                        <Play className="w-4 h-4 mr-2" />
                        Play Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm">{game.players}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/games">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold"
            >
              View All Games
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
