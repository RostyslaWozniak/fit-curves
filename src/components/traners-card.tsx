"use client";

import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import { typographyVariants } from "./ui/typography";

type CoachSectionProps = {
  traner: {
    name: string;
    experience: number;
    specialty: string;
    bio: string;
    image: string;
  };
  i: number;
  range: [number, number];
  progress: MotionValue<number>;
  targetScale: number;
};

export const TranerCard = ({
  traner,
  i,
  progress,
  range,
  targetScale,
}: CoachSectionProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  const TABLE_WIDTH = 768;

  const topPosition = windowWidth && TABLE_WIDTH < windowWidth ? 50 : 10;

  const { name, specialty, bio, image } = traner;
  return (
    <div
      className="sticky flex h-[100vh] justify-center px-5"
      style={{ top: `${i * topPosition}px` }}
    >
      <MaxWidthWrapper>
        <motion.div
          ref={container}
          key={i}
          className={cn(
            "my-20 flex h-[70vh] min-h-[500px] items-center justify-evenly overflow-hidden rounded-3xl bg-primary px-0 text-primary-foreground shadow-xl shadow-primary-foreground/50 md:h-[50vh] md:flex-row md:rounded-[50px]",
          )}
          style={{
            scale: cardScale,
            flexDirection:
              windowWidth && TABLE_WIDTH < windowWidth
                ? i % 2 === 0
                  ? "row"
                  : "row-reverse"
                : "column-reverse",
          }}
        >
          {/* left */}
          <div className="space-y-5 px-5 py-5 md:px-10">
            <h2
              className={cn(typographyVariants({ variant: "h3" }), "text-2xl")}
            >
              {name}
            </h2>
            <div
              className={cn(
                typographyVariants({ variant: "p" }),
                "flex flex-col",
              )}
            >
              <h3 className="text-center text-lg font-medium text-muted md:text-2xl">
                {specialty}
              </h3>
            </div>
            <p className="text-center text-sm text-muted md:text-xl">{bio}</p>
          </div>
          {/* right */}
          <div className="h-full w-full overflow-hidden md:h-full md:min-w-[50%]">
            <motion.img
              src={image}
              alt={`${name}'s photo`}
              className="h-full w-full object-cover"
              style={{
                scale:
                  windowWidth && TABLE_WIDTH > windowWidth ? 1 : imageScale,
              }}
            />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};
