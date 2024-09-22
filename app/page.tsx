import FAQ from "@/components/blocks/FAQ";
import ServicesOverview from "@/components/blocks/servicesOverview";
import Testimonial from "@/components/blocks/testimonials";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <main className=' min-h-minusNavbar bg-gradient-to-b from-green-50 container'>
      <div className='grid lg:grid-cols-2 lg:px-14 min-h-minusNavbar max-lg:pb-10'>
        <div className='flex items-center max:lg:pt-20'>
          <div className='flex flex-col gap-4 max-lg:items-center max-lg:text-center'>
            <div className="lg:hidden">
              <Image
                src='/logo.png'
                width={200}
                height={200}
                alt='Heal Fibre'
              />
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-[56px]  font-semibold max-lg:leading-[50px]  leading-[80px] text-opacity-90'>
              <p className='lg:leading-[65px]'>
                {" "}
                Turning Nature&apos;s Waste into Life-Saving Solutions with
              </p>
              <span className='text-green-700'> Heal Fibre</span>
            </h1>

            <div className='py-5'>
              <Button size={"lg"} className='w-56'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className='relative hidden sm:block'>
          <div className='hidden lg:block'>
            <Image
              width={500}
              height={500}
              src='/package.png'
              alt='Hero Image'
              className='object-cover rounded-lg'
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
