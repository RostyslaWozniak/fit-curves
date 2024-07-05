import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "../testimonial-card";
import { cn } from "@/lib/utils";
import { typographyVariants } from "@/components/ui/typography";

export const TestimonialsSection = () => {
  return (
    <section className="my-10">
      <h1 className={cn(typographyVariants({ variant: "h2" }), "my-10")}>
        Testimonials
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {testimonials.map(({ name, text, title, image }, index) => (
          <TestimonialCard
            key={index}
            name={name}
            title={title}
            text={text}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};
