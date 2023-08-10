import React from "react";
// import { text} from "react"
import './index.css';
import Logo from '../../Images/Logo.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

function NavigationBar() {
    return (
        <div className="main-container">
            <div className="main-container-first-section">
                <div className="main-container-first-section-image-container">
                    <img className="main-container-first-section-image" src={Logo} alt="logo" />
                </div>
            </div>
            <div className="main-container-second-section">
                <div className="main-container-s-s-f-container">
                    <div className="main-container-s-s-f-container-first">
                        <text style={{fontWeight:"bold"}}>
                        Home
                        </text>   
                    </div>
                    <div>
                        <text>
                            About us
                        </text>
                    </div>
                    <div>
                        <text>
                            Subscription Plans
                        </text>
                    </div>
                </div>
                <div className="main-container-s-s-s-container">
                    <div className="main-container-s-s-s-container-f-button" >
                        <text>
                            Log In
                        </text>
                    </div>
                    <div className="main-container-s-s-s-container-l-button">
                        <text>
                            Sign Up
                        </text>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavigationBar;