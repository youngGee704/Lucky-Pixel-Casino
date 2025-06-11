import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { AuthProvider } from "@/components/providers/auth-provider"
import { ToastProvider } from "@/components/providers/toast-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "LuckyPixel Casino - Premium Online Gaming Experience",
  description: "Experience the future of online gaming with LuckyPixel's cutting-edge casino platform",
  keywords: "casino, online gaming, slots, blackjack, roulette, jackpot",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-inter antialiased">
        <AuthProvider>
          <ThemeProvider>
            <ToastProvider>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="relative z-10">
                  <Navbar />
                  <main>{children}</main>
                </div>
              </div>
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
