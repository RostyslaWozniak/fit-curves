"use client";
import { pricing } from "@/data/packages";
import { motion } from "framer-motion";
import { PricingCard } from "../pricing-card";

export const PricingSection = () => {
  return (
    <section className="relative mb-10 mt-20 flex w-screen flex-col justify-center">
      <motion.div
        className="scrollbar-hide flex snap-x snap-mandatory justify-start gap-5 overflow-x-scroll p-5 lg:flex-wrap lg:justify-center lg:gap-20"
        initial={{ translateY: "100px", opacity: 0 }}
        whileInView={{ translateY: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {pricing.map(({ title, services, price }, index) => (
          <PricingCard
            key={index}
            title={title}
            price={price}
            services={services}
          />
        ))}
      </motion.div>
    </section>
  );
};
