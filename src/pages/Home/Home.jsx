import React from 'react'

import HomeSlider from './HomeSlider'
import AboutClinic from './HomeAbout'
import WhyChooseUs from './WhyWeChoose'
import ServiceCard from '../../component/ServiceCard'
import ServicePage from './ServicePage'
import GynecologistStats from '../../component/Stats'
import ClinicStats from '../../component/ClientStat'
import WorkingProcess from './WorkingSection'
import Cases from './Case'

import DoctorAbout from './DoctorAbout'
import Testimonials from '../Cases/Testonomial'


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
       <HomeSlider/>
       <AboutClinic/>
       <ServicePage/>
       <ClinicStats/>
       <DoctorAbout/>
       <WorkingProcess/>
       <WhyChooseUs/>
       <Cases/>
       <Testimonials/>
    
      {/* <GynecologistStats/> */}
  

    </div>
  )
}

export default Home