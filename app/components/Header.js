"use client";

import Link from "next/link";
import { navLinks } from "../constant/constant";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import NavForMobile from "./NavForMobile";
import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-white px-6 lg:px-16 py-3 w-full sticky top-0 shadow z-40">
        <div className="container mx-auto flex justify-between items-center font-bold">
          <Link href="/" className="">
          <Image  src="/logo.png" width={55} height={55} alt="logo" objectFit="cover" />      
          </Link>
          <nav className="font-semibold hidden lg:block">
            {navLinks.map((navlink) => (
              <button
                onClick={() => scrollToSection(navlink.label.toLocaleLowerCase())}
                key={navlink.id}
                className={`mx-6 hover:text-customBlue`}
              >
                {navlink.label.toLocaleUpperCase()}
              </button>
            ))}
            <a className="py-3 px-8 bg-customGradient text-white rounded-md hover:text-black">RESUME</a>
          </nav>

          <HiMiniBars3BottomRight
            onClick={() => setMobileMenuOpen(true)}
            className="w-7 h-7 cursor-pointer text-customBlue lg:hidden"
          />
        </div>
      </header>
      <NavForMobile
        isOpen={isMobileMenuOpen}
        setMenu= {setMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
