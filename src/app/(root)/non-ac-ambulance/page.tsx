import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Heart,
  CheckCircle,
  DollarSign,
  Users,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Affordable Non-AC Ambulance Service in Bangladesh | Shikder Ambulance",
  description:
    "Affordable Non-AC ambulance Service in Bangladesh. We provide different types of Ambulance service in all districts of Bangladesh. We Are Just A Call Away",
  keywords:
    "non-AC ambulance, basic ambulance service, affordable ambulance Bangladesh, emergency medical transport, patient transport Dhaka, cheap ambulance service, basic life support ambulance, near ambulance, top ambulance, fast ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title:
      "Affordable Non-AC Ambulance Service in Bangladesh | Shikder Ambulance",
    description:
      "Affordable Non-AC ambulance Service in Bangladesh. We provide different types of Ambulance service in all districts of Bangladesh. We Are Just A Call Away",
    url: "https://shikderambulance.com/non-ac-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Non-Ac-Ambulance Service.jpg",
        width: 1200,
        height: 630,
        alt: "Non-AC Ambulance Service in Bangladesh-Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Non-AC Ambulance Service in Bangladesh | Shikder Ambulance",
    description:
      "Affordable 24/7 Non-AC ambulance service with basic life support across Bangladesh.",
    images: ["/images/Non-Ac-Ambulance Service.jpg"],
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
    canonical: "https://shikderambulance.com/non-ac-ambulance",
  },
};

export default function NonAcAmbulancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <DollarSign className="h-3 w-3 mr-1" />
                Affordable Emergency Transport
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Non-Ac Ambulance service in{" "}
                <span className="text-blue-600">Bangladesh</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Non-Ac Ambulance service in Dhaka, Bangladesh. We provide
                different types of Ambulance service in all districts of
                Bangladesh. We Are Just A Call Away.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Now
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
              Emergency Non-Ac Ambulance Service in Bangladesh
            </h2>
            <p className="text-lg text-gray-600">
              Cost-effective emergency medical transport for everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Non-Ac Ambulance Service
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Non-Ac ambulance service is for those who cannot afford the
                  cost of an Ac ambulance. Though it does not cost you as Ac
                  ambulance service, it serves you with everything except the
                  facility of AC. Like Ac ambulance service, you will get all
                  the important equipment such as wheelchairs, stretchers,
                  oxygen cylinders etc. Also, our team members are highly
                  trained. You can rely on us for any type of ambulance service
                  Our Ac ambulance is 24/7 open for you. Call at our emergency
                  number, we will be there for you.
                </p>
                <p>
                  The Non-Ac ambulance service is simple and Normal. This rent
                  is low of others ambulance, so it is very comfortable for all
                  people. Non-Ac ambulance mainly provide for people and who
                  wants to rent it. 24 hours ambulance available in Dhaka. You
                  will be satisfied with all our arrangements. Our ambulances
                  are full-furnished with all the necessary equipment such as
                  stretchers, wheelchair, oxygen cylinders etc. Our ambulances
                  are clean bed for the patients and comfortable seats for their
                  companions. We ensure our valuable customers, all sort of
                  hospital medical care.
                </p>
                <p>
                  The ambulance service 24/7 Hours available in Dhaka city with
                  all Zila sadar. We provide different types ambulance all
                  districts of Bangladesh. We are always ready to provide
                  emergency ambulance service for any patients.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">24/7 Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-Effective</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Quick Online Booking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Trained Staff</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      All Districts Coverage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Essential Equipment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <Image
                  src="/Non-Ac-Ambulance Service.jpg"
                  alt="Non-AC Ambulance Service-Shikder Ambulance"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Non-Ac Ambulance in Dhaka
            </h2>
            <p className="text-lg text-gray-600">
              Immediate response for medical emergencies
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <p className="text-gray-700 leading-relaxed text-lg">
                Emergency Ac Ambulance service is available in Dhaka City. This
                ambulance company provide Emergency ambulance service 24 hours
                in a day, 7 Days a week, and 365 days a year. The Emergency
                ambulance in cheap rent of ambulance services. We provide always
                a Standard ambulance with the proper requirements. Contact us to
                Get an Emergency ambulance service anywhere in Bangladesh. Fast
                ambulance service provider Company in Dhaka City. If you need an
                emergency ambulance than contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find Non-Ac Ambulance
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Emergency Ac Ambulance service is available in Dhaka City.
                  This ambulance company provide Emergency ambulance service 24
                  hours in a day, 7 Days a week, and 365 days a year. The
                  Emergency ambulance in cheap rent of ambulance services. We
                  provide always a Standard ambulance with the proper
                  requirements. Contact us to Get an Emergency ambulance service
                  anywhere in Bangladesh. Fast ambulance service provider
                  Company in Dhaka City. If you need an emergency ambulance than
                  contact us.
                </p>
                <p>
                  Online Ambulance service, Non-Ac Ambulance service, Ac
                  Ambulance service. The best Ambulance services in Dhaka city,
                  Normal ambulance service, Dhaka Ambulance service, Quality
                  Ambulance service, Dhaka city Ambulance service.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find Ambulance Near Area you
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Non-Ac Ambulance Online booking is available in Dhaka
                  city. We provide emergency ambulance service to carry the
                  patient a place to another. If you need any types of Ambulance
                  service than contact us.
                </p>
                <p>
                  Ambulance service in dhaka, air ambulance in dhaka, air
                  ambulance bangladesh, sylhet Ambulance service, best ambulance
                  service, ambulance service bd, ambulance service in uttara
                  dhaka, Ambulance service near me, ambulance service in
                  bangladesh, ambulance service in mohammadpur, ambulance
                  service in narayanganj, air ambulance, air ambulance service,
                  24 ambulance service, ambulances latest ambulance service,
                  fast ambulance service in Dhaka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Overview of Non-Ac Ambulance
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the benefits and features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Patient Comfort
              </h4>
              <p className="text-sm text-gray-600">
                Enhances comfort during transport, especially long distances
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Temperature Control
              </h4>
              <p className="text-sm text-gray-600">
                Maintains a cool, stable environment for patient comfort
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Increased Cost
              </h4>
              <p className="text-sm text-gray-600">
                Typically more expensive than non-AC ambulances
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Medical Stability
              </h4>
              <p className="text-sm text-gray-600">
                Helps regulate body temperature for certain medical conditions
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Available 24/7
              </h4>
              <p className="text-sm text-gray-600">
                Anytime, Anywhere is Available in Bangladesh
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment & Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipment & Features
            </h2>
            <p className="text-lg text-gray-600">
              Essential medical equipment for safe patient transport
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Basic Life Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Oxygen cylinders and masks</li>
                  <li>• First aid medical kit</li>
                  <li>• Basic monitoring equipment</li>
                  <li>• Emergency medications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>Patient Transport</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comfortable stretchers</li>
                  <li>• Clean bed sheets</li>
                  <li>• Wheelchair accessibility</li>
                  <li>• Companion seating</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Safety Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Trained medical staff</li>
                  <li>• GPS tracking system</li>
                  <li>• Emergency communication</li>
                  <li>• Safety restraints</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Coverage Areas
            </h2>
            <p className="text-xl opacity-90">
              Non-AC ambulance Service is Available all Over Bangladesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dhaka Division</h3>
              <p className="text-sm opacity-80">All districts and upazilas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Chittagong Division</h3>
              <p className="text-sm opacity-80">Major cities and towns</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Sylhet Division</h3>
              <p className="text-sm opacity-80">Complete coverage</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">All Bangladesh</h3>
              <p className="text-sm opacity-80">64 districts covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Cost-effective emergency Patient transport for everyone
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose Non-AC Ambulance?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Cost-Effective</h4>
                    <p className="text-gray-600 text-sm">
                      Affordable rates for basic emergency transport
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Essential Care</h4>
                    <p className="text-gray-600 text-sm">
                      All necessary medical equipment included
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-gray-600 text-sm">
                      Fast emergency response across Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Affordable Ambulance Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us now for cost-effective emergency patient transport
              service. Available 24/7 in the all districts of Bangladesh.
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
    </div>
  );
}
