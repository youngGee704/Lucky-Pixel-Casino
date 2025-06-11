"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react"

interface GamePreviewProps {
  game: {
    name: string
    type: string
  }
}

export function GamePreview({ game }: GamePreviewProps) {
  const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-br from-purple-900 to-gold-900 rounded-lg overflow-hidden">
      {/* Game Canvas Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-4xl">🎰</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
          <p className="text-lg opacity-80">Game Preview Mode</p>
          <p className="text-sm opacity-60 mt-2">This is a demo preview of the {game.type} game</p>
        </div>
      </div>

      {/* Game Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
        >
          <Maximize className="h-4 w-4" />
        </Button>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-gold-500 rounded-full animate-ping opacity-75" />
      <div className="absolute top-20 right-20 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-60" />
    </div>
  )
}
