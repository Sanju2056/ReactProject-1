import React from "react";
import './index.css'
import Danger from '../Images/Logo.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const EnterFnLName = () => {
    return (
        <div className="EnterFnLName-main">
            <div className="EnterFnLName-main-container">
                <div className="Efln-DangerLogo">
                    <img src={Danger} />
                </div>
                <div className="Efln-Text-Container"> 
                <p className="Efln-Text1">Create your Profile</p>
                <p className="Efln-Text2"> Enter Your First and Last Name</p>
                </div>
                <div className="Efln-CreateAccount-Form-input-div">
                    <input className="Efln-CreateAccount-Form-input" placeholder="First Name" />
                </div>
                <div className="Efln-CreateAccount-Form-input-div">
                    <input className="Efln-CreateAccount-Form-input" placeholder="Last Name" />
                </div>
                <div className="Efln-button">
                    <p className="Efln-Text4">
                        Continue
                    </p>
                </div>
            </div>
        </div>
    )
}
export default EnterFnLName;