import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 md:px-8 lg:px-16 py-4 md:py-6 mx-4 md:mx-8 lg:mx-12">
      {/* ============== Left Side ==================== */}
      <div className="md:w-1/2 flex flex-col gap-3 items-start">
        <p className="text-2xl md:text-4xl lg:text-5xl text-black font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex fllex-col md:flex-row items-center gap-3 text-white text-sm fonrt-light ">
          {/* Profile Group */}
          <img
            src={assets.group_profiles}
            alt="Group of doctors"
            className="w-28"
          />
          <p className="text-black text-sm md:text-sm">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black text-sm rounded-full border border-gray-300 shadow hover:bg-gray-200 transition-all"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>
      </div>
      {/* className="flex gap-3 px-4 py-2 bg-white text-black text-sm rounded-full border border-gray-300 shadow-none hover:bg-gray-200 transition-all" */}

      {/* =================== Right Side ===================== */}
      <div className="md:w-1/2 flex justify-end relative">
        <img
          className="w-full md:w-auto h-auto rounded-lg"
          src={assets.header_img}
          alt="Doctors"
        />
      </div>
    </div>
  );
};

export default Header;
