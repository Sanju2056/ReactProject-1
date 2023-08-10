import React from "react";
import './index.css';
import BodyCard from "./BodyCard";
import BodyImage from '../../Images/bodyimage.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const BodyFirstContainer = () => {
    return (
        <div className="bodyFirstContainer-main">
            <div className="bodyFirstContainer-body">
                <div className="bodyFirstContainer-button">
                    <text className="bodyFirstContainer-button">
                        FEATURES
                    </text>
                </div>
                <p className="bodyFirstContainer-firstText-container-text">
                    Lorem ipsum dolor sit amet consecte turnim
                </p>
                <div className="bodyFirstContainer-firstText-container-secondText">
                    With our integrated CRM, project management, collaboration and invoicing capabilities, you can
                </div>
                <div className="bodyFirstContainer-firstText-container-lastText">
                    manage every aspect of your business in one secure platform.
                </div>
            </div>
            <div className="bodyFirstContainer-image-container">
                <img src={BodyImage} className="bodyFirstContainer-Image" />
            </div>
            <div className="bodyFirstContainer-bottom">
                <BodyCard />
            </div>
        </div>
    )
}
export default BodyFirstContainer;