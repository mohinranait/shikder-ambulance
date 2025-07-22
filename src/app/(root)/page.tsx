import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceOverview } from "@/components/service-overview";
import { BlogTeasers } from "@/components/blog-teasers";
import { ContactCTA } from "@/components/contact-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServiceOverview />
      <BlogTeasers />
      <ContactCTA />
    </>
  );
}
