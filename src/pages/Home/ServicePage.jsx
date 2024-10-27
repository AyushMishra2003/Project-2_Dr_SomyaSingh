import React from 'react';
import ServiceCard from '../../component/ServiceCard';
import equipment1 from "../../assets/New_Pattern/pname.jpg";
import equipment2 from "../../assets/New_Pattern/equiment2.png"; 

const ServicePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-20 relative'>
      {/* Equipment images with absolute positioning */}
      <img 
        src={equipment1} 
        alt="Gynecological Equipment 1" 
        className="absolute left-[2rem] top-[0rem] w-[20rem] h-[20rem] animate-float rotate-x-60" // Added rotate-x-60 class
        style={{ transform: 'translate(-50%, 0) rotateX(60deg)' }} // Center horizontally and rotate
      />

      <img 
        src={equipment2} 
        alt="Gynecological Equipment 2" 
        className="absolute right-[2rem] top-[0rem] w-[20rem] h-[20rem] animate-float" // Adjust width and height as needed
        style={{ transform: 'translate(50%, 0)' }} // Center horizontally
      />
      
      <div className='max-w-7xl flex flex-col gap-6'>
        {/* Left Side: Text Content */}
        <div className='flex flex-col items-center justify-center' data-aos="fade-right">
          <div className='flex flex-col gap-2 items-center justify-center'>
            <div className="relative overflow-hidden">
              <h2 className="text-center flex items-center justify-center">
                <span className="w-8 border-t border-blue-600 mr-2"></span>
                <span>Our Services</span>
                <span className="w-8 border-t border-blue-600 ml-2"></span>
              </h2>
            </div>

            <h1 className="md:w-2/3 text-center">
              Best Obstetrics & Gynecology Treatments in Lucknow
            </h1>
          </div>
        </div>

        {/* Service Card Component */}
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServicePage;
