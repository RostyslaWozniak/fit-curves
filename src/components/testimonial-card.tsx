import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type TestimonialCard = {
  name: string;
  title: string;
  text: string;
  image: string;
};

export const TestimonialCard = ({
  name,
  title,
  text,
  image,
}: TestimonialCard) => {
  return (
    <Card className="grid w-full max-w-md gap-6 p-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="object-cover"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
      <blockquote className="text-lg leading-relaxed">
        &quot;{text}&quot;
      </blockquote>
    </Card>
  );
};
