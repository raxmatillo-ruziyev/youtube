import React from 'react'
import './Next.scss'
import next1 from '../../assets/next1.png'
import next2 from '../../assets/next2.png'
import next3 from '../../assets/next3.png'
import next4 from '../../assets/next4.png'
import next5 from '../../assets/next5.png'
import next6 from '../../assets/next6.png'
import { Link } from 'react-router-dom'
const Next = () => {
    return (
        <>
            <div className="next">
                <ul className="nextList">
                    <h1 className="nextSubtitle">Subscriptions</h1>

                    <li className="nextItem">
                        <img src={next1} alt="" />
                        <Link to={"/one"} className="nextTitle">Gussie Singleton</Link>
                    </li>
                    <li className="nextItem">
                        <img src={next2} alt="" />
                        <Link to={"/two"} className="nextTitle">Nora Francis</Link>
                    </li>

                    <li className="nextItem">
                        <img src={next3} alt="" />
                        <Link to={"/three"} className="nextTitle">Belle Briggs</Link>
                    </li>
                    <li className="nextItem">
                        <img src={next4} alt="" />
                        <Link to={"/four"} className="nextTitle">Eunice Cortez</Link>
                    </li>

                    <li className="nextItem">
                        <img src={next5} alt="" />
                        <Link to={"/five"} className="nextTitle">Emma Hanson</Link>
                    </li>
                    <li className="nextItem">
                        <img src={next6} alt="" />
                        <Link to={"/four"} className="nextTitle">Leah Berry</Link>
                    </li>
                    <br /><br /> <br />
                    <li className="nextItem">
                        <i id='i' className='fa fa-cog'></i>
                        <Link to={"/settings"} className="nextTitle">Setting</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Next
