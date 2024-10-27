import React from 'react';
import { FaBriefcaseMedical, FaClipboardCheck, FaGraduationCap } from 'react-icons/fa';

const ApproachCard = () => {
    return (
        <div className='text-black flex flex-col items-center md:items-start justify-center p-4 sm:p-6 xl:w-[70rem] gap-4 tracking-wide rounded-lg'>
            <h2 className='text-[1.5rem] sm:text-[2rem] font-semibold  md:text-left'>
                Our Approach
            </h2>
            <p className=' md:text-left mb-4 text-sm sm:text-base md:text-lg'>
                We prioritize a patient-centered approach in gynecological care, integrating cutting-edge medical advancements with compassionate service.
            </p>
            <ul className='list-disc list-inside text-sm sm:text-base md:text-lg flex flex-col gap-4'>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaBriefcaseMedical className='text-green-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Comprehensive Gynecological Services for all stages of life.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaClipboardCheck className='text-blue-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Education and Empowerment to help women make informed health decisions.</span>
                </li>
                <li className='flex items-center gap-2 sm:gap-3'>
                    <FaGraduationCap className='text-yellow-500 text-[1.5rem] sm:text-[2rem]' />
                    <span>Seamless Care Coordination for a smooth healthcare experience.</span>
                </li>
            </ul>
        </div>
    );
}

export default ApproachCard;
