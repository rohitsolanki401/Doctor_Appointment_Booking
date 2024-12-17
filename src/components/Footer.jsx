import React from 'react';
import { Link } from 'react-router-dom';  
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-white py-10 mt-20 px-12">
      
      {/* -------- Main Footer Container -------------*/}
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_1fr] gap-14 mx-auto md:mx-10 text-sm">
        
        
        {/* ======================= Left Section ============================= */}
        <div className="flex flex-col items-center md:items-start"> 
          <img
            src={assets.logo}
            alt="Wellness Way Logo"
            className="w-40 mb-5"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 text-center md:text-left">
            Wellness Way - Your trusted partner for seamless doctor appointment
            bookings. Simplifying healthcare access with convenience and
            reliability.
          </p>
        </div>

        {/* ======================= Center Section ============================= */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-black"
              onClick={() => window.scrollTo({top:0 , behavior:'smooth'})}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black"
              onClick={() => window.scrollTo({top:0 , behavior:'smooth'})}>
                About us
              </Link>
            </li>
            <li>
              <a href="#delivery" className="hover:text-black">
                Delivery
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-black">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* ======================= Right Section ============================= */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href='tel:+0-000-000-000' className='hover:text-black'>+0-000-000-000</a>
              </li>
            <li>
              <a href='mailto:wellnessway@gmail.com' className='hover:text-black'>wellnessway@gmail.com</a>
              </li>
          </ul>
        </div>
      </div>

      {/* ======================= Copyright Text ============================= */}
      <div className="mt-10 py-2">
        <hr className="border-gray-300 mb-5"  />
        <p className="py-3 text-sm text-center text-gray-600">
          Copyright 2024 @ Wellness Way - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
