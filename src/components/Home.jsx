import React from "react";
import MyImage from "./MyImage";
import Image from "../images/image2.png";
import CodeImage from "../images/image1.png";
import "../styles/Home.css";


function Home() {
    return (
        <div id="Home">
            <div className="Home-developer">
                <div className="image">
                    <MyImage image={Image} value="coding" />
                </div>
                <div className="developer">
                    <h1>Software Developer</h1>
                    <h4 className="description">
                        A highly motivated software engineer seeking to get a position in a reputed company, where I can use my skills and knowledge to learn new things and grow as a software developer
                    </h4>
                </div>

            </div>
            <div className="self-description">
                <img src={CodeImage} className="right-image" alt="Coding-person" draggable="false" onContextMenu="return false;" />
                <div className="About">
                    <p className="About-description">
                        I have experience working with three programming languages: C, Python, and Java. In C, I have experience with low-level programming, including memory management and pointer manipulation, and I am comfortable working with data structures and algorithms.
                        I am a versatile programmer who can work in collaborative teams to deliver high-quality software solutions that meet business requirements.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;