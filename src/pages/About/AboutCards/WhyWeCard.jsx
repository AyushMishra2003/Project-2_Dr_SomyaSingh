import React from 'react';
import { FaStar, FaCogs, FaWrench, FaClipboardList } from 'react-icons/fa';

const WhyWeCard = () => {
    return (
        <div className='text-black flex flex-col items-center md:items-start justify-center p-4 sm:p-6 xl:w-[70rem] gap-4 tracking-wide rounded-lg'>
            <h2 className='text-[1.5rem] sm:text-[2rem] font-semibold text-center md:text-left'>
                Why Choose Us
            </h2>
            <p className='text-left mb-4 text-sm sm:text-base md:text-lg'>
                We are a trusted provider of gynecological services, delivering high-quality care with a personal touch.
            </p>
            <ul className='list-disc list-inside text-sm sm:text-base md:text-lg flex flex-col gap-4'>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaStar className='text-yellow-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Expert Medical Team with specialized knowledge in women's health.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaCogs className='text-blue-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>State-of-the-Art Technology for the highest quality of care.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaWrench className='text-green-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Comprehensive Services tailored to meet individual health needs.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaClipboardList className='text-red-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Commitment to Education to empower informed health decisions.</span>
                </li>
            </ul>
        </div>
    );
}

export default WhyWeCard;
