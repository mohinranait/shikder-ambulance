import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  FileText,
  AlertTriangle,
  CreditCard,
  Phone,
  Clock,
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <FileText className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">Last updated: July 2025</p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  By using Shikder Ambulance services, you agree to be bound by
                  these Terms and Conditions. These terms govern your use of our
                  emergency medical services, ambulance transportation, and
                  related healthcare services. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Service Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    24/7 Emergency Services
                  </h4>
                  <p className="text-gray-700">
                    Our <a href="http://shikderambulance.com" target="_blank" rel="noopener noreferrer">Ambulance services</a> are available 24 hours a day, 7 days
                    a week for emergency medical situations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Service Areas
                  </h4>
                  <p className="text-gray-700">
                    We primarily Ambulance Serve in the all Dhaka city Area and all districts of Bangladesh. We are always ready to provide ambulance all districts of Bangladesh.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Response Times
                  </h4>
                  <p className="text-gray-700">
                    While we strive for rapid response, actual arrival times may
                    vary based on traffic, weather, and other factors beyond our
                    control.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Emergency Use Only
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-800 font-semibold">
                    Our services are intended for genuine patient transport emergencies
                    only.
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Misuse of emergency services may result in service denial
                  </li>
                  <li>False emergency calls may be subject to legal action</li>
                  <li>
                    Non-emergency medical transport should be arranged through
                    appropriate channels
                  </li>
                  <li>
                    We reserve the right to assess the urgency of each call
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                  Payment and Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Service Fees
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Emergency Ambulance transport: BDT 2,000 - 5,000
                      (depending on distance)
                    </li>
                    <li>Advanced life support: Additional BDT 5000 - 7000 (Dhaka city). </li>
                    <li>
                      Waiting time charges: BDT 500 per hours.
                    </li>
                    <li>
                      Inter-hospital transfers: Rates vary by distance and
                      complexity
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Payment Methods
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Cash payment upon service completion</li>
                    <li>Mobile banking (bKash, Nagad, Rocket)</li>
                    <li>Credit/Debit cards</li>
                    <li>Islami Bank Ltd, Duch Bangla Bank Ltd (where applicable)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Insurance
                  </h4>
                  <p className="text-gray-700">
                    We work with major insurance providers. Please verify
                    coverage with your insurance company. Patients are
                    responsible for any amounts not covered by insurance.
                  </p>
                </div>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <CardTitle>Patient Rights and Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Patient Rights
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>You have the right to receive timely ambulance service during emergencies, 24/7.</li>
                    <li>You have the right to be treated with dignity, respect, and compassion at all times.</li>
                    <li>You have the right to be transported safely with proper medical equipment and trained personnel when needed.</li>
                    <li>You have the right to refuse the service or request changes before the transport begins.</li>
                    <li>
                      You have the right to share your feedback, ask questions, or make complaints without fear of judgment.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Patient Responsibilities
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>You must provide accurate details about the patient’s condition, pickup, and destination.</li>
                    <li>You must cooperate with the ambulance staff and follow their instructions during transport.</li>
                    <li>You should only request emergency ambulance services when truly needed.</li>
                    <li>You should help us by being honest, respectful, and cooperative throughout the service.</li>
                    <li>Respect the rights of other patients and staff</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact and Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For questions, concerns, or complaints regarding our services:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Emergency Line:</strong> 01627-669222
                  </p>
                  <p>
                    <strong>Customer Service:</strong> 017100-60020
                  </p>
                  <p>
                    <strong>Email:</strong> shikderambulance@gmail.com
                  </p>
                  <p>
                    <strong>Address:</strong> Mobgazar Holy family Road, Dhaka
                    1217, Bangladesh
                  </p>
                  <p>
                    <strong>Business Hours:</strong> 24/7 Available (for
                    emergency inquiries)
                  </p>
                  <p>
                    <strong>Business Hours:</strong> 5:00 AM - 11:00 PM (for
                    Non-emergency inquiries)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
