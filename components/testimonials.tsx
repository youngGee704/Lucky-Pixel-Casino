import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Amazing experience! Won $2,500 on my first week. The games are fair and the payouts are fast.",
    game: "Golden Fortune Slots",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Best online casino I've played at. Great customer support and the live dealers are professional.",
    game: "Live Blackjack",
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "Love the variety of games and the bonuses are generous. Highly recommend LuckyDrip!",
    game: "European Roulette",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-gold-500">
            What Our Players Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied players who trust LuckyDrip Casino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">"{testimonial.comment}"</p>
                <p className="text-sm text-purple-600 font-medium">Playing: {testimonial.game}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
