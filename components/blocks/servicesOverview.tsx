import Image from "next/image";
import { Button } from "../ui/button";
import BlurFade from "../ui/blurfade";
import { ServiceCards } from "@/lib/types";

const serviceCards: ServiceCards = [
  {
    title: "Bioactive Gauze",
    description:
      "We transform pineapple leaves into medical grade biological active gauze.",
    footer: "More",
    icon: "/gauze.png",
  },
  {
    title: "PPEs ",
    description:
      "We transform waste into protective gear for our health workers.",
    footer: "More",
    icon: "/ppe.png",
  },
  {
    title: "Orthopedic braces & support",
    description:
      "Transforming into strength for support, flexibility and comfort.",
    footer: "More",
    icon: "/braces.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative lg:pt-16 text-center">
      <h2 className="text-3xl font-bold mb-8">The Innovation</h2>
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
              <Image
                src={service.icon}
                width={30}
                height={30}
                alt={service.title}
              />
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
