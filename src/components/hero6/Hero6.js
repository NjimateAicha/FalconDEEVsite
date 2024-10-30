import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/3.png'
import shape1 from '../../images/slider/shape-6.png'
import shape2 from '../../images/slider/shape-7.png'
import shape3 from '../../images/slider/LL.png'
import Fade from 'react-reveal/Fade';

const Hero6 = () => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                                <h5>Your Vision, Our Code.</h5>
                            </div>
                            <div className="slide-title">
                                <h2> Transforming Ideas <b><span>Into</span> Digital Reality.</b></h2>
                            </div>
                            <div className="slide-text">
                                <p>Let’s build your digital future today!</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="btns">
                                <Link to="/about" className="theme-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fade right>
                <div className="consult-pic">
                    {/* <img src={hero1} alt="" /> */}
                    <img src={shape3} alt="" />
                </div>
            </Fade>
            <div className="hero-line-shape-1"><img src={shape1} alt="" /></div>
            <div className="hero-line-shape-2"><img src={shape2} alt="" /></div>
        </section>
    )
}

export default Hero6;