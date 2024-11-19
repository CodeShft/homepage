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
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold text-white">
              Lokum<span className="text-amber-700">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-4">
          {links.map((link) => (
            <div key={link.path} className="w-full border-b border-gray-700">
              <Link
                href={link.path}
                onClick={handleLinkClick} 
                className={`${
                  link.path === pathname
                    ? "text-amber-700 border-b-2 border-amber-700"
                    : "text-white"
                } text-xl capitalize hover:text-amber-700 transition-all w-full text-center block pb-4`}
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
