import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section className="relative bg-premium-light-gradient py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2">
                24/7 Emergency Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                24/7 Emergency
                <span className="text-primary block">Ambulance Service</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Professional medical emergency response with trained paramedics,
                advanced life support equipment, and GPS-enabled rapid dispatch.
              </p>
            </div>

            {/* Emergency Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 911
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent"
              >
                Book Non-Emergency
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">5 Min Response</p>
                  <p className="text-sm text-muted-foreground">
                    Average arrival time
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">GPS Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time location
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Available</p>
                  <p className="text-sm text-muted-foreground">Always ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern ambulance vehicle"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-premium border">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">Emergency Hotline</p>
                  <p className="text-2xl font-bold text-red-600">911</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
