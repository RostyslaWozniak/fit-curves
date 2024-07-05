"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { typographyVariants } from "@/components/ui/typography";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export const AboutMainSection = () => {
  useEffect(() => scrollTo({ top: 0 }), []);
  return (
    <section
      className="sticky top-14 md:top-16"
      style={{
        backgroundImage: `url("/home-big.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mb-5 flex h-[100vh] items-center justify-center backdrop-brightness-50">
        <MaxWidthWrapper className="content flex flex-col items-center justify-center gap-10 px-5 text-primary-foreground">
          <motion.h1
            className={cn(typographyVariants({ variant: "h1" }), "text-center")}
            initial={{ translateX: "-200px" }}
            whileInView={{ translateX: "0" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.h1>
          <motion.p
            className="text-center text-lg lg:text-2xl"
            initial={{ translateY: "100px", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {` FitCurves is more than just a gym; it's a community dedicated to
            empowering women to achieve their fitness and health goals. Founded
            on the principles of inclusivity and support, FitCurves offers a
            range of programs tailored to women's unique fitness needs. Whether
            you're looking to build strength, improve flexibility, or simply
            stay active, our team is here to guide and motivate you every step
            of the way.`}
          </motion.p>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
