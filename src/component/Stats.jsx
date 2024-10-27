import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GynecologistStats = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-12">
        
        {/* Left Side Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-1/2">
          {[
            { end: 120, label: 'Successful Surgeries', icon: '🩺' },
            { end: 300, label: 'Satisfied Patients', icon: '😊' },
            { end: 50, label: 'Years of Experience', icon: '👩‍⚕️' },
            { end: 25, label: 'National Awards', icon: '🏆' },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h2 className="text-5xl font-extrabold text-blue-600">
                <CountUp start={0} end={stat.end} duration={3} />+
              </h2>
              <p className="text-lg font-semibold mt-4 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Right Side Image & Content Section */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <div className="relative max-w-lg bg-blue-600 text-white shadow-lg lg:flex items-center p-6 lg:p-8 rounded-l-full overflow-hidden">
            {/* Circular Image inside Rounded Section */}
            <div className="absolute -left-16 lg:-left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Gynecologist"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text Content */}
            <div className="ml-24 lg:ml-32 pl-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Compassionate Care for Women</h2>
              <p className="text-md leading-relaxed">
                With over 50 years of combined experience, we specialize in providing
                top-quality gynecological care and women's health services. Our
                highly skilled team is dedicated to supporting women through all
                stages of life with compassionate care and state-of-the-art treatments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GynecologistStats;
