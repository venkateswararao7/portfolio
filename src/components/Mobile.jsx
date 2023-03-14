import React from "react";
import { Link } from "react-scroll";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Venkatesh from "./Venkatesh";
import "../styles/mobile.css"
function MobileMenu() {
    var open = false;
    return (
        <div className="menu-nar">
            <heading className="name">
                <a href="/"><Venkatesh /></a>
            </heading>
            <div className="menu-option">
                <DensitySmallIcon />
                <div className="nav-bar" style={{ display: open ? "block" : "none" }}>
                    <ul className="mobile-menu-options">
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
                            <a href="https://github.com/venkateswararao7" target="_blank" rel="noreferrer">Projects</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://wa.link/xpnsn3" className="page" target="_blank" rel="noreferrer">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;