"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  label: string;
  path: string;
  className?: string;
};
export const NavLink = ({ label, path, className }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={cn(
        "rounded-full border-2 border-transparent px-3 py-1 capitalize text-primary-foreground duration-300 hover:text-secondary",
        {
          "border-secondary-foreground bg-secondary hover:text-primary-foreground":
            pathname === path,
        },
        className,
      )}
    >
      {label}
    </Link>
  );
};
