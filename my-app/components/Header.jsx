import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./ui/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Lokum<span className="text-amber-700">.</span>
        </h1>
        </Link>
        {/* deskop nav*/}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href="/contact">
            <Button> Adopt me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
        <MobileNav/>


        </div>
      </div>
    </header>
  );
};

export default Header;
