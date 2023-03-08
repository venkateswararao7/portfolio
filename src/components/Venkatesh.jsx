import React from "react";
import "../styles/venkatesh.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Venkatesh() {
    return (
        <div className="name-style" draggable="false" >
            <span className="name"><ArrowBackIosIcon /></span>
            <span>
                <h3 className="name " ><a href="/" className="signature" draggable="false">Venkateswararao</a></h3>
            </span>
            <span className="name"> <ArrowForwardIosIcon /></span>
        </div>
    )
}