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
  title: "Best AC Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Best AC Ambulance Service. Shikder Ambulance offers the best ac ambulance in Dhaka city and nearby areas. Need Ac Ambulance? Call Now: 01713260042",
  keywords:
    "AC ambulance, air conditioned ambulance, best Ambulance, top ambulance company, Dhaka city Ambulance, Near Ambulance, free Ambulance in Dhaka city. ambulance service Dhaka, emergency medical service, temperature controlled ambulance, patient transport Bangladesh",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/ac-ambulance-service",
  },
  openGraph: {
    title: "Best AC Ambulance Service in Dhaka and nearby area",
    description:
      "Best AC Ambulance Service in Dhaka. Shikder Ambulance provides reliable AC Ambulance Service in Dhaka for safe, comfortable, and 24/7 emergency patient transport, hospital transfer, and long-distance ambulance support.",
    url: "https://shikderambulance.com/ac-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Ac Ambulance Service -Shikder  Ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Best AC Ambulance Service in Dhaka by Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Ambulance Service in Dhaka by Shikder Ambulance",
    description:
      "Best AC Ambulance Service in Dhaka. Professional AC ambulance service with temperature control. Available 24/7.",
    images: ["/images/Ac Ambulance Service -Shikder  Ambulance.jpg"],
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
                The Best Quality Ambulance Service
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Best Ac Ambulance Service in Dhaka{" "}
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-pink-500">Fast Response, Always Reliable</span>{" "}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Best Ac Ambulance Service in Dhaka. Shikder Ambulance provides reliable AC Ambulance Service in Dhaka for safe, comfortable, and 24/7 emergency patient transport, hospital transfer, and long-distance ambulance support. Need Ambulance support? Contact Now.
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
              Reliable Ac Ambulance Service in Bangladesh
            </h2>
            <p className="text-center font-semibold">
              Patient Safety, Our Priority.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Ac Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The Ac Ambulance is one of the{" "}
                <a
                  href="https://shikderambulance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  best ambulance
                </a>{" "}
                services in Dhaka as well as in the whole Bangladesh. An Ac
                ambulance is mainly used to transfer a patient to the hospital
                or a recently recovered person to his/her resident. Ac
                Ambulances have air conditioning systems.
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
                    <span className="text-gray-700">
                      24/7 ambulance service support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     fast and reliable service is available
                    </span>
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
                      Quality Ac Ambulance Service
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Ac and Oxygen is free in Dhaka City
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/best-Ac-Ambulance-Service-Shikder-Ambulance.jpg"
                alt="Best AC Ambulance Service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Shikder Ambulance section*/}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shikder Ambulance Service? 
            </h2>
            <p className="text-center font-semibold">
              The Quality Ambulance is Granted
            </p>
          </div>

          <div className="grid gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Shikder Ambulance is the best
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance is a trusted ambulance service provider in Dhaka and nearby areas, offering fast, safe, and reliable ambulance support for emergency patients, hospital transfers, ICU patients, and dead body carrying needs. Our team helps families arrange the right ambulance quickly based on patient condition, destination, and emergency situation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We provide 24/7 ambulance booking support with Ac ambulance, Non-Ac ambulance, ICU ambulance, freezing ambulance, and dead body carrying ambulance service. Whether you need urgent patient transport, hospital admission, hospital discharge, long-distance ambulance, or freezer ambulance support, Shikder Ambulance is ready to serve with care and professionalism.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Affortable, fast and reliable service is available
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      emergency ambulance service in Dhaka and nearby areas
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Fast response for urgent patient transport and hospital transfer
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      All Types of Ambulance Service
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Best Quality Ambulance Service
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Ac and Oxygen is free in Dhaka City
                    </span>
                  </div>                                    
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Long-distance ambulance service available
                    </span>
                  </div>                                                      
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Reliable ambulance booking by phone and WhatsApp
                    </span>
                  </div>
                                                                        
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Professional, careful, and respectful service
                    </span>
                  </div>
                                                                        
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                      Emergency Helpline: 01713-260042
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* 24 Hours Service section*/}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              24 Hours Ac Ambulance Service in Bangladesh
            </h2>
            <p className="text-center font-semibold">
              The Quality Ambulance is Granted
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Emergency Ac Ambulance in Dhaka City
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emergency Ac Ambulance service is available in Dhaka City. Shikder
                Ambulance company provide Emergency ambulance service 24 hours
                in a day, 7 Days a week, and 365 days a year. The Emergency
                ambulance in cheap rent of ambulance services. We provide always
                a Standard ambulance with the proper requirements. Contact us to
                Get an Emergency ambulance service anywhere in Bangladesh. Fast
                ambulance service provider Company in Dhaka City. If you need an
                emergency ambulance then contact us.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Reliable AC Ambulance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When emergencies happen under Dhaka’s blazing heat, patient
                comfort becomes vital. Shikder Ambulance offers trusted 24/7 AC
                Ambulance Service in Dhaka, designed to keep patients cool,
                safe, and stress-free during every transfer.
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

      {/* Content Adding Part Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Ambulance Service in Dhaka
            </h2>
            <p className="text-center font-semibold">
              The Quality Ambulance is Granted
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Best Ambulance Service Near me
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for the Best Ambulance Service Near Me? Shikder Ambulance provides 24/7 emergency ambulance support with AC, Non-AC, ICU, and freezing ambulance service for safe patient transport.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Reliable AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When emergencies happen under Dhaka’s blazing heat, patient
                comfort becomes vital. Shikder Ambulance offers trusted 24/7 AC
                Ambulance Service in Dhaka, designed to keep patients cool,
                safe, and stress-free during every transfer.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                Comfort and Care You Can Trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Shikder Ambulance, we combine comfort with safety. Our
                vehicles are clean, modern, and equipped with advanced cooling
                systems. Plus, trained staff ensure patients get professional
                care on the way to hospitals, clinics, or home.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/best-Ac-Ambulance-Service-Shikder-Ambulance-02.jpg"
                alt="Best AC Ambulance Service"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Content Adding Section Part-02 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Ac Ambulance Service in Dhaka City and Nearby Areas
            </h2>
            <p className="text-center font-semibold">
              The Quality Ambulance is Granted
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Best AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance provides the best AC ambulance service with comfortable transport, fast response, experienced drivers, clean vehicles, and 24/7 support for patients across Dhaka city.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service Near Me
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for AC ambulance service near me? Shikder Ambulance offers quick booking, comfortable vehicles, safe patient transport, and emergency support anytime in Dhaka nearby areas.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Emergency AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance provides emergency AC ambulance service for sudden illness, hospital admission, patient shifting, discharge support, and urgent medical transport day and night in Dhaka.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                Comfortable AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comfortable AC ambulance service provides air-conditioned patient transport for hospital transfer, elderly movement, long-distance travel, discharge support, and emergency medical needs.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service in Dhaka City
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance service in Dhaka city is available 24/7 for patient transport, hospital transfer, emergency pickup, and comfortable medical journey support.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service for Safe Patient Transport
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance service for safe patient transport ensures comfort, careful handling, clean vehicles, quick response, and dependable hospital transfer support anytime.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service Number
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need an AC ambulance service number? Call Shikder Ambulance for fast booking, emergency support, comfortable transport, and safe hospital transfer in Dhaka anytime.
              </p>
              <p><b>AC Ambulance Service Number: 01713260042</b></p>

              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance for Patient Transfer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance for patient transfer helps move patients safely from home, hospital, clinic, or diagnostic center with comfort, care, and reliable transport support.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service for Long Distance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance offers AC ambulance service for long distance travel, ensuring comfortable patient movement, safe driving, clean vehicles, and dependable support anytime.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Fast AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast AC ambulance service helps patients reach hospitals quickly with comfortable transport, careful handling, easy booking, and emergency support from Shikder Ambulance.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Private AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Private AC ambulance service is available for emergency patient transport, hospital transfer, home pickup, discharge support, and comfortable medical travel in Dhaka.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Reliable AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable AC ambulance service from Shikder Ambulance ensures safe patient transport, quick response, comfortable vehicles, experienced drivers, and 24/7 emergency support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions: Shikder Ambulance
            </h2>
          </div>      
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3>What is Ac Ambulance Service?</h3>
                <p>
                  AC Ambulance Service is an air-conditioned ambulance service used for safe, clean, and comfortable patient transport, hospital transfer, discharge support, and long-distance medical travel.
                </p>
              </div>
              <div>
                <h3>Why should I choose an AC Ambulance?</h3>
                <p>
                  You should choose an AC ambulance for comfortable patient movement, especially for elderly patients, sick patients, long-distance travel, and hospital-to-home transfer during hot weather.
                </p>
              </div>
              <div>
                <h3>Can I book an AC Ambulance for long-distance travel?</h3>
                <p>
                  Yes, AC Ambulance Service is suitable for long-distance patient transport because it provides a comfortable and air-conditioned environment during the journey.
                </p>
              </div>
                <div>
                <h4>How can I book an AC Ambulance?</h4>
                <p>
                  You can book an AC Ambulance by calling Shikder Ambulance anytime. Emergency Call: 01713-260042
                </p>
              </div>
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
              Contact us now for emergency Ambulance Support. Fast, Reliable Ambulance Service in
              Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 01627-669222
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                WhatsApp Now: 01710060020
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
