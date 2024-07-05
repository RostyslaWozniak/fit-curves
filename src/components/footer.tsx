import { ContactIcons } from "@/components/ui/contact-icons";
import { MaxWidthWrapper } from "./max-width-wrapper";

export const Footer = () => {
  return (
    <footer
      className="relative flex min-h-[180px] w-screen flex-col justify-end text-secondary-foreground md:min-h-[180px]"
      style={{
        backgroundImage: `url("/wave-bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <MaxWidthWrapper className="grid w-full place-items-center bg-gradient-to-b from-transparent from-[50%] to-secondary to-[50%] lg:place-items-end">
        <div className="grid pb-2">
          <div className="my-3 flex w-full justify-center gap-8 justify-self-end">
            <ContactIcons />
          </div>
          <p className="text-center">
            Designed & built by{" "}
            <a href="https://rostyslavvozniak.com" className="font-bold">
              Rostyslav Vozniak
            </a>
          </p>
          <p className="text-center">© Copyright 2024</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
