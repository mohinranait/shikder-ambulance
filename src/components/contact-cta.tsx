import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, MapPin } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-20 bg-premium-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Emergency Help?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Don't wait in a medical emergency. Our trained professionals are ready to respond 24/7 with advanced life
            support and rapid transport.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 01627-669222
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Non-Emergency: 017100-60020
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-blue-100">Round-the-clock emergency medical services, every day of the year.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dhaka City Coverage</h3>
              <p className="text-blue-100">
                Comprehensive Ambulance coverage across the metropolitan area with multiple stations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Response</h3>
              <p className="text-blue-100">
                Immediate dispatch and GPS tracking for the fastest possible response time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
