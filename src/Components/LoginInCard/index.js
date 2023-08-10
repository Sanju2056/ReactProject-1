import React from "react";
import './index.css'
import Logo from '../Images/Logo.png';
import GoogleIcon from '../Images/gplay.png';
import AppleIcon from '../Images/apl.png';
import Show from '../Images/Show.png';
import Danger from '../Images/Danger Circle.png';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const LogInCard = () => {
    return (
        <div className="LoginCard-main">
            <div className="DangerLogo">
                <img src={Danger} />
            </div>
            <div className="LoginCard-Form">
                <div className="LogoContainer">
                    <img src={Logo} className="LogoImage" />
                </div>
                <p className="Text1">Sign In</p>
                <p className="Text2">Access to your account</p>
                <input className="LogInCard-Form-input" placeholder="Email address" />
                <input className="LogInCard-Form-input" placeholder="Password" />
                <img src={Show} className="VisibleIcon"/>
                <p className="Text3">Forgot Password?</p>
                <div className="LogInCard-button">
                    <p className="Text4">
                        Sign In
                    </p>
                </div>
                <div className="Text5Container">
                    <p className="Text5">or sign in with</p>
                </div>
                <div className="LogInCard-button-options">
                    <img src={GoogleIcon} className="Icon-Image"/>
                    <p className="Icon-Text">Continue with Google</p>
                </div>
                <div className="LogInCard-button-options">
                <img src={AppleIcon} className="Icon-Image"/>
                    <p className="Icon-Text">Continue with Apple</p>
                </div>
            </div>
            <p className="Text6">Don’t have an account?<span style={{fontWeight:600,color:"rgba(0, 0, 0, 1)"}}>Sign up</span></p>
        </div>
    )
}

export default LogInCard;