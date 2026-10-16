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
    "AC ambulance, air conditioned ambulance, best Ambulance, top ambulance company, Dhaka city Ambulance, Near Ambulance, free Ambulance in Dhaka city. ambulance service Dhaka, emergency medical service, temperature controlled ambulance, patient transport Bangladesh, AC Ambulance Service, AC Ambulance Service Dhaka, AC Ambulance in Dhaka, Best AC Ambulance Service in Dhaka, AC Ambulance Service Near Me, AC Ambulance Number Dhaka, AC Ambulance Contact Number, AC Ambulance Booking Dhaka, 24/7 AC Ambulance Service Dhaka, Emergency AC Ambulance Service Dhaka, Affordable AC Ambulance Service Dhaka, Private AC Ambulance Service Dhaka, Air Conditioned Ambulance Service Dhaka, Air Conditioned Ambulance in Dhaka, Patient Transport AC Ambulance Dhaka, AC Patient Transport Service, Hospital Transfer AC Ambulance Dhaka, Hospital to Home AC Ambulance Dhaka, Hospital to Hospital AC Ambulance Dhaka, Long Distance AC Ambulance Service Dhaka, AC Ambulance for Patient Transfer, AC Ambulance for Hospital Discharge, AC Ambulance for Elderly Patients, AC Ambulance for Bedridden Patients, AC Ambulance Booking Number Dhaka, AC Ambulance Phone Number Dhaka, AC Ambulance Hire Dhaka, AC Ambulance Rental Dhaka, AC Ambulance Service in Gulshan, AC Ambulance Service in Banani, AC Ambulance Service in Mohakhali, AC Ambulance Service in Badda, AC Ambulance Service in Rampura, AC Ambulance Service in Malibag, AC Ambulance Service in Uttara, AC Ambulance Service in Mirpur, AC Ambulance Service in Dhanmondi, AC Ambulance Service in Mohammadpur, AC Ambulance Service in Jatrabari, AC Ambulance Service in Kuril, AC Ambulance Service in Natun Bazar, AC Ambulance Service in Agargaon, AC Ambulance Service in Basabo, AC Ambulance Service in Motijheel, AC Ambulance Service in Tejgaon, AC Ambulance Service in Shantinagar, AC Ambulance Service in Aftabnagar, AC Ambulance Service in Demra, AC Ambulance Service Bangladesh, AC Ambulance Booking Online, Shikder AC Ambulance Service, Shikder Ambulance Service Dhaka, এসি অ্যাম্বুলেন্স সার্ভিস, ঢাকায় এসি অ্যাম্বুলেন্স সার্ভিস, এসি অ্যাম্বুলেন্স ঢাকা, ঢাকার সেরা এসি অ্যাম্বুলেন্স সার্ভিস, এসি অ্যাম্বুলেন্স নাম্বার ঢাকা, এসি অ্যাম্বুলেন্স যোগাযোগ নম্বর, এসি অ্যাম্বুলেন্স বুকিং ঢাকা, ২৪ ঘণ্টা এসি অ্যাম্বুলেন্স সার্ভিস, জরুরি এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, কম খরচে এসি অ্যাম্বুলেন্স সার্ভিস, প্রাইভেট এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, শীতাতপ নিয়ন্ত্রিত অ্যাম্বুলেন্স সার্ভিস, রোগী পরিবহনের এসি অ্যাম্বুলেন্স, রোগী বহনের এসি অ্যাম্বুলেন্স, হাসপাতাল থেকে বাসায় নেওয়ার অ্যাম্বুলেন্স, বাসা থেকে হাসপাতালে নেওয়ার অ্যাম্বুলেন্স, এক হাসপাতাল থেকে অন্য হাসপাতালে রোগী নেওয়ার অ্যাম্বুলেন্স, দূরপাল্লার এসি অ্যাম্বুলেন্স সার্ভিস, রোগী স্থানান্তরের এসি অ্যাম্বুলেন্স, বয়স্ক রোগী পরিবহনের অ্যাম্বুলেন্স, শয্যাশায়ী রোগী পরিবহনের অ্যাম্বুলেন্স, হাসপাতাল থেকে বাসায় রোগী নেওয়ার অ্যাম্বুলেন্স, এসি অ্যাম্বুলেন্স ভাড়া ঢাকা, এসি অ্যাম্বুলেন্স বুকিং নাম্বার, এসি অ্যাম্বুলেন্স ফোন নম্বর ঢাকা, অনলাইনে এসি অ্যাম্বুলেন্স বুকিং, ঢাকায় রোগী পরিবহন সার্ভিস, ঢাকায় প্রাইভেট অ্যাম্বুলেন্স সার্ভিস, গুলশানে এসি অ্যাম্বুলেন্স সার্ভিস, বনানীতে এসি অ্যাম্বুলেন্স সার্ভিস, মহাখালীতে এসি অ্যাম্বুলেন্স সার্ভিস, বাড্ডায় এসি অ্যাম্বুলেন্স সার্ভিস, রামপুরায় এসি অ্যাম্বুলেন্স সার্ভিস, মালিবাগে এসি অ্যাম্বুলেন্স সার্ভিস, উত্তরা এসি অ্যাম্বুলেন্স সার্ভিস, মিরপুরে এসি অ্যাম্বুলেন্স সার্ভিস, ধানমন্ডিতে এসি অ্যাম্বুলেন্স সার্ভিস, মোহাম্মদপুরে এসি অ্যাম্বুলেন্স সার্ভিস, যাত্রাবাড়ীতে এসি অ্যাম্বুলেন্স সার্ভিস, কুড়িলে এসি অ্যাম্বুলেন্স সার্ভিস, নতুন বাজারে এসি অ্যাম্বুলেন্স সার্ভিস, আগারগাঁওয়ে এসি অ্যাম্বুলেন্স সার্ভিস, বাসাবোতে এসি অ্যাম্বুলেন্স সার্ভিস, মতিঝিলে এসি অ্যাম্বুলেন্স সার্ভিস, তেজগাঁওয়ে এসি অ্যাম্বুলেন্স সার্ভিস, শান্তিনগরে এসি অ্যাম্বুলেন্স সার্ভিস, আফতাবনগরে এসি অ্যাম্বুলেন্স সার্ভিস, ডেমরায় এসি অ্যাম্বুলেন্স সার্ভিস, বাংলাদেশে এসি অ্যাম্বুলেন্স সার্ভিস, শিকদার এসি অ্যাম্বুলেন্স সার্ভিস, শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকা",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/ac-ambulance-service",
  },
  openGraph: {
    title: "AC Ambulance Service in Dhaka and nearby area",
    description:
      "Best AC Ambulance Service in Dhaka. Shikder Ambulance provides reliable AC Ambulance Service in Dhaka for safe, comfortable, and 24/7 emergency patient transport, hospital transfer, and long-distance ambulance support.",
    url: "https://shikderambulance.com/ac-ambulance-service",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Ac Ambulance Service -Shikder  Ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Best AC Ambulance Service in Dhaka",
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
                Best Quality Ambulance Service
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
              Patient Safety, Our Priority
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
                Best Shikder Ac Ambulance Service in Dhaka
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
              Best Ac Ambulance Service in Dhaka
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
              <h3 className="text-2xl text-gray-900">
                Best AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance provides the best AC ambulance service with comfortable transport, fast response, experienced drivers, clean vehicles, and 24/7 support for patients across Dhaka city.
              </p>

              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service Near Me
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for AC ambulance service near me? Shikder Ambulance offers quick booking, comfortable vehicles, safe patient transport, and emergency support anytime in Dhaka nearby areas.
              </p>
              <h3 className="text-2xl text-gray-900">
                Emergency AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance provides emergency AC ambulance service for sudden illness, hospital admission, patient shifting, discharge support, and urgent medical transport day and night in Dhaka.
              </p>              
              <h3 className="text-2xl text-gray-900">
                Comfortable AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comfortable AC ambulance service provides air-conditioned patient transport for hospital transfer, elderly movement, long-distance travel, discharge support, and emergency medical needs.
              </p>              
              <h3 className="text-2xl  text-gray-900">
                AC Ambulance Service in Dhaka City
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance service in Dhaka city is available 24/7 for patient transport, hospital transfer, emergency pickup, and comfortable medical journey support.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service for Safe Patient Transport
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance service for safe patient transport ensures comfort, careful handling, clean vehicles, quick response, and dependable hospital transfer support anytime.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service Number
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need an AC ambulance service number? Call Shikder Ambulance for fast booking, emergency support, comfortable transport, and safe hospital transfer in Dhaka anytime.
              </p>
              <p><b>AC Ambulance Service Number: 01713260042</b></p>

              <h3 className="text-2xl text-gray-900">
                AC Ambulance for Patient Transfer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AC ambulance for patient transfer helps move patients safely from home, hospital, clinic, or diagnostic center with comfort, care, and reliable transport support.
              </p>

              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service for Long Distance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance offers AC ambulance service for long distance travel, ensuring comfortable patient movement, safe driving, clean vehicles, and dependable support anytime.
              </p>
              <h3 className="text-2xl text-gray-900">
                Fast AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast AC ambulance service helps patients reach hospitals quickly with comfortable transport, careful handling, easy booking, and emergency support from Shikder Ambulance.
              </p>
              <h3 className="text-2xl text-gray-900">
                Private AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Private AC ambulance service is available for emergency patient transport, hospital transfer, home pickup, discharge support, and comfortable medical travel in Dhaka.
              </p>
              <h3 className="text-2xl text-gray-900">
                Reliable AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable AC ambulance service from Shikder Ambulance ensures safe patient transport, quick response, comfortable vehicles, experienced drivers, and 24/7 emergency support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Coverd Area - Find AC Ambulance Service in Your Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find AC Ambulance Service in Your Area
            </h2>
            <p className="text-center font-semibold">
              AC Ambulance Service in Dhaka and Nearby Areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                AC Ambulance Service in Moghbazar, Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for AC Ambulance Service in Moghbazar, Dhaka? Contact Shikder Ambulance for patient transportation, hospital transfers, and long-distance ambulance booking.
              </p>
              <p><b>Nearby Areas:</b> Wireless, Mouchak, Malibag, Shantinagar, Eskaton, and Tejgaon</p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Gulshan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance provides AC ambulance service in Gulshan, Dhaka, for comfortable patient transportation, hospital transfers, and long-distance journeys. Call 01713-260042 to discuss your requirements.
              </p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Banani
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need an AC ambulance in Banani? Shikder Ambulance assists with patient transfers, hospital discharge transportation, and planned medical journeys from Banani to destinations across Dhaka and beyond.
              </p>              
              <h3 className="text-2xl text-gray-900">
                Comfortable AC Ambulance Service in Uttara
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance offers Comfortable AC ambulance transportation for patients in Uttara, Dhaka. Arrange hospital visits, home transfers, and long-distance patient transportation by calling 01713-260042.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Mirpur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for AC ambulance service in Mirpur? Contact Shikder Ambulance for patient transportation, hospital-to-home transfers, and planned journeys to hospitals throughout Dhaka.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Mohakhali
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance supports patient transportation in Mohakhali with AC ambulance arrangements for hospital transfers, medical appointments, and journeys to destinations inside and outside Dhaka.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Khilkhet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for AC ambulance service in Khilkhet? Contact Shikder Ambulance to arrange patient transportation, hospital transfers, and planned journeys within Dhaka or to other districts.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Dhanmondi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance helps arrange AC ambulance service in Dhanmondi for patient transfers, hospital discharge, medical appointments, and long-distance transportation. Call 01713-260042 for booking assistance.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Mohammadpur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need patient transportation in Mohammadpur? Shikder Ambulance offers AC ambulance booking assistance for hospital visits, home transfers, and journeys from Dhaka to other destinations.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Malibag
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance helps arrange AC ambulance transportation in Malibag for patients requiring hospital transfers, medical appointments, or long-distance journeys. Call 01713-260042 to discuss availability.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Shantinagar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find AC ambulance booking assistance in Shantinagar through Shikder Ambulance. Arrange patient transportation to hospitals, residences, or destinations outside Dhaka by calling 01713-260042
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Tejgaon
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find AC ambulance transportation in Tejgaon through Shikder Ambulance. Arrange patient pickup, hospital transfers, and long-distance transportation according to your patient's needs and destination.
              </p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Badda
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance helps arrange AC ambulance transportation in Badda, Dhaka, for hospital visits, patient transfers, and long-distance journeys. Call 01713-260042 to discuss booking requirements.
              </p>

              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Rampura
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need an AC ambulance in Rampura? Shikder Ambulance provides patient transportation arrangements for hospital admissions, hospital discharge, and journeys to destinations within and outside Dhaka.
              </p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Aftabnagar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance offers AC ambulance booking assistance in Aftabnagar for patient transportation, hospital transfers, and planned medical journeys. Call 01713-260042 to discuss your needs.
              </p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Jatrabari
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arrange AC ambulance transportation in Jatrabari through Shikder Ambulance for hospital visits, patient transfers, and long-distance journeys. Contact 01713-260042 to discuss your destination and requirements.
              </p>
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Demra
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance assists with AC ambulance arrangements in Demra, Dhaka, for patient transportation, hospital transfers, and journeys to other districts. Call 01713-260042 for booking information.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Motijheel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance assists patients and families in Motijheel with AC ambulance arrangements for hospital transfers, medical visits, and planned patient transportation across Dhaka.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Basabo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for an AC ambulance in Basabo? Contact Shikder Ambulance for patient transportation arrangements, hospital-to-home transfers, and long-distance journeys. Call 01713-260042 for assistance.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Kuril from Mohakhali
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arrange AC ambulance transportation in Kuril through Shikder Ambulance for hospital transfers, patient pickup, and long-distance journeys. Call 01713-260042 to discuss your transportation requirements.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Agargaon
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need AC ambulance transportation in Agargaon? Shikder Ambulance helps arrange patient transfers, hospital discharge transportation, and journeys to medical facilities across Dhaka and other districts.
              </p>              
              <h3 className="text-2xl text-gray-900">
                AC Ambulance Service in Banasree
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arrange AC ambulance transportation in Banasree through Shikder Ambulance for hospital visits, patient transfers, and journeys to other districts. Call 01713-260042 to discuss availability.
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
                <h3 className="text-2xl">What is Ac Ambulance Service?</h3>
                <p>
                  AC Ambulance Service is an air-conditioned ambulance service used for safe, clean, and comfortable patient transport, hospital transfer, discharge support, and long-distance medical travel.
                </p>
              </div>
              <div>
                <h3 className="text-2xl">Why should I choose an AC Ambulance?</h3>
                <p>
                  You should choose an AC ambulance for comfortable patient movement, especially for elderly patients, sick patients, long-distance travel, and hospital-to-home transfer during hot weather.
                </p>
              </div>
              <div>
                <h3 className="text-2xl">Can I book an AC Ambulance for long-distance travel?</h3>
                <p>
                  Yes, AC Ambulance Service is suitable for long-distance patient transport because it provides a comfortable and air-conditioned environment during the journey.
                </p>
              </div>
                <div>
                <h4 className="text-2xl">How can I book an AC Ambulance?</h4>
                <p>
                  You can book an AC Ambulance by calling Shikder Ambulance anytime. Emergency Call Now: 01713-260042
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
                Call Now: 01713-260042
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
