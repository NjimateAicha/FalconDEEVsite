import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import shape from '../../images/ft-shape.png'
import ReactPixel from 'react-facebook-pixel';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer-s2" >
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1: Brand */}
                        <div className="col col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p>FalconDev builds scalable web, mobile, SaaS & MVP solutions for businesses worldwide.</p>
                                <p style={{ marginTop: '10px', fontWeight: '500' }}>
                                    <i className="ti-location-pin" style={{ color: '#ff7a00', marginRight: '5px' }}></i>
                                    Casablanca, Morocco · Working worldwide
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        {/* <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/project">Portfolio</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div> */}

                        {/* Column 3: Contact & CTA */}
                        <div className="col col-lg-6 col-md-4 col-sm-12 col-12">
                            <div className="widget newsletter-widget"> {/* Reusing widget class for styling */}
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <p style={{ marginBottom: '15px' }}>
                                    <i className="ti-email" style={{ color: '#ff7a00', marginRight: '8px' }}></i>
                                    falcondevvofficial@gmail.com
                                </p>

                                <div className="social-icons" style={{ marginBottom: '25px', display: 'flex', gap: '15px' }}>
                                    <a href="https://www.linkedin.com/in/aicha-njimate/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '18px', border: '1px solid #ffffff40', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                                        <i className="ti-linkedin"></i>
                                    </a>
                                    <a href="https://www.instagram.com/njimate_aicha/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '18px', border: '1px solid #ffffff40', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                                        <i className="ti-instagram"></i>
                                    </a>
                                </div>

                                <div className="cta-button">
                                    <a href="https://calendly.com/njimateaicha/30min" target="_blank" rel="noopener noreferrer" className="theme-btn" style={{ borderRadius: '30px', padding: '12px 30px', fontSize: '16px' }} onClick={() => ReactPixel.track('Schedule')}>
                                        Book a Free Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Shapes */}
                <div className="ft-shape">
                    <img src={shape} alt="shape" />
                </div>
                <div className="ft-shape-s1">
                    <svg width="254.000000pt" height="257.000000pt" viewBox="0 0 254.000000 257.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M0 1341 c0 -1111 2 -1229 16 -1235 8 -3 56 -11 104 -16 206 -23 368 38 504 191 26 30 135 185 241 344 217 326 264 388 403 529 159 162 348 309 592 461 179 112 349 228 405 277 72 63 132 151 156 226 16 54 20 93 20 202 1 80 -5 157 -13 190 l-13 55 -1208 3 -1207 2 0 -1229z" />
                        </g>
                    </svg>
                </div>
                <div className="ft-shape-s2">
                    <svg width="230.000000pt" height="197.000000pt"
                        viewBox="0 0 230.000000 197.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1885 1463 c-189 -11 -392 -50 -565 -109 -202 -68 -460 -209 -630 -345 -222 -176 -436 -441 -560 -694 -45 -91 -120 -283 -120 -305 0 -6 428 -10 1145 -10 l1145 0 0 719 c0 677 -1 720 -17 725 -25 8 -268 26 -312 24 -20 -1 -58 -3 -86 -5z" />
                        </g>
                    </svg>
                </div>
            </div>

            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <ul>
                                <li>&copy; 2024 FalconDev. All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
