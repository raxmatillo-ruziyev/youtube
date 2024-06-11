import React from 'react'
import './Home.scss'
import home1 from '../../assets/home1.png'
import home2 from '../../assets/home2.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className="home">
                <ul className="homeList">
                    <li className="homeItem">
                        <i id='i' className='	fa fa-home'></i>
                        <Link to={"/"} className="homeTitle">Home</Link>
                    </li>
                    <li className="homeItem">
                        <img src={home1} alt="" />
                        <Link to={"/channel"} className="homeTitle">Trending</Link>
                    </li>
                    <li className="homeItem">
                        <img src={home2} alt="" />
                        <Link to={"/sub"} className="homeTitle">Subscriptions</Link>
                    </li> <br /> <br />
                    <li className="homeItem">
                        <i id='i' className='	fa fa-folder'></i>
                        <Link to={"/lib"} className="homeTitle">Library</Link>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-history'></i>
                        <Link to={"/his"} className="homeTitle">History</Link>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-clock-o'></i>
                        <Link to={"/watch"} className="homeTitle">Watch later</Link>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-star-o'></i>
                        <Link to={"/ho"} className="homeTitle">HoFavouritesme</Link>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-heart-o'></i>
                        <Link to={"/like"} className="homeTitle">Liked videos</Link>
                    </li><li className="homeItem">
                        <i id='i' className='fa fa-music'></i>
                        <Link to={"/music"} className="homeTitle">Music</Link>
                    </li><li className="homeItem">
                        <i id='i' className='fa fa-gamepad'></i>
                        <Link to={"/game"} className="homeTitle">Games</Link>
                    </li>
                    <li className="homeItem">
                        <i id='i' className='fa fa-angle-down'></i>
                        <Link to={"/"} className="homeTitle">Show more</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home
