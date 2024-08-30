"use client";
import { useIsScrolled } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => (path === pathname ? "text-primary " : "");
  const { isScrolled } = useIsScrolled();

  return (
    <nav
      className={cn(
        "fixed bg-background/95 duration-500 flex items-center w-full z-50 backdrop-blur-[5.9px] container  backdrop-saturate-[180%]",
        isScrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : ""
      )}
    >
      <ul className="flex flex-1 gap-8 items-center text-sm py-4 ">
        <Link href={"/"} className="text-xl font-semibold mr-5">
          Logo
          <span className="sr-only">Home</span>
        </Link>
        {[
          { href: "/services", label: "Services" },
          { href: "/pricing", label: "Pricing" },
          { href: "/about", label: "About" },
          { href: "/contact-us", label: "Contact us" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "hover:font-medium hover:scale-105 transition-all",
              isActive(href)
            )}
          >
            <li>{label}</li>
          </Link>
        ))}
      </ul>
      <div>
        <Button>Register Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
