import React from 'react'
import './Food.scss'
import food from '../../assets/food.png'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import food3 from '../../assets/food3.png'
import food4 from '../../assets/food4.png'
import food5 from '../../assets/food5.png'
import food6 from '../../assets/food7.png'
const Food = () => {
  return (
    <>
      <div className="food">
        <div className="foodcha">
            <div className="foodBox">
                <img src={food} alt="" width={'50px'} />
                <h1 className="foodTitle">Food & Drink</h1>
                <p className="foodTextcha">Recommended channel for you</p>
            </div>
          
              
            
       <div className='iconcha'>
       <button className='foodBtn'>Subscribe 2.3m</button>
       <i id='i2' className='fa fa-chevron-circle-left'></i>
            <i id='i2' className='fa fa-chevron-circle-right'></i>
       </div>
        </div>
        <ul className="foodList">
            <li className="foodItem">
                <img width={"236px"} src={food1} alt="" />
                <h2 className="foodSubtitle">A Brief History Of Creation</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">80k views  ·  3 days ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
            <li className="foodItem">
                <img width={"236px"} src={food2} alt="" />
                <h2 className="foodSubtitle">Selecting The Right Hotel</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">123k views  ·  1 months ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
            <li className="foodItem">
                <img width={"236px"} src={food3} alt="" />
                <h2 className="foodSubtitle">Asteroids</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">43k views  ·  12 days ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
            <li className="foodItem">
                <img width={"236px"} src={food4} alt="" />
                <h2 className="foodSubtitle">Telescopes 101</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">11k views  ·  6 months ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
            <li className="foodItem">
                <img width={"236px"} src={food5} alt="" />
                <h2 className="foodSubtitle">Medical Care Is Just</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">18k views  ·  2 days ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
            <li className="foodItem">
                <img width={"204px"} src={food6} alt="" />
                <h2 className="foodSubtitle">Moon Gazing</h2>
           
                <div className="foodBoxcha">
                <p className="foodText">67k views  ·  4 months ago</p>
                <p className="foodText">Dollie Blair</p>
                </div>

            </li>
        </ul>
     </div>
     
    </>
  )
}

export default Food
