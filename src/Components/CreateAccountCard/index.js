import React from "react";
import './index.css';
import Logo from '../Images/Logo.png';
import GoogleIcon from '../Images/gplay.png';
import AppleIcon from '../Images/apl.png';
import Show from '../Images/Show.png';
import Danger from '../Images/Danger Circle.png';
import Rectangle from '../Images/Rectangle 2.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
const CreateAccountCard = () => {
    return (
        <div className="CreateAccount-main">
            <div className="DangerLogo">
                <img src={Danger} />
            </div>
            <div className="CreateAccount-Form">
                <div className="CA-LogoContainer">
                    <img src={Logo} className="CA-LogoImage" />
                </div>
                <p className="CA-Text1">Create Account</p>
                <div className="CreateAccount-Form-input-div">
                    <input className="CreateAccount-Form-input" placeholder="Email address" />
                </div>
                <div className="CreateAccount-Form-input-div">
                    <input className="CreateAccount-Form-input" placeholder="Password" />
                    <img src={Show} className="CA-VisibleIcon" />
                </div>
                <div className="CreateAccount-Form-input-div">
                    <input className="CreateAccount-Form-input" placeholder="ReType Password" />
                    <img src={Show} className="CA-VisibleIcon" />
                </div>
                <div className="CA-Terms-div">
                    <img src={Rectangle} className="CA-rectangle" />
                    <div className="CA-Terms-subDiv">
                        <p className="CA-Text7">Accept Our  </p>
                        <p className="CA-span1">Terms & Conditions</p>
                        <p className="CA-Text7">&</p>
                        <p className="CA-span1">Privacy Policy.</p>
                    </div>
                </div>
                <div className="CreateAccount-button">
                    <p className="CA-Text4">
                        Sign Up
                    </p>
                </div>
                <div className="CA-Text5Container">
                    <p className="CA-Text5">or sign in with</p>
                </div>
                <div className="CreateAccount-button-options">
                    <img src={GoogleIcon} className="CA-Icon-Image" />
                    <p className="CA-Icon-Text">Continue with Google</p>
                </div>
                <div className="CreateAccount-button-options">
                    <img src={AppleIcon} className="CA-Icon-Image" />
                    <p className="CA-Icon-Text">Continue with Apple</p>
                </div>
            </div>
            <div className="CA-Text6Container">
                <p className="CA-Text6">Already have an account?</p>
                <p className="CA-span">Sign in</p>
            </div>
        </div>
    )
}
export default CreateAccountCard;