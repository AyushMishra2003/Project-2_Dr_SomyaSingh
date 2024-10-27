import React, { useEffect } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import doctorimg from "../../assets/dr_somya.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../../component/Breadcums";

const AboutDoctor = () => {
  const location = useLocation();
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Dr. Somya Singh" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="text-gray-800 overflow-hidden relative">
      <BreadCrumbs headText={"About Dr. Somya Singh"} items={breadcrumbItems} />
      <Helmet>
        <title>Meet Dr. Somya Singh - Your Trusted Gynecologist</title>
        <meta
          name="description"
          content="Discover the story of Dr. Somya Singh, a compassionate obstetrician and gynecologist who places patient care and wellbeing at the heart of her practice."
        />
        <meta
          name="keywords"
          content="Dr. Somya Singh, obstetrician, gynecologist, healthcare, women's health, patient care"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-10 mb-20 rounded-lg relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-10 mt-12 items-center">
          <div className="relative flex justify-center" data-aos="fade-up">
            <img
              src={doctorimg}
              alt="Dr. Somya Singh"
              className="rounded-full w-64 h-64 shadow-xl transition-transform transform hover:scale-110"
              loading="lazy"
            />
          </div>

          <div
            className="space-y-6 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-5xl font-bold text-[#2C3E50] shadow-md">
              Meet Dr. Somya Singh
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              A skilled and compassionate obstetrician and gynecologist, Dr.
              Somya Singh is committed to not just treating her patients, but
              understanding them. With a unique focus on holistic healthcare and
              personalized treatment plans, Dr. Singh’s practice reflects her
              belief that women’s health is deeply personal and needs an
              individualized approach.
            </p>
          </div>
        </div>

        {/* About the Doctor Section */}
        <div className="mt-12 border-b-2 border-gray-300 pb-4">
          <h2 className="text-4xl font-bold text-[#2C3E50] shadow-md" data-aos="fade-right">
            Why Patients Choose Dr. Somya
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed" data-aos="fade-left">
            With over a decade of experience in women’s health, Dr. Somya Singh
            combines clinical expertise with genuine empathy for her patients.
            She specializes in managing complex obstetric and gynecological
            cases, focusing on minimally invasive procedures and preventive
            care. Her philosophy of care is simple: to empower women to make
            informed choices about their health while providing unwavering
            support.
          </p>
        </div>

        {/* Unique Practice Approach */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-[#2C3E50]" data-aos="zoom-in">
            A Unique Approach to Women’s Healthcare
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed" data-aos="fade-up">
            Dr. Somya believes that no two patients are the same. From the first
            consultation, she takes the time to listen, understand, and create a
            plan that’s tailored to each individual’s needs. She’s known for her
            expertise in using holistic methods, advocating for lifestyle
            changes, and taking a conservative approach to surgery—always opting
            for the least invasive options first.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-[#2C3E50]" data-aos="fade-right">
            Areas of Expertise
          </h2>
          <ul className="list-disc ml-6 mt-4 text-gray-700 text-lg space-y-2" data-aos="fade-left" data-aos-delay="300">
            {[
              "Complex obstetric care and high-risk pregnancies",
              "Minimally invasive gynecological surgery",
              "Advanced laparoscopic and hysteroscopic procedures",
              "Comprehensive reproductive health management",
              "Infertility consultation and treatment",
              "Menopause management",
              "Adolescent gynecology",
              "Pelvic floor disorders",
            ].map((skill, index) => (
              <li key={index} className="flex items-center">
                <FaStar className="text-yellow-400 mr-2" /> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Experience Section */}
        <div className="mt-12">
          <div className="flex items-center space-x-2" data-aos="fade-up">
            <FaBriefcase className="text-[#2C3E50] text-3xl" />
            <h2 className="text-4xl font-bold text-gray-800">Professional Experience</h2>
          </div>
          <div className="space-y-6 mt-6">
            {[
              {
                title: "Associate Professor, Mayo Institute of Medical Sciences (Dec 2021 - Jan 2024)",
                description: "Dr. Singh led surgical teams, guided medical students, and developed innovative approaches to minimally invasive gynecological surgery.",
              },
              {
                title: "Assistant Professor, Mayo Institute of Medical Sciences (Jun 2017 - Dec 2021)",
                description: "During her tenure, she was responsible for training the next generation of healthcare providers while delivering high-quality patient care.",
              },
              {
                title: "Senior Resident, Hind Institute of Medical Sciences (Jun 2016 - Jun 2017)",
                description: "Gained extensive hands-on experience in obstetric care and surgical procedures while supporting complex, high-risk cases.",
              },
            ].map((experience, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:shadow-xl hover:scale-105"
                data-aos="flip-left"
                data-aos-delay={index * 300}
              >
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-gray-600 mt-2">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        {/* <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            What Patients Say
          </h2>
          <div className="flex overflow-x-auto mt-6 space-x-4 pb-4" data-aos="zoom-in">
            {[
              {
                patientName: "Alice",
                review: "Dr. Somya is a wonderful doctor who truly listens. I felt reassured at every step of my pregnancy. I couldn’t have asked for better care!",
              },
              {
                patientName: "John",
                review: "My wife and I were nervous when we found out we needed a specialist, but Dr. Singh’s calm demeanor and expertise put us at ease.",
              },
              {
                patientName: "Emily",
                review: "After years of searching for answers, I finally found Dr. Somya. She made me feel heard and provided solutions that truly worked.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
                <h4 className="mt-4 font-bold text-gray-800">{testimonial.patientName}</h4>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-up">
            Contact Information
          </h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="text-[#2C3E50] text-2xl mr-2" />
              <span>14/25, Indira Nagar, Near Mahi Medical Store, Lucknow</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhoneAlt className="text-[#2C3E50] text-2xl mr-2" />
              <span>+91-8285070000</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-[#2C3E50] text-2xl mr-2" />
              <span>saumya.751983@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons Section */}
        {/* <div className="mt-12 flex justify-center space-x-6" data-aos="fade-up">
          <a href="https://www.facebook.com/drsomyasingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3b5998] transition duration-300">
            <FaFacebookF className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/drsomyasingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C13584] transition duration-300">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://www.youtube.com/c/drsomyasingh" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF0000] transition duration-300">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#25D366] transition duration-300">
            <FaWhatsapp className="text-3xl" />
          </a>
        </div> */}
      </main>
    </div>
  );
};

export default AboutDoctor;
