import { AboutMainSection } from "@/components/sections/about-main-section";
import { TranersSection } from "@/components/sections/traners-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet FitCurves trainers and discover our personalized women's fitness and wellness programs.",
};

export default function Page() {
  return (
    <div>
      <AboutMainSection />
      <TranersSection />
    </div>
  );
}
