import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Users,
  Thermometer,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
  keywords:
    "Freezing Ambulance Services. freezing ambulance, dead body carrier, ambulance service Dhaka, freezer ambulance Bangladesh, mortuary ambulance, body transportation service",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
    url: "https://shikderambulance.com/freezing-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/ambulance-hero.png",
        width: 1200,
        height: 630,
        alt: "Freezing Ambulance Service - Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. Professional 24/7 freezing ambulance service across Bangladesh.",
    images: ["/images/ambulance-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const FreezingAmbulance = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Thermometer className="h-3 w-3 mr-1" />
                  Dead Body Carrer Ambulance
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Freezing Ambulance Service in{" "}
                  <span className="text-blue-600">Dhaka</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Freezing Ambulance service in Dhaka, Bangladesh. It is a dead
                  body carrier ambulance. It has freezing box in it. The freezer
                  ambulance can intact the dead body several hours and days. We
                  Provide ambulance service in Dhaka. We also provide service in
                  all over Bangladesh.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Freezing Ambulance Service"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Freezing Ambulance Service in Dhaka
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional dead body transportation services with advanced
              freezing technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Freezing Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide freezer Ambulance service in Dhaka and all districts
                of Bangladesh. 24/7 hours ambulance service is available in
                Dhaka. Moving a dead body should be done with proper care and
                respect. That's why we use a Freezer Van. Freezing Ambulance is
                used to Freezer Van Ambulance, the dead body is normally kept at
                a certain temperature (-5°c). It ensures that the last smell
                from the dead body does not come out. Moreover, the atmosphere
                is favorable in freezer in your need.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Freezing Ambulance 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    The best way to take or move the dead body
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">It has a frozen box</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Temperature: -5 to -22 are available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Dhaka to All Districts is Available
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=300"
                alt="Ambulance Interior"
                width={300}
                height={250}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=300"
                alt="Ambulance Exterior"
                width={300}
                height={250}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Freezing Ambulance
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right service for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Single Cabin Freezing Ambulance Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Freezing Ambulance service in Dhaka. It is a dead body carrier
                  ambulance with a frozen box. Freezing an ambulance is used to
                  Freezer Van Ambulance, the dead body is extended periods,
                  spanning hours to days.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Double Cabin Freezing Ambulance Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Double Cabin Freezing Ambulance service in Dhaka. It is a dead
                  body carrier ambulance with also has Freezing an ambulance is
                  used to Freezer Van Ambulance, the dead body is for extended
                  periods, spanning hours to days.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dead Body Carrier Freezing Ambulance Service in Dhaka
              </h2>
              <Badge className="bg-green-100 text-green-800">
                Best Freezer Van 24/7
              </Badge>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                A freezer ambulance is a dead body carrier ambulance. It has a
                freezing compartment inside the vehicle that is perfect to
                contain a dead body and the ice compartment protects the dead
                body from decay. No matter how long the distance would have
                passed the body, the ambulance properly managed the dead body
                with its freezer compartment. Even there is no chance of bad
                odor or internal infections when the body is inside the
                ambulance. If you need to transport the dead body from one side
                to another, you can find a freezing ambulance service to do the
                job perfectly.
              </p>

              <p>
                A freezer ambulance is a dead body carrier ambulance. It has a
                freezing box in it. The freezer ambulance can intact the dead
                body several hours and days. People who want to keep their
                relatives dead body intact for few from germs or viruses for
                several hours or some days. We Provide different types of
                ambulance service. We are just a Call Away.
              </p>

              <p>
                They can rent a freezing ambulance from us. Some time the dead
                body comes from abroad or they need to stay more time before
                buried. In that case you need to hire ambulance service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Freezing Ambulance Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Temperature Control
              </h3>
              <p className="text-gray-600">
                Maintains optimal temperature (-5°C to -22°C) for body
                preservation
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock service available throughout Bangladesh
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Care</h3>
              <p className="text-gray-600">
                Respectful and dignified transportation services
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Freezing Ambulance Available Area of Dhaka
            </h2>
            <p className="text-xl opacity-90">
              Serving all major areas across Dhaka and Bangladesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dhaka Metropolitan</h3>
              <p className="text-sm opacity-80">All areas covered</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Airport Areas</h3>
              <p className="text-sm opacity-80">
                Hazrat Shahjalal International
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">All Districts</h3>
              <p className="text-sm opacity-80">Bangladesh wide service</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-sm opacity-80">Immediate response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Emergency Ambulance Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for immediate assistance. Available 24/7 across
              Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 01627-669222
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                WhatsApp: 017100-60020
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreezingAmbulance;
