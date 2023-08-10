import React from "react";
import './index.css';
import FooterIcon from '../Images/Logo.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const Footer = () =>{
    return(
        <div className="footer-main">
            <div className="main-first-section">
                <img src={FooterIcon} className="main-first-image"/>
            </div>
            <div className="main-second-section">
                <div className="main-second-section-first-line">
                    <text className="main-second-section-text">
                    T&C
                    </text>
                    <p className="p-tag">|</p>
                </div>
                <div className="main-second-section-second-line">
                    <text className="main-second-section-text">
                        Privacy Policy
                    </text>
                    <p className="p-tag">|</p>
                </div>
                <div className="main-second-section-first-line">
                    <text className="main-second-section-text">
                        FAQs
                    </text>
                    <p className="p-tag">|</p>
                </div>
                <div style={{marginLeft:20}}>
                    <text className="main-second-section-text">
                    Copyright © 2023 smile & co.
                    </text>
                </div>
            </div>
        </div>
    )
}
export default Footer;