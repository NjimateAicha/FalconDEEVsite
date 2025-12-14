import React from "react";
import founderImg from "../../images/founder.jpeg";
import { CenterFocusStrong } from "@material-ui/icons";
import ReactPixel from 'react-facebook-pixel';

const FounderSection = (props) => {
    return (
        <section className={`founder-section ${props.tClass || ""}`}>
            <div className="container">
                <div className="founder-wrapper">

                    {/* HEADER */}
                    <div className="founder-header text-center">
                        <h1 className="founder-title">About the Founder</h1>
                        <span className="team-badge">
                            Founder-led team · Trusted collaborators
                        </span>
                    </div>
                    <br></br>
                    {/* IMAGE */}
                    <div className="founder-image text-center">
                        <img
                            src={founderImg}
                            alt="Aicha Njimate - Founder of FalconDev"
                            className="img-fluid"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="founder-text text-center">
                        <p>
                            Hi, I’m <strong>Aicha Njimate</strong>, Founder of FalconDev.
                            I work with a trusted network of designers, developers, and product
                            specialists to deliver scalable web & mobile solutions with clarity,
                            execution, and long-term impact.
                        </p>

                        <p className="founder-meta">
                            <strong>Founder-led team</strong> · Web & Mobile · MVP & SaaS ·
                            Based in Morocco · Working worldwide
                        </p>
                    </div>

                    {/* SOCIAL */}
                    <div className="founder-links text-center">
                        <span>Connect with me on</span>
                        <div className="social-inline">
                            <a href="https://www.linkedin.com/in/aicha-njimate/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <span> · </span>
                            <a href="https://www.instagram.com/njimate_aicha/" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="btns text-center">
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
        </section>

    );
};

export default FounderSection;
