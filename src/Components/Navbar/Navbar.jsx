import React from 'react'
import './Navbar.scss'
import youtube from '../../assets/youtube.jpg'
import Home from '../Home/Home'
import Top from '../Top/Top'

const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", width: "1200px", justifyContent: "space-between" }}>
        <div className="navbar">
          <div className="navbarcha" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "170px" }}>
            <i className='fa fa-align-justify' id='hamburger'></i>
            <img src={youtube} alt="" width={'120px'} />
          </div>

        </div>
        <Top />
      </div>



    </>
  )
}

export default Navbar
