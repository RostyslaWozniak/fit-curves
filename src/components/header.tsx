import Image from "next/image";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Navigation } from "./nav/navigation";
import { MobileNav } from "./nav/mobile-nav";

export type TLinks = {
  path: string;
  label: string;
}[];

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/pricing", label: "pricing" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-14 w-screen bg-primary/80 shadow-lg shadow-primary-foreground backdrop-blur md:h-16">
      <MaxWidthWrapper className="flex h-full items-center justify-between px-0 py-5 lg:px-0">
        <Link href="/">
          <Image
            width={100}
            height={64}
            src="/logo.svg"
            alt="logo"
            className="md: h-full w-[150px] cursor-pointer md:w-[180px]"
          />
        </Link>
        <Navigation links={links} />
        <MobileNav links={links} />
      </MaxWidthWrapper>
    </header>
  );
};
export default Header;
