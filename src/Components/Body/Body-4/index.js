import React from "react"
import './index.css'
import deviceSS from '../../Images/device ss.png'
import icon1 from '../../Images/icon1.png'
import icon2 from '../../Images/icon 2.png'
import icon3 from '../../Images/icon 3.png'
import icon4 from '../../Images/icon 4.png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

const BodyFourthContainer = () => {
    return (
        <div className="BodyFourthContainer-main">
            <div className="BodyFourthContainer-first-Container">
                <div className="bodyFourthContainer-body">
                    <div className="bodyFourthContainer-button">
                        <text className="bodyFourthContainer-button">
                            FEATURES
                        </text>
                    </div>
                    <p className="bodyFourthContainer-firstText-container-text">
                        Lorem ipsum dolor sit amet consecte
                    </p>
                    <div className="bodyFourthContainer-firstText-container-secondText">
                        Lorem ipsum dolor sit amet consectetur. Viverra hac vulputate felis nulla egestas vitae commodo
                    </div>
                    <div className="bodyFourthContainer-firstText-container-lastText">
                        consequat vel. Donec in dolor sollicitudin ut ultricies non mollis tempor proin. Et adipiscing sit.
                    </div>
                </div>
            </div>
            <div className="BodyFourthContainer-main-Container">
                <div className="BodyFourthContainer-main-Container-first-section" >
                    <div className="BodyFourthContainer-Cards">
                        <img src={icon1} className="BodyFourthContainer-Cards-images" />
                        <p className="BodyFourthContainer-Cards-Header">Lorem ipsum dolor sit amet</p>
                        <p className="BodyFourthContainer-Cards-Description">Lorem ipsum dolor sit amet consectetur. Integer tincidunt et ullamcorper sit. Amet velit duis sit.</p>
                    </div>
                    <div className="BodyFourthContainer-Cards">
                        <img src={icon2} className="BodyFourthContainer-Cards-images" />
                        <p className="BodyFourthContainer-Cards-Header">Lorem ipsum dolor sit amet</p>
                        <p className="BodyFourthContainer-Cards-Description">Lorem ipsum dolor sit amet consectetur. Integer tincidunt et ullamcorper sit. Amet velit duis sit.</p>
                    </div>
                </div>
                <div className="BodyFourthContainer-main-Container-middle-section">
                    <img src={deviceSS} className="BodyFourthContainer-main-Container-middle-section-image" />
                </div>
                <div className="BodyFourthContainer-main-Container-last-section">
                    <div className="BodyFourthContainer-Cards">
                        <img src={icon3} className="BodyFourthContainer-Cards-images" />
                        <p className="BodyFourthContainer-Cards-Header">Lorem ipsum dolor sit amet</p>
                        <p className="BodyFourthContainer-Cards-Description">Lorem ipsum dolor sit amet consectetur. Integer tincidunt et ullamcorper sit. Amet velit duis sit.</p>
                    </div>
                    <div className="BodyFourthContainer-Cards">
                        <img src={icon4} className="BodyFourthContainer-Cards-images" />
                        <p className="BodyFourthContainer-Cards-Header">Lorem ipsum dolor sit amet</p>
                        <p className="BodyFourthContainer-Cards-Description">Lorem ipsum dolor sit amet consectetur. Integer tincidunt et ullamcorper sit. Amet velit duis sit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BodyFourthContainer;
