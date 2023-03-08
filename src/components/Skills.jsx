import React from "react";
import MyImage from "./MyImage";
import Image from "../images/image3.png";
import CodeImage from "../images/image4.png";
import "../styles/Home.css";
import "../styles/skills.css";
import ComputerIcon from '@mui/icons-material/Computer';

function Skills() {
    return (
        <div className="Home" id="Skills">
            <div className="Education-heading">
                <ComputerIcon style={{ fontSize: 100 }} />
                <h2>Skills</h2>
            </div>
            <div className="Home-developer">
                <div className="image">
                    <MyImage image={Image} value="coding" />
                </div>
                <div className="developer">
                    <h1>Professional Skills</h1>
                    <h4 className="description">
                        Integrity<br />
                        Problem Solving Skills<br />
                        Self motivated <br />
                        Self-regulation<br />
                    </h4>
                </div>

            </div>
            <div className="self-description">
                <img src={CodeImage} className="right-image" alt="Coding-person" draggable="false" />
                <div className="About">
                    <p className="About-description">
                        <h2>Technical Skills</h2>
                        <h3>Programming Languages</h3>
                        <div className="Technical-skills">
                            <p>c</p>
                            <p>Python</p>
                            <p>Java</p>
                            <p>HTML,CSS,JavaScript</p>
                            <p>Reaactjs</p>
                            <p>Expressjs</p>
                        </div>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Skills;
