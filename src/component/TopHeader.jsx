import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="bg-[#3597c8] text-white py-2 lg:py-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-2 md:gap-4 lg:gap-8 border border-red-500">

        {/* Contact Info Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">

          {/* Phone */}
          <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
            <FaPhoneAlt className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
            <a href="tel:+918285070000" className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide group-hover:text-[#0e2024] transition-colors duration-300">
              +91-8285070000
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
            <FaEnvelope className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
            <a href="mailto:saumya.751983@gmail.com" className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide group-hover:text-[#0e2024] transition-colors duration-300">
              saumya.751983@gmail.com
            </a>
          </div>
        </div>

        {/* Map Link Section */}
        <div className="flex items-center gap-2 group transition-transform duration-300 transform hover:scale-105">
          <FaMapMarkerAlt className="text-base lg:text-lg text-[#fff] group-hover:text-[#0e2024] transition-colors duration-300" />
          <Link 
            to="https://www.google.com/maps?lqi=CiNkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QgbHVja25vd0iypsfEr7mAgAhaNxAAEAEQAhADGAAYARgCGAMYBCIjZHIgc29teWEgc2luZ2ggZ3luZWNvbG9naXN0IGx1Y2tub3eSAQxneW5lY29sb2dpc3SqAW4QASofIhtkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QoADIgEAEiHOS6mrb9RM_utqTtndEnGYmqnEJDgFzypwgukiQyJxACIiNkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QgbHVja25vdw&vet=12ahUKEwi32eOB76uJAxUAXmwGHZaYAW8Q8UF6BAhREAI..i&lei=W8gcZ_e_KYC8seMPlrGG-AY&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KROEcUYGWJk5MRvDfEitzX3u&daddr=house.+no+25,+near+14+green+restaurant,+Sector+14,+Indira+Nagar,+Lucknow,+Uttar+Pradesh+226016" 
            target="_blank"
            className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide group-hover:text-[#0e2024] transition-colors duration-300 text-center"
          >
            14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
