import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      {/* ------------ ABOUT US ----------------- */}
      
      <div className='text-center text-2xl text-gray-600'>
        <p className=' text-gray-600 pt-10 font-medium'>ABOUT <span>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 justify-center'>
        <img className='w-full md:max-w-[360px]'  src={assets.about_image} alt=''></img>
        
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-base text-gray-600'>
        <p>Welcome to Wellness Way, your trusted partner in managing your healthcare needs conveniently and efficiently. At Wellness Way, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
        <p>Wellness Way is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Wellness Way is here to support you every step of the way.</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our vision at Wellness Way is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* --------------------- WHY CHOOSE US ----------------------- */}
      <div className='text-center text-2xl text-gray-600 mb-5'>
        <p className=' text-gray-600 pt-10 font-medium'>WHY CHOOSE US</p>
      </div>
      
    
       <div className='flex flex-col md:flex-row mb-20 justify-center mx-4 sm:mx-40'>
        <div className='border px-25 md:px-10 py-5 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
         <b>EFFICIENCY:</b>
         <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-25 md:px-10 py-5 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-25 md:px-10 py-5 sm:py-10 flex flex-col gap-5 text-[15px] hover:bg-primary transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALISATION:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
       </div>
    
    
    </div>
  )
}

export default About
