import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  Heart,
  CheckCircle,
  Stethoscope,
  Activity,
  Users,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ICU Ambulance Service in Dhaka | Best Reliable 24/7 Life Support - Shikder Ambulance",
  description:
    "Professional ICU ambulance service in Dhaka, Bangladesh. Advanced life support with ICU, CCU, NICU equipment. 24/7 emergency critical care transport with trained medical staff across all districts.",
  keywords:
    "ICU ambulance, CCU ambulance, NICU ambulance, life support ambulance, critical care transport, emergency medical services Dhaka, intensive care ambulance Bangladesh, cardiac ambulance, pediatric ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title:
      "ICU Ambulance Service in Dhaka | Best Reliable 24/7 - Shikder Ambulance",
    description:
      "Advanced life support ICU ambulance service with critical care equipment. Professional medical transport for emergency patients across Bangladesh.",
    url: "https://shikderambulance.com/icu-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/icu-ambulance-hero.png",
        width: 1200,
        height: 630,
        alt: "ICU Ambulance Service in Dhaka - Advanced Life Support - Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICU Ambulance Service in Dhaka | Best Reliable 24/7",
    description:
      "Advanced life support ICU ambulance service with critical care equipment across Bangladesh.",
    images: ["/images/icu-ambulance-hero.png"],
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
  alternates: {
    canonical: "https://shikderambulance.com/icu-ambulance-service",
  },
};

export default function IcuAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                <Heart className="h-3 w-3 mr-1" />
                Advanced Life Support
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ICU Ambulance Service in Dhaka,{" "}
                <span className="text-pink-500">Best</span>
                <br />
                <span className="text-pink-500">Reliable</span>{" "}
                <span className="text-orange-500">24/7</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Life Support ICU Ambulance Service in Dhaka, Bangladesh. We
                Provide different types of Life support Ambulance With Doctors
                or brothers in Cheap Cost. We Are Just A Call Away
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Life Support ICU Ambulance Service in Bangladesh
            </h2>
            <p className="text-lg text-gray-600">
              Advanced critical care transport with professional medical team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                ICU Ambulance Services
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Life support ambulances are critical components of emergency
                  medical systems, providing care from basic to advanced levels.
                  BLS units, staffed by EMTs, offer essential interventions like
                  CPR and oxygen.
                </p>
                <p>
                  The basic life support ICU Ambulance service in Dhaka,
                  Bangladesh. ICU Ambulance is one of the leading 24/7 Emergency
                  Ambulance Services providers in Dhaka, Bangladesh.
                </p>
                <p>
                  ICU Ambulance is one of the leading 24/7 Emergency Ambulance
                  Services providers in Dhaka, Bangladesh. For every emergency
                  cases transferring and also critically ill patients to
                  Hospitals or Nursing Homes.
                </p>
                <p>
                  ICU Ambulance designed keeping in mind the speed requirement
                  of patients so as to easily fit the patient. All the staffs
                  are Skilled and Trained in medical equipment.
                </p>
                <p>
                  ICU Ambulance Service in Dhaka, Bangladesh. We Provide Life
                  support ICU, CCU, NICU Ambulance Service With Doctors or
                  brothers in Cheap Cost, so Contact us.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      24/7 Emergency Response
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Advanced Life Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Trained Medical Staff</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Modern ICU Equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Critical Care Transport
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      All Districts Coverage
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 ">
              <div className="bg-white relative rounded-2xl shadow-2xl p-6">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=ICU+Ambulance+Exterior"
                  alt="ICU Ambulance Service - Professional emergency medical transport vehicle"
                  width={500}
                  height={300}
                  className="rounded-xl scale-75 w-full h-auto"
                />
                <Image
                  src="/placeholder.svg?height=200&width=200&text=ICU+Ambulance+Interior"
                  alt="ICU Ambulance Interior - Advanced life support equipment and medical facilities"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-auto absolute max-w-[200px]  bottom-10 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Life Support Ambulance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Life Support Ambulance
            </h2>
            <p className="text-lg text-gray-600">
              Specialized emergency medical services for different critical care
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors group">
              <CardHeader>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-center">ICU Ambulance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  The basic life support ICU Ambulance Service is available in
                  Dhaka. We provide emergency icu ambulance 24/7 Customer
                  Support.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors group">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">CCU Ambulance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  Mobile critical care unit, transporting acutely ill patients
                  with advanced medical equipment and highly trained medical
                  professionals.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors group">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">NICU Ambulance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  Neonatal intensive care transport, specialized ambulance,
                  providing advanced medical care for critically ill newborns
                  during transit.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors group">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center">PICU</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  Pediatric intensive care transport, specialized ambulance,
                  providing advanced medical care for critically ill children
                  during transit.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors group">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Stethoscope className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">
                  Ventilator with Ambulance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  Ambulance equipped with a ventilator, providing critical
                  respiratory support for patients during transport to medical
                  facilities.
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-200 transition-colors group">
              <CardHeader>
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <Shield className="h-8 w-8 text-gray-600" />
                </div>
                <CardTitle className="text-center">
                  General Ambulance Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600">
                  The General Ambulance have Normal Oxygen Support, and Ac
                  facilities. We provide all types of Ambulance. When you need
                  then Contact Us.
                </p>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Basic Life Support ICU Ambulance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Basic Life Support ICU Ambulance
              </h2>
              <p className="text-lg text-gray-600">
                Essential emergency medical care during transport
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Life Support ICU Ambulance Service or ICU Ambulance is most
                important for emergency patients. We provide doctors with Life
                support ambulance. We provide service in all over Bangladesh.
                Service is a prominent name for maintaining quality. We provide
                different types of ambulance service in all districts of
                Bangladesh. This company provide any kind of EMERGENCY/URGENT
                ambulance service to the people with several illness or
                pregnancy.
              </p>

              <p>
                Shikder Ambulance Service will securely transport the patients
                to any hospital, anywhere in Bangladesh with your budget. We
                also provide Freezer Van ambulances to safely carry the dead
                bodies in unchanged condition. Have a look at different types of
                ambulance service we provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Emergency ICU Ambulance in Dhaka
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Life support ICU Ambulance service in Dhaka. We provide
                  different types of life support ambulances with doctors or
                  brothers. We are always ready to provide ICU Ambulance service
                  in Dhaka. Dharmondol ICU Ambulance service, Gulshan ICU
                  Ambulance service is available. 24/7 life support Ambulance is
                  available.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cardiac Support Ambulance (CCU)
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When the patient is a cardiac patient and has a serious moment
                  that he/she needs urgently to take to a hospital, you must
                  need an ambulance service that can support the patient until
                  they have been taken into the hospital to receive their pain
                  and they will be taken to the hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why should you choose us?
            </h2>
            <p className="text-lg text-gray-600">
              Professional emergency medical services you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Ambulance Quality</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We have three different types of ambulance and expert teams.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Patient Care</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our ambulances are well equipped with all the necessary
                  equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-5 w-5 text-green-600" />
                  <span>Professional Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our teams are well trained and they always maintain their
                  professionalism. No matter what happens around, patients are
                  their utmost priority.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Available 24/7</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our services are available at any time, any day. We are open
                  twenty-four hours a day, seven days a week. Contact on our
                  emergency number. We are just a call away.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Are The Best */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We are the best to the people?
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence in emergency medical services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      24/7 Customer Support
                    </h4>
                    <p className="text-gray-600">
                      Round-the-clock assistance for all your emergency needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Quick Response with friendly
                    </h4>
                    <p className="text-gray-600">
                      Fast emergency response with compassionate care
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      All districts Ambulance Service
                    </h4>
                    <p className="text-gray-600">
                      Complete coverage across all districts of Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Stethoscope className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Driving with Expert Driver, and Assistant
                    </h4>
                    <p className="text-gray-600">
                      Professional drivers and medical assistants for safe
                      transport
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Online Booking is Available
                    </h4>
                    <p className="text-gray-600">
                      Easy online booking system for your convenience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 p-2 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Emergency Response Team
                    </h4>
                    <p className="text-gray-600">
                      Specialized emergency response team for critical
                      situations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need ICU Ambulance Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for immediate critical care transport. Available
              24/7 across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency: 01627 609222
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
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
