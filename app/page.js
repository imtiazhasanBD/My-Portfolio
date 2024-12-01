"use client" 

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skill from "./components/sections/Skill";
import Project from "./components/sections/Project";
import Hobby from "./components/sections/Hobby";
import Contact from "./components/sections/Contact";


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
