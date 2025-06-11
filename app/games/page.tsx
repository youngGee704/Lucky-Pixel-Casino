"use client"

import { GameZoneHero } from "@/components/games/game-zone-hero"
import { GameCategories } from "@/components/games/game-categories"
import { SpinTheWheel } from "@/components/games/spin-the-wheel"
import { GameGrid } from "@/components/games/game-grid"

export default function GamesPage() {
  return (
    <div className="space-y-12">
      <GameZoneHero />
      <div className="container mx-auto px-4">
        <SpinTheWheel />
        <GameCategories />
        <GameGrid />
      </div>
    </div>
  )
}
