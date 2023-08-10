import React from "react";
import './index.css'
import Danger from '../Images/Logo.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const CreatePhoneNo = () => {
    return (
        <div className="CreatePhoneNo-main">
            <div className="CreatePhoneNo-main-container">
                <div className="CPhNo-DangerLogo">
                    <img src={Danger} />
                </div>
                <div className="CPhNo-Text-Container">
                    <p className="CPhNo-Text1">Create your Profile</p>
                    <p className="CPhNo-Text2"> Enter Your Clinic's</p>
                    <p className="CPhNo-Text3"> Phone Number</p>
                </div>
                <div className="CPhNo-CreateAccount-Form-input-div">
                    <input className="CPhNo-CreateAccount-Form-input-No" placeholder="+1" />
                    <input className="CPhNo-CreateAccount-Form-input" placeholder="First Name" />
                </div>
                <div className="CPhNo-button">
                    <p className="CPhNo-Text4">
                        Continue
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CreatePhoneNo;