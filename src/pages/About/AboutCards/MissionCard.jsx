import React from 'react';
import { FaBullseye, FaShieldAlt, FaCheckCircle, FaLeaf } from 'react-icons/fa';

const MissionCard = () => {
    return (
        <div className='text-black flex flex-col justify-center items-center md:items-start p-4 sm:p-6 xl:w-[70rem] gap-4 tracking-wide rounded-lg'>
            <h2 className='text-[1.5rem] sm:text-[2rem] font-semibold md:text-left'>
                Our Mission
            </h2>
            <p className=' md:text-left mb-4 text-sm sm:text-base md:text-lg'>
                Our mission is to empower women through comprehensive and compassionate gynecological care.
            </p>
            <ul className='list-disc list-inside text-sm sm:text-base md:text-lg flex flex-col gap-4'>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaBullseye className='text-red-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Patient-Centered Care focused on individual needs.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaShieldAlt className='text-blue-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Quality and Safety adhering to the highest standards.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaCheckCircle className='text-green-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Accessible Healthcare for all women.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaLeaf className='text-yellow-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Community Engagement to promote awareness about women’s health issues.</span>
                </li>
            </ul>
        </div>
    );
}

export default MissionCard;
