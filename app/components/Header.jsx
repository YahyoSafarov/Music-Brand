"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import NavMobile from "./NavMobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear even tlistber
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6" : "bg-transparent py-8 transition-all"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* image */}
        <Link
          href="/"
          className=" relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <h2 className="font-alexBrush text-[35px]">Indila Adila</h2>
        </Link>
        {/* nav */}
        <nav>
          <Nav containerStyles="hidden xl:flex items-center gap-x-8" />
        </nav>
        {/* nav mobile */}
        <nav>
          <NavMobile />
        </nav>
        {/* menu btn */}
        <div className=" absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* socials */}
        <div>
          <Socials
            containerStyles="flex text-[24px] gap-x-4"
            iconStyles="hover:text-accent transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
