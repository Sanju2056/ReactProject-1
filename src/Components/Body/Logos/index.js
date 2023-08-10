import React from "react";
import './index.css';
import Logo1 from '../../Images/Logo5.png';
import Logo2 from '../../Images/Logo (1).png';
import Logo3 from '../../Images/Logo (2).png';
import Logo4 from '../../Images/Logo (3).png'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const Logos = () => {
    return (
        <div className="logos-main">
            <div className="logos-header">
                <text>Our Associated Brands</text>
            </div>
            <div className="logos-logo-containers-main">
                <div className="logos-logo-container">
                    <img className="logo-image"
                        src={Logo1}
                    />
                </div>
                <div className="logos-logo-container">
                    <img className="logo-image"
                        src={Logo2}
                    />
                </div>
                <div className="logos-logo-container">
                    <img className="logo-image"
                        src={Logo3}
                    />
                </div>
                <div className="logos-logo-container">
                    <img className="logo-image"
                        src={Logo4}
                    />
                </div>
            </div>
        </div>
    )
}
export default Logos