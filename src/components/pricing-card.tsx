"use client";

import { cn } from "@/lib/utils";
import { formatCurency } from "@/utils";
import { Check, LockIcon, PlusCircle, Ticket } from "lucide-react";
import { useState } from "react";

type PlanCardProps = {
  title: string;
  price: number;
  services: {
    name: string;
    isAvailable: boolean;
  }[];
};

export const PricingCard = ({ title, price, services }: PlanCardProps) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex w-[min(350px,95%)] min-w-[min(350px,95%)] snap-center flex-col gap-0 overflow-hidden rounded-3xl border-4 border-primary-foreground bg-primary-foreground pb-16 text-primary-foreground shadow-lg duration-300 ease-linear"
      style={{
        maxHeight: isCardOpen ? "1000px" : "520px",
      }}
    >
      {/* head of element */}
      <h3 className="h-20 bg-primary py-5 pb-[118px] text-center text-2xl uppercase">
        {title}
      </h3>
      <div
        className="absolute top-28 flex min-h-20 w-full -translate-y-10 items-center justify-center"
        style={{
          backgroundImage: `url("/wawe-secondary.svg")`,
          backgroundSize: "cover",
        }}
      >
        <h4 className="text-center text-3xl font-bold">
          {formatCurency(price)}
        </h4>
      </div>
      {/* list of services */}
      <div>
        {services.map(({ name, isAvailable }, index) => (
          <div
            key={index}
            className="bg-light flex min-h-12 items-center border-b border-background px-5 text-primary"
          >
            {isAvailable ? (
              <Check className="h-6 w-6 rounded-full bg-secondary p-1 text-secondary-foreground" />
            ) : (
              <LockIcon />
            )}
            <p
              className="pl-5 font-semibold"
              style={{ opacity: isAvailable ? "100%" : "50%" }}
            >
              {name}
            </p>
          </div>
        ))}
      </div>

      {/* button */}
      <div
        className="absolute bottom-0 flex min-h-20 w-full items-center justify-center"
        style={{
          backgroundImage: `url("/wawe-secondary.svg")`,
          backgroundSize: "cover",
        }}
      >
        <button
          onClick={() => setIsCardOpen(!isCardOpen)}
          className="group flex h-20 w-full translate-y-1 cursor-pointer items-center justify-center bg-gradient-to-b from-transparent from-[50%] to-secondary to-[50%] text-xl italic duration-200"
        >
          <span className="text-star w-[110px] group-hover:underline">
            {isCardOpen ? "show less" : "show more"}
          </span>
          <PlusCircle
            className={cn("mx-2 duration-300", {
              "rotate-45 group-hover:rotate-[135deg]": isCardOpen,
              "group-hover:rotate-90": !isCardOpen,
            })}
          />
        </button>
      </div>
    </div>
  );
};
