"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"; // Gerekirse SheetTitle ekleyin
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the sheet is open
  const pathname = usePathname();

  // Function to close the sheet when a link is clicked
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
      <SheetContent className="flex flex-col">
        {/* Başlık ekleyin */}
        <SheetTitle className="sr-only">Mobil Menü</SheetTitle> {/* Bu başlık gizlenecek ancak ekran okuyucular tarafından okunacak */}
        
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Lokum<span className="text-amber-700">.</span>
            </h1>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick} // Close the sheet when a link is clicked
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
