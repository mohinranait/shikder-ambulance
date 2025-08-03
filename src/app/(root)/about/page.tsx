import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Award, Shield } from "lucide-react";
import Image from "next/image";

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
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Customer Support: 24/7",
    },
    {
      name: "Musa Shikder Mahir",
      role: "Director",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Software Engineer",
    },
    {
      name: "Mohin Rana",
      role: "Developer",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Software Developer",
    },
    {
      name: "Kamrul Islam",
      role: "Manager",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
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
              At Shikder Ambulance, we stand by your side with fast, professional, and compassionate ambulance care—because saving lives is more than our duty, it is our promise. Whether it is an emergency or planned patient transfer, we’re ready 24/7 to help across Dhaka.
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
                  At Shikder Ambulance, we started our journey back in 2015 with one simple but powerful mission: to bring fast, reliable, and truly caring emergency ambulance services to the people of Dhaka. What began as a small team determined to make a difference has grown into one of the most trusted ambulance services in Dhaka city.
                </p>
                <p>
                  From day one, our goal was clear—when every second matters, we must be ready. That’s why we’ve invested in modern AC, non-AC, and life support ICU ambulances, along with GPS-enabled dispatch systems to make sure help gets to you faster, anytime, anywhere.
                </p>
                <p>
                  Today, Shikder Ambulance runs 24/7 with a caring team of trained drivers, paramedics, and staff who see this not just as a job—but as a responsibility to our community. Because in times of emergency, you need more than an ambulance; you need people who genuinely care.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="MediCare Ambulance team"
                  fill
                  className="object-cover"
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
              Your safety, comfort, and peace of mind mean everything to us. We are here 24/7 with fast, reliable, and caring ambulance service, because: Your safety and comfort are our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
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
              Behind every quick response and safe journey is our dedicated team of trained drivers. At <b>Shikder Ambulance</b>, our experts work 24/7 to ensure patients get fast, safe, and professional care in Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Mission and Vission</h2>
            <p className="text-xl leading-relaxed mb-8">
              " Shikder Ambulance's mission is to deliver swift, compassionate, and life-saving emergency medical transport, prioritizing patient well-being and community safety. Our vision is to be Bangladesh's most trusted and advanced ambulance service, setting the standard for rapid response and exceptional pre-hospital care. Every second counts; every patient matters."
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
