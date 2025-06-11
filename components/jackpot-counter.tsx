"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function JackpotCounter() {
  const [jackpot, setJackpot] = useState(1234567.89)

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.random() * 10)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-r from-purple-600 to-gold-500 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <CardContent className="p-8 text-center relative z-10">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold">Progressive Jackpot</h3>
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-2 font-mono tracking-wider">
              ${jackpot.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-lg opacity-90">Growing every second • Next winner could be you!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
