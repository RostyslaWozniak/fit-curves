"use client";

import { fintessProgrammData } from "@/data/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { cn } from "@/lib/utils";
import { typographyVariants } from "../ui/typography";

export const AboutSection = () => {
  return (
    <div>
      <section
        className="flex min-h-[700px] items-center justify-center lg:min-h-[500px]"
        style={{
          backgroundImage: `url("/wave-bg.svg")`,
          backgroundSize: "cover",
        }}
      >
        <MaxWidthWrapper className="flex items-center justify-center py-10">
          <p
            className={cn(
              typographyVariants({ variant: "p" }),
              "relative z-20 text-primary-foreground",
            )}
          >
            {`FitCurves is more than just a gym; it's a community dedicated to
            empowering women to achieve their fitness and health goals. Founded
            on the principles of inclusivity and support, FitCurves offers a
            range of programs tailored to women's unique fitness needs. Whether
            you're looking to build strength, improve flexibility, or simply
            stay active, our team is here to guide and motivate you every step
            of the way.`}
            <motion.span
              className="absolute right-1/3 top-0 -z-10 aspect-square h-[200px] rounded-full bg-primary opacity-40 shadow-lg xl:-top-10 xl:h-[250px]"
              initial={{ scale: "0%" }}
              whileInView={{ scale: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </p>
        </MaxWidthWrapper>
      </section>
      {/* Programms */}
      <section className="py-20">
        <MaxWidthWrapper className="space-y-20 px-0">
          <h2 className={cn(typographyVariants({ variant: "h2" }), "relative")}>
            Our Programs
          </h2>

          <div>
            {fintessProgrammData.map(({ title, text, image }, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <div
                  key={title}
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{
                    flexDirection: isEven ? "row-reverse" : "row",
                  }}
                >
                  <div
                    className={cn(
                      "grid min-h-[300px] items-center overflow-hidden",
                      {
                        "pr-2 md:order-1": isEven,
                        "pl-2": !isEven,
                      },
                    )}
                  >
                    <motion.h3
                      className={cn(
                        typographyVariants({ variant: "h3" }),
                        "w-full bg-secondary py-3 text-primary-foreground",
                        {
                          "rounded-r-full": isEven,
                          "rounded-l-full": !isEven,
                        },
                      )}
                      initial={{
                        translateX: isEven ? "-100%" : "100%",
                      }}
                      whileInView={{ translateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {title}
                    </motion.h3>
                    <p
                      className={cn(
                        typographyVariants({ variant: "p" }),
                        "-translate-y-10 px-2 text-center font-semibold md:text-start lg:px-10",
                      )}
                    >
                      {text}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className={cn(
                      "h-full w-full overflow-hidden object-cover shadow-md shadow-secondary/30",
                      {
                        "md:rounded-r-2xl": !isEven,
                        "md:rounded-l-2xl": isEven,
                      },
                    )}
                  >
                    <Image
                      width={400}
                      height={300}
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};
