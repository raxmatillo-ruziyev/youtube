import React, { useRef } from "react";
import Slider from "react-slick";
import './Hero.scss'
import hero from '../../assets/hero.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import hero4 from '../../assets/hero4.png'
import hero5 from '../../assets/hero5.png'

const Hero = () => {
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
            <div className="hero">
                <div className="herocha">
                    <div className="heroBox">
                        <img src={hero} alt="" width={'50px'} />
                        <h1 className="heroTitle">Dollie Blair</h1>
                    </div>
                    <div className='iconcha'>
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
                            <div className="heroItem">
                                <img width={"266px"} src={hero1} alt="" />
                                <h2 className="heroSubtitle">A Brief History Of Creation</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">80k views  ·  3 days ago</p>
                                    <p className="heroText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={2}>
                            <div className="heroItem">
                                <img width={"266px"} src={hero2} alt="" />
                                <h2 className="heroSubtitle">Selecting The Right Hotel</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">123k views  ·  1 months ago</p>
                                    <p className="heroText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={3}>

                            <div className="heroItem">
                                <img width={"266px"} src={hero3} alt="" />
                                <h2 className="heroSubtitle">Asteroids</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">43k views  ·  12 days ago</p>
                                    <p className="heroText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={4}>
                            <div className="heroItem">
                                <img width={"266px"} src={hero4} alt="" />
                                <h2 className="heroSubtitle">Telescopes 101</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">11k views  ·  6 months ago</p>
                                    <p className="heroText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={5}>
                            <div className="heroItem">
                                <img width={"266px"} src={hero5} alt="" />
                                <h2 className="heroSubtitle">Medical Care Is Just</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">18k views  ·  2 days ago</p>
                                    <p className="heroText">Dollie Blair</p>
                                </div>

                            </div>
                        </div>
                        <div key={6}>

                            <div className="heroItem">
                                <img width={"266px"} src={hero3} alt="" />
                                <h2 className="heroSubtitle">Moon Gazing</h2>

                                <div className="heroBoxcha">
                                    <p className="heroText">67k views  ·  4 months ago</p>
                                    <p className="heroText">Dollie Blair</p>
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

export default Hero
