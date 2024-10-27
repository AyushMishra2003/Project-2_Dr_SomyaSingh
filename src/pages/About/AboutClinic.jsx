import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import clinicImage from '../../assets/clinic_somya.jpg'; // Replace with your actual image path
import AboutCard from './AboutCards/AboutCard';
import WhyWeCard from './AboutCards/WhyWeCard';
import MissionCard from './AboutCards/MissionCard';
import ApproachCard from './AboutCards/ApproachCard';
import ClinicStats from '../../component/ClientStat';
import ClinicAbout from './ClinicAbout';
import equipment1 from '../../assets/New_Pattern/syrinagese.png'
import BreadCrumbs from '../../component/Breadcums';
import Cases from '../Home/Case';

const AboutClinic = () => {
    const [active, setAcitve] = useState("About")
    const breadcrumbItems = [
      { label: 'Home', href: '/' },
      // { label: 'About ASTITVA CLINIC ' },
      { label: 'About Astiva  Clinic ' },
     
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className=''>
   <BreadCrumbs headText={"About ASTITVA CLINIC"} items={breadcrumbItems} />
    <div className="bg-gray-100">
     

   
      <div className="px-4 lg:px-12 items-center justify-center">
      <ClinicAbout/>
        </div>
    
         <ClinicStats/>
         <div className='bg-white w-full'>

 
         <div className='max-w-7xl  flex flex-col px-4 lg:px-12 items-center justify-center mx-auto pt-[5rem] '>

      
        <div className='flex flex-wrap xl:gap-[5rem] gap-[0.5rem] pl-[0.5rem] pt-[3rem] relative'>
                <h1 className=''>Our Vision and Mission for the future 
                to serve with integrity and compassion</h1>
               
                <button onClick={() => setAcitve("About")} className={`rounded p-[0.8rem] px-[3rem] font-semibold   ${active === "About" ? "bg-[#007BFF] text-white shadow-lg" : "bg-[#A4D1E0] text-[#003366] hover:bg-[#007BFF] hover:text-white"}`} // Light blue inactive button
                >ABOUT</button>
                <button onClick={() => setAcitve("WhyWe")} className={`rounded p-[0.8rem] px-[3rem] font-semibold  ease-in duration-100 ${active === "WhyWe" ? "bg-[#007BFF] text-white" : "bg-[#A4D1E0] text-[#003366] hover:bg-[#007BFF]"}`}>Why Choose Us </button>
                <button onClick={() => setAcitve("Mission")} className={`rounded p-[0.8rem] px-[2rem] font-semibold  ease-in duration-200 ${active === "Mission" ? "bg-[#007BFF] text-white" : "bg-[#A4D1E0] text-[#003366] hover:bg-[#007BFF]"}`}>MISSION</button>
                <button onClick={() => setAcitve("Approach")} className={`rounded p-[0.8rem] px-[2rem] font-semibold  duration-200 ${active === "Approach" ? "bg-[#007bff] text-white" : "bg-[#A4D1E0] text-[#003366] hover:bg-[#007BFF]"}`}>Approach</button>
        </div>
            <div className='pt-[3rem] pb-[3rem]'>

                {active === "About" && <AboutCard />}
                {active === "WhyWe" && <WhyWeCard />}
                {active === "Mission" && <MissionCard />}
                {active == "Approach" && <ApproachCard />}
            </div>
           
        </div> 
        </div>
        <div className='flex flex-col mx-auto bg-gray-200'>
        <Cases/>
        </div>



      </div>
    
 
    </div>
  );
};

export default AboutClinic;
