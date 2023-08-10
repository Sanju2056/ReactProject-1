import React from "react";
import './index.css';
import Device from '../../Images/Change Color.png'
import SS1 from '../../Images/titled.png'
import SS2 from '../../Images/plane.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const BodySecondContainer = () => {
    return (
        <div className="BodySecondContainer">
            <div className="BodySecondContainer-first-container">
                <p className="BodySecondContainer-firstText">
                    What is Lorem Ipsum?
                </p>
                <p className="BodySecondContainer-secondText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="view">
                    <div className="hello">
                        <p className="hi">
                        </p>
                        <p className="hi-text">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    <div className="hello">
                        <p className="hi"></p>
                        <p className="hi-text"> Lorem ipsum dolor sit amet consectetur. Arcu.</p>
                    </div>
                    <div className="hello">
                        <p className="hi">
                        </p>
                        <p className="hi-text">
                            Lorem ipsum dolor sit amet consectetur. Sed.
                        </p>
                    </div>
                    <div className="hello">
                        <p className="hi">
                        </p>
                        <p className="hi-text">
                            Lorem ipsum dolor sit amet consectetur. Lectus arcu.
                        </p>
                    </div>
                </div>
                <div className="BodySecondContainerButton">
                    Register Now
                </div>
            </div>
            <div className="BodySecondContainer-second-container">
                <div className="device-image-1">
                    <img src={Device} />
                    <img src={SS1} className="device-ss1" />
                </div>
                <div className="device-image">
                    <img src={Device} />
                    <img src={SS2} className="device-ss2" />
                </div>
            </div>
        </div>
    )
}

export default BodySecondContainer;