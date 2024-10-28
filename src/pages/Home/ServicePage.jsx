import React from 'react';
import ServiceCard from '../../component/ServiceCard';
import equipment1 from "../../assets/New_Pattern/pname.jpg";
import equipment2 from "../../assets/New_Pattern/equiment2.png"; 

const ServicePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center lg:py-20 relative'>
      {/* Container for equipment images */}
      <div className="flex justify-between w-full max-w-7xl px-4">
        <img 
          src={equipment1} 
          alt="Gynecological Equipment 1" 
          className="w-full sm:w-1/2 md:w-[25rem] h-auto animate-float" // Increased width
        />

        <img 
          src={equipment2} 
          alt="Gynecological Equipment 2" 
          className="w-full sm:w-1/2 md:w-[25rem] h-auto animate-float" // Increased width
        />
      </div>
      
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
