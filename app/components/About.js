import React from "react";
import { BaseInfo } from "../data/data";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import SectionHeaderMobile from "./SectionHeaderMobile";

const About = () => {
  return (
    <section className="bg-white py-20 md:py-60" id="about">
         <SectionHeaderMobile headerTitle="about me"/>
        <div className="flex">  
      <div className="flex gap-10 md:gap-24 flex-col md:flex-row">
        <div>
          <Image
            src={BaseInfo.aboutPic}
            alt="about-picture"
            width={350}
            height={350}
          />
        </div>
        <div className="container text-left space-y-8 md:w-2/4 md:backdrop:pr-10">
          <h1 className="text-2xl md:text-4xl font-bold uppercase" dangerouslySetInnerHTML={{ __html: BaseInfo.aboutTitle }}>
          </h1>
          <p
            className="text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: BaseInfo.aboutMe }}
          ></p>
        </div>
      </div>
      <div className="flex-grow border-t-2 border-black rotate-90"></div>
      <SectionHeader headerTitle="about me"/>
      </div>
    </section>
  );
};

export default About;
