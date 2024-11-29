"use client" 

import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hobby from "./components/Hobby";
import Project from "./components/Project";
import SectionHeaderMobile from "./components/SectionHeaderMobile";
import Skill from "./components/Skill";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-gray-50">
      {/* Hero Section */}
      <Hero/>
       {/* About Section */}
       <About/>   
       {/* Skills Section */}
       <Skill/>
      {/* Projects Section */}
        <Project/>
      {/* Hobby Section */}
        <Hobby/>
      {/* Contact Section */}
      <Contact/>
    </div>
  );
}
