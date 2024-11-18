import React from 'react'

const SectionHeaderMobile = ({headerTitle}) => {
  return (
    <div className="relative flex items-center justify-center text-center md:hidden mb-10 z-0">
    <span className="text-white uppercase text-sm font-bold bg-customGradient px-4 py-1 relative z-10">
      {headerTitle}
    </span>
    <div className="absolute inset-0 flex items-center">
      <div className="border-t-2 border-purple-600 flex-grow"></div>
    </div>
  </div>
  )
}

export default SectionHeaderMobile