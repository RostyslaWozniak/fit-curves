import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";
import { ClockIcon, MailOpenIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { typographyVariants } from "../ui/typography";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactSection = () => {
  return (
    <section
      className="-mb-24"
      style={{
        backgroundImage: `url("/contact-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPositionY: "top",
        backgroundPositionX: "center",
      }}
    >
      <div className="grid w-full place-items-center py-10 pb-28 backdrop-brightness-75 lg:h-[calc(100dvh-150px)]">
        <MaxWidthWrapper className="grid grid-cols-1 place-items-center gap-16 text-primary-foreground md:grid-cols-2 lg:flex-row lg:gap-32">
          <div className="space-y-6">
            <div className="space-y-8">
              <h2 className={cn(typographyVariants({ variant: "h2" }))}>
                Contact Us
              </h2>
              <p
                className={cn(
                  typographyVariants({ variant: "p" }),
                  "text-center",
                )}
              >
                Get in touch with us for more information or to schedule a
                consultation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-10 w-10" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href={`tel: ${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailOpenIcon className="h-10 w-10" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="#" className="hover:underline">
                    info@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-10 w-10" />
                <div>
                  <div className="font-medium">Address</div>
                  <p className="">123 Main St, Anytown USA 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ClockIcon className="h-10 w-10" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <p className="">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-8">
              <h2 className={cn(typographyVariants({ variant: "h2" }))}>
                Get in Touch
              </h2>
              <p
                className={cn(
                  typographyVariants({ variant: "p" }),
                  "text-center",
                )}
              >
                {`Fill out the form below and we'll get back to you as soon as
                  possible.`}
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="border-2 border-primary-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-2 border-primary-foreground"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[150px] border-2 border-primary-foreground"
                />
              </div>
              <Button type="submit" className="w-full px-10 sm:w-min">
                Submit
              </Button>
            </form>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
