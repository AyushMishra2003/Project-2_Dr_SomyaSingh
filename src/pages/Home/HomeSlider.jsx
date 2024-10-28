import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaPills, FaHeartbeat, FaUserMd, FaMicroscope, FaAppleAlt } from 'react-icons/fa';
import s1 from '../../assets/slider/s4.jpeg'; // Replace with your image
import s2 from '../../assets/slider/s5.jpeg'; // Replace with your image
import s3 from '../../assets/slider/s6.jpeg'; // Replace with your image
import s4 from '../../assets/slider/s7.jpeg'; // Replace with your image
import s10 from '../../assets/slider/slider10.jpg'; // Replace with your image
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 600, settings: { arrows: false } },
      { breakpoint: 480, settings: { dots: false, arrows: false } },
    ],
  };

  const services = [
    { icon: <FaPills />, title: 'Birth Control' },
    { icon: <FaMicroscope />, title: 'Pregnancy Testing' },
    { icon: <FaHeartbeat />, title: 'Health Care' },
    { icon: <FaUserMd />, title: 'Abortion Services' },
    { icon: <FaUserMd />, title: 'Gynecology Services' },
    { icon: <FaAppleAlt />, title: 'Family Planning' },
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Slider Section */}
      <Slider {...settings} className="relative h-[20vh] sm:h-[40vh] md:h-[60vh] lg:h-[65vh] xl:h-[80vh]">
        {[s10, s3, s4].map((src, index) => (
          <div className="relative" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 transform  hover:opacity-90"
              style={{ maxHeight: '100%' }} // Ensure image doesn't overflow
            />
          </div>
        ))}
      </Slider>

      {/* Services Section */}
      {/* Uncomment if you want to include services */}
      {/* <div className="py-10 bg-gradient-to-b from-white to-[#e0f7fa] overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 pt-10">
            {services.map((service, index) => (
              <ServiceItem key={index} icon={service.icon} title={service.title} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

// Reusable Service Item Component
const ServiceItem = ({ icon, title }) => (
  <div
    className="flex flex-col items-center text-center space-y-4 p-6 rounded-full border border-[#1E3A8A] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
    data-aos="zoom-in"
  >
    <div className="icon bg-[#1E3A8A] text-white rounded-full p-4 mb-4 flex items-center justify-center text-4xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#1E3A8A]">{title}</h3>
  </div>
);

// Arrows for Slider
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#3597c8] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#0b3d5b] transition duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#3597c8] text-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#0b3d5b] transition duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default HomeSlider;
