import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Eye, Lock, Database, Phone } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mx-auto bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy – Shikder Ambulance

            </h1>
            <p className="text-lg text-gray-600 mb-5">Last updated: 22-07-2025 </p>

            <p>At Shikder Ambulance, we are committed to protecting the privacy and personal information of our clients and website visitors. This Privacy Policy outlines how we collect, and protect your information when you engage with our services in Dhaka and all districts of Bangladesh.</p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Personal Information
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Name, phone number, and emergency contact details</li>
                    <li>Medical information relevant to emergency care</li>
                    <li>Location data for ambulance dispatch</li>
                    <li>Insurance and payment information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Automatically Collected Information
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Device information and IP address</li>
                    <li>Usage data and service interactions</li>
                    <li>GPS location during emergency calls</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Provide emergency medical services and ambulance dispatch
                  </li>
                  <li>Communicate with you about your medical care</li>
                  <li>Process payments and insurance claims</li>
                  <li>Improve our services and response times</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Maintain medical records as required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-red-600" />
                  Information Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We implement robust security measures to protect your personal
                  and medical information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Encrypted data transmission and storage</li>
                  <li>Access controls and staff training</li>
                  <li>Regular security audits and updates</li>
                  <li>HIPAA-compliant data handling procedures</li>
                  <li>Secure backup and disaster recovery systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We may share your information only in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>With healthcare providers involved in your care</li>
                  <li>With hospitals and medical facilities</li>
                  <li>With insurance companies for claim processing</li>
                  <li>With emergency services and first responders</li>
                  <li>When required by law or court order</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>
                    Request deletion of your data (subject to legal
                    requirements)
                  </li>
                  <li>Opt-out of non-essential communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For privacy-related questions or concerns, contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong> shikderambulance@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> 017100-60020
                  </p>
                  <p>
                    <strong>Address:</strong> Mogbazar Road, Dhaka
                    1217, Bangladesh
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Your trust is important to us. At Shikder Ambulance, we are committed to protecting your privacy and delivering safe, dependable emergency medical services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
