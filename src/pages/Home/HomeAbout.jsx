import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../../assets/New_Pattern/home_bg.jpg'; // Background image
import image1 from '../../assets/dr_somya.jpeg'; // Doctor's image
import { Link } from 'react-router-dom';
import { FaUserMd, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'; // Imported icons
import textbg from '../../assets/New_Pattern/text_bg.png'
import clinic from '../../assets/clinic_somya.jpg'

const AboutClinic = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative overflow-hidden bg-white py-20 border border-red-500">
            {/* Background Image */}
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${p1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                }}
            ></div>

            {/* Main Content */}
            <div className="relative flex flex-col lg:flex-row justify-between items-start p-4 md:p-0 gap-12 lg:gap-20 max-w-7xl mx-auto mt-[2.25rem] mb-[2.5rem] z-10">

                {/* Left Side: Text Content */}
                <div className="flex-1 z-10 p-6 md:p-8 rounded-lg transition-transform transform hover:scale-105" data-aos="fade-right">
                    <div className='flex flex-col gap-2'>
                        <div className="relative overflow-hidden ">
                            <h2 className="bg-transparent text-[1.5rem]">About Astitva Clinic For Women Health Care</h2>
                        </div>
                    
                        <h1 className="font-bold text-gray-800">
                            Best Obstetrician and  Gynecologist in Lucknow
                        </h1>
                    </div>

                    {/* <h3 className="text-lg font-medium text-gray-600 mt-2">
                        Clinic For Women Health Care
                    </h3> */}
                    <p className="text-base text-gray-600 leading-relaxed text-justify mt-4">
                        Dr. Somya Singh is a dedicated gynecologist with a passion for providing comprehensive care tailored to women’s health. With years of experience, she believes in empowering women through knowledge and personalized treatment plans.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed text-justify mt-2">
                        At our clinic, we prioritize your comfort and health. We offer a range of services from routine check-ups to specialized treatments, ensuring every woman receives the highest standard of care.
                    </p>

                    {/* New Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
                        <div className="flex items-center">
                            <FaCheckCircle className="text-[#3597c8] mr-2" />
                            <p className="text-gray-600">Personalized care plans</p>
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-[#3597c8] mr-2" />
                            <p className="text-gray-600">Experienced medical staff</p>
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-[#3597c8] mr-2" />
                            <p className="text-gray-600">State-of-the-art equipment</p>
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-[#3597c8] mr-2" />
                            <p className="text-gray-600">Comfortable clinic environment</p>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-6">
                        <Link to={"/contact"}>
                            <button
                                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#3597c8] rounded-md group"
                            >
                                <span
                                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                                >
                                    <span
                                        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                    ></span>
                                </span>
                                <span
                                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                                ></span>
                                <span
                                    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                                >Book Appoitment Now</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image & Doctor Info */}
                <div className="flex-1 z-10 flex flex-col items-center lg:items-start relative" data-aos="fade-left">
                    <div className="relative group">
                        <img
                            src={clinic}
                            alt="Dr. Somya Singh"
                            className="w-full lg:w-[600px] max-h-[540px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClinic;
