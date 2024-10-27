import React, { useEffect, useState } from 'react';
import img1 from '../../assets/Gallery/gallery1.jpg'; 
import img2 from '../../assets/Gallery/gallery2.jpg'; 
import img3 from '../../assets/Gallery/galley3.jpg'; 
import img4 from '../../assets/Gallery/gallery4.jpg'; 
import img5 from '../../assets/Gallery/gallery5.jpg'; 
import img6 from '../../assets/Gallery/gallery6.jpg'; 
import img7 from '../../assets/Gallery/gallery7.jpg'; 

import BreadCrumbs from '../../component/Breadcums';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const Cases = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const cases = [
    { id: 1, name: "Stomach polyp", image: img1 },
    { id: 2, name: "Sigmoid colon cancer", image: img2 },
    { id: 3, name: "Small intestine", image: img3 },
    { id: 4, name: "Road Traffic Accident", image: img4 },
    { id: 5, name: "Colon cancer", image: img5 },
    { id: 6, name: "Large incisional hernia", image: img6 },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cases' },
  ];

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

  const handleNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % cases.length);
  };

  const handlePrevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + cases.length) % cases.length);
  };

  useEffect(() => {
    if (location.pathname === '/cases') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <Helmet>
        <title>Cases - Dr. Manas Aggarwal</title>
        <meta name="description" content="Explore various cases treated by Dr. Manas Aggarwal, showcasing his expertise in gastroenterology and liver surgeries." />
        <meta name="keywords" content="Gastroenterology Cases, Dr. Manas Aggarwal, Liver Surgery, Medical Cases, Lucknow" />
      </Helmet>
      <BreadCrumbs headText={"Cases"} items={breadcrumbItems} />
      <div className="py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <div 
                key={caseItem.id} 
                className="relative group p-4 flex justify-center"
                data-aos="fade-up"
              >
                <div className="relative cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full max-w-sm w-full transition-transform transform hover:scale-105 hover:shadow-2xl">
                  
                  {/* Image Section */}
                  <div className="overflow-hidden flex items-center justify-center relative">
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    />
                    
                    {/* Overlay for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                    {/* Plus Icon visible on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                      <FaPlus
                        className="text-red-500 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={() => handleOpenModal(index)}
                      />
                    </div>
                  </div>

                  {/* Text Section */}
                  {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-80">
                    <h3 className="text-white text-xl font-semibold">{caseItem.name}</h3>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 transition-opacity duration-300 ease-in-out backdrop-blur-sm">
          <div className="bg-white rounded-lg p-0 max-w-3xl w-full relative transition-transform transform scale-100 shadow-2xl">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-lg font-bold bg-black text-white px-2 py-1 rounded-full"
              aria-label="Close"
            >
              ✖
            </button>

            <button 
              onClick={handlePrevImage} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black rounded-full p-2"
              aria-label="Previous Image"
            >
              <FaChevronLeft />
            </button>

            <img 
              src={cases[selectedIndex].image} 
              alt={cases[selectedIndex].name} 
              className="w-full h-[70vh] object-cover rounded-t-lg shadow-lg" 
            />
            
            
            
            <button 
              onClick={handleNextImage} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-black rounded-full p-2"
              aria-label="Next Image"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cases;
