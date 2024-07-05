"use client";

import { traners } from "@/data/content";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { TranerCard } from "../traners-card";

export const TranersSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={container} className="mb-[-40px] md:mb-[-180px]">
      {traners.map((traner, index) => {
        const targetScale = 1 - (traners.length - index) * 0.05;
        return (
          <TranerCard
            key={index}
            i={index}
            traner={traner}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
