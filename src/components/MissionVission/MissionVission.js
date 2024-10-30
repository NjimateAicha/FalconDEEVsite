import React from 'react'
import simg from '../../images/mission-shape.png'


const MissionVission = (props) => {
    return (
        <section className="wpo-mission-vission-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-mission-item">
                            <div className="wpo-mission-text">
                                <h2>Our Mission</h2>
                                <p>At FalconDev, our mission is to deliver cutting-edge web, mobile, and desktop applications and impactful business intelligence solutions. We drive digital transformation by empowering businesses with user-focused tools and data-driven insights, all built with a commitment to excellence and a passion for innovation.</p>
                                <h5> We strive to be the trusted technology partner that turns vision into reality for businesses of all sizes.</h5>
                            </div>
                            <div className="shape-1"></div>
                            <div className="shape-2"><img src={simg} alt=""/></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-vission-item">
                            <div className="wpo-vission-text">
                                <h2>Our Vission</h2>
                                <h5>At FalconDev, our vision is to redefine technology by delivering innovative solutions that empower businesses to thrive in a digital-first world.</h5>
                                <p>To be a leading technology partner, recognized for creating impactful digital solutions and empowering businesses to thrive through innovation, seamless user experiences, and data-driven insights. We envision a future where our technology solutions drive transformative growth and inspire success across industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission;