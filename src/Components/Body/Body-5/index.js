import React from "react";
import './index.css';
import googlePlay from '../../Images/apple.png'
import apple from '../../Images/button-play@2x.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const BodyFifthContainer = () =>{
    return(
        <div className="BodyFifthContainer-main">
            <p className="BodyFifthContainer-firstText">
            Download App
            </p>
            <p className="BodyFifthContainer-secondText">
            We will be available on the AppStore and Google PlayStore for download coming this February 2023.
            </p>
            <div className="BodyFifthContainer-button">
            <img src={googlePlay} className="BodyFifthContainer-icons" />
            <img src={apple} className="BodyFifthContainer-icons"/>
            </div>
        </div>
    )
}
export default BodyFifthContainer;
