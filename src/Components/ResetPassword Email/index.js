import React from "react";
import './index.css';
import NewMessage from '../Images/New message-rafiki 1.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const ResetPasswordEmail = () => {
    return (
        <div className="ResetPasswordEmail-main">
            <img src={NewMessage} className="Rpe-Image" />
            <div className="Rpe-TextContainer">
                <p className="Rpe-Text1">Check Your Mail</p>
                <p className="Rpe-Text2">A link to reset your password has been</p>
                <p className="Rpe-Text2">sent to your email.</p>
            </div>
            <div className="ResetPasswordEmail-button">
                <p className="Rpe-Text4">
                    Sign In
                </p>
            </div>
            <div className="Rpe-Text6Container">
                <p className="Rpe-Text6">Didn’t receive the email? </p> <span className="span"> Resend</span>
            </div>

        </div>
    )
}
export default ResetPasswordEmail;