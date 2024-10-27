import { FaPills, FaHeartbeat, FaUserMd, FaMicroscope, FaAppleAlt } from 'react-icons/fa'; // Use appropriate icons from React Icons
import React from 'react';

const ServicesSection = () => {
  return (
    <div className="bg-blue-100 py-10 w-full">
      <div className="container mx-auto text-center">
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaPills className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Birth Control</h3>
          </div>
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaMicroscope className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Pregnancy Testing</h3>
          </div>
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaHeartbeat className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Health Care</h3>
          </div>
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaUserMd className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Abortion Services</h3>
          </div>
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaUserMd className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Gynecology Services</h3>
          </div>
          <div className="service-item text-center">
            <div className="icon bg-white rounded-full p-4 mx-auto mb-4">
              <FaAppleAlt className="text-4xl text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">Family Planning</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
