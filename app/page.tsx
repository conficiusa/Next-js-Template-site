import FAQ from "@/components/blocks/FAQ";
import ServicesOverview from "@/components/blocks/servicesOverview";
import Testimonial from "@/components/blocks/testimonials";
import { Button } from "@/components/ui/button";
import { lusitana } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CalendarCheck2, CreditCard, Globe, LockKeyhole } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className=' min-h-minusNavbar bg-gradient-to-b from-background'>
      <div className='grid lg:grid-cols-2 lg:px-14 min-h-minusNavbar max-sm:mt-10'>
        <div className='flex lg:items-end items-center max:lg:pt-20'>
          <div className='flex flex-col gap-4 max-lg:items-center max-lg:text-center'>
            <h3
              className={cn(
                "uppercase text-muted-foreground text-sm font-medium",
                lusitana.className
              )}
            >
              30 days free trial
            </h3>
            <h1 className='text-4xl md:text-5xl lg:text-6xl  font-semibold max-lg:leading-[50px]'>
              Save Lives and Save the Environment with{" "}
              <span className='text-green-700'> Heal Fibre</span>
            </h1>
            <ul className='grid grid-cols-2 gap-2 py-2'>
              <li className='flex text-sm items-center gap-2'>
                <Globe className='w-4 h-4 text-muted-foreground' /> Availabe
                Anywhere, Anytime Access
              </li>
              <li className='flex text-sm items-center gap-2'>
                <LockKeyhole className='w-4 h-4 text-muted-foreground' /> Secure
                and Private
              </li>
              <li className='flex text-sm items-center gap-2'>
                <CalendarCheck2 className='w-4 h-4 text-muted-foreground' />
                Efficient Scheduling
              </li>
              <li className='flex text-sm items-center gap-2'>
                <CreditCard className='w-4 h-4 text-muted-foreground' />
                Transparent Pricing
              </li>
            </ul>

            <div className='py-10'>
              <Button size={"lg"} className='w-56'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className='relative hidden sm:block'>
          <div className='hidden lg:block'>
            <Image
              fill
              src='/hero.webp'
              alt='Hero Image'
              className='object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>
      <ServicesOverview />
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold'>Testimonials</h1>
        <p className='text-md font-medium '>
          Don&apos;t Take our word for it! Hear from other customers
        </p>
        <Testimonial />
      </div>
      <div className='my-8'>
        <FAQ />
      </div>
    </main>
  );
}
