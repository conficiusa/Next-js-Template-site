import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  children: React.ReactNode;
}
interface SidebarLink {
  href: string;
  label: string;
  icon: JSX.Element;
}
const SidebarLink: SidebarLink[] = [
  {
    href: "/",
    label: "Home",
    icon: <ChevronRight strokeWidth={1.8} className="w-4 h-4" />,
  },
  {
    href: "/store",
    label: "Go to Store",
    icon: <ChevronRight strokeWidth={1.8} className="w-4 h-4" />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <ChevronRight strokeWidth={1.8} className="w-4 h-4" />,
  },
  {
    href: "/pricing",
    label: "Pricing",
    icon: <ChevronRight strokeWidth={1.8} className="w-4 h-4" />,
  },
];

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        {children}
      </SheetTrigger>
      <SheetContent side="left" className="bg-background">
        <SheetHeader>
          <SheetTitle autoFocus>Heal Fibre</SheetTitle>
        </SheetHeader>
        <div className="overflow-auto">
          <nav className="flex flex-col divide-y-[1px] text-sm mt-8">
            {SidebarLink.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="py-3 flex items-center justify-between"
              >
                {link.label} {link.icon}
              </Link>
            ))}

            <Link
              href="/referral"
              className="py-3 flex items-center justify-between mt-8"
            >
              Refer a friend{" "}
              <sup className="bg-teal-100 text-primary p-[0.2rem] text-xs rounded">
                10% off
              </sup>
            </Link>
          </nav>
          <nav className="flex flex-col mt-3 text-sm">
            <Link
              href={"/about"}
              className="py-3 flex items-center justify-between"
            >
              About Us
            </Link>
            <Link
              href={"/contact"}
              className="py-3 flex items-center justify-between"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden max-sm:flex mt-10 flex-col gap-2">
            <Link href={"/sign-in"} className="w-full">
              <Button className="w-full" variant={"outline"} size="sm">
                Sign in
              </Button>
            </Link>
            <Link href={"/sign-up"} className="w-full">
              <Button className="w-full" size="sm">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
