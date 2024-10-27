import { FaFemale, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';
import { MdEmergency, MdOutlineAccessibilityNew, MdHealthAndSafety } from 'react-icons/md';
import doctorImg from '../../assets/dr_somya.jpeg';
import care from '../../assets/whywe/icons1.jpg';
import support from '../../assets/whywe/icons2.jpg';
import hygiene from '../../assets/whywe/icons3.jpg';
import expertise from '../../assets/whywe/icons4.jpg';

const WhyChoose = () => {
    const icons = [care, support, hygiene, expertise, care, hygiene, expertise]; // Icons representing different qualities of the service
    let translateValue = '8';
    if (window.matchMedia('(min-width: 640px)').matches) {
        translateValue = '12';
    }

    return (
        <div className="relative flex flex-col items-center justify-center w-full gap-4  pb-16 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 py-20 ">
            {/* <h2 className='text-4xl text-blue-700'>Why Choose Us?</h2> */}
            <h2 class="text-center flex items-center justify-center">
  <span class="w-8 border-t border-blue-600 mr-2"></span>
  <span>Why Choose us</span>
  <span class="w-8 border-t border-blue-600 ml-2"></span>
</h2>


            <div className='flex flex-col items-center justify-center lg:flex-row max-w-7xl'>
                <div className='flex flex-col gap-6 lg:gap-8'>
                    {/* Left side text boxes */}
                    {[
                        { icon: <FaFemale className="text-4xl" />, text: "Health Care" },
                        { icon: <FaHeartbeat className="text-4xl" />, text: "24/7 Customer Support" },
                        { icon: <FaShieldAlt className="text-4xl" />, text: "Sanitized and Clean" },
                        { icon: <MdEmergency className="text-4xl" />, text: "On Time Punctuality" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            className="relative w-full max-w-[20rem] flex items-center gap-4 lg:py-6 p-4 bg-gradient-to-r from-[#3597c8] to-[#7682a6] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            {item.icon}
                            <h2 className="text-xl font-semibold tracking-wide text-white">{item.text}</h2>
                        </div>
                    ))}
                </div>



                <div className="relative h-[25rem] w-[32rem] flex items-center justify-center sm:my-16">
                    {/* Rotating circle with icons */}
                    <div className="absolute animate-spin-slow sm:size-[24.5rem] size-[16.5rem] rounded-full border-2 border-[#1e3a8a] flex items-center justify-center">
                        {icons.map((Icon, index) => (
                            <div key={index} className={`absolute bg-white shadow-[0px_0px_12px_-6px_#000] rounded-full p-2`} style={{
                                transform: `rotate(${index * (360 / icons.length)}deg) translate(${translateValue}rem)`,
                            }}>
                                <div className="flex items-center justify-center" style={{
                                    transform: `rotate(${-index * (360 / icons.length)}deg)`, // Reset icon rotation
                                }}>
                                    <img src={Icon} className="w-[2rem] sm:w-[2.5rem] animate-spin-reverse" alt='icons' />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Car Image */}
                    <img src={doctorImg} className='w-[10.5rem] sm:w-[13rem] object-cover' alt="Car" />
                </div>

                <div className='flex flex-col gap-6 lg:gap-8'>
                    {/* Right side text boxes */}
                    {[
                        { icon: <MdHealthAndSafety className="text-4xl" />, text: "Personalized Care Plans" },
                        { icon: <MdOutlineAccessibilityNew className="text-4xl" />, text: "Affordable Treatment Options" },
                        { icon: <FaFemale className="text-4xl" />, text: "Specialized in Women's Health" },
                        { icon: <FaHeartbeat className="text-4xl" />, text: "Compassionate Support" }, ,
                    ].map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="relative w-full max-w-[20rem] flex items-center gap-4 lg:py-6 p-4 bg-gradient-to-r from-[#3597c8] to-[#7682a6] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            {item.icon}
                            <h2 className="text-xl font-semibold tracking-wide text-white">{item.text}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
