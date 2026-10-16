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
    "Non-AC Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Affordable Non-Ac ambulance Service in Dhaka, Bangladesh. We provide different types of Ambulance in all districts of Bangladesh. We Are Just A Call Away",
  keywords:
    "Non-AC Ambulance Service, Non-AC Ambulance Service Dhaka, Non AC Ambulance in Dhaka, Best Non-AC Ambulance Service in Dhaka, Non-AC Ambulance Near Me, Non-AC Ambulance Number Dhaka, Non-AC Ambulance Contact Number, Non-AC Ambulance Booking Dhaka, 24-Hour Non-AC Ambulance Service Dhaka, Emergency Non-AC Ambulance Service Dhaka, Affordable Non-AC Ambulance Service Dhaka, Low-Cost Non-AC Ambulance Dhaka, Private Non-AC Ambulance Service Dhaka, Patient Transport Non-AC Ambulance Dhaka, Hospital Transfer Non-AC Ambulance Dhaka, Hospital to Home Non-AC Ambulance Dhaka, Hospital to Hospital Non-AC Ambulance Dhaka, Long-Distance Non-AC Ambulance Service Dhaka, Non-AC Ambulance Rental Dhaka, Non-AC Ambulance Booking Number Dhaka, Non-AC Ambulance Phone Number Dhaka, Non-AC Ambulance Service Bangladesh, Non-AC Ambulance Service in Gulshan, Non-AC Ambulance Service in Banani, Non-AC Ambulance Service in Mohakhali, Non-AC Ambulance Service in Badda, Non-AC Ambulance Service in Rampura, Non-AC Ambulance Service in Malibag, Non-AC Ambulance Service in Moghbazar, Non-AC Ambulance Service in Uttara, Non-AC Ambulance Service in Mirpur, Non-AC Ambulance Service in Dhanmondi, Non-AC Ambulance Service in Mohammadpur, Non-AC Ambulance Service in Jatrabari, Non-AC Ambulance Service in Kuril, Non-AC Ambulance Service in Natun Bazar, Non-AC Ambulance Service in Agargaon, Non-AC Ambulance Service in Basabo, Non-AC Ambulance Service in Motijheel, Non-AC Ambulance Service in Tejgaon, Non-AC Ambulance Service in Shantinagar, Non-AC Ambulance Service in Aftabnagar, Non-AC Ambulance Service in Demra, নন-এসি অ্যাম্বুলেন্স সার্ভিস, ঢাকায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স ঢাকা, ঢাকার নন-এসি অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স নাম্বার ঢাকা, নন-এসি অ্যাম্বুলেন্স বুকিং ঢাকা, ২৪ ঘণ্টা নন-এসি অ্যাম্বুলেন্স সার্ভিস, জরুরি নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, কম খরচে নন-এসি অ্যাম্বুলেন্স ঢাকা, সাশ্রয়ী নন-এসি অ্যাম্বুলেন্স সার্ভিস, রোগী পরিবহনের নন-এসি অ্যাম্বুলেন্স, হাসপাতাল থেকে বাসায় নেওয়ার অ্যাম্বুলেন্স, বাসা থেকে হাসপাতালে নেওয়ার অ্যাম্বুলেন্স, হাসপাতাল থেকে হাসপাতালে রোগী নেওয়ার অ্যাম্বুলেন্স, দূরপাল্লার নন-এসি অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স ভাড়া ঢাকা, নন-এসি অ্যাম্বুলেন্স যোগাযোগ নম্বর, ঢাকায় রোগী পরিবহন সার্ভিস, গুলশানে নন-এসি অ্যাম্বুলেন্স সার্ভিস, বনানীতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মহাখালীতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, বাড্ডায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, রামপুরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, মালিবাগে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মগবাজারে নন-এসি অ্যাম্বুলেন্স সার্ভিস, উত্তরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, মিরপুরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, ধানমন্ডিতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মোহাম্মদপুরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, যাত্রাবাড়ীতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, কুড়িলে নন-এসি অ্যাম্বুলেন্স সার্ভিস, নতুন বাজারে নন-এসি অ্যাম্বুলেন্স সার্ভিস, আগারগাঁওয়ে নন-এসি অ্যাম্বুলেন্স সার্ভিস, বাসাবোতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মতিঝিলে নন-এসি অ্যাম্বুলেন্স সার্ভিস, তেজগাঁওয়ে নন-এসি অ্যাম্বুলেন্স সার্ভিস, শান্তিনগরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, আফতাবনগরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, ডেমরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, শিকদার অ্যাম্বুলেন্স সার্ভিস, Shikder Ambulance Service, Shikder Non-AC Ambulance Service",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title:
      "Affordable Non-AC Ambulance Service | Shikder Ambulance",
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
                Fast Patient Transport
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Emergency Non-Ac Ambulance service in Dhaka, {" "}
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
              Reliable Non-Ac Ambulance Service in Bangladesh
            </h2>
            <p className="text-lg text-gray-600">
              Cost-effective emergency patient transport for everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Non-Ac Ambulance Service
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shikder Ambulance provides reliable Non-AC Ambulance Service for affordable and safe patient transport in Dhaka and nearby areas. Our Non-AC ambulance is suitable for emergency pickup, hospital transfer, clinic visits, patient discharge, home-to-hospital movement, and regular medical transport. We offer quick response, experienced drivers, clean ambulance vehicles, and careful patient handling 24/7. If you need a budget-friendly ambulance service with dependable support, Shikder Ambulance is ready anytime. Our team focuses on safe transport, timely arrival, and responsible service for patients and families.
                </p>
                <p><ul>
                  <li><b>Emergency Call Now: 01713-260042</b></li>
                </ul>
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

     {/* Content Adding Section Part-02 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Non-Ac Ambulance Service in Dhaka City and Nearby Area
            </h2>
            <p className="text-center font-semibold">
              Safe patient transport and hospital transfer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Non-AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get Non-AC Ambulance Service in Dhaka for emergency patient transport, hospital discharge, clinic transfer, and affordable ambulance booking with Shikder Ambulance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                Best Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shikder Ambulance offers the best Non-AC Ambulance Service with fast response, experienced drivers, safe patient handling, and 24/7 emergency support.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Non-AC Ambulance Service Near Me
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looking for Non-AC Ambulance Service near me? Shikder Ambulance provides quick booking, safe patient transport, and hospital transfer support anytime.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                24/7 Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our 24/7 Non-AC Ambulance Service supports emergency patient transport, hospital transfer, home pickup, discharge support, and affordable ambulance booking anytime.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                Emergency Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emergency Non-AC Ambulance Service is available for sudden illness, accident cases, hospital admission, patient shifting, and urgent medical transport across Dhaka.
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                Affordable Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Affordable Non-AC Ambulance Service from Shikder Ambulance helps patients get safe hospital transfer, emergency pickup, and reliable transport at budget-friendly rates.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Non-AC Ambulance Service Number
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Need a Non-AC Ambulance Service Number? Call Shikder Ambulance for fast booking, safe patient transport, and emergency hospital transfer support.
              </p>
              <p><b>Non-AC Ambulance Service Number: 01713260042</b></p>

              <h3 className="text-2xl font-bold text-gray-900">
                Low Cost Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Low Cost Non-AC Ambulance Service is suitable for regular patient transport, hospital discharge, clinic transfer, and safe emergency support in Dhaka.
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                Reliable Non-AC Ambulance Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable Non-AC Ambulance Service ensures safe patient movement, timely pickup, experienced drivers, clean vehicles, and dependable hospital transfer support anytime.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Fast Non-AC Ambulance Service in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast Non-AC Ambulance Service helps patients reach hospitals quickly with easy booking, safe transport, careful handling, and 24/7 emergency response.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Patient Transport Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Non-AC Patient Transport Service is ideal for hospital transfer, clinic visits, home pickup, discharge support, and affordable medical transport in Dhaka.
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Non-AC Ambulance for Long Distance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Non-AC Ambulance for Long Distance supports affordable patient travel, hospital shifting, inter-district transport, and safe medical movement with experienced drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

           {/* Service Area with  Keywords */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Non-Ac Ambulance Service in Dhaka and Nearby Area
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Find Non-Ac Ambulance in Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emergency Ac Ambulance service is available in Dhaka City. This ambulance company provide Emergency ambulance service 24
                hours in a day, 7 Days a week, and 365 days a year. The
                Emergency ambulance in cheap rent of ambulance services. We
                provide always a Standard ambulance with the proper
                requirements. Contact us to Get an Emergency ambulance service
                anywhere in Bangladesh. Fast ambulance service provider
                Company in Dhaka City. If you need an emergency ambulance than
                contact us.
              </p>
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
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Non-AC Ambulance Service in Mohakhali 
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Non-AC Ambulance Service in Mohakhali, Non-AC Ambulance Service in Badda, Non-AC Ambulance Service in Rampura, Non-AC Ambulance Service in Malibag, Non-AC Ambulance Service in Moghbazar, Non-AC Ambulance Service in Uttara, Non-AC Ambulance Service in Mirpur, Non-AC Ambulance Service in Dhanmondi, Non-AC Ambulance Service in Mohammadpur, Non-AC Ambulance Service in Jatrabari, Non-AC Ambulance Service in Kuril, Non-AC Ambulance Service in Natun Bazar, Non-AC Ambulance Service in Agargaon, Non-AC Ambulance Service in Basabo, Non-AC Ambulance Service in Motijheel, Non-AC Ambulance Service in Tejgaon, Non-AC Ambulance Service in Shantinagar, Non-AC Ambulance Service in Aftabnagar, Non-AC Ambulance Service in Demra.
                </p>                
                <p>
                  Non-AC Ambulance Service in Dhaka, Non AC Ambulance Dhaka, Non-AC Ambulance Service Dhaka, Best Non-AC Ambulance Service in Dhaka, Non-AC Ambulance Near Me, Non-AC Ambulance Number Dhaka, Non-AC Ambulance Contact Number, Non-AC Ambulance Booking Dhaka, 24/7 Non-AC Ambulance Service Dhaka, Emergency Non-AC Ambulance Service Dhaka, Affordable Non-AC Ambulance Service Dhaka, Cheap Non-AC Ambulance Service Dhaka, Private Non-AC Ambulance Service Dhaka, Non-AC Patient Transport Service Dhaka, Non-AC Hospital Transfer Ambulance Dhaka, Hospital to Home Non-AC Ambulance Dhaka, Hospital to Hospital Non-AC Ambulance Dhaka, Patient Transfer Ambulance Dhaka, Long Distance Non-AC Ambulance Service Dhaka, Non-AC Ambulance Booking Number Dhaka, Non-AC Ambulance Phone Number Dhaka, Non-AC Ambulance Hire Dhaka, Non-AC Ambulance Rental Dhaka, Non-AC Ambulance Service Bangladesh, Non-AC Ambulance Service in Gulshan, Non-AC Ambulance Service in Banani.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* Bangla Keywords */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                নন-এসি অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                শিকদার অ্যাম্বুলেন্স সার্ভিস ঢাকায় রোগী পরিবহনের জন্য নন-এসি অ্যাম্বুলেন্স বুকিংয়ের ব্যবস্থা করে। বাসা থেকে হাসপাতালে, হাসপাতাল থেকে বাসায় এবং এক হাসপাতাল থেকে অন্য হাসপাতালে রোগী স্থানান্তরের জন্য আমাদের সঙ্গে যোগাযোগ করুন।
              </p>
              <p>ঢাকায় নন-এসি অ্যাম্বুলেন্স সার্ভিস খুঁজছেন? রোগী পরিবহন, হাসপাতাল ট্রান্সফার ও দূরপাল্লার অ্যাম্বুলেন্স বুকিংয়ের জন্য যোগাযোগ করুন শিকদার অ্যাম্বুলেন্সে।</p>
              <p>ঢাকার বিভিন্ন এলাকায় নন-এসি অ্যাম্বুলেন্সের বুকিং ও প্রাপ্যতা জানতে কল করুন।</p>
              <p><b>ফোন:</b> 01713-260042</p>
              <p><b>হোয়ার্টআপ নাম্বার:</b> 01710060020</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                জরুরি নন-এসি অ্যাম্বুলেন্স সার্ভিস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                জরুরি রোগী পরিবহনের জন্য শিকদার অ্যাম্বুলেন্স সার্ভিসের সঙ্গে যোগাযোগ করুন। ঢাকায় বাসা থেকে হাসপাতালে, হাসপাতাল থেকে বাসায় এবং এক হাসপাতাল থেকে অন্য হাসপাতালে রোগী স্থানান্তরের জন্য নন-এসি অ্যাম্বুলেন্স বুকিংয়ের ব্যবস্থা রয়েছে।
              </p>              
              <h3 className="text-2xl font-bold text-gray-900">
                গুলশান নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা 
              </h3>
              <p className="text-gray-600 leading-relaxed">
                গুলশান নন-এসি অ্যাম্বুলেন্স সার্ভিস, বনানীতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মহাখালীতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, বাড্ডায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, রামপুরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, মালিবাগে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মগবাজারে নন-এসি অ্যাম্বুলেন্স সার্ভিস, উত্তরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, মিরপুরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, ধানমন্ডিতে নন-এসি অ্যাম্বুলেন্স সার্ভিস, মোহাম্মদপু নন-এসি অ্যাম্বুলেন্স সার্ভিস, যাত্রাবাড়ী নন-এসি অ্যাম্বুলেন্স সার্ভিস, কুড়িলে নন-এসি অ্যাম্বুলেন্স সার্ভিস, নতুন বাজারে নন-এসি অ্যাম্বুলেন্স সার্ভিস, আগারগাঁওয়ে নন-এসি অ্যাম্বুলেন্স সার্ভিস, বাসাবো নন-এসি অ্যাম্বুলেন্স সার্ভিস, মতিঝিলে নন-এসি অ্যাম্বুলেন্স সার্ভিস, তেজগাঁও নন-এসি অ্যাম্বুলেন্স সার্ভিস, শান্তিনগ নন-এসি অ্যাম্বুলেন্স সার্ভিস, আফতাবনগরে নন-এসি অ্যাম্বুলেন্স সার্ভিস, ডেমরায় নন-এসি অ্যাম্বুলেন্স সার্ভিস, শিকদার অ্যাম্বুলেন্স সার্ভিস।.
                </p>
              <p className="text-gray-600 leading-relaxed">
                নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, ঢাকায় নন-এসি অ্যাম্বুলেন্স, নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, ঢাকার নন-এসি অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স নাম্বার ঢাকা, নন-এসি অ্যাম্বুলেন্স বুকিং ঢাকা, ২৪ ঘণ্টা নন-এসি অ্যাম্বুলেন্স সার্ভিস, জরুরি নন-এসি অ্যাম্বুলেন্স সার্ভিস ঢাকা, কম খরচে নন-এসি অ্যাম্বুলেন্স ঢাকা, সাশ্রয়ী নন-এসি অ্যাম্বুলেন্স সার্ভিস, রোগী পরিবহনের নন-এসি অ্যাম্বুলেন্স, হাসপাতাল থেকে বাসায় নেওয়ার অ্যাম্বুলেন্স, বাসা থেকে হাসপাতালে নেওয়ার অ্যাম্বুলেন্স, হাসপাতাল থেকে হাসপাতালে রোগী নেওয়ার অ্যাম্বুলেন্স, দূরপাল্লার নন-এসি অ্যাম্বুলেন্স সার্ভিস, নন-এসি অ্যাম্বুলেন্স ভাড়া ঢাকা, নন-এসি অ্যাম্বুলেন্স যোগাযোগ নম্বর, ঢাকায় রোগী পরিবহন সার্ভিস।
              </p>
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
                Emergency Helpline: 01713-260042
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
