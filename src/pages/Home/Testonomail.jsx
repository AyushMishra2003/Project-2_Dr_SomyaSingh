import React from 'react';

const Testonomail = () => {
  return (
    <div className='relative overflow-hidden py-20'>
      {/* Background Heartbeat Animation */}
      <div className="heartbeat-pattern" />

      <section className="text-blue-900">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Client Testimonials</h2>
              <h1>What clients say about their experience with us</h1>
            </div>

            <div className="order-3 mt-8 text-center">
              <button className="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">See More reviews</button>
            </div>

            <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
              {/* Repeat for each testimonial */}
              {[{
    quote: 'Dr. Somya Singh is truly the best!',
    text: 'Dr. Singh’s compassionate care and expertise made all the difference. I felt heard and supported every step of the way.',
    name: 'Priya Sharma',
    title: 'Patient'
  }, {
    quote: 'Exceptional and caring!',
    text: 'I can’t thank Dr. Somya enough. Her thoroughness and kindness during my visits were beyond comforting.',
    name: 'Anjali Verma',
    title: 'Patient'
  }, {
    quote: 'Life-changing experience!',
    text: 'I owe so much to Dr. Singh. Her approach and knowledge put me at ease instantly. Highly recommended for anyone in Lucknow.',
    name: 'Rahul Mishra',
    title: 'Patient'
  }].map((testimonial, index) => (
    <TestimonialCard key={index} testimonial={testimonial} />
  ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col rounded-xl border border-blue-600 text-center shadow-xl shadow-blue-200">
      <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
        <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
          {/* Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
            <path fill="currentColor" fillRule="evenodd" d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" clipRule="evenodd" />
          </svg>
        </span>
        <div className="flex-1">
          <p className="border-blue-500 px-10 text-xl font-black">{testimonial.quote}</p>

          <blockquote className="mt-8 flex-1">
            <p className="leading-relaxed text-blue-900">{testimonial.text}</p>
          </blockquote>
        </div>

        <div className="-mx-5 mt-8 px-8 py-1">
          <div>
            <p className="text-base font-bold">{testimonial.name}</p>
            <p className="mt-0.5 text-sm">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testonomail;
