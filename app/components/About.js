import React from "react";
import { BaseInfo } from "../data/data";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import SectionHeaderMobile from "./SectionHeaderMobile";

const About = () => {
  return (
    <section className="py-20 md:py-60" id="about">
      <SectionHeaderMobile headerTitle="about me" />
      <h1     data-aos="zoom-in"
              className="text-xl md:text-2xl font-bold uppercase text-gray-800  pb-1 text-center mb-10"
              dangerouslySetInnerHTML={{ __html: BaseInfo.aboutTitle }}
            ></h1>
      <div className="flex justify-between">
        
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row">
          <div data-aos="fade-right" data-aos-delay="100" className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[400px] m-auto">
            <Image
              src={BaseInfo.aboutPic}
              alt="about-picture"
              layout="fill"
              objectFit="contain"
              className="relative w-full h-full object-contain rounded-lg z-20"
            />
            <div className="absolute w-full h-full bg-customGradient top-[-1rem] right-[-1rem] rounded-lg z-10"></div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="container text-left space-y-8 md:w-3/5 p-6 bg-white rounded-lg shadow-lg border border-gray-200 top-[-2rem]">
          <h1
              className="text-xl md:text-2xl font-bold uppercase text-gray-800 tracking-wide border-b-4 border-blue-500 pb-1 hidden"
              dangerouslySetInnerHTML={{ __html: BaseInfo.aboutTitle }}
            ></h1>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: BaseInfo.aboutMe }}
            ></p>
          </div>
        </div>
        <SectionHeader headerTitle="about me" />
      </div>
    </section>
  );
};

export default About;
