'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import ActiveNav from "./ActiveNav";
import MobileNav from "./MobileNav";
import AppearanceBtn from "./AppearanceBtn";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 hidden 
        px-10 py-6 lg:flex justify-between items-center bg-black light:bg-white
        transition-all duration-500 border-purple-500/50 shadow-[0_0_10px_#552d92]
        ${
          scrolled
            ? "lg:w-5/6 xl:w-3/4 2xl:2/3 mt-5 rounded-full border border-purple-500/50 shadow-[0_0_25px_#552d92] light:shadow-[0_0_5px_#552d92]"
            : "w-full mt-0 rounded-none border-none "
        }
      `}>
        <h2 className="md:text-2xl xl:text-[42px] font-bold bg-linear-to-r from-purple-600 via-purple-400 to-[#FACC15] light:to-[#c8a000] bg-clip-text font-bebas text-transparent">VYRON</h2>
        <div className="flex items-center gap-10 lg:text-sm xl:text-base font-semibold text-white font-rajdhani light:text-gray-700">
          <Link className="hover:text-[#683fa6]" href={'/#home'}>Home</Link>
          <Link className="hover:text-[#683fa6]" href={'/#roster'}>Roster</Link>
          <Link className="hover:text-[#683fa6]" href={'/#matches'}>Matches</Link>
          <Link className="hover:text-[#683fa6]" href={'/#tournamnets'}>Tournaments</Link>
          <Link className="hover:text-[#683fa6]" href={'/#achivements'}>Achivements</Link>
          <Link className="hover:text-[#683fa6]" href={'/#contact'}>Contact</Link>
        </div>
        <div className="flex items-center gap-2">
          <button className="font-inter bg-linear-to-r from-[#552d92] to-[#a88bbd] bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position] duration-500 text-white font-semibold px-7 py-3 rounded-xl cursor-pointer">Login</button>
          <AppearanceBtn></AppearanceBtn>
        </div>
      </div>
      <MobileNav></MobileNav>
    </div>
  )
}

export default Navbar