import React from 'react'
import { Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import TopHeader from './component/TopHeader'
import Header from './component/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Footer from './component/Footer'
import BottomFooter from './component/BottomFooter'
import ContactPage from './pages/Contact/Contact'
import Cases from './pages/Cases/Case'
import TestimonialPage from './pages/Testonomial/TestonomialPage'
import AboutDoctor from './pages/About/AboutDoctor'
import AboutClinic from './pages/About/AboutClinic'
import ContactForm from './pages/Cases/ContactForm'
import Testimonials from './pages/Cases/Testonomial'
import ServiceDetails from './pages/Service/ServiceDetail'


const App = () => {
  return (
  
    <div>
      <TopHeader/>
      <Header/>
         <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/contact' element={<ContactPage/>}/>
            <Route  path='/cases' element={<Cases/>}/>
            <Route  path='/testonomial' element={<TestimonialPage/>}/>
            <Route  path='/about/doctor' element={<AboutDoctor/>}/>
            <Route  path='/about/clinic' element={<AboutClinic/>}/>
            <Route  path='/demo' element={<ContactForm/>}/>
            <Route  path='/demo1' element={<Testimonials/>}/>
            <Route  path='/treatment/:name' element={<ServiceDetails/>}/>
         </Routes>

      <Footer/>
      <BottomFooter/>   


    </div>
  )
}

export default App