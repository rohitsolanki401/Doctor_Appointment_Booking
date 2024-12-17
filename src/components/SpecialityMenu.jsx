import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="text-center py-12 px-6 lg:px-12 mt-5">
      
      {/* ----------------- Header Section ---------------------*/}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Find by Speciality</h1>
      <p className="text-lg text-gray-600 mb-10">
        Browse our trusted doctors by speciality and book your appointments effortlessly.
      </p>


      {/* ---------------- Speciality List------------------ */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-6'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="group flex flex-col items-center text-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  // Scroll to top
          >

            {/*------------- Icon/Image -------------------*/}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-blue-500 transition-transform transform hover:scale-105 hover:translate-y-[-10px] ">
              <img
                src={item.image}
                alt={item.speciality}
                className="w-10 h-10 object-contain"
              />
            </div>


            {/*--------------- Speciality Name -----------------------*/}
            <p className="text-lg font-semibold text-gray-700 mt-2 group-hover:text-blue-600">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
