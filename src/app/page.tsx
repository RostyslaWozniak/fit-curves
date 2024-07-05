/** @format */

import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
}
