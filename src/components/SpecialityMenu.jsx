import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='text-center py-10 mx-4 md:mx-8 lg:mx-12'>
      {/* Header Section */}
      <h1 className='text-3xl font-bold mb-4'>Find by Speciality</h1>
      <p className='text-gray-600 mb-8'>
        Simply browse through our extensive list of trusted doctors,
        <br />
        schedule your appointment hassle-free.
      </p>

      {/* Speciality List */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className='flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img
              src={item.image}
              alt={item.speciality}
              className='w-16 h-16 mb-4 object-cover rounded-full border-2 border-primary'
            />
            <p className='text-lg font-medium text-gray-800'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
