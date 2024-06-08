import React from 'react'
import './HomePage.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Recommended from '../../Components/Recommended/Recommended'
import Food from '../../Components/Food/Food'
import Home from '../../Components/Home/Home'
import Next from '../../Components/Next/Next'
const HomePage = () => {
  return (
    <>
      <div className="homePage">


        <div>
          <Navbar />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='Left'>
              <Home />
              <br />
              <br />
              <Next />
            </div>
            <div className='Right'>
              <br />
              <Hero />
              <br />
              <Recommended />
              <br />
              <Food />
            </div>
          </div>


        </div>


      </div>

    </>
  )
}

export default HomePage
