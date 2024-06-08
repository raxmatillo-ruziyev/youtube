import React from 'react'
import './Next.scss'
import next1 from '../../assets/next1.png'
import next2 from '../../assets/next2.png'
import next3 from '../../assets/next3.png'
import next4 from '../../assets/next4.png'
import next5 from '../../assets/next5.png'
import next6 from '../../assets/next6.png'
const Next = () => {
    return (
        <>
            <div className="next">
                <ul className="nextList">
                    <h1 className="nextSubtitle">Subscriptions</h1>

                    <li className="nextItem">
                        <img src={next1} alt="" />
                        <h3 className="nextTitle">Gussie Singleton</h3>
                    </li>
                    <li className="nextItem">
                        <img src={next2} alt="" />
                        <h3 className="nextTitle">Nora Francis</h3>
                    </li>

                    <li className="nextItem">
                        <img src={next3} alt="" />
                        <h3 className="nextTitle">Belle Briggs</h3>
                    </li>
                    <li className="nextItem">
                        <img src={next4} alt="" />
                        <h3 className="nextTitle">Eunice Cortez</h3>
                    </li>

                    <li className="nextItem">
                        <img src={next5} alt="" />
                        <h3 className="nextTitle">Emma Hanson</h3>
                    </li>
                    <li className="nextItem">
                        <img src={next6} alt="" />
                        <h3 className="nextTitle">Leah Berry</h3>
                    </li>
                    <br /><br /> <br />
                    <li className="nextItem">
                        <i id='i' className='fa fa-cog'></i>
                        <h3 className="nextTitle">Setting</h3>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Next
