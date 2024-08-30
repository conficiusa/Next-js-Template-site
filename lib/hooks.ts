import { useEffect, useState } from "react";

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled, setIsScrolled };
};
