import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Home,
  Stethoscope,
  Calendar,
  MapPin,
  HelpCircle,
  Shield,
  Newspaper,
  Mail,
  Clock,
  CreditCard,
  Building,
  Ambulance,
} from "lucide-react";

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Main Pages",
      icon: Home,
      color: "bg-blue-100 text-blue-600",
      pages: [
        {
          name: "Home",
          url: "/",
          description: "Main landing page with emergency booking",
        },
        {
          name: "About Us",
          url: "/about",
          description: "Our mission, vision, and company history",
        },
        {
          name: "Contact",
          url: "/contact",
          description: "Get in touch with our team",
        },
      ],
    },
    {
      category: "Services",
      icon: Stethoscope,
      color: "bg-red-100 text-red-600",
      pages: [
        {
          name: "Emergency Services",
          url: "/services/emergency",
          description: "24/7 emergency ambulance services",
        },
        {
          name: "Non-Emergency Transport",
          url: "/services/transport",
          description: "Scheduled medical transportation",
        },
        {
          name: "Inter-Hospital Transfer",
          url: "/services/transfer",
          description: "Patient transfer between facilities",
        },
        {
          name: "Event Medical Coverage",
          url: "/services/events",
          description: "Medical standby for events",
        },
        {
          name: "Air Ambulance",
          url: "/services/air",
          description: "Helicopter and aircraft medical transport",
        },
      ],
    },
    {
      category: "Booking & Scheduling",
      icon: Calendar,
      color: "bg-green-100 text-green-600",
      pages: [
        {
          name: "Emergency Booking",
          url: "/booking/emergency",
          description: "Immediate ambulance request",
        },
        {
          name: "Schedule Transport",
          url: "/booking/schedule",
          description: "Plan non-emergency medical transport",
        },
        {
          name: "Track Ambulance",
          url: "/booking/track",
          description: "Real-time ambulance tracking",
        },
        {
          name: "Booking History",
          url: "/booking/history",
          description: "View past service requests",
        },
      ],
    },
    {
      category: "Service Areas",
      icon: MapPin,
      color: "bg-purple-100 text-purple-600",
      pages: [
        {
          name: "Coverage Map",
          url: "/areas/map",
          description: "Interactive service area map",
        },
        {
          name: "Dhaka Metropolitan",
          url: "/areas/dhaka",
          description: "Dhaka city service details",
        },
        {
          name: "Chittagong Division",
          url: "/areas/chittagong",
          description: "Chittagong area coverage",
        },
        {
          name: "Sylhet Region",
          url: "/areas/sylhet",
          description: "Sylhet service information",
        },
      ],
    },
    {
      category: "Patient Resources",
      icon: HelpCircle,
      color: "bg-orange-100 text-orange-600",
      pages: [
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        {
          name: "Emergency Guidelines",
          url: "/resources/guidelines",
          description: "What to do in medical emergencies",
        },
        {
          name: "Insurance Guide",
          url: "/resources/insurance",
          description: "Insurance coverage information",
        },
        {
          name: "Patient Rights",
          url: "/resources/rights",
          description: "Your rights as a patient",
        },
      ],
    },
    {
      category: "Company Information",
      icon: Building,
      color: "bg-teal-100 text-teal-600",
      pages: [
        {
          name: "Our Team",
          url: "/company/team",
          description: "Meet our medical professionals",
        },
        {
          name: "Fleet Information",
          url: "/company/fleet",
          description: "Our ambulance vehicles and equipment",
        },
        {
          name: "Certifications",
          url: "/company/certifications",
          description: "Licenses and accreditations",
        },
        {
          name: "Careers",
          url: "/company/careers",
          description: "Join our medical team",
        },
      ],
    },
    {
      category: "News & Updates",
      icon: Newspaper,
      color: "bg-indigo-100 text-indigo-600",
      pages: [
        {
          name: "Latest News",
          url: "/news",
          description: "Company news and announcements",
        },
        {
          name: "Health Tips",
          url: "/news/health-tips",
          description: "Medical advice and health information",
        },
        {
          name: "Community Outreach",
          url: "/news/community",
          description: "Our community service initiatives",
        },
        {
          name: "Press Releases",
          url: "/news/press",
          description: "Official press statements",
        },
      ],
    },
    {
      category: "Account & Billing",
      icon: CreditCard,
      color: "bg-yellow-100 text-yellow-600",
      pages: [
        {
          name: "Patient Portal",
          url: "/account/portal",
          description: "Access your medical records",
        },
        {
          name: "Billing Information",
          url: "/account/billing",
          description: "View and pay bills online",
        },
        {
          name: "Insurance Claims",
          url: "/account/claims",
          description: "Submit and track insurance claims",
        },
        {
          name: "Payment Methods",
          url: "/account/payment",
          description: "Manage payment options",
        },
      ],
    },
    {
      category: "Legal & Compliance",
      icon: Shield,
      color: "bg-gray-100 text-gray-600",
      pages: [
        {
          name: "Privacy Policy",
          url: "/privacy",
          description: "How we protect your information",
        },
        {
          name: "Terms & Conditions",
          url: "/terms",
          description: "Service terms and conditions",
        },
        {
          name: "HIPAA Compliance",
          url: "/legal/hipaa",
          description: "Medical privacy compliance",
        },
        {
          name: "Accessibility",
          url: "/legal/accessibility",
          description: "Website accessibility statement",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="mx-auto bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
            <MapPin className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through all sections of our website to find the information
            and services you need. Our comprehensive medical services are
            organized for easy access.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">40+</div>
            <div className="text-sm text-gray-600">Total Pages</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">9</div>
            <div className="text-sm text-gray-600">Main Categories</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-red-600">24/7</div>
            <div className="text-sm text-gray-600">Service Hours</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">5+</div>
            <div className="text-sm text-gray-600">Service Areas</div>
          </div>
        </div>

        {/* Sitemap Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <div className={`p-3 rounded-lg mr-4 ${section.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {section.category}
                    <span className="ml-auto text-sm font-normal text-gray-500">
                      {section.pages.length} pages
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h4>
                          <span className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-1 rounded">
                            {page.url}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Phone className="h-8 w-8" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
          <p className="text-red-100 mb-6">
            For medical emergencies, don't navigate the website - call us
            directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <div className="text-sm text-red-100">Emergency Hotline</div>
              <div className="text-2xl font-bold">999</div>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <div className="text-sm text-red-100">Non-Emergency</div>
              <div className="text-xl font-bold">+880-1234-567890</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
