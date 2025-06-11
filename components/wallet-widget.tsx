"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, TrendingUp, TrendingDown, Plus, Minus } from "lucide-react"

interface WalletWidgetProps {
  expanded?: boolean
}

export function WalletWidget({ expanded = false }: WalletWidgetProps) {
  const balance = 1234.56
  const todayChange = 45.23
  const isPositive = todayChange > 0

  return (
    <Card className="border-purple-500/20 shadow-lg shadow-purple-500/5">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <Wallet className="h-4 w-4 mr-2" />
          Wallet Balance
        </CardTitle>
        {isPositive ? (
          <TrendingUp className="h-4 w-4 text-green-500" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
        <p className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"} flex items-center mt-1`}>
          {isPositive ? "+" : "-"}${Math.abs(todayChange).toFixed(2)} today
        </p>

        {expanded && (
          <div className="mt-4 space-y-2">
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-1" />
                Deposit
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Minus className="h-4 w-4 mr-1" />
                Withdraw
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
