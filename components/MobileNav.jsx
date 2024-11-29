"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "features", path: "/features" },
  { name: "gallery", path: "/gallery" },
  { name: "resume", path: "/resume" },
  {name: "contact", path: "/contact"},
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}> 
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)} 
      >
        <CiMenuFries className="text-[32px] text-amber-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col px-4 py-8 bg-primary fixed top-0 right-0 h-full w-80">

        <SheetTitle className="sr-only">Mobil Menü</SheetTitle>

        {/* Logo */}
        <div className="mt-12 mb-8 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick} scroll={false}>
            <h1 className="text-4xl font-semibold text-white border-b border-white pb-2">
              Lokum<span className="text-amber-700">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-5">
          {links.map((link) => (
            <div key={link.path} className="w-full px-4">
              <Link
                href={link.path}
                onClick={handleLinkClick} 
                scroll={false}
                className={`${
                  link.path === pathname
                    ? "text-amber-700"
                    : "text-white hover:text-white"
                } text-xl capitalize transition-all duration-300 w-full text-center block py-3 border-b border-white/20 hover:border-white/40`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;