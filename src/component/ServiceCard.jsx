import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/ServiceIcon/mother.png';
import img4 from '../assets/ServiceIcon/treatment.png';
import hyr from '../assets/ServiceIcon/hysterectomy.png';
import couple from '../assets/ServiceIcon/couple.png';
import pattern from '../assets/New_Pattern/service_bg.png';
import mensu from '../assets/ServiceIcon/menstruation.png';
import gyno from '../assets/ServiceIcon/pediatrician.png';
import Delivery from '../assets/ServiceIcon/delivery.webp';
import fatal from '../assets/ServiceIcon/ultrasound.png';
import pdc from '../assets/ServiceIcon/pdc.png';
import Oncology from '../assets/ServiceIcon/healthcare.png';
import consult from '../assets/ServiceIcon/consultation.png';
import icons1 from '../assets/ServiceIcon/medical-team.png';
import women from '../assets/ServiceIcon/social-worker.png';
import { FaArrowRight } from 'react-icons/fa'; // Importing an icon for the button
import { Link } from 'react-router-dom';

const ServiceCard = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation happens once
    });
  }, []);

  // Define service data
  const services = [
    {
      title: 'High and RISK Pregnancy',
      description: 'Description for High and Risk Pregnancy',
      logo: img1,
      link: '/treatment/highriskpregnancy',
    },
    {
      title: 'Infertility Treatment',
      description: 'Advanced fertility treatments for couples trying to conceive.',
      logo: img4,
      link: '/treatment/infertilitytreatment',
    },
    {
      title: 'Fetal Medicine',
      description: 'Description for Fetal Medicine',
      logo: fatal,
      link: '/treatment/fetalmedicine',
    },
    {
      title: 'Contraception Consultation',
      description: 'Expert advice on birth control, including Copper-T and Multiload insertion.',
      logo: consult,
      link: '/treatment/contraceptionconsultation',
    },
    {
      title: 'Normal & Cesarean Delivery',
      description: 'Safe and expert care for normal and cesarean births.',
      logo: Delivery,
      link: '/treatment/normalcesareandelivery',
    },
    {
      title: 'Minimally invasive Gynaecology',
      description: 'Description for Minimally invasive Gynaecology',
      logo: gyno,
      link: '/treatment/minimallyinvasivegynecology',
    },
    {
      title: 'Preventive Oncology',
      description: 'Early detection and prevention of cancerous conditions.',
      logo: Oncology,
      link: '/treatment/preventiveoncology',
    },
    {
      title: 'M.T.P / D & C',
      description: 'Medical Termination of Pregnancy and Dilation & Curettage procedures.',
      logo: pdc,
      link: '/treatment/mtpdnc',
    },
    {
      title: 'Sustainable Menstruation',
      description: 'Description for Sustainable Menstruation',
      logo: mensu,
      link: '/treatment/sustainablemenstruation',
    },
    {
      title: 'Hysterectomy',
      description: 'Surgical removal of the uterus for medical reasons.',
      logo: hyr,
      link: '/treatment/hysterectomy',
    },
    {
      title: 'Cancer Screening & Vaccination',
      description: 'Early screening and prevention of gynecological cancers.',
      logo: icons1,
      link: '/treatment/cancerscreeningvaccination',
    },
    {
      title: 'Pre-Marital & Pre-Conception Counseling',
      description: 'Counseling services for couples preparing for marriage or pregnancy.',
      logo: couple,
      link: '/treatment/premarital',
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Link to={service?.link} key={index}>
            <div
              data-aos="fade-up"
              className="relative bg-white p-8 cursor-pointer rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 border border-gray-200 flex flex-col overflow-hidden h-full w-full" // Use w-full to ensure equal width
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.1,
                }}
              ></div>

              {/* Top Color Line */}
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-t-3xl mb-6 z-10"></div>

              <div className="relative z-10 flex flex-col items-center text-center flex-grow gap-4">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 transition-colors duration-300 ">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base md:text-lg transition-colors duration-300 mb-4 ">
                  {service.description}
                </p>
              </div>

              {/* Bottom Rounded Circle with Logo */}
              <div className="relative z-10 flex justify-center mt-auto mb-[-30px] cursor-pointer">
                <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-1 rounded-full">
                  <div className="bg-white rounded-full p-5 shadow-md transition-transform transform hover:scale-110 duration-300">
                    <img
                      src={service.logo}
                      alt={service.title}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <a
                href={service.link} // Link to service details
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-black py-2 px-4 rounded-full transition-transform transform hover:scale-105 hover:bg-red-600 duration-300 flex items-center"
                style={{ display: 'none', opacity: 0 }} // Hidden by default
              >
                <span className="mr-2">Read More</span>
                <FaArrowRight />
              </a>

              {/* Show button on hover */}
              <style>{`
                .relative:hover a {
                  display: flex;
                  opacity: 1;
                }
              `}</style>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
