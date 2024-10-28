// src/WhatsAppIcon.js
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Using a more distinct phone icon

const WhatsAppIcon = () => {
    const handleClick = () => {
        const phoneNumber = "918285070000"; // Replace with your phone number
        const url = `tel:${phoneNumber}`; // Format for phone call
        window.open(url, '_self'); // Use '_self' to initiate the call
    };

    return (
        <div 
            onClick={handleClick} 
            className="fixed bottom-[4rem] right-6 cursor-pointer p-4 bg-[#00B771] rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700"
            style={{ zIndex: 1000 }}
        >
            <FaPhoneAlt className="text-white text-2xl" /> {/* Distinct phone icon */}
        </div>
    );
};

export default WhatsAppIcon;
