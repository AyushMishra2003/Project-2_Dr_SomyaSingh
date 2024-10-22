import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#1A76D1] to-[#134E91] animate-gradient text-white py-6 shadow-xl">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-6 text-center lg:text-left px-4">
        
        {/* Contact Info Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Phone */}
          <div className="flex items-center gap-3 group">
            <FaPhoneAlt className="text-2xl transition-transform transform group-hover:scale-125 group-hover:rotate-12 duration-300 text-[#fff]" />
            <a href="tel:+918285070000" className="text-lg lg:text-xl font-semibold tracking-wide group-hover:text-[#5d77fa] transition-colors duration-300">
              +91-8285070000
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 group">
            <FaEnvelope className="text-2xl transition-transform transform group-hover:scale-125 group-hover:rotate-12 duration-300 text-[#fff]" />
            <a href="mailto:saumya.751983@gmail.com" className="text-lg lg:text-xl font-semibold tracking-wide group-hover:text-[#FFD700] transition-colors duration-300">
              saumya.751983@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 group">
            <FaMapMarkerAlt className="text-2xl transition-transform transform group-hover:scale-125 group-hover:rotate-12 duration-300 text-[#fff]" />
            <Link 
              to="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow" 
              target="_blank"
              className="text-lg lg:text-xl font-semibold tracking-wide group-hover:text-[#FFD700] transition-colors duration-300"
            >
              14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
