import { PricingSection } from "@/components/sections/pricing-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Contact FitCurves Gym for membership info, class schedules, and inquiries.",
};

export default function Page() {
  return <PricingSection />;
}
