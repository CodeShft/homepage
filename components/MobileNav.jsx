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
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary transition-transform duration-300 ease-in-out">
        {/* Erişilebilirlik için SheetTitle başlığı eklendi */}
        <SheetTitle className="sr-only">Mobil Menü</SheetTitle>

        {/* Logo */}
        <div className="flex justify-center items-center h-20 border-b border-amber-800">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-2xl sm:text-3xl font-semibold"><span className="text-amber-700">Lokum.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center mt-0">
        {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={handleLinkClick} 
              className={`w-full py-5 text-center text-lg sm:text-xl capitalize hover:bg-amber-700 transition-all border-b border-gray-700 ${
                link.path === pathname
                ? ""
                : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
