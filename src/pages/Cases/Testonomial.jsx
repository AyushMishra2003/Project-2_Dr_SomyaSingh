import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import img from '../../assets/testo.png'
import p1 from '../../assets/New_Pattern/testopattern.jpg';

const testimonials = [
  {
    quote: 'Best Gynecologist in Lucknow',
    feedback:
      'Dr. Somya Singh provided compassionate and expert care. She addressed all my concerns, and I felt completely at ease during my treatment. Highly recommended!',
    image: img, // Replace `img` with the actual image path or variable
    name: 'Priya Sharma',
    role: 'Patient',
  },
  {
    quote: 'Exceptional Doctor',
    feedback:
      'From the very first appointment, Dr. Singh was understanding and attentive. She provided clear explanations and made the process stress-free. Absolutely grateful for her care!',
    image: img,
    name: 'Anjali Verma',
    role: 'Patient',
  },
  {
    quote: 'Highly Professional and Caring',
    feedback:
      'Dr. Somya Singh is incredibly knowledgeable and truly listens. She made me feel comfortable and provided excellent support throughout my treatment. Couldn’t recommend her enough!',
    image: img,
    name: 'Rahul Mishra',
    role: 'Patient',
  },
];


const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto  text-center py-20">
      <h2 className="">Testimonials</h2>
      <h1 className="">
        What our customers say
        
      </h1>
      <div className="grid gap-8 md:grid-cols-3 mt-[3.5rem]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer bg-white rounded-lg p-8 pt-16 shadow-md transition-all duration-300 group"
          >
            <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url(${p1})`,
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          opacity: 0.6,
          width: '100%',
          left: '0',
        }}
      ></div>
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square rounded-full bg-[#3597c8] transition-transform duration-500 scale-100 group-hover:scale-125 z-0 "></div>
            <span className="absolute top-0 left-0 p-4 text-4xl text-white z-10">
              <FaQuoteLeft />
            </span>
            <h4 className="mb-4 text-xl mt-[4rem] font-semibold text-[#33597c8]  transition duration-300 z-10 relative">
              {testimonial.quote}
            </h4>
            <p className="text-gray-400transition duration-300 mb-8 z-10 relative">
              {testimonial.feedback}
            </p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-[#3597c8] group-hover:border-white transition duration-300 z-10 relative"
            />
            <h5 className="text-lg font-semibold text-[#3597c8] transition duration-300 z-10 relative">
              {testimonial.name}
            </h5>
            <h6 className="text-gray-400  transition duration-300 z-10 relative">
              {testimonial.role}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
