
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceOverview } from "@/components/service-overview";
import { ContactCTA } from "@/components/contact-cta";
import PremiumFaqSection from "@/components/pages/home/faq";
import PremiumReviewSection from "@/components/pages/home/reviews";
import { Metadata } from "next";
import { BlogTeasers } from "./components/BlogTeasers";

export const metadata: Metadata = {
  title:
    "Shikder Ambulance Service in Dhaka | Best Reliable 24/7",
  description:
    "Shikder Ambulance Services in Dhaka. Looking for a reliable Ambulance? You have come to the right place. We guarantee your safe and comfortable arrival at your destination.",
  keywords:
    "ambulance service, best ambulance, near ambulance service, online ambulance, best ambulance near me, top ambulance, freezing ambulance near me, fast ambulance, 24 Hours Ambulance, Dhaka Ambulance service, dead body carrier ambulance, emergency ambulances, emergency medical service, Dhaka ambulance, Bangladesh ambulance, AC ambulance, non-ac ambulance, life support ambulance, freezing ambulance, ICU ambulance",
  openGraph: {
    title: "Shikder Ambulance Service | Best Reliable 24/7",
    description: "Shikder Ambulance Services in Dhaka. Looking for a reliable Ambulance? You have come to the right place. We guarantee your safe and comfortable arrival at your destination",
    url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
    locale: "bn_BD",
    type: "website",
    images: ['http://res.cloudinary.com/dm9s5d3xk/image/upload/v1760521638/shikder/xt56gg7xm0zxlr84w6ca.jpg'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikder Ambulance Service Dhaka | 24/7 Emergency",
    description:
      "Fast, reliable 24/7 ambulance support in Dhaka including ICU, life support & freezing ambulance services.",
    images: [
      "http://res.cloudinary.com/dm9s5d3xk/image/upload/v1760521638/shikder/xt56gg7xm0zxlr84w6ca.jpg"
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServiceOverview />
      <BlogTeasers />
      <PremiumFaqSection />
      <PremiumReviewSection />
      <ContactCTA />
    </>
  );
}
