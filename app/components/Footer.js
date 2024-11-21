import React from "react";
import { socialMedia } from "../data/data";

const Footer = () => {
  return (
    <footer className="py-16 bg-white shadow">
      <div className="container mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-customGradient bg-clip-text text-transparent uppercase">
          Imtiaz
        </h2>
        <p className="text-lg md:text-xl font-bold">Follow me on social media:</p>
        <div className="flex justify-center gap-8 md:text-xl text-lg">
          {socialMedia.map((platform, i) => (
            <a
              key={i}
              className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              {platform.icon}
            </a>
          ))}
        </div>
        <p className="text-xs md:text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} All Rights Reserved by{" "}
          <span className="font-semibold bg-customGradient bg-clip-text text-transparent">
            Imtiaz WebDev
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
