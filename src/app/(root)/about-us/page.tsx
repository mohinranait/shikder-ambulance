import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Award, Shield } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
  keywords:
    "Freezing Ambulance Services. freezing ambulance, dead body carrier, ambulance service Dhaka, freezer ambulance Bangladesh, mortuary ambulance, body transportation service, dead body carrier frozen ambulance, Dhaka Airport freezing Ambulance, frozen ambulance, Shikder Freezing Ambulance, Dhaka freezing Ambulance, near Ac Ambulance, online Ambulance service, best Ambulance, Mirpur Ambulance Service, Shahabag Ambulance Service, Mirpur Ambulance Service, Badda Ambulance Service, Basaboo Ambulance Service, Madartek Ambulance Service, Mugdha Ambulance Service, Jatrabari Ambulance Service, Maniknagore Ambulance Service, Shenbag Ambulance Service, Freezing Ambulance Service Dhaka, Dead Body Freezing Ambulance Dhaka, Freezer Ambulance Dhaka, Body Freezer Ambulance Dhaka, Morgue Ambulance Dhaka, Dead Body Transport Dhaka, 24 Hour Freezing Ambulance Dhaka, Freezing Ambulance Near Me Dhaka, Emergency Freezing Ambulance Dhaka, Frozen Dead Body Ambulance Dhaka, AC Freezer Ambulance Dhaka, Long Distance Freezing Ambulance Dhaka, Dhaka Airport Freezing Ambulance, Hazrat Shahjalal Airport Freezer Ambulance, Bashundhara Freezing Ambulance, Gulshan Freezing Ambulance, Banani Freezing Ambulance, Baridhara Freezing Ambulance, Mohakhali Freezing Ambulance, Tejgaon Freezer Ambulance, Farmgate Freezing Ambulance, Karwan Bazar Freezing Ambulance, Shahbag Freezing Ambulance, Dhanmondi Freezing Ambulance, Mohammadpur Freezing Ambulance, Adabor Freezing Ambulance, Shyamoli Freezing Ambulance, Kallyanpur Freezer Ambulance, Mirpur Freezing Ambulance, Mirpur 1 Freezing Ambulance, Mirpur 10 Freezer Ambulance, Pallabi Freezing Ambulance, Rupnagar Freezing Ambulance, Uttara Freezing Ambulance, Uttara Sector Freezing Ambulance, Khilkhet Freezing Ambulance, Nikunja Freezing Ambulance, Kuril Freezing Ambulance, Badda Freezing Ambulance, Bashabo Freezing Ambulance, Khilgaon Freezing Ambulance, Malibagh Freezing Ambulance, Moghbazar Freezing Ambulance, Mouchak Freezer Ambulance, Rampura Freezing Ambulance, Banasree Freezing Ambulance, Nandipara Freezing Ambulance, Aftabnagar Freezing Ambulance, Merul Badda Freezer Ambulance, Motijheel Freezing Ambulance, Kamalapur Freezer Ambulance, Paltan Freezing Ambulance, Kakrail Freezing Ambulance, Nayapaltan Freezing Ambulance, Wari Freezing Ambulance, Sutrapur Freezing Ambulance, Gendaria Freezer Ambulance, Sadarghat Freezing Ambulance, Babubazar Freezer Ambulance, Kotwali Freezing Ambulance, Bangshal Freezing Ambulance, Jatrabari Freezing Ambulance, Donia Freezing Ambulance, Kadamtali Freezer Ambulance, Rayerbag Freezer Ambulance, Shyampur Freezing Ambulance, Demra Freezing Ambulance, Sarulia Freezing Ambulance, Matuail Freezing Ambulance, Narinda Freezing Ambulance, Lalbagh Freezing Ambulance, Azimpur Freezing Ambulance, Hazaribagh Freezing Ambulance, Kamrangirchar Freezer Ambulance, Islambagh Freezing Ambulance, Chawkbazar Freezing Ambulance, New Market Freezing Ambulance, Nilkhet Freezing Ambulance, Science Lab Freezing Ambulance, Katabon Freezing Ambulance, Elephant Road Freezer Ambulance, Panthapath Freezing Ambulance, Green Road Freezing Ambulance, Segunbagicha Freezing Ambulance, Shahbagh Freezer Ambulance, DMCH Freezing Ambulance, BSMMU Freezer Ambulance, Dhaka Medical College Freezing Ambulance, Square Hospital Freezer Ambulance, Labaid Freezing Ambulance, Popular Hospital Freezer Ambulance, Evercare Hospital Freezing Ambulance, United Hospital Freezing Ambulance, Holy Family Hospital Freezer Ambulance, Ibn Sina Freezing Ambulance, Asgar Ali Hospital Freezer Ambulance, Enam Medical Freezing Ambulance, Emergency Freezing Ambulance Dhaka City, Dhaka City Freezer Ambulance, Best Freezing Ambulance Dhaka, Affordable Freezer Ambulance Dhaka, Quick Freezing Ambulance Dhaka, Reliable Freezer Ambulance Service Dhaka, Professional Freezing Ambulance Dhaka, Patient Dead Body Freezing Ambulance Dhaka, Dhaka to Chittagong Freezing Ambulance, Dhaka to Sylhet Freezer Ambulance, Dhaka to Khulna Freezing Ambulance, Dhaka to Barisal Freezing Ambulance, Dhaka to Rajshahi Freezer Ambulance, Dhaka to Rangpur Freezing Ambulance, Long Route Freezing Ambulance Dhaka, Highway Freezer Ambulance Dhaka, Home to Morgue Freezer Ambulance, Hospital to Home Freezing Ambulance, Emergency Dead Body Transport Dhaka, Dhaka Freezing Body Transport, Citywide Freezing Ambulance Service, Frozen Body Transport Dhaka, Body Preservation Ambulance Dhaka, Refrigerated Ambulance Dhaka, Dhaka Refrigerated Dead Body Ambulance, Fast Freezing Ambulance Dhaka, 24/7 Freezer Ambulance Dhaka, Near Me Freezing Ambulance Service, Premium Freezing Ambulance Dhaka, Dedicated Freezer Ambulance Dhaka, Dhaka Burial Transport Ambulance, Janaza Transport Freezing Ambulance, Coffin Transport Freezing Ambulance Dhaka, Dhaka Mortuary Ambulance Service.",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/freezing-ambulance",
  },
  openGraph: {
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
    url: "https://shikderambulance.com/freezing-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Freezing Ambulance Service-Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. Professional 24/7 freezing ambulance service across Bangladesh.",
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

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years of Service" },
    { number: "50,000+", label: "Lives Saved" },
    { number: "24/7", label: "Emergency Response" },
    { number: "98%", label: "Response Rate" },
  ];

  const team = [
    {
      name: "Shahadat Shikder",
      role: "Director",
      experience: "10 years",
      image: "/default.png",
      specialization: "Customer Support: 24/7",
    },
    {
      name: "Musa Shikder Mahir",
      role: "Director",
      experience: "10 years",
      image: "/default.png",
      specialization: "Software Engineer",
    },
    {
      name: "Mohin Rana",
      role: "Developer",
      experience: "10 years",
      image: "/default.png",
      specialization: "Software Developer",
    },
    {
      name: "Kamrul Islam",
      role: "Manager",
      experience: "8 years",
      image: "/default.png",
      specialization: "Digital Marketing Manager",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with dignity, respect, and the highest level of patient care.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description:
        "Every second counts in emergencies. We pride ourselves on our quick response times.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Patient safety is our top priority in every emergency situation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of Ambulance and professional service.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              About Shikder Ambulance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Dedicated to Saving Lives with
              <span className="text-blue-600 block">
                Emergency Ambulance Care
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Shikder Ambulance, we stand by your side with fast,
              professional, and compassionate ambulance care—because saving
              lives is more than our duty, it is our promise. Whether it is an
              emergency or planned patient transfer, we’re ready 24/7 to help
              across Dhaka.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  At Shikder Ambulance, we started our journey back in 2015 with
                  one simple but powerful mission: to bring fast, reliable, and
                  truly caring emergency ambulance services to the people of
                  Dhaka. What began as a small team determined to make a
                  difference has grown into one of the most trusted ambulance
                  services in Dhaka city.
                </p>
                <p>
                  From day one, our goal was clear—when every second matters, we
                  must be ready. That’s why we’ve invested in modern AC, non-AC,
                  and life support ICU ambulances, along with GPS-enabled
                  dispatch systems to make sure help gets to you faster,
                  anytime, anywhere.
                </p>
                <p>
                  Today, Shikder Ambulance runs 24/7 with a caring team of
                  trained drivers, paramedics, and staff who see this not just
                  as a job—but as a responsibility to our community. Because in
                  times of emergency, you need more than an ambulance; you need
                  people who genuinely care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/about-us.jpg"
                  alt="About Us: Shikder Ambulance Service"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your safety, comfort, and peace of mind mean everything to us. We
              are here 24/7 with fast, reliable, and caring ambulance service,
              because: Your safety and comfort are our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md  transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Behind every quick response and safe journey is our dedicated team
              of trained drivers. At <b>Shikder Ambulance</b>, our experts work
              24/7 to ensure patients get fast, safe, and professional care in
              Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member?.image || "/default.png"}
                    alt={member?.name}
                      width={300}
                      height={300}
                    className="object-cover w-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    {member.experience} experience
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Our Mission and Vission
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              " Shikder Ambulance's mission is to deliver swift, compassionate,
              and life-saving emergency medical transport, prioritizing patient
              well-being and community safety. Our vision is to be Bangladesh's
              most trusted and advanced ambulance service, setting the standard
              for rapid response and exceptional pre-hospital care. Every second
              counts; every patient matters."
            </p>
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Heart className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
