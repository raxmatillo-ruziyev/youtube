import React from 'react'
import './Home.scss'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
const Home = () => {
    return (
        <>
            <div className="home">
                <ul className="homeList">
                    <li className="homeItem">
                        <i id='i' className='	fa fa-home'></i>
                        <h3 className="homeTitle">Home</h3>
                    </li>
                    <li className="homeItem">
                        <img src={home1} alt="" />
                        <h3 className="homeTitle">Trending</h3>
                    </li>
                    <li className="homeItem">
                        <img src={home2} alt="" />
                        <h3 className="homeTitle">Subscriptions</h3>
                    </li> <br /> <br />
                    <li className="homeItem">
                        <i id='i' className='	fa fa-folder'></i>
                        <h3 className="homeTitle">Library</h3>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-history'></i>
                        <h3 className="homeTitle">History</h3>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-clock-o'></i>
                        <h3 className="homeTitle">Watch later</h3>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-star-o'></i>
                        <h3 className="homeTitle">HoFavouritesme</h3>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-heart-o'></i>
                        <h3 className="homeTitle">Liked videos</h3>
                    </li><li className="homeItem">
                        <i id='i' className='fa fa-music'></i>
                        <h3 className="homeTitle">Music</h3>
                    </li><li className="homeItem">
                        <i id='i' className='fa fa-gamepad'></i>
                        <h3 className="homeTitle">Games</h3>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-angle-down'></i>
                        <h3 className="homeTitle">Show more</h3>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home
