

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  AlertTriangle,
  Phone,
  NotebookPen,
} from "lucide-react";
import Link from "next/link";
import BlogLists from "./components/BlogLists";
import BlogFeatures from "./components/BlogFeatures";
import SideBarLists from "./components/AsidePosts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shikder Ambulance Blogs | Ambulance Tips & Updates",
  description:
    "Read Shikder Ambulance blogs for emergency ambulance tips, patient transport guidance, ICU ambulance information, freezing ambulance updates, and service news in Dhaka.",
  keywords:
    "Shikder Ambulance blogs, ambulance service blog, emergency ambulance tips, ambulance service in Dhaka, ICU ambulance service, freezing ambulance service, AC ambulance service, Non-AC ambulance service, patient transport guide, hospital transfer ambulance, dead body transport service, ambulance booking tips, 24/7 ambulance service, Dhaka ambulance service, emergency patient transport",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/blogs",
  },
  openGraph: {
    title: "Shikder Ambulance Blogs | Ambulance Service Tips & Updates",
    description:
      "Read Shikder Ambulance blogs for emergency ambulance tips, patient transport guidance, ICU ambulance information, freezing ambulance updates, and service news in Dhaka.",
    url: "https://shikderambulance.com/blogs",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Shikder Ambulance Blogs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Shikder Ambulance Blogs - Ambulance Tips & Updates",
    description:
      "Shikder Ambulance Blogs. Emergency Ambulance Service Tips & Updates",
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

export default function BlogsPage() {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Heart className="h-3 w-3 mr-1" />
                Your trusted partner
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Blogs - {" "}
                <span className="text-blue-600"> Shikder Ambulance </span> Tips & Updates
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Read Shikder Ambulance blogs for helpful ambulance tips, emergency service updates, patient transport guidance, ICU ambulance information, and freezing ambulance support. Your trusted blog for safe, reliable transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <BlogFeatures />      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Blog Posts */}
            <BlogLists />

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Posts */}
              <SideBarLists />

              {/* Emergency Contact */}
              <Card className="p-6 bg-red-50 border-red-200">
                <div className="text-center space-y-4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Need Emergency Ambulance?
                  </h3>
                  <p className="text-gray-600">
                    Don't wait - call for immediate assistance
                  </p>
                  <div className="space-y-2">
                    <Link href={"tel:+8801627669222"} className="flex">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Call: 01627-669222
                      </Button>
                    </Link>
                    <Link href={"https://wa.me/+8801710060020"} className="flex">
                      <Button
                        variant="outline"
                        className="w-full bg-green-600 border-green-600 text-white hover:bg-green-500 hover:text-white "
                      >
                        WhatsApp Now: 01710060020
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <NotebookPen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Online Booking
                  </h3>
                  <p className="text-gray-600">
                    Get the latest patient transport tips and health care
                    advice
                  </p>
                  <div className="space-y-2">
                    <Link href={'/contact-us'}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Booking Now
                      </Button>                                
                    </Link>                    
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
}
