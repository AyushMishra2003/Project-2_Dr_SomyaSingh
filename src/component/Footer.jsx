import React from 'react';
import { MdCall, MdMail, MdLocationOn, MdKeyboardArrowRight } from 'react-icons/md'; // Added MdKeyboardArrowRight
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black text-white">
            {/* Footer Background Design */}
            <div className="relative w-full overflow-hidden bg-[#3597c8]">
                <svg
                    className="absolute w-full h-32 text-white"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 320"
                >
                    <path fill="#1F708E" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,202.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="relative bg-[#3597c8] py-12">
                <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-between max-w-8xl px-4 gap-6">
                    {/* Contact Section */}
                    <div className="w-full lg:w-1/4 mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">Get In Touch With Us</h2>
                        <li className="mb-4 flex items-center text-lg lg:text-lg">
                            <IoMdMail className="mr-3 text-2xl lg:text-4xl" />
                            <a href="mailto:saumya.751983@gmail.com" className="hover:text-gray-800">saumya.751983@gmail.com</a>
                        </li>
                        <li className="mb-4 flex items-center text-lg lg:text-lg">
                            <MdCall className="mr-3 text-2xl lg:text-[2rem]" />
                            <a href="tel:+918285070000" className="hover:text-gray-800">+91-8285070000</a>
                        </li>
                        <li className="flex items-center text-lg lg:text-lg">
                            <MdLocationOn className="mr-3 text-2xl lg:text-6xl" />
                            <a href="https://www.google.com/maps?s=web&lqi=CiNkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QgbHVja25vd0iypsfEr7mAgAhaNxAAEAEQAhADGAAYARgCGAMYBCIjZHIgc29teWEgc2luZ2ggZ3luZWNvbG9naXN0IGx1Y2tub3eSAQxneW5lY29sb2dpc3SqAW4QASofIhtkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QoADIgEAEiHOS6mrb9RM_utqTtndEnGYmqnEJDgFzypwgukiQyJxACIiNkciBzb215YSBzaW5naCBneW5lY29sb2dpc3QgbHVja25vdw&vet=12ahUKEwj93teP6quJAxX2yDgGHSneB6AQ1YkKegQIUxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KROEcUYGWJk5MRvDfEitzX3u&daddr=house.+no+25,+near+14+green+restaurant,+Sector+14,+Indira+Nagar,+Lucknow,+Uttar+Pradesh+226016" 
                                target="_blank" rel="noopener noreferrer" 
                                className="hover:text-gray-800 transition-all duration-300">
                               14/25, Indira Nagar, Near Mahi Medical Store, Lucknow
                            </a>
                        </li>
                    </div>

                    {/* Treatment Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h2 className="text-xl font-semibold mb-4 text-white">Our Treatment</h2>
                        <ul className="text-lg lg:text-xl">
                            <Link to={`/treatment/highriskpregnancy`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />High-Risk Pregnancy
                                </li>
                            </Link>
                            <Link to={`/treatment/sustainablemenstruation`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />
                                    Sustainable Menstruation
                                </li>
                            </Link>
                            <Link to={`/treatment/infertilitytreatment`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Infertility Treatment
                                </li>
                            </Link>
                            <Link to={`/treatment/hysterectomyr`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> 
                                    Hysterectomy
                                </li>
                            </Link>
                            <Link to={`/treatment/mtpdnc`}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" />MTP & DNC
                                </li>
                            </Link>
                           
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]">
                        <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
                        <ul className="text-lg lg:text-xl">
                            <Link to={"/"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Home
                                </li>
                            </Link>
                            <Link to={"/about"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> About Us
                                </li>
                            </Link>
                            <Link to={"/cases"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Cases
                                </li>
                            </Link>
                            <Link to={"/testonomial"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Testimonials
                                </li>
                            </Link>
                            {/* <Link to={"/blog"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Blog
                                </li>
                            </Link> */}
                            <Link to={"/contact"}>
                                <li className="mb-2 hover:text-gray-800 flex items-center">
                                    <MdKeyboardArrowRight className="mr-2" /> Contact Us
                                </li>
                            </Link>
                           
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="w-full lg:w-1/4">
                        <h2 className="text-xl font-semibold mb-4 text-white" >Find Us</h2>
                        <div className="h-48 lg:h-64 w-full bg-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d28466.794055711747!2d80.97617356044982!3d26.89240873738261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.8944755!2d80.9951851!4m5!1s0x3999580646718413%3A0xee7dcdad487cc31b!2shouse.%20no%2025%2C%20near%2014%20green%20restaurant%2C%20Sector%2014%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!3m2!1d26.8896004!2d80.9964153!5e0!3m2!1sen!2sin!4v1729947066389!5m2!1sen!2sin" 
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
