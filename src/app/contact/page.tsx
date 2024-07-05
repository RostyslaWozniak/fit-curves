import { ContactSection } from "@/components/sections/contact-section";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Explore FitCurves membership plans: Base, Standard, and Premium for your fitness goals.",
};

export default function Page() {
  return <ContactSection />;
}
