import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaqAccordion } from "@/lib/data";

const FAQ = () => {
  return (
    <div className="bg-gray-50 min-h-screen rounded-lg">
      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">FAQs</h1>
        <p className="text-gray-600 mb-12">
          Have questions? Here you'll find the answers most valued by our
          partners, along with access to step-by-step instructions and support.
        </p>
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/faq.png"
              alt="FAQ Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </main>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between">
            <ul className="text-blue-600 space-y-4">
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Guest relations</Link>
              </li>
              <li>
                <Link href="#">One Key™</Link>
              </li>
              <li>
                <Link href="#">Property listing</Link>
              </li>
              <li>
                <Link href="#">Ranking and metrics</Link>
              </li>
              <li>
                <Link href="#">Reservations and rates</Link>
              </li>
            </ul>
            <div className="w-3/4">
              <h2 className="text-xl font-semibold mb-4">About us</h2>
              <div className="space-y-4">
                {FaqAccordion.map((faq, index) => (
                  <Accordion type="single" key={index} collapsible>
                    <AccordionItem value={"item" + index}>
                      <AccordionTrigger>{faq.title}</AccordionTrigger>
                      <AccordionContent>{faq.content}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
