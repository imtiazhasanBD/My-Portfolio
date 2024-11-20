import React from 'react'
import { hobbies } from '../data/data'
import SectionHeader from './SectionHeader'
import SectionHeaderMobile from './SectionHeaderMobile'

const Hobby = () => {
  return (
    <section id="hobbies" className="py-16 flex">
    <div className="container mx-auto px-2 md:px-12 text-center">
    <SectionHeaderMobile headerTitle="My Hobbies" />
      <p className="text-lg font-semibold text-gray-700 mb-8">
        Outside of coding, here are some activities I enjoy that keep me inspired and balanced.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{hobby.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </div>
    <SectionHeader headerTitle="My Hobbies" />
  </section>
  )
}

export default Hobby