import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ServiceOverview() {
  const services = [
    {
      title: "Ac Ambulance Services",
      description:
        "AC Ambulance Service ensures safe, comfortable, and temperature-controlled patient transport, ideal for critical cases and long-distance transfers.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Quality Ambulance", "Controled tempreture of Ambulance", "Oxygen is free in Dhaka City", " Anytime, Anywhere is Available"],
    },
    {
      title: "Non Ac Ambulance Service",
      description:
        "Non-AC Ambulance Service offers affordable, reliable patient transport within the city, ideal for stable patients and short-distance transfers.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Wheelchair Accessible", "Stretcher Transport", "Medical Supervision", "Insurance Accepted"],
    },
    {
      title: "Life Support Ambulance Service",
      description:
        "Life Support Ambulance Service provides critical patients with advanced medical equipment and trained staff for safe, emergency transfers anytime, anywhere.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["ICU-Level Care", "Ventilator Support", "Specialized Nurses", "Hospital-to-Hospital"],
    },
    {
      title: "Dead Body Carrier Freezing Ambulance Service",
      description:
        "Freezing Ambulance Service safely transports deceased bodies long distances, preserving them in temperature-controlled freezing units with dignity.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["It has a frozen box", "High Quality steel stretchers", "Tempresure: -5 to -22 are available", "Emergency Response"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Shikder Ambulance Services 24/7</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive the best emergency Ambulance services in Bangladesh. We provide different types of Ambulances. The best <a href="https://24ambulance.com/" target="_blank" rel="noopener noreferrer">Quality Ambulance Service</a> is available in the all districts of Bangladesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="group bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
