import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <p className="text-4xl font-semibold">
            SiAM<span className="text-accent">.</span>
          </p>
        </Link>
        {/* ------desktop nav hire me button--- */}
        <div className="hidden xl:flex gap-8 items-center ">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* ------mobile nav hire me button--- */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
