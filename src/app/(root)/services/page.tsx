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

export default function ServicesPage() {
  const services = [
    {
      title: "Emergency Ambulance Service",
      description:
        "Critical care transport with advanced life support equipment and trained paramedics for life-threatening emergencies.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Advanced Life Support (ALS)",
        "Cardiac Monitoring & Defibrillation",
        "IV Therapy & Emergency Medications",
        "Airway Management",
        "Real-time Hospital Communication",
        "GPS-Enabled Rapid Response",
      ],
      responseTime: "5 minutes average",
      availability: "24/7",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Non-Emergency Medical Transport",
      description:
        "Comfortable and safe medical transport for scheduled appointments, hospital transfers, and routine medical care.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Wheelchair Accessible Vehicles",
        "Stretcher Transport Available",
        "Medical Supervision During Transport",
        "Insurance Coverage Accepted",
        "Scheduled Appointments",
        "Comfortable & Clean Vehicles",
      ],
      responseTime: "30 minutes",
      availability: "7 AM - 10 PM",
      icon: Ambulance,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Critical Care Transport",
      description:
        "Specialized transport for critically ill patients requiring intensive care during transfer between medical facilities.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "ICU-Level Medical Equipment",
        "Ventilator Support",
        "Specialized Critical Care Nurses",
        "Hospital-to-Hospital Transfers",
        "Continuous Patient Monitoring",
        "Advanced Medication Administration",
      ],
      responseTime: "15 minutes",
      availability: "24/7",
      icon: Stethoscope,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Event Medical Services",
      description:
        "Professional on-site medical coverage for events, sports competitions, and large gatherings with standby medical personnel.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Event Standby Services",
        "First Aid Stations Setup",
        "Crowd Medical Support",
        "Emergency Response Planning",
        "Medical Personnel On-Site",
        "Coordination with Local Hospitals",
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
              <span className="text-blue-600 block">Medical Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              From life-threatening emergencies to routine medical transport, we
              provide professional, compassionate care with advanced medical
              equipment and highly trained personnel.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 911
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
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
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
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
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
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine advanced medical technology with compassionate care to
              deliver exceptional emergency medical services.
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
              Need Emergency Medical Services?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't wait in a medical emergency. Our professional team is ready
              to respond 24/7 with advanced life support and rapid transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 911
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Non-Emergency: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
