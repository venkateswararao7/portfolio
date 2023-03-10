import { Link } from "react-scroll";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import "../styles/menu.css";
import Venkatesh from "./Venkatesh";
import { useState } from "react";

function Menu() {
        const [menuExpend, setMenuExpend] = useState(false);
        function handleMenu() {
                setMenuExpend(!menuExpend);
        }

        return (
                <div className="nav-bar">
                        <div className="menu-bar">
                                <Venkatesh />
                                <div className="toggle-bar">
                                        <DensitySmallIcon onClick={handleMenu} style={{ marginRight: "2rem" }} />
                                        <div className="mobile-menu" style={{ display: menuExpend ? "block" : "none" }}>
                                                <ul >
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
                                <ul className="menu" >
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

        );
}

export default Menu;
