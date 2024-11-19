import React from "react";
import { skills } from "../data/data";
import SectionHeader from "./SectionHeader";
import CircularProgress from "./CircularProgress";
import SectionHeaderMobile from "./SectionHeaderMobile";

const Skill = () => {
  return (
    <section className="md:flex" id="skills">
        <SectionHeaderMobile headerTitle="my skills"/>
        <SectionHeader headerTitle="my skills"/>
      <div className="container mx-auto text-center">
        <p className="md:text-xl font-semibold text-gray-700 mb-8">
          Here are some of the tools and technologies I work with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 flex flex-col items-center"
            >
              <CircularProgress
                percentage={skill.percentage}
                color={skill.color}
                icon={skill.icon}
              />
              <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
