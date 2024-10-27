import React, { useEffect } from "react";
import { FaUserMd, FaSyringe } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import bgimg from '../assets/New_Pattern/bgstats.jpg';

const stats = [
  {
    id: 1,
    title: "Happy Patients",
    count: "10000",
    icon: <FaUserMd className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 2,
    title: "Years Experience",
    count: "10",
    icon: <MdOutlineDateRange className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 3,
    title: "Total Cases Solved",
    count: "10000",
    icon: <PiSuitcaseSimpleFill className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    id: 4,
    title: "Successful Surgeries",
    count: "7000",
    icon: <FaSyringe className="text-[#fff] h-12 w-12 sm:h-16 sm:w-16" />,
  },
];

const ClinicStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="relative py-16 flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Stat Icons and Numbers */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-[8rem]">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center w-1/2 sm:w-auto mb-8 sm:mb-0"
              data-aos="fade-up"
              data-aos-delay={index * 200} // staggered animation
            >
              {/* Icon */}
              <div className="mb-4 text-[#3597c8]">
                {stat.icon}
              </div>

              {/* Count */}
              <h4 className="text-4xl sm:text-5xl font-extrabold text-[#3597c8] mb-1">
                {stat.count}+
              </h4>

              {/* Title */}
              <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicStats;
