import React from 'react';
import { FaHeart, FaUserMd, FaClinicMedical, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutCard = () => {
    return (
        <div className='text-black font-normal flex flex-col items-center md:items-start justify-center p-4 md:p-6 xl:w-[70rem] gap-4 tracking-wide rounded-lg'>
            <h2 className='text-[1.5rem] sm:text-2xl md:text-3xl font-semibold text-center md:text-left'>
                About Dr. Somya Singh
            </h2>
            <p className=' mb-4 text-sm sm:text-base md:text-lg lg:text-xl'>
                At Dr. Somya Singh's clinic, we are dedicated to providing comprehensive and compassionate gynecological care.
            </p>
            <ul className='list-disc list-inside text-base sm:text-lg md:text-xl flex flex-col gap-4'>
                <li className='flex items-center gap-2 md:gap-3'>
                    <FaHeart className='text-red-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Personalized Care tailored to each patient's specific health needs.</span>
                </li>
                <li className='flex items-center gap-2 md:gap-3'>
                    <FaUserMd className='text-blue-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Expertise and Experience with the latest advancements in women’s health.</span>
                </li>
                <li className='flex items-center gap-2 md:gap-3'>
                    <FaClinicMedical className='text-green-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>State-of-the-Art Facilities equipped with advanced medical technologies.</span>
                </li>
                <li className='flex items-center gap-2 md:gap-3'>
                    <FaHandsHelping className='text-yellow-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Holistic Approach focusing on emotional well-being and preventive care.</span>
                </li>
            </ul>

            {/* Call to Action Button */}
            <div className="mt-4 md:mt-6 flex justify-center md:justify-start">
                <Link to={"/about/doctor"}>
                    <button
                        className="relative flex items-center px-4 sm:px-6 py-2 sm:py-3 overflow-hidden font-medium transition-all bg-[#3597c8] rounded-md group"
                    >
                        <span
                            className="absolute top-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-sm sm:text-base"
                        >
                            More About Somya Singh
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AboutCard;
