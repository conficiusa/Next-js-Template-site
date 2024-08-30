import ServicesOverview from "@/components/blocks/servicesOverview";
import Support from "@/components/blocks/support";
import Testimonial from "@/components/blocks/testimonials";
import BlurFade from "@/components/ui/blurfade";
import { Button } from "@/components/ui/button";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { lusitana } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { CalendarCheck2, CreditCard, Globe, LockKeyhole } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className=' min-h-minusNavbar bg-gradient-to-b from-background'>
      <div className='grid grid-cols-2 px-20 min-h-minusNavbar'>
        <div className='pt-10'>
          <div className='flex flex-col gap-4'>
            <h3
              className={cn(
                "uppercase text-muted-foreground text-sm font-medium",
                lusitana.className
              )}
            >
              30 days free trial
            </h3>
            <h1 className='text-6xl '>
              The best way to showcase your Projects
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
        <div className='flex justify-center items-center bg blue-500'>
          <div>
            <Image
              width={800}
              height={800}
              src='/landingDesktop.png'
              alt='Hero Image'
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <ServicesOverview />
      <div>
        <div>
          <h3 className='text-xl font-medium '>
            Don't Take our word for it! Hear from other customers
          </h3>
        </div>
        <Testimonial />
      </div>
      <div>
        <div>
          <h3 className='text-2xl pt-14 pb-4 uppercase font-semibold'>
            {" "}
            Need Help?
          </h3>
        </div>
        <Support />
      </div>
    </main>
  );
}
