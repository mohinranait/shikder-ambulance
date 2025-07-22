"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: ["911", "Available 24/7"],
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Phone,
      title: "Non-Emergency",
      details: ["(555) 123-4567", "7 AM - 10 PM Daily"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@medicareambulance.com", "Response within 24 hours"],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const locations = [
    {
      name: "Main Station",
      address: "123 Medical Center Drive, Healthcare City, HC 12345",
      phone: "(555) 123-4567",
      hours: "24/7 Emergency Services",
    },
    {
      name: "North Station",
      address: "456 North Avenue, Healthcare City, HC 12346",
      phone: "(555) 123-4568",
      hours: "24/7 Emergency Services",
    },
    {
      name: "South Station",
      address: "789 South Boulevard, Healthcare City, HC 12347",
      phone: "(555) 123-4569",
      hours: "24/7 Emergency Services",
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
              <span className="text-blue-600 block">MediCare Ambulance</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're here to help 24/7. Whether it's an emergency or you need
              information about our services, don't hesitate to reach out to our
              professional team.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Heart className="h-6 w-6" />
            <p className="text-lg font-semibold">
              MEDICAL EMERGENCY? CALL 911 IMMEDIATELY
            </p>
            <Heart className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us for emergencies, appointments, and
              general inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
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
                      className={`${
                        detailIndex === 0
                          ? "text-lg font-bold text-slate-800"
                          : "text-slate-600"
                      } ${
                        detailIndex === 0 && info.title === "Emergency Hotline"
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

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">
                  Send Us a Message
                </CardTitle>
                <p className="text-slate-600">
                  For non-emergency inquiries, service information, or feedback,
                  please fill out the form below.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="serviceType">Service Type</Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              serviceType: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">
                              Emergency Services
                            </SelectItem>
                            <SelectItem value="non-emergency">
                              Non-Emergency Transport
                            </SelectItem>
                            <SelectItem value="critical-care">
                              Critical Care Transport
                            </SelectItem>
                            <SelectItem value="event">
                              Event Medical Services
                            </SelectItem>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            subject: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Our Locations
                </h2>
                <p className="text-slate-600 mb-8">
                  We have multiple stations strategically located throughout the
                  city to ensure rapid response times.
                </p>
              </div>

              {locations.map((location, index) => (
                <Card key={index} className="border-0 shadow-lg">
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

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="h-64 bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-500">Interactive Map</p>
                      <p className="text-sm text-slate-400">
                        Google Maps integration would go here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions about our emergency medical
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  When should I call 911?
                </h3>
                <p className="text-slate-600">
                  Call 911 for any life-threatening emergency, severe injuries,
                  chest pain, difficulty breathing, unconsciousness, or when
                  immediate medical attention is needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Do you accept insurance?
                </h3>
                <p className="text-slate-600">
                  Yes, we accept most major insurance plans including Medicare
                  and Medicaid. Contact us to verify your specific coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  What areas do you serve?
                </h3>
                <p className="text-slate-600">
                  We provide emergency and non-emergency services throughout
                  Healthcare City and surrounding metropolitan areas with
                  multiple station locations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  How fast is your response time?
                </h3>
                <p className="text-slate-600">
                  Our average emergency response time is 5 minutes, with
                  GPS-enabled dispatch and strategically located ambulances
                  throughout our service area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
