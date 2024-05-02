import React from "react";
import './index.css';
import NavBar from "./NavBar";
import apple from '../Images/apple.png';
import google from '../Images/button-play@2x.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const Header = () => {
    return (
        <div className="main">
            <div className="main-gradient">
                <NavBar />
                <div className="main-text">
                    <div className="main-text-header">

                        <text>
                            Find The Best <span style={{ fontWeight: "bold" }}>Candidate</span> For Your Clinics
                        </text>
                    </div>
                    <div className="main-text-description">
                        <text className="main-text-description-texts">
                            Smile and Co. is a mobile app that focuses on talent<br /> acquisition for temporary and permanent jobs.  Direct<br />
                            source candidates and schedule them for available shifts<br />
                            or interviews.<br></br>(dental recruiters and talent acquisition specialists welcome)
                        </text>
                    </div>
                    <div className="main-text-button">Register Now</div>
                </div>
                <div className="play-buttons">
                    <div className="play-playStore">
                        <img className="play-button-images" src={apple} alt="apple store button" />
                    </div>
                    <div className="play-apple">
                        <img className="play-button-images" src={google} alt="google play store button" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;