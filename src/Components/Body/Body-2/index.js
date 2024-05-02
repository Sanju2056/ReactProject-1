import React from "react";
import './index.css';
import Device from '../../Images/Change Color.png'
import SS1 from '../../Images/titled.png'
import SS2 from '../../Images/plane.png'
import device from '../../Images/Group_340461.png'

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const BodySecondContainer = () => {
    const data = [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet"
    ]
    const Card = ({ item }) => {
        return (
            <div className="hello">
                <p className="hi"></p>
                <p className="hi-text">

                    {item}

                </p>
            </div>
        )
    }
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
                    {
                        data.map((item, index) => (<Card item={item} key={index} />))


                    }

                </div>
                <div className="BodySecondContainerButton">
                    Register Now
                </div>
            </div>
            <div className="BodySecondContainer-second-container">
                <img src={device} className="device-css"/>
            </div>
        </div>
    )
}

export default BodySecondContainer;