"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Home, ArrowLeft, Heart, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* 404 Error */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold text-blue-600">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oops! The page you're looking for seems to have taken a different
              route. Don't worry, our emergency services are still available
              24/7.
            </p>
          </div>

          {/* Emergency Contact Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Need Emergency Ambulance?
                </h3>
                <p className="text-gray-600">
                  Our services are available 24/7 all over Bangladesh
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="tel:01710060020">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Helpline
                  </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Emergency Call Now
                  </h4>
                  <p className="text-red-600 font-bold text-lg">01627-669222</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-green-600 font-bold text-lg">
                    017100-60020
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Homepage
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Service Areas */}
          <div className="text-center ">
            <p className="text-gray-600 mb-2 font-bold">
              <Clock className="h-4 w-4 inline mr-1" />
              Available 24/7, All districts of Bangladesh
            </p>
            <p className="text-sm text-gray-500">
              Dhaka • Barisal • Khulna • Rajshahi • Chittagong • Rangpur •
              Sylhet • Mymensingh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
