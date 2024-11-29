import React from 'react'
import { contactData } from '../data/data'
import SectionHeader from './SectionHeader'
import SectionHeaderMobile from './SectionHeaderMobile'

const Contact = () => {
  return (
        <section className="py-20 md:py-32 flex flex-col md:flex-row" id="contact">
            <SectionHeader headerTitle="contact"/> 
            <SectionHeaderMobile headerTitle="contact"/> 
         <div className='flex gap-20 flex-col md:flex-row items-center justify-center'>
         <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="text-left space-y-10 text-gray-700">
            <h2 className='text-2xl font-semibold'>Let's work together!</h2>
          <p className="text-lg">
          I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
          </p>
           <p>
           <a href="mailto:your-email@example.com"
            className="bg-customGradient font-semibold text-white px-6 py-4 rounded-md hover:bg-blue-600"
          >
            Send Email
          </a>
           </p>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className='w-full space-y-4'>
             {
                contactData.map((contact, i) => (
                    <div key={i} className='flex space-x-6 items-center'>
                       <div className='text-2xl bg-customGradient text-white p-2 rounded-full font-semibold'>{contact.icon}</div>
                       <div>
                         <h2></h2>
                         <p className='font-semibold'>{contact.type}</p>
                       </div>
                    </div>
                ))
             }
        </div>
         </div>
      </section>
  )
}

export default Contact