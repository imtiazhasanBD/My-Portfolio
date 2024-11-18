import React from 'react'
import { BaseInfo } from '../data/data'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex justify-between h-screen md:h-full items-center" id="hero">
         {/* Text Section */}
    <div className="container mx-auto text-left space-y-4 md:w-3/4">
      <div className="flex items-center w-3/5">
        <h1 className="text-2xl md:text-5xl font-bold">HELLO</h1>
        <div className="flex-grow border-t-2 border-black ml-4"></div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        I AM {BaseInfo.name.toUpperCase()}{" "}
      </h1>
      <p className="text-xl md:text-2xl">{BaseInfo.position.toUpperCase()}</p>
      {/* Buttons */}
      <div className="space-x-6 md:space-x-10 pt-4">
        <div className="p-[2px] bg-customGradient rounded inline-block">
          <button className="w-full h-full bg-customGradient text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black">
            HIRE ME
          </button>
        </div>
        <div className="p-[2px] bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg inline-block">
          <button className="w-full h-full bg-white text-black font-bold px-10 py-3 rounded-md hover:bg-customGradient hover:text-white">
            GET CV
          </button>
        </div>
      </div>
    </div>
      {/* Image Section */}
    <div className="rounded-full bg-customGradient mr-16 top-0 hidden md:block">
       <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={300} height={300} className="rounded-full object-cover"/>
    </div>
  </section>
  )
}

export default Hero