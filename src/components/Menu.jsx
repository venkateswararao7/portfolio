import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/menu.css";
import Venkatesh from "./Venkatesh";

function Menu() {
        const [windowSize, setWindowSize] = useState(window.innerWidth);

        useEffect(() => {
                const handleResize = () => {
                        const newWindowSize = window.innerWidth;
                        setWindowSize(newWindowSize);
                };

                window.addEventListener("resize", handleResize);

                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, [windowSize]);

        return (
                <div className="nav-bar">
                        <div className="menu-bar">

                                <ul className="menu">
                                        <li className="menu-item">
                                                <Link to="Home"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500} className="Home">
                                                        Home
                                                </Link>

                                        </li>
                                        <li className="menu-item">
                                                <Link to="Education"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}

                                                        className="Education">
                                                        Education
                                                </Link>
                                        </li>
                                        <li className="menu-item">
                                                <Link to="Skills"
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500} className="Skills">
                                                        Skills
                                                </Link>
                                        </li>
                                        <li className="menu-item">
                                                <a href="https://github.com/venkateswararao7" target="_blank">Projects</a>
                                        </li>
                                        <li className="menu-item">
                                                <a href="https://wa.link/xpnsn3" className="page" target="_blank">
                                                        Contact
                                                </a>
                                        </li>
                                </ul>

                        </div>
                        <div className="venkatesh-style">
                                <Venkatesh />
                        </div>
                </div>

        );
}

export default Menu;
