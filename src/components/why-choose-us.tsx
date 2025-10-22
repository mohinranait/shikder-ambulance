import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, DollarSign, Shield, Stethoscope } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "Fast Response Time",
      description: "Average 10-minutes response time with our strategically located fleet across the Dhaka City.",
      color: "text-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Certified paramedics and EMTs with years of emergency medical experience.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MapPin,
      title: "GPS-Enabled Fleet",
      description: "Real-time tracking and optimal route planning for fastest possible arrival.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "The Patient Transport Service in Bangladesh. We offering to transport at Affordable Pricing with Online Booking facilitices.",
      color: "text-accent-foreground",
      bgColor: "bg-accent",
    },
    {
      icon: Shield,
      title: "Advanced Equipment",
      description: "State-of-the-art medical equipment and the basic life support systems is available in every ambulance.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Stethoscope,
      title: " Patient Transport Ambulances",
      description: "Round-the-clock availability with direct hospital coordination and communication.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Shikder Ambulance Service?</h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            We provide reliable, professional emergency Ambulance services with a commitment to saving lives and ensuring
            the best possible patient care. Anytime, Anywhere is Available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-premium shadow-premium-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.bgColor} ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
