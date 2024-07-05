"use client";

import { EllipsisVertical } from "lucide-react";
import { TLinks } from "../header";
import { NavLink } from "./nav-link";
import { motion } from "framer-motion";
import { useState } from "react";

type MobileNavProps = {
  links: TLinks;
};

export const MobileNav = ({ links }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <motion.nav
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          className="fixed top-0 flex h-screen w-screen items-center justify-center bg-primary/90 md:hidden"
        >
          <ul className="flex -translate-y-20 flex-col gap-5 text-center text-2xl">
            {links.map(({ path, label }, i) => (
              <motion.li
                key={path}
                initial={{ translateX: 300 }}
                animate={{ translateX: 0 }}
                transition={{ delay: 0.07 * i }}
              >
                <NavLink label={label} path={path} />
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="grid aspect-square h-16 place-items-center md:hidden"
      >
        <EllipsisVertical className="text-primary-foreground" size={35} />
      </button>
    </>
  );
};
