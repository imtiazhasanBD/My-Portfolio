import Image from "next/image";
import React from "react";
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { projectData } from "../data/data";
import SectionHeaderMobile from "./SectionHeaderMobile";

const Project = () => {
  return (
    <section className="bg-white py-60 flex" id="projects">
      <SectionHeader headerTitle="My project" />
      <div className="container mx-auto text-center">
      <SectionHeaderMobile headerTitle="My project" />
        <p className="md:text-2xl font-semibold text-gray-700 mb-8">
          "Explore a showcase of my featured projects, highlighting my skills
          and passion for building innovative solutions."
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div key={project.id}   className="rounded-md p-2 shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
              <div>
                <Image src={project.image} width={400} height={100} alt="im" />
              </div>
              {/* Example Project */}
              <div className="bg-customGradient text-white shadow-md p-5 text-left space-y-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm md:text-base">{project.description}</p>
                <div className="flex gap-4 text-xl">
                  <a href={project.url.github} target="_blank"><FaGithub /></a>
                  <a href={project.url.live} target="_blank"><ImNewTab /></a>
                </div>
                <div className="space-x-2 opacity-55">
                  {
                    project.tools.map(tool => (
                      <span>{tool}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
