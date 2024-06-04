import React from 'react'
import './Navbar.scss'
import youtube from '../../assets/youtube.jpg'
import Home from '../Home/Home'
import Next from '../Next/Next'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbarcha" style={{display:"flex",alignItems:"center", justifyContent:"space-between" ,width:"200px"}}>
        <i className='fa fa-align-justify'id='hamburger'></i>
        <img src={youtube} alt=""  width={'120px'}/>
      </div>
      <br />
      <Home/>
      <br />
      <Next/>
    </div>
    </>
  )
}

export default Navbar
