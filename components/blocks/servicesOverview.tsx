import Image from "next/image";
import { Button } from "../ui/button";
import BlurFade from "../ui/blurfade";
import { ServiceCards } from "@/lib/types";
import { CodeXml } from "lucide-react";

const serviceCards: ServiceCards = [
  {
    title: "Manufacturing",
    description:
      "We tansform the raw materials into fancy health care products.",
    footer: "See Our Process",
    icon: <CodeXml className="text-black w-5 h-5" />,
  },
  {
    title: "Training ",
    description:
      "We organize workshops and training sessions on the process of manufacturing.",
    footer: "Book a Session",
    icon: <CodeXml className="text-black w-5 h-5" />,
  },
  {
    title: "Delivery",
    description:
      "We deliver the products to your doorstep with utmost care and safety.",
    footer: "Go to Store",
    icon: <CodeXml className="text-black w-5 h-5" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative lg:pt-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="relative h-96 overflow-hidden rounded-lg mb-8">
        <Image
          src="/pine.jpg"
          alt="Our Services"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black "></div>
      </div>
      <div className="flex justify-center max-md:gap-14 gap-8 relative -top-20 max-md:flex-col max-md:items-center">
        {serviceCards.map((service, idx) => (
          <BlurFade
            delay={0.2 * idx}
            className="bg-card p-6 rounded-lg shadow-lg text-center min-w-56 max-w-[90%] lg:max-w-72 relative hover:shadow-sm transition-shadow duration-500"
            key={idx}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-200 p-3 rounded-md">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-500 mb-6">{service.description}</p>
            <Button className="min-w-32">{service.footer}</Button>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
