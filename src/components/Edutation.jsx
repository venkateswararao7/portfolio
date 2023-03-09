import React from "react";
import "../styles/Education.css";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MyImage from "./MyImage";
import college from "../images/college.png";

function Education() {
    return (

        <div className="Education" id="Education">
            <div className="Education-heading">
                <HistoryEduIcon style={{ fontSize: 100 }} />
                <h2>Education</h2>
            </div>
            <div className="self-description">
                <MyImage image={college} className="right-image" alt="Coding-person" />
                <div className="About">
                    <p className="About-description">
                        Vishnu Institute of Technology (VIT) is an engineering college located in Bhimavaram, Andhra Pradesh, India. The college is affiliated with Jawaharlal Nehru Technological University, Kakinada, and offers undergraduate and postgraduate programs in various engineering disciplines, including Civil Engineering, Mechanical Engineering, Computer Science and Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, and Information Technology.
                        <br />
                        The college has a well-established infrastructure with state-of-the-art facilities, including well-equipped laboratories, a central library, sports facilities, and hostel accommodation for students. The faculty at VIT is highly qualified and experienced, and the college has a strong focus on research and innovation.
                        <br />

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;
