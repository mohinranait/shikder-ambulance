import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  Thermometer,
  Heart,
  CheckCircle,
  Wind,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AC Ambulance Service in Dhaka | The Best Reliable 24/7 - Shikder Ambulance",
  description:
    "Professional AC ambulance service in Dhaka, Bangladesh. Temperature-controlled ambulance with air conditioning for patient comfort. 24/7 emergency medical services across all districts.",
  keywords:
    "AC ambulance, air conditioned ambulance, ambulance service Dhaka, emergency medical service, temperature controlled ambulance, patient transport Bangladesh",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "AC Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Professional AC ambulance service with temperature control for patient comfort. Available 24/7 across Bangladesh.",
    url: "https://shikderambulance.com/ac-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/ac-ambulance-hero.png",
        width: 1200,
        height: 630,
        alt: "AC Ambulance Service in Dhaka - Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Professional AC ambulance service with temperature control. Available 24/7.",
    images: ["/images/ac-ambulance-hero.png"],
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
};

export default function AcAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Wind className="h-3 w-3 mr-1" />
                Air Conditioned Ambulance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ac Ambulance service in{" "}
                <span className="text-blue-600">Dhaka</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-pink-500">The Best Reliable</span>{" "}
                <span className="text-orange-500">24/7</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Ac Ambulance service in Dhaka, Bangladesh. We provide different
                types of Ambulance service in all districts of Bangladesh. We
                Are Just A Call Away. Contact Us Now
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Ac Ambulance Service in Bangladesh
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Ac Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Ac Ambulance is one of the best ambulance services in Dhaka
                as well as in the whole Bangladesh. An Ac ambulance is mainly
                used to transfer a patient to the hospital or a recently
                recovered person to his/her resident. Ac Ambulances have air
                conditioning systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As the temperature is very high in Bangladesh and we have to
                wait hours after hours in traffic, it can make a normal person
                fall sick. So it is crucial to maintain a suitable temperature
                for any patient and the companions.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Facilities of Ac Ambulance
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">24/7, Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">The Best reliable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Controlled temperature of Ambulance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Dhaka to All Districts Ambulance is Available
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      All Types of Ambulances
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Quality Ac Ambulance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Ac, and Oxygen is free in Dhaka City
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=AC+Ambulance+Service"
                alt="AC Ambulance Service - Professional medical transport with air conditioning"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24 Hours Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24 Hours Ambulance Service in Bangladesh
            </h2>
            <p className="text-lg text-gray-600">
              Emergency Ac Ambulance service is available in the all districts
              of Bangladesh. Anytime, Anywhere.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Emergency Ac Ambulance in Dhaka City
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Emergency Ac Ambulance service is available in Dhaka City. This
                ambulance company provide Emergency ambulance service 24 hours
                in a day, 7 Days a week, and 365 days a year. The Emergency
                ambulance in cheap rent of ambulance services. We provide always
                a Standard ambulance with the proper requirements. Contact us to
                Get an Emergency ambulance service anywhere in Bangladesh. Fast
                ambulance service provider Company in Dhaka City. If you need an
                emergency ambulance then contact us.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Ac Ambulance service</strong> does cost you a bit extra
                compared to the Non-AC ambulance. If you want to have a smooth
                and relaxing journey, then a bit of extra cost will not matter
                to you. For a long journey, Ac Ambulance service is highly
                recommended. In our Ac Ambulance service, we provide neat and
                clean bed sheets, stretchers, oxygen cylinder and a first aid
                box. There is ample room for the patient and his near
                companions. If you need <strong>Ambulance service</strong> from
                anywhere in Dhaka city than contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Facilities Using of Air Conditon Ambulance Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-gray-600">
                AC ambulances provide a temperature-controlled environment for
                patients during transport
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-gray-600">
                The cost of AC ambulance services may be higher than non-AC
                options
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-gray-600">
                The cost of AC ambulance services may be higher than non-AC
                options
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-gray-600">
                Many AC ambulance services operate 24/7 for emergency situations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Overview of Ac Ambulance
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Patient Comfort:
                  </h4>
                  <p className="text-gray-600">
                    Enhances comfort during transport, especially long distances
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Temperature Control:
                  </h4>
                  <p className="text-gray-600">
                    Maintains a cool, stable environment for patient comfort
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Increased Cost:
                  </h4>
                  <p className="text-gray-600">
                    Typically more expensive than non-AC ambulances
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Medical Stability:
                  </h4>
                  <p className="text-gray-600">
                    Helps regulate body temperature for certain medical
                    conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Available 24/7:
              </h4>
              <p className="text-gray-600">Anytime, Anywhere is Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need AC Ambulance Service?
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
                Call: 01627 609222
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                WhatsApp: 017100 60020
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
