import { lusitana } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { serviceCards } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  return (
    <section>
      <div>
        <div className=" grid grid-cols-[500px_1fr]">
          <div className="py-10">
            <Image
              src="/landingDesktop.png"
              alt="service1"
              width={800}
              height={800}
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex justify-center  flex-col mb-4">
              <h3 className="text-3xl font-semibold">Our Services</h3>
              <p className={cn("text-muted-foreground ", lusitana.className)}>
                Our services are carefully crafted to ensure that you get the
                best
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {serviceCards.map((card, index) => (
                <div className="shadow-md rounded-md p-4" key={index}>
                  <p className="mb-2">{card.icon}</p>
                  <p className="font-medium mb-4"> {card.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                  <Button
                    className="flex items-center mt-3 gap-2"
                    variant={"ghost"}
                    size={"sm"}
                  >
                    {card.footer} <ArrowRight />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
