import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Ambulance,
  Heart,
  Stethoscope,
  Users,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
  keywords:
    "Freezing Ambulance Services. freezing ambulance, dead body carrier, ambulance service Dhaka, freezer ambulance Bangladesh, mortuary ambulance, body transportation service, dead body carrier frozen ambulance, Dhaka Airport freezing Ambulance, frozen ambulance, Shikder Freezing Ambulance, Dhaka freezing Ambulance, near Ac Ambulance, online Ambulance service, best Ambulance, Mirpur Ambulance Service, Shahabag Ambulance Service, Mirpur Ambulance Service, Badda Ambulance Service, Basaboo Ambulance Service, Madartek Ambulance Service, Mugdha Ambulance Service, Jatrabari Ambulance Service, Maniknagore Ambulance Service, Shenbag Ambulance Service, Freezing Ambulance Service Dhaka, Dead Body Freezing Ambulance Dhaka, Freezer Ambulance Dhaka, Body Freezer Ambulance Dhaka, Morgue Ambulance Dhaka, Dead Body Transport Dhaka, 24 Hour Freezing Ambulance Dhaka, Freezing Ambulance Near Me Dhaka, Emergency Freezing Ambulance Dhaka, Frozen Dead Body Ambulance Dhaka, AC Freezer Ambulance Dhaka, Long Distance Freezing Ambulance Dhaka, Dhaka Airport Freezing Ambulance, Hazrat Shahjalal Airport Freezer Ambulance, Bashundhara Freezing Ambulance, Gulshan Freezing Ambulance, Banani Freezing Ambulance, Baridhara Freezing Ambulance, Mohakhali Freezing Ambulance, Tejgaon Freezer Ambulance, Farmgate Freezing Ambulance, Karwan Bazar Freezing Ambulance, Shahbag Freezing Ambulance, Dhanmondi Freezing Ambulance, Mohammadpur Freezing Ambulance, Adabor Freezing Ambulance, Shyamoli Freezing Ambulance, Kallyanpur Freezer Ambulance, Mirpur Freezing Ambulance, Mirpur 1 Freezing Ambulance, Mirpur 10 Freezer Ambulance, Pallabi Freezing Ambulance, Rupnagar Freezing Ambulance, Uttara Freezing Ambulance, Uttara Sector Freezing Ambulance, Khilkhet Freezing Ambulance, Nikunja Freezing Ambulance, Kuril Freezing Ambulance, Badda Freezing Ambulance, Bashabo Freezing Ambulance, Khilgaon Freezing Ambulance, Malibagh Freezing Ambulance, Moghbazar Freezing Ambulance, Mouchak Freezer Ambulance, Rampura Freezing Ambulance, Banasree Freezing Ambulance, Nandipara Freezing Ambulance, Aftabnagar Freezing Ambulance, Merul Badda Freezer Ambulance, Motijheel Freezing Ambulance, Kamalapur Freezer Ambulance, Paltan Freezing Ambulance, Kakrail Freezing Ambulance, Nayapaltan Freezing Ambulance, Wari Freezing Ambulance, Sutrapur Freezing Ambulance, Gendaria Freezer Ambulance, Sadarghat Freezing Ambulance, Babubazar Freezer Ambulance, Kotwali Freezing Ambulance, Bangshal Freezing Ambulance, Jatrabari Freezing Ambulance, Donia Freezing Ambulance, Kadamtali Freezer Ambulance, Rayerbag Freezer Ambulance, Shyampur Freezing Ambulance, Demra Freezing Ambulance, Sarulia Freezing Ambulance, Matuail Freezing Ambulance, Narinda Freezing Ambulance, Lalbagh Freezing Ambulance, Azimpur Freezing Ambulance, Hazaribagh Freezing Ambulance, Kamrangirchar Freezer Ambulance, Islambagh Freezing Ambulance, Chawkbazar Freezing Ambulance, New Market Freezing Ambulance, Nilkhet Freezing Ambulance, Science Lab Freezing Ambulance, Katabon Freezing Ambulance, Elephant Road Freezer Ambulance, Panthapath Freezing Ambulance, Green Road Freezing Ambulance, Segunbagicha Freezing Ambulance, Shahbagh Freezer Ambulance, DMCH Freezing Ambulance, BSMMU Freezer Ambulance, Dhaka Medical College Freezing Ambulance, Square Hospital Freezer Ambulance, Labaid Freezing Ambulance, Popular Hospital Freezer Ambulance, Evercare Hospital Freezing Ambulance, United Hospital Freezing Ambulance, Holy Family Hospital Freezer Ambulance, Ibn Sina Freezing Ambulance, Asgar Ali Hospital Freezer Ambulance, Enam Medical Freezing Ambulance, Emergency Freezing Ambulance Dhaka City, Dhaka City Freezer Ambulance, Best Freezing Ambulance Dhaka, Affordable Freezer Ambulance Dhaka, Quick Freezing Ambulance Dhaka, Reliable Freezer Ambulance Service Dhaka, Professional Freezing Ambulance Dhaka, Patient Dead Body Freezing Ambulance Dhaka, Dhaka to Chittagong Freezing Ambulance, Dhaka to Sylhet Freezer Ambulance, Dhaka to Khulna Freezing Ambulance, Dhaka to Barisal Freezing Ambulance, Dhaka to Rajshahi Freezer Ambulance, Dhaka to Rangpur Freezing Ambulance, Long Route Freezing Ambulance Dhaka, Highway Freezer Ambulance Dhaka, Home to Morgue Freezer Ambulance, Hospital to Home Freezing Ambulance, Emergency Dead Body Transport Dhaka, Dhaka Freezing Body Transport, Citywide Freezing Ambulance Service, Frozen Body Transport Dhaka, Body Preservation Ambulance Dhaka, Refrigerated Ambulance Dhaka, Dhaka Refrigerated Dead Body Ambulance, Fast Freezing Ambulance Dhaka, 24/7 Freezer Ambulance Dhaka, Near Me Freezing Ambulance Service, Premium Freezing Ambulance Dhaka, Dedicated Freezer Ambulance Dhaka, Dhaka Burial Transport Ambulance, Janaza Transport Freezing Ambulance, Coffin Transport Freezing Ambulance Dhaka, Dhaka Mortuary Ambulance Service.",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/freezing-ambulance",
  },
  openGraph: {
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
    url: "https://shikderambulance.com/freezing-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Freezing Ambulance Service-Shikder Ambulance",
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
    images: ["/images/Freezing Ambulance Service-shikder-ambulance.jpg"],
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
export default function ServicesPage() {
  const services = [
    {
      title: "Emergency Ambulance Service in Dhaka",
      description:
        "Emergency Ambulance Service provides life-saving medical transport and patient care for critical health incidents, and safe transit to hospitals. Your safety, comfort, and peace of mind mean everything to us.",
      image: "/Emergency-Ambulance-Service-01.jpg",
      features: [
        "24/7 Emergency Ambulance Support",
        "ICU & Life Support Ambulance",
        "Safe Patient Transfer Services",
        "Long-Distance Patient Transfer",
        "Real-time Hospital Communication",
        "Life-saving medical transport",
      ],
      responseTime: "10 minutes average",
      availability: "24/7",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Non-Emergency Patient Transport",
      description:
        "Comfortable and safe Patient transport for scheduled appointments, hospital transfers, and routine Patient care. Your safety and comfort are our top priorities.",
      image: "/Emergency-Ambulance-Service-01.jpg",
      features: [
        "Comfortable AC & Non-AC Vehicles",
        "Wheelchair & Stretcher Support",
        "Trained Attendants & Drivers",
        "Scheduled Appointments",
        "Comfortable & Clean Vehicles",
        "Affordable Pricing",
      ],
      responseTime: "30 minutes",
      availability: "7 AM - 11 PM",
      icon: Ambulance,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Critical Care Transport",
      description:
        "Specialized transport for critically ill patients requiring intensive care during transfer between Patient facilities. The basic life support, Advanced Life Support ICU Ambulance is Available with Doctors and Brothers.",
      image: "/Life-support-ambulance.jpg",
      features: [
        "ICU-Level Patient Equipment",
        "Ventilator Support",
        "Specialized Critical Care Nurses",
        "Hospital-to-Hospital Transfers",
        "Continuous Patient Monitoring",
        "Advanced Medication Administration",
      ],
      responseTime: "30 minutes",
      availability: "24/7",
      icon: Stethoscope,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Freezing Ambulance Service",
      description:
        "A freezer ambulance service is a specialized transportation service equipped with refrigeration systems to maintain a consistently low temperature.",
      image: "/Freezing-Ambulance-Service-se-02.jpg",
      features: [
        "It has a forzen box in it",
        "Use freezer Ambulance, save the dead body",
        "Temperature-Controlled Environment",
        "Emergency Response Planning",
        "Clean & Well-Maintained Vehicles",
        "Affordable Pricing",
      ],
      responseTime: "Immediate",
      availability: "Event Duration",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Average 5-minute emergency response time with GPS-enabled dispatch system.",
    },
    {
      icon: Shield,
      title: "Advanced Equipment",
      description:
        "State-of-the-art medical equipment and life support systems in every vehicle.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Certified paramedics and EMTs with extensive emergency medical experience.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Patient-centered approach with dignity, respect, and professional medical care.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive Emergency
              <span className="text-blue-600 block">Ambulances Services </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Shikder Ambulance is a leading provider of emergency ambulance
              services, dedicated to serving the critical needs of Dhaka city
              and extending our reach to all districts of Bangladesh. We
              understand that in times of emergency Ambulance, every second
              counts. That's why we are committed to providing Ambulance,
              professional, and compassionate transport solutions, ensuring
              patients receive the urgent Ambulance care they need, wherever
              they are in the country.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              017100-60020
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/default.png"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Floating Info Card */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${service.color}`}
                      >
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Response Time
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          {service.responseTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                >
                  <div>
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${service.color} mb-4`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-slate-600">
                        <strong>Response:</strong> {service.responseTime}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-slate-600">
                        <strong>Available:</strong> {service.availability}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Service Features:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Shikder Ambulance Service?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide reliable, professional emergency Ambulance services
              with a commitment to saving lives and ensuring the best patient
              care. Anytime, Anywhere is Available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need Emergency Ambulance Services?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't wait in an emergency times. Our professional team is ready
              to respond 24/7 with advanced life support Ambulance transport.
              Your safety transport is our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="'tel:+8801710060020">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 017100-60020
                </Button>
              </Link>
              <Link href={"tel:+8801710060020"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp: 01710060020
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
