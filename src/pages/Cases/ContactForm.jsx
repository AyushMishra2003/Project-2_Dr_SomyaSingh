import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { submitInquiry } from "../../redux/Slice/Parent.slice";

const ContactForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch()

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
     setIsLoading(true)
    const response=await dispatch(submitInquiry(formData))

    console.log(response);
    setIsLoading(false)

    // Reset the form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-8 bg-gray-100 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-b from-teal-500 to-teal-600 rounded-full transform translate-x-[40%] translate-y-[40%] opacity-30"></div>
      
      <div className="grid md:grid-cols-2 w-full bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl">
        {/* Contact Info Section */}
        <div className="p-8 relative bg-white shadow-md rounded-lg">
          <h3 className="text-[#3597c8] text-3xl font-semibold mb-4">Let's Get in Touch</h3>
          <p className="text-gray-600 mb-6">We're here to assist you. Please feel free to reach out!</p>
          
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="w-6 h-6 mr-3 text-[#3597c8]" />
              <p>14/25, Indira Nagar, Near Mahi Medical Store, Lucknow</p>
            </div>
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="w-6 h-6 mr-3 text-[#3597c8]" />
              <p>saumya.751983@gmail.com</p>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhone className="w-6 h-6 mr-3 text-[#3597c8]" />
              <p>+91-8285070000</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600">Connect with us:</p>
            <div className="flex space-x-3 mt-3">
              <a href="#" className="w-9 h-9 bg-[#3597c8] text-white flex items-center justify-center rounded-md hover:scale-105 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 bg-[#3597c8] text-white flex items-center justify-center rounded-md hover:scale-105 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 bg-[#3597c8] text-white flex items-center justify-center rounded-md hover:scale-105 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-9 h-9 bg-[#3597c8] text-white flex items-center justify-center rounded-md hover:scale-105 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-[#3597c8] text-white relative shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-3xl font-semibold">Contact Us</h3>

            <div className="relative">
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white" 
                placeholder="Name" 
                required 
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="relative">
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white" 
                placeholder="Phone" 
                required 
              />
            </div>
            <div className="relative">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white resize-none" 
                rows="4" 
                placeholder="Message" 
                required
              ></textarea>
            </div>
            <button
                    type="submit"
                   className="py-2 px-4 bg-white text-[#3597c8] font-semibold rounded-full hover:bg-teal-300 transition duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3 border-2 border-t-white border-[#1A466D] rounded-full"
                                viewBox="0 0 24 24"
                            ></svg>
                            Sending...
                        </span>
                    ) : (
                        "Send Message"
                    )}
                </button>
            
            {/* <button type="submit" className="py-2 px-4 bg-white text-[#3597c8] font-semibold rounded-full hover:bg-teal-300 transition duration-300">
              Send
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
