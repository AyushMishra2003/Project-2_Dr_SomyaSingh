import React, { useEffect } from 'react';
import image from '../../assets/Somya_Doctor.png'; // Doctor's image
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import p1 from '../../assets/about/pattern-11.png';

const DoctorAbout = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once or every time you scroll
    });

    // Refresh AOS to trigger animations on mount
    AOS.refresh();
  }, []);

  return (
    <section className="bg-gray-100 py-40 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${p1})`,
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          opacity: 0.6,
          width: '40%',
          left: '0',
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-4 lg:px-8">
        {/* Left Side: Content */}
        <div
          className="lg:w-1/2 mb-8 lg:mb-0"
          data-aos="fade-right" // AOS animation applied here
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Meet <span className="text-[#3597c8]">Dr. Somya Singh</span>, our best gynecologist dedicated to providing exceptional care.
        
          </h2>
          <p className="text-gray-600 mb-6 text-lg text-justify leading-relaxed">
            Dr. Somya Singh is a highly qualified obstetrician and gynecologist with extensive experience in the field. 
            She served as an Associate Professor at the Mayo Institute of Medical Sciences, contributing to research and education 
            in obstetrics and gynecology. Her dedication to advancing medical knowledge has made her a respected leader in healthcare.
          </p>
          <p className="text-gray-600 mb-6 text-lg text-justify leading-relaxed">
            Specialized in minimally invasive gynecology, preventive oncology, and fetal medicine, Dr. Singh holds qualifications from 
            prestigious institutions like the Royal College of Obstetrics and Gynecology in London, making her a trusted healthcare provider.
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <Link to="/about/doctor">
              <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#3597c8] rounded-md group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                {/* <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span> */}
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-500 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  More About Us
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image and Experience Label */}
        <div className="lg:w-1/2 relative lg:flex lg:justify-end lg:items-center" data-aos="fade-left">
          <div className="relative">
            {/* Doctor's Image */}
            <img
              src={image}
              alt="Dr. Somya Singh"
              className="w-full h-auto max-w-md rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              style={{ position: 'relative', zIndex: 2 }}
            />

            {/* Experience Label */}
            <div
              className="absolute bottom-[-30px] left-[30px] bg-[#3597c8] text-white px-8 py-4 rounded-lg shadow-xl"
              style={{ zIndex: 3 }}
            >
              <h3 className="text-xl font-semibold">
                10+ Years of Experience
              </h3>
            </div>
          </div>

          {/* Decorative Background Shape */}
          <div className="absolute -bottom-6 right-0 bg-indigo-200 w-32 h-32 rounded-full transform translate-x-12 translate-y-12 opacity-50"></div>
          <div className="absolute top-[-5rem] left-2 bg-indigo-200 w-32 h-32 rounded-full transform translate-x-12 translate-y-12 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAbout;
