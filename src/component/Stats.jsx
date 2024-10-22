import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-16 lg:space-y-0 lg:space-x-12">

        {/* Left Side Stats Section */}
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-2 w-full lg:w-1/2">

          {/* Stat 1 */}
          <div className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-lg p-8 text-center" data-aos="zoom-in">
            <h2 className="text-7xl font-extrabold text-blue-700">
              <CountUp start={0} end={150} duration={3} />+
            </h2>
            <p className="text-lg font-semibold text-gray-500 mt-4">Completed Projects</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-lg p-8 text-center" data-aos="zoom-in" data-aos-delay="200">
            <h2 className="text-7xl font-extrabold text-blue-700">
              <CountUp start={0} end={99} duration={3} />+
            </h2>
            <p className="text-lg font-semibold text-gray-500 mt-4">Satisfied Clients</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-lg p-8 text-center" data-aos="zoom-in" data-aos-delay="400">
            <h2 className="text-7xl font-extrabold text-blue-700">
              <CountUp start={0} end={850} duration={3} />+
            </h2>
            <p className="text-lg font-semibold text-gray-500 mt-4">Team Members</p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-lg p-8 text-center" data-aos="zoom-in" data-aos-delay="600">
            <h2 className="text-7xl font-extrabold text-blue-700">
              <CountUp start={0} end={15} duration={3} />+
            </h2>
            <p className="text-lg font-semibold text-gray-500 mt-4">National Awards</p>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="800">
          <div className="relative max-w-lg">
            {/* Image with Overlay */}
            <div className="relative rounded-xl overflow-hidden w-96 h-96 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://via.placeholder.com/400"
                alt="Professional"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Stylish Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-transparent opacity-80 flex items-center justify-center rounded-xl">
              <div className="text-center text-white px-4">
                <h2 className="text-5xl font-bold leading-tight">Fun Facts</h2>
                <p className="text-xl mt-2 leading-snug">We have amazing stats to share with you!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
