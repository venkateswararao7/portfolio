import React from "react";
import "../styles/Certification.css";
export default function Image(props) {
    return (
        <div className="certificate">
            <img src={props.src} alt={props.alt} draggable="false" style={{ height: "400px", width: "500px", margin: "2px" }} />

        </div>
    )
}