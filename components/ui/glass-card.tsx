import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-2xl shadow-2xl", className)}
      {...props}
    >
      {children}
    </div>
  )
}
