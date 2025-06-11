"use client"

import { BlackjackGame } from "@/components/games/blackjack/blackjack-game"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlackjackPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/games" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Games
        </Link>
      </div>

      <GlassCard className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Blackjack
        </h1>
        <BlackjackGame />
      </GlassCard>
    </div>
  )
}
