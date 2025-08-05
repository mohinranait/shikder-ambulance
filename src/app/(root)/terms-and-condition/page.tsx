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
            <p className="text-lg text-gray-600">Last updated: January 2024</p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  By using Akta Ambulance services, you agree to be bound by
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
                    Our ambulance services are available 24 hours a day, 7 days
                    a week for emergency medical situations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Service Areas
                  </h4>
                  <p className="text-gray-700">
                    We primarily serve the Dhaka Metropolitan Area. Service
                    availability in other areas may vary.
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
                    Our services are intended for genuine medical emergencies
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
                      Emergency ambulance transport: BDT 2,000 - 5,000
                      (depending on distance)
                    </li>
                    <li>Advanced life support: Additional BDT 1,500</li>
                    <li>
                      Waiting time charges: BDT 200 per 15-minute interval
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
                    <li>Insurance direct billing (where applicable)</li>
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
                <CardTitle>Medical Care Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All medical personnel are licensed and certified</li>
                  <li>
                    We follow established medical protocols and guidelines
                  </li>
                  <li>Equipment is regularly maintained and inspected</li>
                  <li>
                    We maintain appropriate medical supplies and medications
                  </li>
                  <li>
                    Patient care decisions are made by qualified medical
                    professionals
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liability and Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Service Limitations
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      We are not liable for delays due to traffic, weather, or
                      other external factors
                    </li>
                    <li>Medical outcomes cannot be guaranteed</li>
                    <li>
                      We may refuse service if safety conditions are not met
                    </li>
                    <li>
                      Service availability may be limited during natural
                      disasters or emergencies
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Insurance Coverage
                  </h4>
                  <p className="text-gray-700">
                    We maintain comprehensive liability insurance as required by
                    law. Our liability is limited to the extent permitted by
                    applicable laws and regulations.
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
                    <li>Right to respectful and dignified treatment</li>
                    <li>Right to privacy and confidentiality</li>
                    <li>Right to informed consent for treatment</li>
                    <li>
                      Right to refuse treatment (where legally permissible)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Patient Responsibilities
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide accurate medical information</li>
                    <li>Cooperate with medical personnel</li>
                    <li>Ensure payment for services rendered</li>
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
                    <strong>Emergency Line:</strong> 999
                  </p>
                  <p>
                    <strong>Customer Service:</strong> +880-1234-567890
                  </p>
                  <p>
                    <strong>Email:</strong> support@aktaambulance.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Medical Center Road, Dhaka
                    1000, Bangladesh
                  </p>
                  <p>
                    <strong>Business Hours:</strong> 9:00 AM - 6:00 PM (for
                    non-emergency inquiries)
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
