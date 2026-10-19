import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-premium-light-gradient py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2">
                Welcome to Shikder Ambulance
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground leading-normal">
                <span className="text-red-600">Emergency</span> Ambulance Service in Dhaka - 
                <span className="text-primary"> 24/7 Available</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                <b>Emergency Ambulance Service in Dhaka, Bangladesh.</b> Looking for a fast and reliable Ambulance? You have come to the right place. <b>Shikder Ambulance</b> provides all types of ambulance from Dhaka and nearby areas to all districts of Bangladesh. Need an Emergency Ambulance? <b>Call Now Shikder Ambulance.</b></p>
            </div>
            <div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Fast & Reliable Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Patient and dead body transportation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Dhaka to All districts Ambulance service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-600 font-bold">Online Booking & Money Receipt is Available</span>
                </div>              
            </div>

            {/* Emergency Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"tel:01713-260042"}>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 01713-260042
                </Button>
              </Link>
              <Link href={"/contact-us"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg bg-transparent"
                >
                  Online Booking Now
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Clock className="h-5 w-5 text-primary"/>
                </div>
                <div>
                  <p className="font-semibold">20 Min Response</p>
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
                  <p className="font-semibold">Live Tracking</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time Location
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Available</p>
                  <p className="text-sm text-muted-foreground">Always Ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/hiace.png"
                alt="Modern ambulance vehicle"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-premium border">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Phone className="h-6 w-6 text-red-600"/>
                </div>
                <div>
                  <p className="font-semibold">Emergency Helpline</p>
                  <p className="text-2xl font-bold text-red-600">01710060020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
