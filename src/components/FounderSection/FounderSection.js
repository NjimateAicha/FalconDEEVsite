import React from "react";
import founderImg from "../../images/founder.jpeg";
import { CenterFocusStrong } from "@material-ui/icons";
import ReactPixel from 'react-facebook-pixel';

const FounderSection = (props) => {
    return (
        <section className={`founder-section section-padding ${props.tClass || ""}`}>
            <div className="container">
                <div className="row align-items-center">

                    {/* IMAGE */}
                    <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
                        <div className="founder-image">
                            <img
                                src={founderImg}
                                alt="Aicha Njimate - Founder of FalconDeev"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="col-lg-7 col-md-12">
                        <div className="founder-content">
                            <div className="founder-card">

                                <div className="section-title">
                                    <h2>About the Founder</h2>
                                </div>

                                <p>
                                    Hi, I’m <strong>Aicha Njimate</strong>, Founder of FalconDeev.
                                    I help businesses build scalable web & mobile solutions with a
                                    focus on clarity, execution, and long-term impact.
                                </p>

                                <h4 className="founder-mini">
                                    Founder - Web & Mobile - MVP & SaaS - Based in Morocco - working worldwide
                                </h4>

                                {/* SOCIAL LINKS */}
                                <br></br>

                                <div className="founder-links">
                                    <h5>
                                        Connect with me on
                                    </h5>
                                    <br></br>

                                    <h5 className="social-inline">
                                        <b>
                                            <a
                                                href="https://www.linkedin.com/in/aicha-njimate/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>LinkedIn</span>
                                            </a>
                                        </b>
                                        {" · "}
                                        <b>
                                            <a
                                                href="https://www.instagram.com/njimate_aicha/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>Instagram</span>
                                            </a>
                                        </b>
                                    </h5>
                                </div>

                                <br></br>

                                {/* CTA */}
                                <div className="btns">
                                    <a
                                        href="https://calendly.com/njimateaicha/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="theme-btn"
                                        onClick={() => ReactPixel.track('Schedule')}
                                    >
                                        Book a Free Call
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderSection;
