/** @format */

import { cn } from "@/lib/utils";
import React from "react";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
