import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const NavForMobile = ({ isOpen, setMenu, onClose }) => {
  if (!isOpen) return null;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed h-full z-50">
      <div onClick={() => onClose()} className="w-full h-screen inset-0 z-[1000] bg-black opacity-70 fixed"></div>
      <div className="h-full w-4/5 sm:w-3/5 flex flex-col justify-center text-white space-y-6 fixed bg-[#0f0715] z-[1006] ">
        {navLinks.map((navLink) => (
          <button
            onClick={() => {
              onClose();
              scrollToSection(navLink.label.toLocaleLowerCase());
            }}
            key={navLink.id}
            className="text-xl pb-2 active:text-customBlue"
          >
            {navLink.label}
          </button>
        ))}
          <a className="text-xl font-semibold py-3 px-8 bg-customGradient text-white rounded-md hover:text-black m-auto">RESUME</a>
        {/* Close button */}
        <CgClose
          onClick={() => setMenu(false)}
          className="absolute top-3 right-6  sm:w-8 sm:h-8 w-6 h-6 text-white"
        />
      </div>
    </div>
  );
};

export default NavForMobile;
