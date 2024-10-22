import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import s1 from '../../assets/slider/s1.jpeg';
import s2 from '../../assets/slider/s2.jpeg';
import slider1 from '../../assets/slider-rename/appointment-1.png';
import slider2 from '../../assets/slider-rename/diets.png';
import slider3 from '../../assets/slider-rename/doctor-1.png';
import pattern from '../../assets/whywechoose.png';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
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

  return (
    <div className="relative w-full mx-auto h-fit">
      <Slider {...settings} className="relative h-fit">
        {[s1, s2].map((src, index) => (
          <div className="relative" key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[100px] sm:h-[250px] md:h-[300px] lg:h-[370px] xl:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 flex items-center justify-center">
              <h2 className="text-white font-bold text-2xl">Slide {index + 1} Caption</h2>
            </div>
          </div>
        ))}
      </Slider>

      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:items-center sm:justify-center gap-2 relative z-10 mt-[-8px] lg:mt-[-50px] px-4 lg:px-16 justify-items-center">
        {[{ title: 'Book Appointment', desc: 'Easily schedule your visit online and manage your health.', img: slider1 },
          { title: 'Explore Our Cases', desc: 'Discover how we help our patients with personalized treatments.', img: slider2 },
          { title: 'Contact Us', desc: 'Get in touch with our team for immediate assistance.', img: slider3 }
        ].map((card, index) => (
          <Link to={index === 2 ? "/contact" : "#"} key={index}>
            <div className="bg-white relative shadow-lg rounded-md p-4 text-center flex-1 w-full max-w-[370px] lg:max-w-[280px] xl:max-w-[400px] hover:shadow-xl transition-shadow duration-300">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              ></div>
              <div className="relative z-10 flex items-start justify-center w-full gap-3 lg:gap-4">
                <img src={card.img} alt={card.title} className="w-16 h-16" />
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-lg lg:text-xl mb-1 lg:mb-2 text-left leading-snug">{card.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base text-left leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#14576c] transition duration-300 z-10"
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
      className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#14576c] transition duration-300 z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default HomeSlider;
