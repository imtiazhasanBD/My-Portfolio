import React from 'react'

const SectionHeader = ({headerTitle}) => {
    
  return (
    <div className="m-auto space-y-20 hidden md:block z-0">
    <div className="flex-grow border-t-2 border-purple-500 rotate-90"></div>
    <h2 className="text-xl font-bold bg-customGradient p-1 text-center text-white w-40 m-auto uppercase -rotate-90">
      {headerTitle}
    </h2>
  </div>
  )
}

export default SectionHeader