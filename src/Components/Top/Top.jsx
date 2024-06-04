import React from 'react'
import './Top.scss'
import top from '../../assets/top.png'
import Navbar from '../Navbar/Navbar'
const Top = () => {
  
   
  return (
    
    <>
    
      <div className="top">
        <div className="inputcha">
            <form className='form'>
            <input className='SearchInput' type="search" name="" id=""  placeholder='Search'   />
            <i id='icon' className='fa fa-search'></i>
            </form>
            <div className="inputcha2">
             <ul className="topList">
                <li className="topItem">
               <div> <i id='i' className='fa fa-video-camera'></i></div>
              <div>
              <i id='i' className='fa fa-ellipsis-v'></i>
                <i id='i' className='fa fa-ellipsis-v'></i>
                <i id='i' className='fa fa-ellipsis-v'></i>
              </div>
            <div className="divcha">
            <i id='i' className='fa fa-bell-o'></i>
            <button className='topBtn'>3</button>
            </div>
                </li>
                <li>
                    <img src={top} alt="" />
                </li>
             </ul>
            </div>
          
        </div>
      </div>
     
    </>
    
  )
}


export default Top
