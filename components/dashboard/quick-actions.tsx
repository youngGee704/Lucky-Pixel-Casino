"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Plus, Minus, Play, Settings } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
      <div className="space-y-3">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Deposit Funds
        </Button>
        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
          <Minus className="w-4 h-4 mr-2" />
          Withdraw
        </Button>
        <Link href="/games">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
            <Play className="w-4 h-4 mr-2" />
            Play Games
          </Button>
        </Link>
        <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </GlassCard>
  )
}
