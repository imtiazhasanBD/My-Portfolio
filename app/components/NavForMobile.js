import React from "react";
import { navLinks } from "../constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const NavForMobile = ({ isOpen,setMenu, onClose }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed h-full z-20">
      <div className="w-full h-screen inset-0 z-[1000] bg-black opacity-70 fixed"></div>
      <div className="h-full w-4/5 sm:w-3/5 flex flex-col justify-center text-white space-y-6 fixed bg-[#0f0715] z-[1006] ">
         {
            navLinks.map(navLink => (
                <Link onClick={onClose} key={navLink.id} href={navLink.url} className="text-xl ml-12 pb-2 sm:text-xl active:text-customBlue">{navLink.label}</Link>
            ))
         }
      {/* Close button */}
      <CgClose onClick={() => setMenu(false)}  className="absolute top-3 right-6  sm:w-8 sm:h-8 w-6 h-6 text-white"/>
      </div>
    </div>
  );
};

export default NavForMobile;
