"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



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
    path: "/resume"
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-amber-700 border-b-2 border-amber-700"
            } capitalize font-medium hover:text-amber-700 transition:all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
