"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function GameZoneHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Game Zone
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose from our collection of premium games and start your winning journey
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Playing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
