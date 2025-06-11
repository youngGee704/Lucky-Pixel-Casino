"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Gamepad2, Trophy, User, Gift, Menu, X, Wallet, Settings } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Games", href: "/games", icon: Gamepad2 },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Rewards", href: "/rewards", icon: Gift },
  { name: "Profile", href: "/profile", icon: User },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAuthenticated = pathname.includes("dashboard") || pathname.includes("profile") || pathname.includes("games")

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center"
            >
              <span className="text-xl font-bold text-white">LP</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              LuckyPixel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <Wallet className="w-4 h-4 mr-2" />
                  $1,234.56
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <Settings className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" className="text-slate-300 hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-800"
          >
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <div
                      className={`px-4 py-3 rounded-lg flex items-center space-x-3 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {!isAuthenticated && (
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
