"use client";

import Link from "next/link";
import { navLinks } from "../constant/constant";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import NavForMobile from "./NavForMobile";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white px-6 lg:px-16 py-6 sticky top-0 shadow z-10">
        <div className="container mx-auto flex justify-between items-center font-bold">
          <Link href="/">
            <h1 className="text-2xl font-bold text-customBlue">My Portfolio</h1>
          </Link>
          <nav className="font-semibold hidden lg:block">
            {navLinks.map((navlink) => (
              <a
                key={navlink.id}
                href={`#${navlink.label.toLocaleLowerCase()}`}
                className={`mx-6 hover:text-customBlue ${
                  navlink.label === "Resume"
                    ? "border-2 p-2 border-customBlue"
                    : ""
                }`}
              >
                {navlink.label.toLocaleUpperCase()}
              </a>
            ))}
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
