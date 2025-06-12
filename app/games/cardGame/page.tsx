"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowLeft, Shuffle, Trophy, Zap } from 'lucide-react'
import Link from "next/link"

interface Card {
  id: string
  suit: "♠" | "♥" | "♦" | "♣"
  value: string
  numericValue: number
  color: "red" | "black"
}

const suits = ["♠", "♥", "♦", "♣"] as const
const values = [
  { value: "A", numeric: 14 },
  { value: "K", numeric: 13 },
  { value: "Q", numeric: 12 },
  { value: "J", numeric: 11 },
  { value: "10", numeric: 10 },
  { value: "9", numeric: 9 },
  { value: "8", numeric: 8 },
  { value: "7", numeric: 7 },
  { value: "6", numeric: 6 },
  { value: "5", numeric: 5 },
  { value: "4", numeric: 4 },
  { value: "3", numeric: 3 },
  { value: "2", numeric: 2 },
]

function createDeck(): Card[] {
  const deck: Card[] = []
  suits.forEach((suit) => {
    values.forEach(({ value, numeric }) => {
      deck.push({
        id: `${suit}-${value}`,
        suit,
        value,
        numericValue: numeric,
        color: suit === "♥" || suit === "♦" ? "red" : "black",
      })
    })
  })
  return deck.sort(() => Math.random() - 0.5)
}

function DealingCard({ card, delay = 0, onClick }: { card: Card; delay?: number; onClick?: () => void }) {
  return (
    <motion.div
      initial={{ x: -200, y: -200, rotate: -45, scale: 0 }}
      animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
      exit={{ x: 200, y: -200, rotate: 45, scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay,
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative cursor-pointer"
    >
      <div
        className={`w-24 h-36 md:w-28 md:h-40 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg border-2 border-gray-300 flex flex-col justify-between p-2 ${
          onClick ? "hover:shadow-cyan-400/50 hover:shadow-xl transition-all duration-300" : ""
        }`}
      >
        <div className={`text-lg md:text-xl font-bold ${card.color === "red" ? "text-red-500" : "text-black"}`}>
          {card.value}
        </div>
        <div className={`text-3xl md:text-4xl ${card.color === "red" ? "text-red-500" : "text-black"} self-center`}>
          {card.suit}
        </div>
        <div
          className={`text-lg md:text-xl font-bold ${
            card.color === "red" ? "text-red-500" : "text-black"
          } self-end rotate-180`}
        >
          {card.value}
        </div>
      </div>
    </motion.div>
  )
}

function CardBack({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ x: -200, y: -200, rotate: -45, scale: 0 }}
      animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay,
      }}
      className="w-24 h-36 md:w-28 md:h-40 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl shadow-lg border-2 border-purple-400 flex items-center justify-center"
    >
      <div className="text-white text-2xl md:text-3xl font-bold">LP</div>
    </motion.div>
  )
}

export default function CardBattlePage() {
  const [deck, setDeck] = useState<Card[]>([])
  const [playerCard, setPlayerCard] = useState<Card | null>(null)
  const [computerCard, setComputerCard] = useState<Card | null>(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [gameState, setGameState] = useState<"waiting" | "dealing" | "revealing" | "result">("waiting")
  const [winner, setWinner] = useState<"player" | "computer" | "tie" | null>(null)
  const [balance, setBalance] = useState(1000)
  const [bet, setBet] = useState(50)
  const [isGameActive, setIsGameActive] = useState(false)

  useEffect(() => {
    setDeck(createDeck())
  }, [])

  const startNewRound = () => {
    if (deck.length < 2) {
      setDeck(createDeck())
      return
    }

    if (balance < bet) {
      return
    }

    setBalance((prev) => prev - bet)
    setIsGameActive(true)
    setGameState("dealing")
    setWinner(null)

    const newDeck = [...deck]
    const playerNewCard = newDeck.pop()!
    const computerNewCard = newDeck.pop()!

    setDeck(newDeck)
    setPlayerCard(playerNewCard)
    setComputerCard(computerNewCard)

    setTimeout(() => {
      setGameState("revealing")
      
      setTimeout(() => {
        setGameState("result")
        
        let roundWinner: "player" | "computer" | "tie"
        if (playerNewCard.numericValue > computerNewCard.numericValue) {
          roundWinner = "player"
          setPlayerScore((prev) => prev + 1)
          setBalance((prev) => prev + bet * 2)
        } else if (computerNewCard.numericValue > playerNewCard.numericValue) {
          roundWinner = "computer"
          setComputerScore((prev) => prev + 1)
        } else {
          roundWinner = "tie"
          setBalance((prev) => prev + bet)
        }
        
        setWinner(roundWinner)
        setIsGameActive(false)
        
        setTimeout(() => {
          setGameState("waiting")
        }, 3000)
      }, 1000)
    }, 1500)
  }

  const resetGame = () => {
    setPlayerScore(0)
    setComputerScore(0)
    setPlayerCard(null)
    setComputerCard(null)
    setGameState("waiting")
    setWinner(null)
    setBalance(1000)
    setDeck(createDeck())
    setIsGameActive(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/games" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Games
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Card Battle
            </h1>
            <p className="text-slate-400 text-lg">Higher card wins! Place your bet and test your luck.</p>
          </motion.div>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <GlassCard className="p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">${balance}</div>
            <div className="text-slate-400 text-sm">Balance</div>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{playerScore}</div>
            <div className="text-slate-400 text-sm">Your Wins</div>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{computerScore}</div>
            <div className="text-slate-400 text-sm">Computer Wins</div>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">${bet}</div>
            <div className="text-slate-400 text-sm">Current Bet</div>
          </GlassCard>
        </div>

        {/* Game Area */}
        <GlassCard className="p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Player Side */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-cyan-400 mb-6"
              >
                Your Card
              </motion.h3>
              <div className="flex justify-center mb-4">
                <AnimatePresence mode="wait">
                  {gameState === "waiting" && (
                    <motion.div
                      key="waiting-player"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-24 h-36 md:w-28 md:h-40 border-2 border-dashed border-cyan-400/50 rounded-xl flex items-center justify-center"
                    >
                      <div className="text-cyan-400/50 text-4xl">?</div>
                    </motion.div>
                  )}
                  {gameState === "dealing" && <CardBack delay={0} />}
                  {(gameState === "revealing" || gameState === "result") && playerCard && (
                    <DealingCard card={playerCard} delay={0} />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Computer Side */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-red-400 mb-6"
              >
                Computer Card
              </motion.h3>
              <div className="flex justify-center mb-4">
                <AnimatePresence mode="wait">
                  {gameState === "waiting" && (
                    <motion.div
                      key="waiting-computer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-24 h-36 md:w-28 md:h-40 border-2 border-dashed border-red-400/50 rounded-xl flex items-center justify-center"
                    >
                      <div className="text-red-400/50 text-4xl">?</div>
                    </motion.div>
                  )}
                  {(gameState === "dealing" || gameState === "revealing") && <CardBack delay={0.2} />}
                  {gameState === "result" && computerCard && <DealingCard card={computerCard} delay={0.5} />}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Result Display */}
          <AnimatePresence>
            {gameState === "result" && winner && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center mt-8"
              >
                <div
                  className={`text-4xl md:text-6xl font-bold mb-4 ${
                    winner === "player"
                      ? "text-green-400"
                      : winner === "computer"
                      ? "text-red-400"
                      : "text-yellow-400"
                  }`}
                >
                  {winner === "player" && (
                    <motion.div
                      initial={{ rotate: -180 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <Trophy className="w-12 h-12 mr-4" />
                      You Win!
                    </motion.div>
                  )}
                  {winner === "computer" && "Computer Wins!"}
                  {winner === "tie" && "It's a Tie!"}
                </div>
                <div className="text-slate-400">
                  {winner === "player" && `You won $${bet * 2}!`}
                  {winner === "computer" && `You lost $${bet}`}
                  {winner === "tie" && "Bet returned"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Bet Controls */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Bet:</span>
            <div className="flex gap-2">
              {[25, 50, 100, 250].map((amount) => (
                <Button
                  key={amount}
                  variant={bet === amount ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBet(amount)}
                  disabled={isGameActive}
                  className={
                    bet === amount
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "border-slate-600 text-slate-300 hover:bg-slate-800"
                  }
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>

          {/* Game Controls */}
          <div className="flex gap-4">
            <Button
              onClick={startNewRound}
              disabled={isGameActive || balance < bet}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
            >
              {isGameActive ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Playing...
                </div>
              ) : (
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Deal Cards
                </div>
              )}
            </Button>

            <Button
              onClick={resetGame}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-xl font-semibold"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Reset Game
            </Button>
          </div>
        </div>

        {balance < bet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-4 text-red-400"
          >
            Insufficient balance! Reset the game or lower your bet.
          </motion.div>
        )}
      </div>
    </div>
  )
}