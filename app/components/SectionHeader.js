import React from 'react'

const SectionHeader = ({headerTitle}) => {
    console.log(headerTitle);
    
  return (
    <div className="m-auto space-y-20 hidden md:block z-0">
    <div className="flex-grow border-t-2 border-purple-500 rotate-90"></div>
    <h2 className="text-xl font-bold bg-customGradient p-3 text-white w-36 m-auto uppercase -rotate-90">
      {headerTitle}
    </h2>
  </div>
  )
}

export default SectionHeader