
import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { BsStarFill } from "react-icons/bs";

const HeroPage = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <div className="rating">
                   <BsStarFill className='star-color'/> <p><b>Google Rating</b></p>
                    <div className="stars">★★★★★</div>
                </div>
                <h1 className="hero-heading">Your Trusted Partner for Compliance Business Needs</h1>
                <p className="hero-description">
                    We provide end-to-end solutions to ensure your business complies with regulations, <strong>achieves financial stability</strong>, and <strong>maintains client satisfaction</strong>.
                </p>
                <div className="stats">
                    <div className="stat">
                        <span className="stat-value">98%</span>
                        <p className="stat-label">Customer Rating</p>
                    </div>
                    <div className="stat">
                        <span className="stat-value">1K+</span>
                        <p className="stat-label">Clients Served</p>
                    </div>
                    <div className="stat">
                        <span className="stat-value">A+</span>
                        <p className="stat-label">Financial Stability</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="talk-button">Talk to an Expert</button>
                    <div className="video-button">
                        <FaCirclePlay className='vid-btn-color'/> See How It Works
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="service">
                    <h3>Annual Compliance</h3>
                </div>
                <div className="service">
                    <h3>Payroll Services</h3>
                </div>
                <div className="service">
                    <h3>Company Formation</h3>
                </div>
                <div className="service">
                    <h3>Annual Report</h3>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;