import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-600 font-semibold'>
        <p>CONTACT US</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />
      

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='text-lg font-semibold text-gray-600'>OUR OFFICE</p>
        <p className='text-gray-600'>00000 Willms Station
        <br />Suite 000, Washington, USA</p>
        <p className='text-gray-600'>Tel: (000) 000-0000
        <br />Email: wellnessway@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>CAREERS AT WELLNESS WAY</p>
        <p className='text-gray-600'>Learn more about our teams and job openings.</p>
        <button className='border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
