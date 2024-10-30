import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/srv (1).jpg'

const ClickHandler = (props) => {
    window.scrollTo(10, 0);
}


const About4 = (props) => {
    return (
        <section className="wpo-about-section-s4 section-padding pb-120">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h4>Welcome To FalconDev</h4>
                                <h2>Trusted in web and mobile app solutions.</h2>
                                <p>We are a trusted partner in delivering high-quality web and mobile app development solutions. With a focus on innovation and reliability, we turn your ideas into seamless digital experiences that drive business success.</p>
                                <div className="text-sub-wrap">
                                    <div className="text-sub-item">
                                        <i className="fi flaticon-tax"></i>
                                        <h5>Perfect solutions for your business needs to drive success.</h5>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} className="theme-btn" to="/service">Our Services</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-ab"></div>
        </section>
    )
}

export default About4;