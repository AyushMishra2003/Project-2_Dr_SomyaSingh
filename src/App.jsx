import React from 'react'
import { Routes,Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import TopHeader from './component/TopHeader'
import Header from './component/Header'
const App = () => {
  return (
  
    <div>
      <TopHeader/>
      <Header/>
         <Routes>
            <Route  path='/' element={<Home/>}/>
         </Routes>


    </div>
  )
}

export default App