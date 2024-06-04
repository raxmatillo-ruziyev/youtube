import React from 'react'
import './HomePage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Top from '../../Components/Top/Top'
import Hero from '../../Components/Hero/Hero'
import Recommended from '../../Components/Recommended/Recommended'
import Food from '../../Components/Food/Food'
const HomePage = () => {
  return (
    <>
    <div className="homePage">
  <div>
  <Navbar/>
  </div>

    <div>
    <Top/>
    <br />
    <Hero/>
    <br />
    <Recommended/>
    <br />
    <Food/>
    </div>
   
    </div>
     
    </>
  )
}

export default HomePage
