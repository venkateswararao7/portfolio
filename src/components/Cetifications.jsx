import React from "react";
import Image from "./Image";
import JavaCertificate from "../images/oasisJava-1.png";
import Alml from "../images/alml.jpg";
import MachineLearning from "../images/machinelearning.jpg";

import "../styles/Certification.css";


function Certification() {
    return (
        <div>
            <div>
                <h1>Certifications</h1>
            </div>
            <div className="Certifications">
                <div className="cert">
                    <Image src={Alml} alt="Alml-certification" />
                </div>
                <div className="cert">
                    <Image src={JavaCertificate} alt="java-certification" />
                </div>
                <div>
                    <Image src={MachineLearning} alt="ML-certification" />
                </div>
            </div>
        </div>
    )

}

export default Certification;