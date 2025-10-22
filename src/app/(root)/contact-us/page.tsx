import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import ContactForm from "@/components/pages/contact/contact-form";

export const metadata = {
  title: "Contact Us: Shikder Ambulance Service",
  description:
    "Shikder Ambulance Service in Bangladesh. We provide different types of Ambulances. The Largest and Trusted Ambulacne Company in Bangladesh. When you need Ambulance the Contact Us.",
  keywords: [
    "Shikder Ambulance service",
    "emergency ambulance",
    "Dhaka ambulance",
  ],
  openGraph: {
    title: "Contact Us: Shikder Ambulance Service",
    description:
      "Shikder Ambulance Service in Bangladesh. We provide different types of Ambulances. The Largest and Trusted Ambulacne Company in Bangladesh. When you need Ambulance the Contact Us.",
    url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "https://yourwebsite.com/your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ambulance Service Banner",
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: ["017100-60020", "Available 24/7"],
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Phone,
      title: "Non-Emergency",
      details: ["017100-60020", "7 AM - 10 PM Daily"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["shikderambulance@gmail.com", "Response: 24/7"],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: ["Eskaton Road, Mogbazar", "Dhaka City, 1217"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const locations = [
    {
      name: "Main Station",
      phone: "01710060020",
      hours: "24/7 Emergency Services",
      address: "Holy Family Hospital, New Eskaton Road, Dhaka-1217",
    },
    {
      name: "Mohakhali",
      phone: "01627-669222",
      hours: "Available: 24/7",
      address: "Warless Road, Mohakhali, Dhaka-1230",
    },
    {
      name: "Jatrabari",
      phone: "017100-60020",
      hours: "24/7 Emergency Services",
      address: "Jatrabari Chowrasta, Dhaka-1204",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Get in Touch with
              <span className="text-blue-600 block">Shikder Ambulance</span>
            </h1>
            <p className="sm:text-lg text-slate-600 leading-relaxed">
              We're here to help 24/7. Whether it's an emergency or you need
              information about our services, don't hesitate to reach out to our
              professional team.
            </p>
          </div>
        </div>
      </section>




      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-center  text-slate-800 mb-1">
              Contact Us and Find Our Location on Google Maps
            </h2>
            <p className=" text-slate-600 max-w-3xl mx-auto">
              Every second counts — we are on our way.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Send Us a Message
                </CardTitle>
                <p className="text-slate-600">
                  For non-emergency inquiries, service information,
                  please fill out the form below.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>



            {/* Map Placeholder */}
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Google Maps Location
                </CardTitle>
                <p className="text-slate-600">
                  Get directions to this location on Google Maps
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 bg-slate-200 rounded-lg flex items-center justify-center">
                  <iframe
                    title="Shikder Ambulance, Mogbazar, Dhaka"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11260.62132106335!2d90.40976524429216!3d23.78996494947933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6cafeffc7145ade5%3A0x6f6919835e6914af!2sShikder%20Ambulance%20Services!5e0!3m2!1sen!2sbd!4v1761139933386!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"

                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* Office Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-center  text-slate-800 mb-1">
              Our Locations
            </h2>
            <p className="text-slate-600 text-center  mb-4">
              We have multiple stations strategically located throughout the
              city to ensure rapid response times.
            </p>
          </div>

          <div className="grid lg:grid-cols-3  gap-4">
            {locations.map((location, index) => (
              <Card key={index} className="border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <p className="text-slate-600">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <p className="text-slate-600">{location.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <p className="text-slate-600">{location.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>


      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-center  text-slate-800 mb-1">
              Contact Information
            </h2>
            <p className=" text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us for emergencies, appointments, and
              general inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border shadow transition-shadow"
              >
                <CardContent className="p-8">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${info.bgColor} mx-auto mb-6`}
                  >
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className={`${detailIndex === 0
                        ? "text-lg font-bold text-slate-800"
                        : "text-slate-600"
                        } ${detailIndex === 0 && info.title === "Emergency Hotline"
                          ? "text-red-600"
                          : ""
                        }`}
                    >
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-center  text-slate-800 mb-1">
              Frequently Asked Questions
            </h2>
            <p className=" text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions about our emergency patient transport
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  How can I book an ambulance service?
                </h3>
                <p className="text-slate-600">
                  You can typically book an ambulance by calling our 24/7 emergency hotline, or visiting our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  What types of ambulance does provide?
                </h3>
                <p className="text-slate-600">
                  Shikder Ambulance usually offers various services, including Basic Life Support ICU Ambulances, AC/non-AC ambulances, and  freezing Ambulance for deceased transport.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Does provide Ambulance outside of Dhaka?
                </h3>
                <p className="text-slate-600">
                  Yes, Shikder Ambulance often offers long-distance patient transfers both within and outside their usual service areas. Specific arrangements can be made by contacting their customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  What are your operating hours?
                </h3>
                <p className="text-slate-600">
                  Shikder Ambulance services are typically available 24 hours a day, 7 days a week, ensuring accessibility for emergencies at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
