import { cn } from "@/lib/utils";
import Image from "next/image";
import { typographyVariants } from "@/components/ui/typography";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export const WhyUsSection = () => {
  return (
    <section className="flex min-h-[500px] flex-col items-center justify-center gap-10 py-10 md:px-10 md:pb-0">
      <MaxWidthWrapper>
        <div className="relative flex min-h-32 w-full items-center justify-center">
          <Image
            width={200}
            height={150}
            src="/dumbbell.svg"
            alt="dumbbell icon"
            className="absolute left-10 hidden h-auto w-auto lg:block"
          />
          <h2 className={cn(typographyVariants({ variant: "h2" }))}>
            Why Chose Us
          </h2>
        </div>

        <p className={cn(typographyVariants({ variant: "p" }), "text-center")}>
          {` Curves workouts for women are convenient and effective, they combine
        strength workout, cardio, and stretching to tone your entire body in
        just 30 minutes Our proven exercise programs for women are available at
        the club or at home so you can train wherever and whenever is convenient
        for you. Becoming By getting stronger and increasing your flexibility,
        you're setting the stage for more a healthy and active future so that
        you can live a life that you want`}
        </p>
      </MaxWidthWrapper>
    </section>
  );
};
