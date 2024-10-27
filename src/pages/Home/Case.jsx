import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/Gallery/gallery1.jpg'; 
import img2 from '../../assets/Gallery/gallery2.jpg'; 
import img3 from '../../assets/Gallery/galley3.jpg'; 
import img4 from '../../assets/Gallery/gallery4.jpg'; 
import img5 from '../../assets/Gallery/gallery5.jpg'; 
import img6 from '../../assets/Gallery/gallery6.jpg'; 
import img7 from '../../assets/Gallery/gallery7.jpg'; 

import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaPlus } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Cases = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const cases = [
    { id: 1, name: "Stomach Cancer", image: img1 },
    { id: 2, name: "Sigmoid colon cancer", image: img2 },
    { id: 3, name: "Small intestine", image: img3 },
    { id: 4, name: "Road Traffic Accident", image: img4 },
    { id: 5, name: "Colon cancer", image: img5 },
    { id: 6, name: "Large incisional hernia", image: img6 },
    // { id: 7, name: "Laparoscopic hernia repair", image: img7 },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cases' },
  ];

  // Slider settings for slick carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Initialize AOS on component load
  useEffect(() => {
    AOS.init({ duration: 600 });
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  return (
    <section>
      <div className="bg-gray-100 py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-[3rem]">
            <div className=''>
                <h2 className="text-center flex items-center justify-center">
                  <span className="w-8 border-t border-blue-600 mr-2"></span>
                  <span>Our Gallery</span>
                  <span className="w-8 border-t border-blue-600 ml-2"></span>
                </h2>
                <h1 className="text-center">Our Latest Events & Photos</h1>
            </div>
          <Slider {...settings} className="relative mt-[2rem]">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="p-4 flex justify-center">
                <div 
                  className="relative cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[350px] lg:w-[370px] w-full transition-transform transform hover:scale-105 hover:shadow-2xl"
                  onClick={() => handleOpenModal(caseItem.id)}
                >
                  {/* Image Section */}
                  <div className="overflow-hidden flex items-center justify-center h-full">
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Plus Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-200">
                      <FaPlus className="text-red-500 text-5xl opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal Logic */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-0 max-w-3xl w-full relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-lg font-bold bg-black text-white px-2 py-2 rounded-full">X</button>
            <img src={cases[selectedIndex - 1].image} alt={cases[selectedIndex - 1].name} className="w-full h-[40vh] object-cover rounded" />
        
          </div>
        </div>
      )}
    </section>
  );
};

// Custom Arrow Component for left and right controls
const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute ${direction === "right" ? "lg:right-[-2rem] md:right-[-0.3rem] right-[-0.5rem]" : "lg:left-[-2rem] left-[-0.5rem]"} top-1/2 transform -translate-y-1/2 bg-[#3597c8] text-white p-3 rounded-full cursor-pointer z-10`}
    >
      {direction === "right" ? <FaChevronRight /> : <FaChevronLeft />}
    </div>
  );
};

export default Cases;
