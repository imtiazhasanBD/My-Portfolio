import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hobby from "./components/Hobby";
import Project from "./components/Project";
import SectionHeaderMobile from "./components/SectionHeaderMobile";
import Skill from "./components/Skill";

export default function Home() {
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
