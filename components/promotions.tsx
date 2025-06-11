import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Percent } from "lucide-react"

const promotions = [
  {
    id: 1,
    title: "Welcome Bonus",
    description: "Get 100% match bonus up to $500 on your first deposit",
    badge: "NEW PLAYER",
    icon: Gift,
    color: "from-purple-600 to-gold-500",
    expires: "No Expiry",
  },
  {
    id: 2,
    title: "Daily Cashback",
    description: "Receive 10% cashback on all losses every day",
    badge: "DAILY",
    icon: Percent,
    color: "from-green-600 to-blue-500",
    expires: "Resets Daily",
  },
  {
    id: 3,
    title: "Weekend Reload",
    description: "50% bonus on deposits made during weekends",
    badge: "WEEKEND",
    icon: Clock,
    color: "from-orange-600 to-red-500",
    expires: "This Weekend",
  },
]

export function Promotions() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-purple-50/20 dark:to-purple-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-gold-500">
            Exclusive Promotions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Boost your gaming experience with our generous bonuses and promotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo) => {
            const IconComponent = promo.icon
            return (
              <Card
                key={promo.id}
                className="relative overflow-hidden border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-600">
                      {promo.badge}
                    </Badge>
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{promo.title}</CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{promo.expires}</span>
                    <Button size="sm" className={`bg-gradient-to-r ${promo.color} hover:opacity-90 text-white`} asChild>
                      <Link href="/auth/sign-up">Claim Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
