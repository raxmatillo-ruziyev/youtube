import React from 'react'
import './Recommended.scss'
import rec from '../../assets/rec.png'
import rec2 from '../../assets/rec2.png'
import rec3 from '../../assets/rec3.png'
const Recommended = () => {
  return (
    <>
     <div className="recommended">
        <div className="recommendedBox">
            <h1 className="recTitle">Recommended</h1>
            <div className='iconcha'>
       <i id='i2' className='fa fa-chevron-circle-left'></i>
            <i id='i2' className='fa fa-chevron-circle-right'></i>
       </div>
        </div>
        <ul className="recList">
            <li className="recItem">
                <img width={"460px"} src={rec} alt="" />
                <h2 className="recSubtitle">Dude You Re Getting A Telescope</h2>
                <div className="recBoxcha">
                <p className="recText">34k views  ·  5 months ago</p>
                <p className="recText">Gussie French </p>
                </div>
            </li>
            <li className="recItem">
                <img width={"460px"} src={rec2} alt="" />
                <h2 className="recSubtitle">Moon Gazing</h2>
                <div className="recBoxcha">
                <p className="recText">34k views  ·  5 months ago</p>
                <p className="recText">Edward Osborne </p>
                </div>
            </li>
            <li className="recItem">
                <img width={"430px"} src={rec3} alt="" />
                <h2 className="recSubtitle">Moon Gazing</h2>
                <div className="recBoxcha">
                <p className="recText">8125k views  ·  4 months ago</p>
                <p className="recText">Dollie Blair</p>
                </div>
            </li>
        </ul>
     </div>
    </>
  )
}

export default Recommended
