import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Award, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years of Service" },
    { number: "50,000+", label: "Lives Saved" },
    { number: "24/7", label: "Emergency Response" },
    { number: "98%", label: "Response Rate" },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      experience: "15 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Emergency Medicine",
    },
    {
      name: "Michael Chen",
      role: "Lead Paramedic",
      experience: "12 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Advanced Life Support",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      experience: "10 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Emergency Operations",
    },
    {
      name: "James Wilson",
      role: "Senior EMT",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300",
      specialization: "Critical Care Transport",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with dignity, respect, and the highest level of medical care.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Every second counts in emergencies. We pride ourselves on our quick response times.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Patient and crew safety is our top priority in every emergency situation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of medical care and professional service.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              About MediCare Ambulance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Dedicated to Saving Lives with
              <span className="text-blue-600 block">
                Professional Emergency Care
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              For over 15 years, MediCare Ambulance has been the trusted
              emergency medical service provider, delivering life-saving care
              with compassion, expertise, and unwavering commitment to our
              community.
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
                  Founded in 2009, MediCare Ambulance began with a simple
                  mission: to provide the fastest, most professional emergency
                  medical services to our community. What started as a small
                  team of dedicated paramedics has grown into the region's most
                  trusted ambulance service.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from
                  implementing GPS-enabled dispatch systems to upgrading our
                  fleet with state-of-the-art medical equipment. We've responded
                  to over 50,000 emergency calls, each one reinforcing our
                  commitment to excellence.
                </p>
                <p>
                  Today, we operate 24/7 with a team of certified paramedics,
                  EMTs, and support staff who share our passion for saving lives
                  and serving our community with integrity and compassion.
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
              These principles guide everything we do and shape how we serve our
              community every day.
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
              Our experienced medical professionals are dedicated to providing
              the highest quality emergency care.
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              "To provide exceptional emergency medical services with
              compassion, professionalism, and rapid response, ensuring every
              patient receives the highest quality care during their most
              critical moments."
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
