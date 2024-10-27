import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import ContactSection from './ContactSection';
import BreadCrumbs from '../../component/Breadcums';
import ContactForm from '../Cases/ContactForm';
import pattern from '../../assets/patterncontact.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loadingToastId, setLoadingToastId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.email) {
            return toast.error("All fields are required")
        }
        setLoading(true);
        const toastId = toast.loading('Sending message...');
        setLoadingToastId(toastId);

        const serviceID = 'service_binary';
        const templateID = 'template_expvbs4';
        const userID = 'o7E8VZREP08XRZNgp';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                toast.update(toastId, {
                    render: 'Email sent successfully!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch((error) => {
                toast.update(toastId, {
                    render: 'An error occurred while sending the email.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setLoading(false);
            });
    };
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className=''>
            <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems}/>
            <div className="relative flex flex-col items-center justify-center">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${pattern})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                        width: '40%',
                        left: '0',
                    }}
                ></div>

                <section className="max-w-7xl mx-auto py-12 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 text-center">

                        {/* Phone Card */}
                        <a
                            href="tel:+91-90909909090"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaPhoneAlt className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Call Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">+91-8318208837</p>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:aggarwal.manas@gmail.com"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaEnvelope className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Email Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">saumya.751983@gmail.com</p>
                            </div>
                        </a>

                        {/* Location Card */}
                        <a
                            href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-3"
                        >
                            <div className="flex flex-col items-center">
                                <FaMapMarkerAlt className="text-6xl text-[#4A6F8F] mb-4 transition-transform group-hover:scale-125" />
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#4A6F8F] transition-colors">Visit Us</h2>
                                <p className="mt-2 text-lg text-gray-600 font-medium group-hover:text-gray-800">
                                14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
                                </p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
            {/* <div className="max-w-[34rem] sm:p-12 p-6 bg-white shadow-sm rounded-xl  md:max-w-[31rem] mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                <h3 className="text-2xl text-[#0A165D] sora-600 mb-4">Fill The Contact Form</h3>
                <p className="mb-6 sora-400 text-[#535760]">Feel free to contact with us, guaranteed response within 24 hours</p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                            required
                        />
                    </div>
                    <div className="flex flex-wrap mb-4 -mx-2">
                        <div className="w-full px-2 mb-4 lg:w-[60%] lg:mb-0">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                required
                            />
                        </div>
                        <div className="w-full px-2 lg:w-[40%]">
                            <input
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="relative mt-6 flex items-center px-8 py-3 w-full text-center overflow-hidden font-medium transition-all bg-[#1e3a8a] rounded-md group"
                    >
                        <span
                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#0f29bd] rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </span>
                    </button>
                </form>
               
            </div> */}
             <ContactForm/>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.158118865743!2d82.9656194892169!3d25.351902510446408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dcac102de6d%3A0x380acc80bc9a6f1f!2sBhojuveer%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724419781258!5m2!1sen!2sin" height="400" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-90%'></iframe> */}
        </div>
    )
}

export default ContactPage