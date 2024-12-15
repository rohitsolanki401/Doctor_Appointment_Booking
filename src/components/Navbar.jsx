import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // State to track the active navbar item
  const [activeItem, setActiveItem] = useState('');

  const navItems = ['Home', 'Doctors', 'About', 'Contact'];

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
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 mx-6 md:mx-12 lg:mx-18">
      <img
        onClick={() => navigate('/')}
        className="w-34 cursor-pointer"
        src={assets.logo}
        alt=""
        height="100px"
        width="100px"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-start gap-10 font-medium">
        <NavLink to="/">
          <li className="py-1 hover:underline hover:text-red-600">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 hover:underline hover:text-red-600">DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:underline hover:text-red-600">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 hover:underline hover:text-red-600">CONTACT</li>
        </NavLink>
      </ul>


      {/* User Profile and Hamburger Menu */}
      <div className="flex items-center gap-4">
        {/* Profile Dropdown */}
        {token && (
          <div
            className={`relative cursor-pointer hidden md:block`} // Hidden on mobile
            ref={dropdownRef}
          >
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
        )}

        {/* Hamburger Menu (Mobile Only) */}
        <img
          onClick={() => setShowMenu((prev) => !prev)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />

        {/* Mobile Menu */}
        {showMenu && (
          <div className="fixed inset-0 bg-white z-20">
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="logo" />
              <img
                className="w-7 cursor-pointer"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="close"
              />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/">
                <li>HOME</li>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                <li>DOCTORS</li>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about">
                <li>ABOUT</li>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact">
                <li>CONTACT</li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;