"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing! Check your email for exclusive offers.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1500)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Stay in the Loop
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive bonuses, new game releases, and special promotions
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-cyan-400 h-12"
                    disabled={status === "loading" || status === "success"}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold h-12 px-6"
                >
                  {status === "loading" ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : status === "success" ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Subscribed</span>
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-green-400 flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>{message}</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-red-400 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  <span>{message}</span>
                </motion.div>
              )}
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from LuckyPixel Casino.
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
