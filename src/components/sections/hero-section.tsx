/** @format */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { typographyVariants } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] overflow-x-hidden">
      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-10 md:pt-20 xl:flex-row xl:items-start">
        {/* left side */}
        {/* bcackground */}
        <motion.div
          className="absolute -left-20 top-0 h-[550px] w-[120dvw] rounded-b-full rounded-r-full bg-gradient-to-tr from-primary via-primary to-secondary shadow-md md:top-20 md:w-[100dvw] lg:w-[90dvw] xl:-left-10 xl:w-[55dvw]"
          initial={{ opacity: 0, translateX: "-300px", rotate: "3deg" }}
          whileInView={{ opacity: 1, translateX: "0", rotate: "3deg" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ translateX: "-300px" }}
          whileInView={{ translateX: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="z-10 flex w-[min(600px,100%)] flex-col items-start gap-10 pt-16 md:pt-28"
        >
          <h1
            className={cn(
              typographyVariants({ variant: "h1" }),
              "text-primary-foreground",
            )}
          >
            Get Fit. Stay Curvy.
          </h1>
          <p
            className={cn(
              typographyVariants({ variant: "p" }),
              "text-primary-foreground",
            )}
          >
            {`Join our women's fit club and achieve your goals fit-goals with the
            help of our individual service packages and effective dietary
            program.`}
          </p>
          <Link
            href="/packages"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group bg-secondary text-xl",
            )}
          >
            Learn more{" "}
            <ArrowRight
              className="pl-2 transition-transform duration-300 group-hover:translate-x-3"
              size="30"
            />
          </Link>
        </motion.div>

        {/* right side */}

        <div className="z-10 flex w-[min(600px,100%)] flex-col items-center gap-5 md:translate-x-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              width={500}
              height={500}
              src="/home-big.jpg"
              alt="training"
              className="mx-auto w-[min(450px,100%)] rounded-3xl shadow-md sm:w-full"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              width={500}
              height={500}
              src="/home-small.jpg"
              alt="training"
              className="mx-auto w-[min(450px,100%)] rounded-3xl shadow-md sm:w-[min(350px,100%)] sm:-translate-x-[100px] sm:-translate-y-[100px] md:sm:-translate-x-[200px]"
              priority
            />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
