import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 mx-6 md:mx-12 lg;mx-18">
      <img onClick={() => navigate('/')} className="w-34 cursor-pointer" src={assets.logo} alt="" height="100px" width="100px" />
      
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
        </NavLink>
      
        <NavLink to="/doctors">
          <li className="py-1">DOCTORS</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
        </NavLink>
      
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
        </NavLink>
      
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
        </NavLink>
      </ul>
      
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative cursor-pointer" ref={dropdownRef}>
            <div
              className="flex items-center gap-2"
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
            >
              <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-stone-100 rounded-md shadow-lg z-20">
                <div className="min-w-48 flex flex-col gap-4 p-4">
                  <p
                    onClick={() => {
                      navigate('my-profile');
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate('my-appointments');
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      navigate('/login');
                      setDropdownOpen(false);
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-black px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        
        <div className={`${showMenu ? 'fixed-w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block">DOCTORS</p>
            </NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
