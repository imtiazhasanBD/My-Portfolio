"use client" 
import { Typewriter } from "react-simple-typewriter";

const AutoText = () => {

  return (
    <span data-aos="fade-left" data-aos-delay="200" className="text-xl md:text-2xl uppercase font-bold bg-customGradient bg-clip-text text-transparent inline-block">
      A <Typewriter
        words={["Frontend Web Developer", "Web Designer", "Professional Coder"]}
        loop={false} // Number of loops (set to `false` for infinite)
        cursor
        cursorStyle="|"
        typeSpeed={50} // Speed of typing
        deleteSpeed={50} // Speed of deleting
        delaySpeed={2000} // Delay between loops
      />
    </span>
  );
};

export default AutoText;
