"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

const games = [
  { id: 1, name: "Blackjack", href: "/games/blackjack", image: "🃏" },
  { id: 2, name: "Slots", href: "/games/slots", image: "🎰" },
  { id: 3, name: "Dice", href: "/games/dice", image: "🎲" },
  { id: 4, name: "Roulette", href: "/games", image: "🎡" },
  { id: 5, name: "Poker", href: "/games", image: "♠️" },
  { id: 6, name: "Baccarat", href: "/games", image: "🎴" },
]

export function GameGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          All Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <GlassCard className="p-6 text-center">
                <div className="text-6xl mb-4">{game.image}</div>
                <h3 className="text-xl font-bold text-white mb-4">{game.name}</h3>
                <Link href={game.href}>
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Play Now
                  </Button>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
