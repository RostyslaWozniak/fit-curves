"use client";

import { motion } from "framer-motion";
import { typographyVariants } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { benefitsData } from "@/data/content";

export const BenefitsSection = () => {
  return (
    <section className="flex flex-col items-center gap-14 bg-primary px-5 py-10 text-primary-foreground">
      <motion.h2
        className={cn(typographyVariants({ variant: "h3" }), "text-center")}
        initial={{ translateX: "-200px" }}
        whileInView={{ translateX: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        Advantages of Our Programs
      </motion.h2>
      <div className="content grid h-full grid-cols-1 place-items-center gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {benefitsData.map(({ title, icon: Icon }, index) => (
          <div
            key={title}
            className="flex h-full w-[min(350px,100%)] flex-col place-items-center justify-between gap-5 xl:w-[300px]"
          >
            <Icon size="60" className="h-full" />
            <motion.h3
              className={cn(typographyVariants({ variant: "h4" }), "h-full")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >{`${index + 1}. ${title}`}</motion.h3>
          </div>
        ))}
      </div>
    </section>
  );
};
