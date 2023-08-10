import React from "react";
import './index.css'
import Logo from '../Images/Logo.png';
import Danger from '../Images/Danger Circle.png';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const ResetPassword = () => {
    return (
        <div className="ResetPassword-main">
            <div className="Rp-DangerLogo">
                <img src={Danger} />
            </div>
            <div className="Rp-LogoContainer">
                <img src={Logo} className="Rp-LogoImage" />
            </div>
            <div className="Rp-TextContainer">
                <p className="Rp-Text1">Reset Password</p>
                <p className="Rp-Text2">Enter the email address associated with your
                    account and we’ll send you the new password.</p>
            </div>
            <input className="ResetPassword-Form-input" placeholder="Email address" />
            <div className="ResetPassword-button">
                <p className="Rp-Text4">
                    Send
                </p>
            </div>
            <div className="Rp-Text6Container">
                <p className="Rp-Text6">Back to<span style={{ fontWeight: 600 }}> Sign In</span></p>
            </div>

        </div>
    )
}
export default ResetPassword;