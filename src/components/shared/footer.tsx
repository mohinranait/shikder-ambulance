import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Ambulance,
  Heart,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Ambulance className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shikder Ambulance</h3>
                <p className="text-gray-400 text-sm">Anytime, Anywhere</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Shikder Ambulance company is the largest and trusted company in Bangladesh. We offering you to provide the all types of Ambulances. Quality Ambulance is available in Comfortable Price.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Heart className="h-4 w-4 mr-2 text-red-400" />
                Emergency Response
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="h-4 w-4 mr-2 text-blue-400" />
                Medical Transport
              </li>
              <li className="flex items-center text-gray-300">
                <Ambulance className="h-4 w-4 mr-2 text-purple-400" />
                Critical Patient Transport
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-red-400" />
                <div>
                  <p className="font-medium text-white -400">017100-60020</p>
                  <p className="text-sm">WhatsApp: Call & SMS</p>
                </div>
              </div>

              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <p>shikderambulance@gmail.com</p>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-green-400" />
                <div>
                  <p>Eskaton Rd, Mogbazar, Dhaka-1217</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Get tips and emergency updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p> Copyright-2025 &copy; Shikder Ambulance, All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Condition
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Phone className="h-5 w-5" />
            <p className="font-medium">
              Need Emergency Transport? Don't wait, Call Now.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
