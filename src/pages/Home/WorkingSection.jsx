import React, { useEffect } from "react";
import { FaUserMd, FaSyringe, FaBaby, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import pattern from '../../assets/newletter/pattern-7.png';
import { FaRegQuestionCircle } from 'react-icons/fa';


const WorkingProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#1e3a8a] via-[#00796b] to-[#00BFFF]  py-20">
      {/* Optional Background Pattern */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          opacity: 0.05,
          zIndex: 0,
        }}
      ></div>

      <div className="container relative px-4 mx-auto overflow-x-hidden max-w-7xl">
        {/* Section Title */}
        <div className="text-center flex flex-col gap-4 items-center justify-center mb-12 mx-auto max-w-[40rem]">
          <h2 className="text-center flex items-center justify-center">
            <span className="w-8 border-t border-[#f9fafb] mr-2"></span>
            <span className="text-white">How Do We Work</span>
            <span className="w-8 border-t border-[#f9fafb] ml-2"></span>
          </h2>
          <h1 className="text-3xl font-bold text-white">Our Working Process for Women's Health</h1>
        </div>

        {/* Process Steps */}
        <div className="container flex flex-col mx-auto w-fit lg:justify-around lg:gap-20 lg:flex-row">
          {/* Step 1: Consultation */}
          <div className="px-4 mb-8" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-lg transform transition duration-300 hover:scale-110">
                <div className="text-[#3597c8] text-6xl">
                  <FaUserMd />
                </div>
              </div>
              <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                <span className="text-xl font-bold bg-[#3597c8] text-white p-3 rounded-full">01</span>
                <h2 className="mt-2 text-xl font-semibold text-white">Personalized Consultation</h2>
                <p className="mt-1 text-white">In-depth consultation tailored to your needs.</p>
                {/* <button className="mt-3 bg-[#00BFFF] text-white py-2 px-4 rounded-full hover:bg-[#00796b] transition duration-300">Read More</button> */}
              </div>
            </div>
          </div>

          {/* Step 2: Comprehensive Services */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-1 border-t-4 border-dashed border-[#4a5568] mx-4"></div>
          </div>

          <div className="px-4 mb-8" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-lg transform transition duration-300 hover:scale-110">
                <div className="text-[#00796b] text-6xl">
                  <FaSyringe />
                </div>
              </div>
              <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                <span className="text-xl font-bold  text-white p-3 rounded-full bg-[#3597c8]">02</span>
                <h2 className="mt-2 text-xl font-semibold text-white">Comprehensive Gynecological Care</h2>
                <p className="mt-1 text-white">A full range of gynecological services for women.</p>
                {/* <button className="mt-3 bg-[#00BFFF] text-white py-2 px-4 rounded-full hover:bg-[#00796b] transition duration-300">Read More</button> */}
              </div>
            </div>
          </div>

          {/* Step 3: Follow-Up and Support */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-1 border-t-4 border-dashed border-[#a0aec0] mx-4"></div>
          </div>

          <div className="px-4 mb-8" data-aos="fade-up">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-lg transform transition duration-300 hover:scale-110">
                <div className="text-[#3597c8] text-6xl">
                <FaPhoneAlt/>
                </div>
              </div>
              <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                <span className="text-xl font-bold bg-[#32aeec] text-white p-3 rounded-full">03</span>
                <h2 className="mt-2 text-xl font-semibold text-white">Follow-Up and Continuous Support</h2>
                <p className="mt-1 text-white">Ensuring your health and comfort every step of the way.</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
