import About from "./components/About";
import Hero from "./components/Hero";
import SectionHeaderMobile from "./components/SectionHeaderMobile";

export default function Home() {
  return (
    <div className="p-8 md:py-20 md:px-28">
      {/* Hero Section */}
      <Hero/>
       {/* About Section */}
       <About/>
    </div>
  );
}
