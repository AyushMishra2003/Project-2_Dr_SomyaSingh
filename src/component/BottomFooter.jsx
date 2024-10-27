import React from 'react';
import companyLogo from "../assets/cclogo.png";
import { MdCall, MdMail } from 'react-icons/md';
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomFooter = () => {
  // Copyright 2024 Dr. Mamta || All Rights Reserved || Designed By
  return (
    <div className="bg-[#000] py-4">
      <div className="flex flex-col md:flex-row items-center justify-center text-[0.9rem] text-white w-full gap-1">
        <div className='flex items-center justify-center gap-1'>
       
          <p>Copyright</p> 
          <FaRegCopyright className='text-[1rem]' />
            <p>2024 Dr. Somya Singh</p>
          <span>||</span>
          <p>All Rights Reserved</p>
          <span>||</span>
        </div>
        <div className='flex items-center justify-center gap-0'>
          <span className="text-white">Designed by</span>  
          <Link to="https://www.codecrafter.co.in/" target="_blank" rel="noopener noreferrer" className="ml-2">
            <img src={companyLogo} alt="Designed by Company" className="h-auto w-[10rem] inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
