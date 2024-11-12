"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Work", path: "/work" },
  { name: "Resume", path: "/resume" },
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
      <SheetContent className="flex flex-col px-4 py-8">
        {/* Erişilebilirlik için SheetTitle başlığı eklendi */}
        <SheetTitle className="sr-only">Mobil Menü</SheetTitle>

        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              Lokum<span className="text-amber-700">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={handleLinkClick} 
              className={`${
                link.path === pathname &&
                "text-amber-700 border-b-2 border-amber-700"
              } text-xl capitalize hover:text-amber-700 transition-all`}
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
