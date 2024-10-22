import React from 'react'
import StatsSection from '../../component/Stats'
import HomeSlider from './HomeSlider'
import AboutClinic from './HomeAbout'
import WhyChooseUs from './WhyWeChoose'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
       {/* <HomeSlider/> */}
       <AboutClinic/>
       <WhyChooseUs/>
       <StatsSection/>    
    </div>
  )
}

export default Home