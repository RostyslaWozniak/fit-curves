import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

type TVariant = "h1" | "h2" | "h3" | "h4" | "p";

type TypographyProps = {
  children: React.ReactNode;
  variant: TVariant;
  className?: string;
};

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-tight md:text-6xl text-center",
      h2: "text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl text-center",
      h3: "text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl text-center",
      h4: "text-xl font-bold tracking-tight sm:text-3xl md:text-3xl text-center",
      p: "text-xl md:text-2xl",
    },
  },
});

export const Typography = ({
  className,
  children,
  variant,
}: TypographyProps) => {
  const Comp = variant;
  return (
    <Comp className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Comp>
  );
};
