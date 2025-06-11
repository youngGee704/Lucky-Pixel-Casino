"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock user state - in a real app, this would come from auth context
  const isLoggedIn = pathname.includes("/dashboard")

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
    { name: "Promotions", href: "/promotions" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-gold-500 flex items-center justify-center">
              <span className="font-bold text-white">LD</span>
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">LuckyDrip</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  pathname === item.href ? "text-purple-600" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-purple-600 text-white">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard?tab=wallet">Wallet</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard?tab=settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/">Sign out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden md:flex gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/sign-in">Sign In</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-gold-500 hover:from-purple-700 hover:to-gold-600"
                asChild
              >
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </div>
          )}

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-gold-500 flex items-center justify-center">
                    <span className="font-bold text-white">LD</span>
                  </div>
                  <span className="font-bold text-xl">LuckyDrip</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors hover:text-purple-600 ${
                      pathname === item.href ? "text-purple-600" : "text-foreground/80"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {!isLoggedIn && (
                <div className="mt-8 space-y-4">
                  <Button variant="outline" className="w-full border-purple-500/20" asChild>
                    <Link href="/auth/sign-in" onClick={() => setIsMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-gold-500 hover:from-purple-700 hover:to-gold-600"
                    asChild
                  >
                    <Link href="/auth/sign-up" onClick={() => setIsMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
