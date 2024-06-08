import React, { useRef } from "react";
import Slider from "react-slick";
import './Recommended.scss'
import rec from '../../assets/rec.png'
import rec2 from '../../assets/rec2.png'
import rec3 from '../../assets/rec3.png'
const Recommended = () => {
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
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="recommended">
                <div className="recommendedBox">
                    <h1 className="recTitle">Recommended</h1>
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
                            <div className="recItem">
                                <img width={"450"} src={rec} alt="" />
                                <h2 className="recSubtitle">Dude You Re Getting A Telescope</h2>
                                <div className="recBoxcha">
                                    <p className="recText">34k views  ·  5 months ago</p>
                                    <p className="recText">Gussie French </p>
                                </div>
                            </div>
                        </div>
                        <div key={2}>
                            <div className="recItem">
                                <img width={"450"} src={rec2} alt="" />
                                <h2 className="recSubtitle">Moon Gazing</h2>
                                <div className="recBoxcha">
                                    <p className="recText">34k views  ·  5 months ago</p>
                                    <p className="recText">Edward Osborne </p>
                                </div>
                            </div>
                        </div>
                        <div key={3}>
                            <div className="recItem">
                                <img width={"450"} src={rec3} alt="" />
                                <h2 className="recSubtitle">Moon Gazing</h2>
                                <div className="recBoxcha">
                                    <p className="recText">8125k views  ·  4 months ago</p>
                                    <p className="recText">Dollie Blair</p>
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

export default Recommended
