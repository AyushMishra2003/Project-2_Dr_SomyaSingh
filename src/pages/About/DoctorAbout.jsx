import React, { useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import doctorimg from '../../assets/doctor.png'; // Your doctor image
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../../component/Breadcums";

// Define your treatments array with icons
const treatments = [
    { name: 'High RISK Pregnancy', icon: <FaStar />, path: '/treatment/highriskpregnancy' },
    { name: 'Minimally Invasive Gynaecology', icon: <FaStar />, path: '/treatment/minimallyinvasivegynecology' },
    { name: 'Fetal Medicine', icon: <FaStar />, path: '/treatment/fetalmedicine' },
    { name: 'Sustainable Menstruation', icon: <FaStar />, path: '/treatment/sustainablemenstruation' },
    { name: 'Normal & Cesarean Delivery', icon: <FaStar />, path: '/treatment/normalcesareandelivery' },
    { name: 'Infertility Treatment', icon: <FaStar />, path: '/treatment/infertilitytreatment' },
    { name: 'Preventive Oncology', icon: <FaStar />, path: '/treatment/preventiveoncology' },
    { name: 'M.T.P / D & C', icon: <FaStar />, path: '/treatment/mtpdnc' },
    { name: 'Contraception Consultation', icon: <FaStar />, path: '/treatment/contraceptionconsultation' },
    { name: 'Hysterectomy', icon: <FaStar />, path: '/treatment/hysterectomy' },
    { name: 'Cancer Screening & Vaccination', icon: <FaStar />, path: '/treatment/cancerscreeningvaccination' },
    { name: 'PreMarital and PreConception Counseling', icon: <FaStar />, path: '/treatment/premarital' },
];

const DoctorAbout = () => {
    const location = useLocation();
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
    ];

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 1200, once: false, mirror: true });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (location.pathname === '/about') {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const socialLinks = [
        {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/drmanasaggarwal",
            color: "bg-blue-600",
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/drmanasaggarwal/",
            color: "bg-gradient-to-r from-pink-500 to-yellow-500",
        },
        {
            icon: <FaYoutube />,
            url: "https://www.youtube.com/@DrManasAggarwal",
            color: "bg-red-600",
        },
        {
            icon: <FaWhatsapp />,
            url: `https://wa.me/918318208837?text=${encodeURIComponent("Hello, I need help!")}`,
            color: "bg-green-500",
        },
    ];

    return (
        <div className="">
            <BreadCrumbs headText={"About Dr. Manas Aggarwal"} items={breadcrumbItems} />
            <Helmet>
                <title>About Dr. Manas Aggarwal - Best Gastroenterology Surgeon in Lucknow</title>
                <meta name="description" content="Learn about Dr. Manas Aggarwal, an ethical and experienced gastroenterology surgeon specializing in holistic and evidence-based patient care." />
                <meta name="keywords" content="About Dr. Manas Aggarwal, Gastroenterology, Surgeon, Lucknow, Medical Professional" />
            </Helmet>
            <div className="max-w-7xl mx-auto p-6 sm:p-8 overflow-x-hidden mt-[3rem] mb-[3rem]">
                
                {/* Doctor Introduction Section */}
                <div data-aos="fade-up" className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-4 text-center md:text-left">
                        <h1 className="text-start">About Dr. Manas Aggarwal</h1>
                        <p className="text-lg text-gray-600 leading-relaxed justify-start text-justify">
                            Dr. Manas Aggarwal has over 14 years of experience in the field and specializes in pancreatic disorders. He pursued his medical education in prestigious institutes in Delhi and completed his super-specialist degree at SGPGIMS, Lucknow.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            This practice aims to provide ethical, modern, evidence-based advice and necessary support to patients, emphasizing meditation, lifestyle modification, and proper diet, with medications and surgery reserved for refractory cases.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src={doctorimg} alt="Dr Manas Aggarwal" />
                    </div>
                </div>

                {/* About the Practice */}
                <div className="mt-12" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-[#4A6F8F] inline-block pb-2 border-b-4 border-[#4A6F8F]">
                        About the Practice
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        The practice focuses on ethical, evidence-based treatment, utilizing holistic methods and lifestyle changes, with surgery and medications only when necessary.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mt-12" data-aos="fade-left">
                    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#4A6F8F] inline-block pb-2">
                        Skills
                    </h2>
                    <ul className="list-disc ml-6 mt-4 text-gray-600 text-lg space-y-2">
                        <li>Expert planning and management for OPD patients</li>
                        <li>Preoperative & postoperative care management</li>
                        <li>Emergency triage and casualty management</li>
                        <li>Proficient in laparoscopic & open surgical procedures</li>
                    </ul>
                </div>

                {/* Professional Experience Section */}
                <div className="mt-12">
                    <div className="flex items-center space-x-2">
                        <FaBriefcase className="text-[#4A6F8F] text-2xl" />
                        <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
                    </div>
                    <div className="space-y-6 mt-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up">
                            <h3 className="text-xl font-semibold">Vice-Chairperson, Chandan Hospital, Lucknow (July 2023 - Present)</h3>
                            <p className="text-gray-600 mt-2">
                                Lead surgical teams and manage complex GI surgeries, ensuring high-quality patient care.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="300">
                            <h3 className="text-xl font-semibold">Consultant, Medanta Hospital, Lucknow (October 2019 - July 2023)</h3>
                            <p className="text-gray-600 mt-2">
                                Established the gastrointestinal surgery department and improved patient outcomes through evidence-based practices.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Treatments Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#4A6F8F] inline-block pb-2">Treatments</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                        {treatments.map((treatment, index) => (
                            <Link to={treatment.path} key={index} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <div className="text-4xl text-[#4A6F8F]">{treatment.icon}</div>
                                <h3 className="mt-2 text-lg font-semibold text-gray-800">{treatment.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#4A6F8F] inline-block pb-2">Contact</h2>
                    <div className="mt-4 flex flex-col items-start space-y-4">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#4A6F8F] text-xl mr-2" />
                            <p>Lucknow, Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-[#4A6F8F] text-xl mr-2" />
                            <p>(+91) 831-820-8837</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-[#4A6F8F] text-xl mr-2" />
                            <p>drmanasaggarwal@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 flex space-x-4">
                    {socialLinks.map((link, index) => (
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${link.color}`} key={index}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorAbout;
