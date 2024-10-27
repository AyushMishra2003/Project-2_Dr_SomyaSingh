import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BreadCrumbs from '../../component/Breadcums';
import p1 from '../../assets/New_Pattern/testopattern.jpg'; // Pattern image for card background
import img from '../../assets/testo.png';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialPage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const testimonials = [
    {
      quote: 'Exceptional Care',
      feedback: 'Dr. Saumya provided me with the best gynecological care I could have asked for. Her thoroughness and compassion make all the difference. I felt safe and respected throughout my visit.',
      image: img,
      name: 'Anjali Sharma',
      role: 'Patient',
    },
    {
      quote: 'Highly Knowledgeable',
      feedback: 'Dr. Saumya is incredibly knowledgeable and made sure I understood all my options. Her friendly approach puts you at ease, making it a great experience.',
      image: img,
      name: 'Rahul Verma',
      role: 'Patient',
    },
    {
      quote: 'Wonderful Experience',
      feedback: 'My experience with Dr. Saumya was wonderful! She listened to my concerns and provided valuable advice. I would recommend her to all my friends and family.',
      image: img,
      name: 'Pooja Agarwal',
      role: 'Patient',
    },
    {
      quote: 'Compassionate Doctor',
      feedback: 'Dr. Saumya is a compassionate doctor who genuinely cares for her patients. Her attentiveness and understanding made a huge difference in my health journey.',
      image: img,
      name: 'Vikram Singh',
      role: 'Patient',
    },
    {
      quote: 'Great Support',
      feedback: 'The support from Dr. Saumya and her team was phenomenal. They guided me through every step of my treatment and ensured that I was comfortable and informed.',
      image: img,
      name: 'Ritika Mehta',
      role: 'Patient',
    },
    {
      quote: 'Professional and Caring',
      feedback: 'Dr. Saumya is both professional and caring. She answered all my questions and made me feel at ease. I’m grateful for her help during my visit.',
      image: img,
      name: 'Amit Joshi',
      role: 'Patient',
    },
    {
      quote: 'Excellent Experience',
      feedback: 'I had an excellent experience with Dr. Saumya. She is knowledgeable and provides the best care possible. Highly recommend for women’s health!',
      image: img,
      name: 'Neha Singh',
      role: 'Patient',
    },
    {
      quote: 'Great Gynecologist',
      feedback: 'Dr. Saumya is a great gynecologist. She is very approachable and genuinely cares for her patients. I would recommend her to anyone seeking gynecological care.',
      image: img,
      name: 'Karan Yadav',
      role: 'Patient',
    },
    {
      quote: 'Best Doctor for Women’s Health',
      feedback: 'If you are looking for a doctor who specializes in women’s health, Dr. Saumya is the best choice. Her expertise and empathy are truly commendable.',
      image: img,
      name: 'Suman Rani',
      role: 'Patient',
    },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'What Our Patients Say' },
  ];

  return (
    <div>
      <BreadCrumbs headText={"What Our Patients Say"} items={breadcrumbItems} />
      <div className="relative overflow-hidden py-20">
        <section className="text-blue-900">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-gray-300 cursor-pointer rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center space-y-4"
                  data-aos="fade-up" // Add AOS attribute for fade-up animation
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url(${p1})`,
                      opacity: 0.4, // Adjust this for visibility
                      zIndex: 0,
                    }}
                  ></div>

                  {/* Testimonial Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-[#3597c8] mb-2 z-10" // Higher z-index to bring it in front
                  />

                  {/* Testimonial Content */}
                  <h4 className="text-lg font-semibold text-[#33597c8] z-10">
                    {testimonial.quote}
                  </h4>
                  <p className="text-gray-700 text-sm flex items-start z-10">
                    {/* <FaQuoteLeft className="text-[#3597c8] mr-2 text-xl mt-1" /> */}
                    {testimonial.feedback}
                  </p>

                  {/* Name and Role */}
                  <div className="z-10">
                    <h5 className="text-md font-semibold text-[#3597c8]">
                      {testimonial.name}
                    </h5>
                    <h6 className="text-gray-500 text-xs">{testimonial.role}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialPage;
