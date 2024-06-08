import Slider from "react-slick";
import React, { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'swiper/css';
import 'swiper/css/pagination';
import './Food.scss'
import food from '../../assets/food.png'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import food3 from '../../assets/food3.png'
import food4 from '../../assets/food4.png'
import food5 from '../../assets/food5.png'
import food6 from '../../assets/food6.png'
const Food = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
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
                        <button className="buttonchaa" onClick={previous}>
                            <i id='i2' className='fa fa-chevron-circle-left'></i>
                        </button>
                        <button className="buttonchaa" onClick={next}>
                            <i id='i2' className='fa fa-chevron-circle-right'></i>
                        </button>


                    </div>
                </div>

                <div className="slider-container">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        <div key={1}>
                            <div className="foodItem">
                                <img width={"266px"} src={food1} alt="" />
                                <h2 className="foodSubtitle">A Brief History Of Creation</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">80k views  ·  3 days ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={2}>
                            <div className="foodItem">
                                <img width={"266px"} src={food2} alt="" />
                                <h2 className="foodSubtitle">Selecting The Right Hotel</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">123k views  ·  1 months ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={3}>
                            <div className="foodItem">
                                <img width={"266px"} src={food3} alt="" />
                                <h2 className="foodSubtitle">Asteroids</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">43k views  ·  12 days ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={4}>
                            <div className="foodItem">
                                <img width={"266px"} src={food4} alt="" />
                                <h2 className="foodSubtitle">Telescopes 101</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">11k views  ·  6 months ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={5}>
                            <div className="foodItem">
                                <img width={"266px"} src={food5} alt="" />
                                <h2 className="foodSubtitle">Medical Care Is Just</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">18k views  ·  2 days ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={6}>
                            <div className="foodItem">
                                <img width={"266px"} src={food6} alt="" />
                                <h2 className="foodSubtitle">Moon Gazing</h2>

                                <div className="foodBoxcha">
                                    <p className="foodText">67k views  ·  4 months ago</p>
                                    <p className="foodText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                    </Slider>
                    <div style={{ textAlign: "center" }}>


                    </div>
                </div>

            </div>

        </>
    )
}

export default Food
