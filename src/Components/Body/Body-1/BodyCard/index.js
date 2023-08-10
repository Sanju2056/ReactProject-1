import React from "react";
import './index.css';
import clinics from '../../../Images/clinics.png';
import hire from '../../../Images/hire.png';
import post from '../../../Images/post.png';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>


const BodyCard = () =>{
    return(
        <div className="bodyCard-main">
            <div className="bodyCard-containers">
                 {/* <div className="bodyCard-icons"> */}
                        <img src={clinics} className="bodyCard-ic-clinics"/>
                        <p className="bodyCard-first-texts">
                        Manage Clinics
                        </p>
                        <p className="bodyCard-second-texts">
                        Clinic memberships are on a month-to-month basis with no long-term commitment.  If you're managing one clinic, or multiple clinics, you can add or remove clinics as needed.
                        </p>
                 {/* </div> */}
            </div>
            <div className="bodyCard-containers">
            <img src={post} className="bodyCard-ic"/>
                        <p className="bodyCard-first-texts">
                        Post Jobs
                        </p>
                        <p className="bodyCard-second-texts">
                        Whether you're looking to fill temporary or permanent jobs, the Smile + Co. mobile platform is an all-inclusive applicant tracking system to direct source candidates.
                        </p>
            </div>
            <div className="bodyCard-containers">
            <img src={hire} className="bodyCard-ic"/>
                        <p className="bodyCard-first-texts">
                        Hire Candidates
                        </p>
                        <p className="bodyCard-second-texts-last">
                        The Smile + Co. mobile app allows you to post jobs, direct source candidates, book temporary shifts, organize your applicants and schedule interviews.  All in one, easy to use platform
                        </p>
            </div>
        </div>
    )
}
export default BodyCard;